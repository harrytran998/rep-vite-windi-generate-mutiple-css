"use strict";
/*!
* Package: @lalala/atoms.button 
* Version: v0.0.1
* Build date: 5/25/2021, 11:13:08 PM
* (c) 2021 @harrytran998.
* Released under the MIT License.
*/
Object.defineProperty(exports, "__esModule", {value: true});
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var ValidatorUi = {
  isValidComponentSize: (size) => ["large", "medium", "small", "mini"].includes(size),
  isValidVariant: (variant) => ["outline", "text", "solid", "link"].includes(variant)
};
var _sfc_main = vue.defineComponent({
  name: "AButton",
  inheritAttrs: false,
  props: {
    nativeType: {
      default: "button",
      type: String,
      validator: (val) => ["button", "submit", "reset"].includes(val)
    },
    isDisabled: Boolean,
    isFullWidth: Boolean,
    isLoading: Boolean,
    useRipple: {
      type: Boolean,
      default: true
    },
    variant: {
      type: String,
      default: "solid",
      validator: (variant) => ValidatorUi.isValidVariant(variant)
    },
    size: {
      type: String,
      default: "medium",
      validator: (size) => ValidatorUi.isValidComponentSize(size)
    }
  },
  setup(props, ctx) {
    const buttonHeight = vue.computed(() => {
      switch (props.size) {
        case "large":
          return "h-12";
        case "medium":
          return "h-10";
        case "small":
          return "h-8";
        default:
          return "h-6";
      }
    });
    console.log("sadas");
    const textButton = vue.computed(() => {
      switch (props.variant) {
        case "outline":
        case "text":
          return "indigo-500 center base";
        case "solid":
        default:
          return "white center base";
      }
    });
    return {buttonHeight, textButton};
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("button", vue.mergeProps(_ctx.$attrs, {
    disabled: _ctx.isDisabled,
    type: _ctx.nativeType,
    text: "white center base",
    font: "semibold",
    border: "rounded-lg",
    shadow: "md active:lg",
    ring: "0 focus:ring-2 indigo-500 opacity-50",
    class: ["\n      px-4\n      w-auto\n      transition\n      ease-in\n      duration-200\n      hover:bg-indigo-700\n      isabled:opacity-50\n      focus:outline-none\n    ", [_ctx.isDisabled ? "bg-indigo-300" : "bg-indigo-600", _ctx.buttonHeight]]
  }), [
    vue.renderSlot(_ctx.$slots, "default"),
    vue.createCommentVNode("@slot Use this slot to place content inside the button.")
  ], 16, ["disabled", "type"]);
}
_sfc_main.render = _sfc_render;
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
const _Button = _sfc_main;
exports.AButton = _Button;
exports.default = _Button;
