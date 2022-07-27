import { tag, WeElement, h, extractClass } from "omi";
const p$2 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p$2();
var index$1 = ":root{--bg1: #ecf0f1;--border1: #bdc3c7}.transferBox{width:200px;height:300px;float:left;border:solid .5px #bdc3c7;border-radius:5px;text-align:left;overflow:hidden}.transferBox ul li{width:calc(100% - 10px);padding-left:10px}.transferBox ul{padding-inline-start:0;overflow:auto;height:calc(100% - 40px);margin:0}.transferButton{width:200px;height:300px;float:left;position:relative;display:flex}o-button{margin:2px}.transferButtonBody{position:absolute;height:40px;left:50%;top:50%;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;transform:translate(-50%) translateY(-50%)}li{list-style:none}.transferBoxHeader{width:calc(100% - 10px);padding-left:10px;height:30px;padding-bottom:10px;background:#ecf0f1;font-size:15px;display:flex;align-items:flex-end}button{width:50px;height:40px}.headerLeft{width:150px;overflow:hidden}.numberIdea{height:30px;font-size:10px;color:#7f8c8d;margin-top:7px;margin-right:5px;display:flex;align-items:flex-end;transform:scale(.9)}\n";
var e = Object.defineProperty, o = Object.defineProperties, n = Object.getOwnPropertyDescriptors, c = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable, i = (o2, n2, c2) => n2 in o2 ? e(o2, n2, { enumerable: true, configurable: true, writable: true, value: c2 }) : o2[n2] = c2, a = (e2, o2) => {
  for (var n2 in o2 || (o2 = {}))
    r.call(o2, n2) && i(e2, n2, o2[n2]);
  if (c)
    for (var n2 of c(o2))
      t.call(o2, n2) && i(e2, n2, o2[n2]);
  return e2;
};
var l = Object.defineProperty, k = Object.getOwnPropertyDescriptor;
let p$1 = class extends WeElement {
  constructor() {
    super(...arguments), this.changeHandler = (e2) => {
      this.props.disabled || (this.props.checked = !this.props.checked, this.update(), this.fire("change", e2.currentTarget.checked), this.props.indeterminate && (this.props.checked = true, this.props.indeterminate = false, this.prevProps && (this.prevProps.checked = true, this.prevProps.indeterminate = false), this.update(true)));
    };
  }
  render(e2) {
    return h("div", a({}, extractClass(e2, "o-checkbox", { "o-checkbox__disabled": e2.disabled, "o-checkbox__indeterminate": e2.indeterminate })), h("input", (c2 = a({ type: "checkbox", disabled: e2.disabled, onChange: this.changeHandler }, function(e3, o2) {
      if ("string" != typeof o2) {
        const n2 = {};
        return o2.forEach((o3) => {
          e3.hasOwnProperty(o3) && (n2[o3] = e3[o3]);
        }), n2;
      }
      if (e3.hasOwnProperty(o2))
        return { [o2]: e3[o2] };
    }(e2, ["checked", "value", "indeterminate"])), o(c2, n({ class: "o-checkbox__native-control", id: "checkbox" })))), h("div", { class: "o-checkbox__background" }, h("svg", { class: "o-checkbox__checkmark", viewBox: "0 0 24 24" }, h("path", { class: "o-checkbox__checkmark-path", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" })), h("div", { class: "o-checkbox__mixedmark" })), e2.label && h("label", { class: "o-checkbox__label", for: "checkbox" }, e2.label));
    var c2;
  }
};
p$1.css = ":host {\n  display: inline-block;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.o-checkbox {\n  position: relative;\n  font-size: 14px;\n  line-height: 14px;\n  height: 14px;\n  white-space: nowrap;\n}\n\n.o-checkbox:hover {\n  cursor: pointer;\n}\n\n.o-checkbox__native-control:enabled:checked ~ .o-checkbox__background,\n.o-checkbox__native-control:enabled:indeterminate ~ .o-checkbox__background {\n  border-color: #07c160;\n  border-color: var(--o-primary, #07c160);\n  background-color: #07c160;\n  background-color: var(--o-primary, #07c160);\n  opacity: 1;\n}\n\n.o-checkbox__indeterminate .o-checkbox__checkmark {\n  opacity: 0;\n}\n\n.o-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 1;\n  transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  color: #ffffff;\n}\n\n.o-checkbox__checkmark-path {\n  transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: currentColor;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.78334;\n  stroke-dasharray: 29.78334;\n}\n\n.o-checkbox__native-control:checked ~ .o-checkbox__background .o-checkbox__checkmark-path,\n.o-checkbox__native-control:indeterminate ~ .o-checkbox__background .o-checkbox__checkmark-path {\n  stroke-dashoffset: 0;\n}\n\n.o-checkbox__background {\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 45%;\n  height: 45%;\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n  transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.o-checkbox__background,\n.o-checkbox__label {\n  display: inline-block;\n  height: 14px;\n  vertical-align: middle;\n}\n\n.o-checkbox__background {\n  width: 14px;\n}\n\n.o-checkbox__label {\n  margin-left: 10px;\n}\n\n.o-checkbox__native-control:indeterminate ~ .o-checkbox__background .o-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n.o-checkbox__mixedmark {\n  width: 100%;\n  height: 0;\n  transform: scaleX(0) rotate(0deg);\n  border: 1px solid white;\n  top: 50%;\n  position: relative;\n  margin-top: -1px;\n  opacity: 0;\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.o-checkbox__native-control {\n  appearance: none;\n  -webkit-appearance: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n}\n\n.o-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .o-checkbox__background {\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.54);\n  color: white;\n}\n\n.o-checkbox__native-control:disabled:checked ~ .o-checkbox__background,\n.o-checkbox__native-control:disabled:indeterminate ~ .o-checkbox__background {\n  border-color: #07c160;\n  border-color: var(--o-primary, #07c160);\n  background-color: #07c160;\n  background-color: var(--o-primary, #07c160);\n  opacity: 0.5;\n}\n\n.o-checkbox__native-control:disabled:not(:checked):not(:indeterminate) ~ .o-checkbox__background {\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.34);\n  color: white;\n}\n\n.o-checkbox__disabled .o-checkbox__label {\n  color: #888;\n}\n\n.o-checkbox__disabled:hover {\n  cursor: not-allowed;\n}", p$1.propTypes = { label: String, disabled: Boolean, indeterminate: Boolean, checked: Boolean, value: String }, p$1 = ((e2, o2, n2, c2) => {
  for (var r2, t2 = c2 > 1 ? void 0 : c2 ? k(o2, n2) : o2, i2 = e2.length - 1; i2 >= 0; i2--)
    (r2 = e2[i2]) && (t2 = (c2 ? r2(o2, n2, t2) : r2(t2)) || t2);
  return c2 && t2 && l(o2, n2, t2), t2;
})([tag("o-checkbox")], p$1);
const p = function polyfill2() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var index = /* @__PURE__ */ (() => ":host{display:inline-block}:host([block]){display:block}.o-button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;color:#606266;-webkit-appearance:none;text-align:center;box-sizing:border-box;outline:none;margin:0;transition:.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:12px 20px;font-size:14px;border-radius:4px}.o-button:hover{border-color:#07c16061;border-color:var(--o-primary-fade-some, rgba(7, 193, 96, .382));color:#07c160;color:var(--o-primary, #07c160);background-color:#07c1601a;background-color:var(--o-primary-fade-lot, rgba(7, 193, 96, .1))}.o-button:active{color:#07c160;color:var(--o-primary, #07c160);border-color:#07c160;border-color:var(--o-primary, #07c160);outline:none}.o-button-medium{padding:10px 20px;font-size:14px;border-radius:4px}.o-button-small{padding:9px 15px;font-size:12px;border-radius:3px}.o-button-mini{padding:7px 15px;font-size:12px;border-radius:3px}.o-button.is-round{border-radius:20px}.o-button.is-circle{border-radius:20px;padding:12px}.o-button.is-disabled,.o-button.is-disabled:focus,.o-button.is-disabled:hover{color:#c0c4cc;cursor:not-allowed;background-image:none;background-color:#fff;border-color:#ebeef5}.o-button.is-block{display:block;width:100%}.o-button-primary{color:#fff;background-color:var(--o-primary, #07c160);border-color:var(--o-primary, #07c160)}.o-button-primary:disabled,.o-button-primary:disabled:hover{background-color:var(--o-primary-fade-lot, rgba(7, 193, 96, .1))}.o-button-primary.is-plain{color:var(--o-primary, #07c160);background-color:var(--o-primary-fade-lot, rgba(7, 193, 96, .1));border-color:var(--o-primary-fade-some, rgba(7, 193, 96, .382))}.o-button-primary:hover{background-color:var(--o-primary-fade-little, rgba(7, 193, 96, .618));border-color:var(--o-primary-fade-little, rgba(7, 193, 96, .618));color:#fff}.o-button-primary:active{background-color:var(--o-primary-active, #059048);border-color:var(--o-primary-active, #059048);color:#fff}.o-button-success{color:#fff;background-color:var(--o-success, #07c160);border-color:var(--o-success, #07c160)}.o-button-success:disabled,.o-button-success:disabled:hover{background-color:var(--o-success-fade-lot, rgba(7, 193, 96, .1))}.o-button-success.is-plain{color:var(--o-success, #07c160);background-color:var(--o-success-fade-lot, rgba(7, 193, 96, .1));border-color:var(--o-success-fade-some, rgba(7, 193, 96, .382))}.o-button-success:hover{background-color:var(--o-success-fade-little, rgba(7, 193, 96, .618));border-color:var(--o-success-fade-little, rgba(7, 193, 96, .618));color:#fff}.o-button-success:active{background-color:var(--o-success-active, #059048);border-color:var(--o-success-active, #059048);color:#fff}.o-button-warning{color:#fff;background-color:var(--o-warning, #f2711c);border-color:var(--o-warning, #f2711c)}.o-button-warning:disabled,.o-button-warning:disabled:hover{background-color:var(--o-warning-fade-lot, rgba(242, 113, 28, .1))}.o-button-warning.is-plain{color:var(--o-warning, #f2711c);background-color:var(--o-warning-fade-lot, rgba(242, 113, 28, .1));border-color:var(--o-warning-fade-some, rgba(242, 113, 28, .382))}.o-button-warning:hover{background-color:var(--o-warning-fade-little, rgba(242, 113, 28, .618));border-color:var(--o-warning-fade-little, rgba(242, 113, 28, .618));color:#fff}.o-button-warning:active{background-color:var(--o-warning-active, #cf590c);border-color:var(--o-warning-active, #cf590c);color:#fff}.o-button-danger{color:#fff;background-color:var(--o-danger, #fa5151);border-color:var(--o-danger, #fa5151)}.o-button-danger:disabled,.o-button-danger:disabled:hover{background-color:var(--o-danger-fade-lot, rgba(250, 81, 81, .1))}.o-button-danger.is-plain{color:var(--o-danger, #fa5151);background-color:var(--o-danger-fade-lot, rgba(250, 81, 81, .1));border-color:var(--o-danger-fade-some, rgba(250, 81, 81, .382))}.o-button-danger:hover{background-color:var(--o-danger-fade-little, rgba(250, 81, 81, .618));border-color:var(--o-danger-fade-little, rgba(250, 81, 81, .618));color:#fff}.o-button-danger:active{background-color:var(--o-danger-active, #f91f1f);border-color:var(--o-danger-active, #f91f1f);color:#fff}.o-button-info{color:#fff;background-color:var(--o-info, #42b8dd);border-color:var(--o-info, #42b8dd)}.o-button-info:disabled,.o-button-info:disabled:hover{background-color:var(--o-info-fade-lot, rgba(66, 184, 221, .1))}.o-button-info.is-plain{color:var(--o-info, #42b8dd);background-color:var(--o-info-fade-lot, rgba(66, 184, 221, .1));border-color:var(--o-info-fade-some, rgba(66, 184, 221, .382))}.o-button-info:hover{background-color:var(--o-info-fade-little, rgba(66, 184, 221, .618));border-color:var(--o-info-fade-little, rgba(66, 184, 221, .618));color:#fff}.o-button-info:active{background-color:var(--o-info-active, #24a1c8);border-color:var(--o-info-active, #24a1c8);color:#fff}.loading{width:1em;height:1em;display:inline-block;animation:loading 1s steps(12,end) infinite;vertical-align:-.125em}@-webkit-keyframes loading{0%{transform:rotate3d(0,0,1,0)}to{transform:rotate3d(0,0,1,360deg)}}@keyframes loading{0%{transform:rotate3d(0,0,1,0)}to{transform:rotate3d(0,0,1,360deg)}}\n")();
var css = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let Button = class extends WeElement {
  render(props) {
    return /* @__PURE__ */ h("button", {
      disabled: props.disabled,
      ...extractClass(props, "o-button", {
        ["o-button-" + props.type]: props.type,
        ["o-button-" + props.size]: props.size,
        "is-plain": props.plain,
        "is-round": props.round,
        "is-circle": props.circle,
        "is-disabled": props.disabled,
        "is-block": props.block
      }),
      type: props.nativeType
    }, props.loading && [
      /* @__PURE__ */ h("svg", {
        class: "loading",
        viewBox: "0 0 1024 1024",
        focusable: "false",
        "data-icon": "loading",
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true"
      }, /* @__PURE__ */ h("path", {
        d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
      })),
      " "
    ], props.text, /* @__PURE__ */ h("slot", null));
  }
};
Button.css = css;
Button.defaultProps = {
  plain: false,
  round: false,
  circle: false,
  loading: false,
  disabled: false,
  autofocus: false,
  nativeType: "button",
  block: false
};
Button.propTypes = {
  size: String,
  type: String,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
  icon: String,
  autofocus: Boolean,
  nativeType: String,
  block: Boolean,
  text: String
};
Button = __decorateClass$1([
  tag("o-button")
], Button);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
const tagName = "o-transfer";
let Transfer = class extends WeElement {
  constructor() {
    super(...arguments);
    this.numberUpdata = () => {
      this.props.dataNumber = this.props.data.length - this.props.theValue.length;
      this.props.valueNumber = this.props.theValue.length;
    };
    this.findIndex = (key, arr) => {
      let ans = -1;
      arr.forEach((item, index2) => {
        if (item.key == key) {
          ans = index2;
        }
      });
      return ans;
    };
    this.getDataNumber = () => {
      let number = 0;
      this.props.data.map((item) => {
        if (this.props.theValue.indexOf(item.key) == -1 && ("disable" in item && item.disable)) {
          number++;
        }
      });
      return this.props.data.length - this.props.theValue.length - number;
    };
    this.gettheValueNumber = () => {
      let number = 0;
      this.props.data.map((item) => {
        if (this.props.theValue.indexOf(item.key) != -1 && ("disable" in item && item.disable)) {
          number++;
        }
      });
      return this.props.theValue.length - number;
    };
    this.labelClick = (key) => {
      if (this.props.beClick1.indexOf(key) == -1) {
        this.props.beClick1.push(key);
      } else {
        this.props.beClick1.splice(this.props.beClick1.indexOf(key), 1);
      }
      this.forceUpdate();
    };
    this.theValueLableClick = (key) => {
      if (this.props.beClick2.indexOf(key) == -1) {
        this.props.beClick2.push(key);
      } else {
        this.props.beClick2.splice(this.props.beClick2.indexOf(key), 1);
      }
      this.forceUpdate();
    };
    this.arrowClick = () => {
      while (this.props.beClick2.length) {
        this.props.beClick2.pop();
        this.props.theValue.pop();
      }
      this.numberUpdata();
      this.forceUpdate();
    };
    this.forwardClick = () => {
      while (this.props.beClick1.length) {
        this.props.theValue.push(this.props.beClick1[this.props.beClick1.length - 1]);
        this.props.beClick1.pop();
      }
      this.numberUpdata();
      this.forceUpdate();
    };
    this.SelectAll = () => {
      if (this.props.beClick1.length < this.getDataNumber()) {
        this.props.data.map((item, index2) => {
          if (this.props.theValue.indexOf(item.key) == -1 && this.props.beClick1.indexOf(item.key) == -1 && (!("disable" in this.props.data[index2]) || this.props.data[index2].disable != true)) {
            this.props.beClick1.push(item.key);
          }
        });
      } else {
        while (this.props.beClick1.length) {
          this.props.beClick1.pop();
        }
      }
      this.forceUpdate();
    };
    this.SelecttheValueAll = () => {
      if (this.props.beClick2.length < this.gettheValueNumber()) {
        this.props.theValue.map((item) => {
          if (this.props.beClick2.indexOf(item) == -1 && (!("disable" in this.props.data[this.findIndex(item, this.props.data)]) || this.props.data[this.findIndex(item, this.props.data)].disable != true)) {
            this.props.beClick2.push(item);
          }
        });
      } else {
        while (this.props.beClick2.length) {
          this.props.beClick2.pop();
        }
      }
      this.forceUpdate();
    };
    this.judgeDataChecked = () => {
      return this.getDataNumber() != 0 && this.getDataNumber() == this.props.beClick1.length;
    };
    this.judgeDataindeterminate = () => {
      return this.props.beClick1.length > 0 && this.getDataNumber() > this.props.beClick1.length;
    };
    this.judgetheValueChecked = () => {
      return this.gettheValueNumber() != 0 && this.gettheValueNumber() == this.props.beClick2.length;
    };
    this.judgetheValueindeterminate = () => {
      return this.props.beClick2.length > 0 && this.gettheValueNumber() > this.props.beClick2.length;
    };
  }
  install() {
    this.props.value.map((item) => {
      this.props.theValue.push(item);
    });
    this.numberUpdata();
  }
  render(props) {
    return /* @__PURE__ */ h(h.f, null, /* @__PURE__ */ h("div", {
      class: "transferBox"
    }, /* @__PURE__ */ h("div", {
      class: "transferBoxHeader"
    }, /* @__PURE__ */ h("div", {
      class: "headerLeft"
    }, /* @__PURE__ */ h("o-checkbox", {
      label: props.titles[0],
      checked: this.judgeDataChecked(),
      indeterminate: this.judgeDataindeterminate(),
      onchange: this.SelectAll
    })), /* @__PURE__ */ h("div", {
      class: "numberIdea"
    }, props.beClick1.length, "/", props.dataNumber)), /* @__PURE__ */ h("ul", null, props.data.map((item) => {
      return props.theValue.indexOf(item.key) === -1 && /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("o-checkbox", {
        label: item.table,
        disabled: item.disable,
        checked: props.beClick1.indexOf(item.key) != -1,
        onChange: () => this.labelClick(item.key)
      }));
    }))), /* @__PURE__ */ h("div", {
      class: "transferButton"
    }, /* @__PURE__ */ h("div", {
      class: "transferButtonBody"
    }, /* @__PURE__ */ h("o-button", {
      type: "primary",
      onClick: this.arrowClick
    }, "<"), /* @__PURE__ */ h("o-button", {
      type: "primary",
      onClick: this.forwardClick
    }, ">"))), /* @__PURE__ */ h("div", {
      class: "transferBox"
    }, /* @__PURE__ */ h("div", {
      class: "transferBoxHeader"
    }, /* @__PURE__ */ h("div", {
      class: "headerLeft"
    }, /* @__PURE__ */ h("o-checkbox", {
      label: props.titles[1],
      checked: this.judgetheValueChecked(),
      indeterminate: this.judgetheValueindeterminate(),
      onchange: this.SelecttheValueAll
    })), /* @__PURE__ */ h("div", {
      class: "numberIdea"
    }, props.beClick2.length, " / ", props.valueNumber)), /* @__PURE__ */ h("ul", null, props.data.map(
      (item) => {
        return props.theValue.indexOf(item.key) !== -1 && /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("o-checkbox", {
          label: item.table,
          disabled: item.disable,
          onChange: () => this.theValueLableClick(item.key),
          checked: props.beClick2.indexOf(item.key) != -1
        }));
      }
    ))));
  }
};
Transfer.css = index$1;
Transfer.defaultProps = {
  data: [],
  theValue: [],
  value: [],
  titles: ["\u5217\u88681", "\u5217\u88682"],
  beClick1: [],
  beClick2: [],
  dataNumber: 0,
  valueNumber: 0
};
Transfer.propTypes = {
  data: Array,
  theValue: Array,
  value: Array,
  titles: Array,
  beClick1: Array,
  beClick2: Array,
  dataNumber: Number,
  valueNumber: Number
};
Transfer = __decorateClass([
  tag(tagName)
], Transfer);
