"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "banner",
  data() {
    return {
      duration: 500,
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      list1: [
        "../../static/banner2.jpg",
        "../../static/banner1.jpg",
        "../../static/banner3.jpg"
      ]
    };
  },
  methods: {
    navto() {
      common_vendor.index.switchTab({
        url: "../menu/menu"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list1, (item, index, i0) => {
      return {
        a: item,
        b: common_vendor.o((...args) => $options.navto && $options.navto(...args), index),
        c: common_vendor.o((...args) => $options.navto && $options.navto(...args), index),
        d: index
      };
    }),
    b: $data.indicatorDots,
    c: $data.autoplay,
    d: $data.interval,
    e: $data.duration
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aa0ef52c"], ["__file", "D:/code/ABDcafé/components/home/banner.vue"]]);
wx.createComponent(Component);
