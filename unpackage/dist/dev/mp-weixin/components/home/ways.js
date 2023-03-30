"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "ways",
  setup(__props) {
    let waysList = [{
      id: "1",
      title: "到店自取",
      engtitle: "PICK UP",
      navurl: "../menu/menu"
    }, {
      id: "2",
      title: "外卖配送",
      engtitle: "DELIVERY",
      navurl: "../menu/menu"
    }];
    const navto = (url) => {
      common_vendor.index.switchTab({
        url: "../menu/menu"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(waysList), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.engtitle),
            c: common_vendor.o(($event) => navto(item.navurl), item.id),
            d: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/ABDcafe/components/home/ways.vue"]]);
wx.createComponent(Component);
