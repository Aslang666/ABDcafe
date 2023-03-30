"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "UniAddressSelector",
  props: {
    areaInfoSelected: {
      type: Object
      // default: {},
    },
    selectAreaLevelLimit: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      showIndex: 0,
      //地区显示
      provinceObj: {},
      cityObj: {},
      areaObj: {},
      streetObj: {},
      heightCot: 30,
      //设置屏幕高度 0 ~ 100
      provinceData: "",
      // 当前展示的省数据
      cityData: [],
      // 当前展示的市数据
      areaData: [],
      //当前展示的区数据
      streetsData: []
      //当前展示的区数据
    };
  },
  mounted() {
    if (this.areaInfoSelected.fullAreaTextInitial) {
      let { fullAreaTextInitial } = this.areaInfoSelected;
      let _arr = fullAreaTextInitial.split(",");
      this.provinceObj = this.areaInfoSelected.provinceObj;
      this.cityObj = this.areaInfoSelected.cityObj;
      this.areaObj = this.areaInfoSelected.areaObj;
      this.streetObj = this.areaInfoSelected.streetObj;
      if (_arr.length == 1) {
        this.handleGetMap({}, "init");
      }
      if (_arr.length == 2) {
        this.handleGetMap(this.areaInfoSelected.provinceObj, "pro");
      }
      if (_arr.length == 3) {
        this.handleGetMap(this.areaInfoSelected.cityObj, "city");
      }
      if (_arr.length == 4) {
        this.handleGetMap(this.areaInfoSelected.areaObj, "area");
      }
      console.log("传入的this.areaInfoSelected", this.areaInfoSelected);
    } else {
      this.handleGetMap({}, "init");
    }
    this.getScreen();
  },
  onShow() {
  },
  methods: {
    //组件高度自适应
    getScreen() {
      let that = this;
      common_vendor.index.getSystemInfo({
        success: (res) => {
          that.heightCot = res.safeArea.height * 2 / 2;
        }
      });
    },
    //取消
    handleCancel() {
      this.$emit("cancel");
    },
    //确定
    handleSubmit() {
      const { provinceObj, cityObj, areaObj, streetObj } = this;
      const arr = [provinceObj, cityObj, areaObj, streetObj];
      let _fullAreaText = [];
      arr.map((item) => {
        if (item.areaCode) {
          _fullAreaText.push(item.areaName);
        }
      });
      if (this.selectAreaLevelLimit == 3) {
        if (_fullAreaText.length !== 3) {
          common_vendor.index.showToast({
            icon: "none",
            title: "地址需精确到地区"
          });
          return;
        }
      } else {
        if (_fullAreaText.length !== this.selectAreaLevelLimit) {
          common_vendor.index.showToast({
            icon: "none",
            title: "地址需精确到街道"
          });
          return;
        }
      }
      let areaInfoObj = {
        fullAreaTextInitial: _fullAreaText.toString(),
        fullAreaText: _fullAreaText.toString().replace(/,/g, ""),
        provinceCode: provinceObj.areaCode || "",
        cityCode: cityObj.areaCode || "",
        areaCode: areaObj.areaCode || "",
        streetCode: streetObj.areaCode || "",
        provinceObj,
        cityObj,
        areaObj,
        streetObj
      };
      this.$emit("confirm", areaInfoObj);
    },
    //下拉选择
    anewSelect(num) {
      switch (num) {
        case 0:
          this.showIndex = 0;
          this.cityObj = {};
          this.areaObj = {};
          this.streetObj = {};
          this.cityData = [];
          this.areaData = [];
          this.streetsData = [];
          this.handleGetMap({}, "init");
          break;
        case 1:
          this.showIndex = 1;
          this.streetObj = {};
          this.areaData = [];
          this.streetsData = [];
          if (!this.areaObj.areaCode)
            return;
          this.areaObj = {};
          this.handleGetMap(this.provinceObj, "pro");
          break;
        case 2:
          this.showIndex = 2;
          this.streetsData = [];
          if (!this.streetObj.areaCode)
            return;
          this.streetObj = {};
          this.handleGetMap(this.areaObj, "area");
          break;
      }
    },
    handleGetMap(obj, type) {
      let data = {
        parentArea: 0
      };
      if (type !== "init") {
        data.parentArea = obj.areaCode;
        common_vendor.index.showLoading({
          title: "加载中",
          mask: true
        });
      }
      this.$requestGet({
        url: this.$apiUrl.storeArea,
        data
      }).then((resp) => {
        common_vendor.index.hideLoading();
        if (resp.state == 200) {
          let arr = ["init", "pro", "city", "area"];
          let _obj = {
            init: "provinceData",
            pro: "cityData",
            city: "areaData",
            area: "streetsData"
          };
          this[_obj[type]] = resp.data;
          this.showIndex = arr.indexOf(type);
        } else {
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            icon: "none",
            title: resp.msg,
            position: "center",
            duration: 2e3
          });
        }
      });
    },
    handleSelectAddress(type, obj) {
      switch (type) {
        case 0:
          this.handleGetMap(obj, "pro");
          this.provinceObj = obj;
          this.showIndex = 1;
          this.cityData = [];
          this.areaData = [];
          this.streetsData = [];
          break;
        case 1:
          this.handleGetMap(obj, "city");
          this.cityObj = obj;
          this.showIndex = 2;
          this.areaData = [];
          this.streetsData = [];
          break;
        case 2:
          if (this.selectAreaLevelLimit == 3) {
            this.areaObj = obj;
          } else {
            this.handleGetMap(obj, "area");
            this.areaObj = obj;
            this.showIndex = 3;
            this.streetsData = [];
          }
          break;
        case 3:
          this.streetObj = obj;
          break;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.handleCancel && $options.handleCancel(...args)),
    b: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args)),
    c: $data.showIndex == 0 || $data.provinceObj.areaName
  }, $data.showIndex == 0 || $data.provinceObj.areaName ? {
    d: common_vendor.t($data.provinceObj.areaName || "请选择"),
    e: common_vendor.n($data.showIndex == 0 ? "select" : ""),
    f: common_vendor.o(($event) => $options.anewSelect(0))
  } : {}, {
    g: $data.showIndex == 1 || $data.cityObj.areaName
  }, $data.showIndex == 1 || $data.cityObj.areaName ? {
    h: common_vendor.t($data.cityObj.areaName || "请选择"),
    i: common_vendor.n($data.showIndex == 1 ? "select" : ""),
    j: common_vendor.o(($event) => $options.anewSelect(1))
  } : {}, {
    k: $data.showIndex == 2 || $data.areaObj.areaName
  }, $data.showIndex == 2 || $data.areaObj.areaName ? {
    l: common_vendor.t($data.areaObj.areaName || "请选择"),
    m: common_vendor.n($data.showIndex == 2 ? "select" : ""),
    n: common_vendor.o(($event) => $options.anewSelect(2))
  } : {}, {
    o: ($data.showIndex == 3 || $data.streetObj.areaName) && $props.selectAreaLevelLimit == 4
  }, ($data.showIndex == 3 || $data.streetObj.areaName) && $props.selectAreaLevelLimit == 4 ? {
    p: common_vendor.t($data.streetObj.areaName || "请选择"),
    q: common_vendor.n($data.showIndex == 3 ? "select" : ""),
    r: common_vendor.o(($event) => $options.anewSelect(3))
  } : {}, {
    s: common_vendor.n($props.selectAreaLevelLimit == 3 ? "w33_percent" : ""),
    t: $data.showIndex == 0
  }, $data.showIndex == 0 ? {
    v: common_vendor.f($data.provinceData, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.areaName),
        b: common_vendor.n($data.provinceObj.areaCode == item.areaCode ? "active" : ""),
        c: common_vendor.o(($event) => $options.handleSelectAddress(0, item), item.areaCode),
        d: item.areaCode
      };
    })
  } : {}, {
    w: $data.showIndex == 1
  }, $data.showIndex == 1 ? {
    x: common_vendor.f($data.cityData, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.areaName),
        b: common_vendor.n($data.cityObj.areaCode == item.areaCode ? "active" : ""),
        c: common_vendor.o(($event) => $options.handleSelectAddress(1, item), item.areaCode),
        d: item.areaCode
      };
    })
  } : {}, {
    y: $data.showIndex == 2
  }, $data.showIndex == 2 ? {
    z: common_vendor.f($data.areaData, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.areaName),
        b: common_vendor.n($data.areaObj.areaCode == item.areaCode ? "active" : ""),
        c: common_vendor.o(($event) => $options.handleSelectAddress(2, item), item.areaCode),
        d: item.areaCode
      };
    })
  } : {}, {
    A: $data.showIndex == 3 && $props.selectAreaLevelLimit == 4
  }, $data.showIndex == 3 && $props.selectAreaLevelLimit == 4 ? {
    B: common_vendor.f($data.streetsData, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.areaName),
        b: common_vendor.n($data.streetObj.areaCode == item.areaCode ? "active" : ""),
        c: common_vendor.o(($event) => $options.handleSelectAddress(3, item), item.areaCode),
        d: item.areaCode
      };
    })
  } : {}, {
    C: common_vendor.s("height:60%")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0d64fcbc"], ["__file", "D:/code/ABDcafe/components/editaddr.vue"]]);
wx.createComponent(Component);
