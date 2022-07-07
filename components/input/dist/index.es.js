import { tag, WeElement, h, extractClass } from "omi";
const p = function polyfill() {
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
var index = /* @__PURE__ */ (() => ':host{display:inline-block}:host([block]){display:block}.o-textarea{position:relative;display:inline-block;width:100%;vertical-align:bottom;font-size:14px}.o-textarea__inner{display:block;resize:vertical;padding:5px 15px;line-height:1.5;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;font-size:inherit;color:#606266;background-color:#fff;background-image:none;border:1px solid #dcdfe6;border-radius:4px;-webkit-transition:border-color .2s cubic-bezier(.645,.045,.355,1);transition:border-color .2s cubic-bezier(.645,.045,.355,1)}.o-textarea__inner::-webkit-input-placeholder{color:#c0c4cc}.o-textarea__inner:-ms-input-placeholder{color:#c0c4cc}.o-textarea__inner::-ms-input-placeholder{color:#c0c4cc}.o-textarea__inner::placeholder{color:#c0c4cc}.o-textarea__inner:hover{border-color:#c0c4cc}.o-textarea__inner:focus{outline:0;border-color:#07c160;border-color:var(--o-primary, #07c160)}.o-textarea .o-input__count{color:#909399;background:#fff;position:absolute;font-size:12px;bottom:5px;right:10px}.o-textarea.is-disabled .o-textarea__inner{background-color:#f5f7fa;border-color:#e4e7ed;color:#c0c4cc;cursor:not-allowed}.o-textarea.is-disabled .o-textarea__inner::-webkit-input-placeholder{color:#c0c4cc}.o-textarea.is-disabled .o-textarea__inner:-ms-input-placeholder{color:#c0c4cc}.o-textarea.is-disabled .o-textarea__inner::-ms-input-placeholder{color:#c0c4cc}.o-textarea.is-disabled .o-textarea__inner::placeholder{color:#c0c4cc}.o-textarea.is-exceed .o-textarea__inner{border-color:#f56c6c}.o-textarea.is-exceed .o-input__count{color:#f56c6c}.o-input{position:relative;font-size:14px;display:inline-block;width:100%}.o-input::-webkit-scrollbar{z-index:11;width:6px}.o-input::-webkit-scrollbar:horizontal{height:6px}.o-input::-webkit-scrollbar-thumb{border-radius:5px;width:6px;background:#b4bccc}.o-input::-webkit-scrollbar-corner{background:#fff}.o-input::-webkit-scrollbar-track{background:#fff}.o-input::-webkit-scrollbar-track-piece{background:#fff;width:6px}.o-input .o-input__clear{color:#c0c4cc;font-size:14px;cursor:pointer;-webkit-transition:color .2s cubic-bezier(.645,.045,.355,1);transition:color .2s cubic-bezier(.645,.045,.355,1)}.o-input .o-input__clear:hover{color:#909399}.o-input .o-input__count{height:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#909399;font-size:12px}.o-input .o-input__count .o-input__count-inner{background:#fff;line-height:initial;display:inline-block;padding:0 5px}.o-input__inner{-webkit-appearance:none;background-color:#fff;background-image:none;border-radius:4px;border:1px solid #dcdfe6;-webkit-box-sizing:border-box;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:40px;line-height:40px;outline:0;padding:0 15px;-webkit-transition:border-color .2s cubic-bezier(.645,.045,.355,1);transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:100%}.o-input__prefix,.o-input__suffix{position:absolute;top:0;-webkit-transition:all .3s;text-align:center;height:100%;color:#c0c4cc}.o-input__inner::-webkit-input-placeholder{color:#c0c4cc}.o-input__inner:-ms-input-placeholder{color:#c0c4cc}.o-input__inner::-ms-input-placeholder{color:#c0c4cc}.o-input__inner::placeholder{color:#c0c4cc}.o-input__inner:hover{border-color:#c0c4cc}.o-input.is-active .o-input__inner,.o-input__inner:focus{border-color:#07c160;border-color:var(--o-primary, #07c160);outline:0}.o-input__suffix{right:5px;transition:all .3s;pointer-events:none}.o-input__suffix-inner{pointer-events:all}.o-input__prefix{left:5px;transition:all .3s}.o-input__icon{position:absolute;width:35px;height:100%;right:0;top:0;padding-top:.215em;text-align:center;color:#bfcbd9;transition:all .3s}.o-input--small .o-input__icon,.o-input--medium .o-input__icon{padding-top:.135em}.o-input--mini .o-input__icon{padding-top:.125em}.o-input__icon.is-prefix{left:0}.o-input.o-input-prefix input{padding-left:30px}.o-input.o-input-suffix input{padding-right:30px}.o-input__icon:after{content:"";height:100%;width:0;display:inline-block;vertical-align:middle}.o-input__validateIcon{pointer-events:none}.o-input.is-disabled .o-input__inner{background-color:#f5f7fa;border-color:#e4e7ed;color:#c0c4cc;cursor:not-allowed}.o-input.is-disabled .o-input__inner::-webkit-input-placeholder{color:#c0c4cc}.o-input.is-disabled .o-input__inner:-ms-input-placeholder{color:#c0c4cc}.o-input.is-disabled .o-input__inner::-ms-input-placeholder{color:#c0c4cc}.o-input.is-disabled .o-input__inner::placeholder{color:#c0c4cc}.o-input.is-disabled .o-input__icon{cursor:not-allowed}.o-input.is-exceed .o-input__inner{border-color:#f56c6c}.o-input.is-exceed .o-input__suffix .o-input__count{color:#f56c6c}.o-input--suffix .o-input__inner{padding-right:30px}.o-input--prefix .o-input__inner{padding-left:30px}.o-input--medium{font-size:14px}.o-input--medium .o-input__inner{height:36px;line-height:36px}.o-input--medium .o-input__icon{line-height:36px}.o-input--small{font-size:13px}.o-input--small .o-input__inner{height:32px;line-height:32px}.o-input--small .o-input__icon{line-height:32px}.o-input--mini{font-size:12px}.o-input--mini .o-input__inner{height:28px;line-height:28px}.o-input--mini .o-input__icon{line-height:28px}.o-input-group{line-height:normal;display:inline-table;width:100%;border-collapse:separate;border-spacing:0}.o-input-group>.o-input__inner{vertical-align:middle;display:table-cell}.o-input-group__append,.o-input-group__prepend{background-color:#f5f7fa;color:#909399;vertical-align:middle;display:table-cell;position:relative;border:1px solid #dcdfe6;border-radius:4px;padding:0 20px;width:1px;white-space:nowrap}.o-input-group--prepend .o-input__inner,.o-input-group__append{border-top-left-radius:0;border-bottom-left-radius:0}.o-input-group--append .o-input__inner,.o-input-group__prepend{border-top-right-radius:0;border-bottom-right-radius:0}.o-input-group__append:focus,.o-input-group__prepend:focus{outline:0}.o-input-group__append .o-button,.o-input-group__append .o-select,.o-input-group__prepend .o-button,.o-input-group__prepend .o-select{display:inline-block;margin:-10px -20px}.o-input-group__append button.o-button,.o-input-group__append div.o-select .o-input__inner,.o-input-group__append div.o-select:hover .o-input__inner,.o-input-group__prepend button.o-button,.o-input-group__prepend div.o-select .o-input__inner,.o-input-group__prepend div.o-select:hover .o-input__inner{border-color:transparent;background-color:transparent;color:inherit;border-top:0;border-bottom:0}.o-input-group__append .o-button,.o-input-group__append .o-input,.o-input-group__prepend .o-button,.o-input-group__prepend .o-input{font-size:inherit}.o-input-group__prepend{border-right:0}.o-input-group__append{border-left:0}.o-input-group--append .o-select .o-input.is-focus .o-input__inner,.o-input-group--prepend .o-select .o-input.is-focus .o-input__inner{border-color:transparent}.o-input__inner::-ms-clear{display:none;width:0;height:0}.o-icon-clear{position:absolute;right:10px;top:50%;margin-top:-.5em;cursor:pointer;color:#bfcbd9;display:none;border-radius:50%;width:1em;height:1em}.o-icon-clear:hover{background:#b1b4b9;color:#fff}.o-input:hover .o-icon-clear{display:block;cursor:pointer}.o-input .o-input__count{position:absolute;top:0px;right:4px}.o-input.is-block{display:block;width:100%}\n')();
var css = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let Input = class extends WeElement {
  constructor() {
    super(...arguments);
    this._onGetValue = () => {
      return this.__$value;
    };
    this._onSetValue = (value) => {
      this.__$value = value;
      this.props.value = value;
      this.setAttribute("value", value);
    };
    this.valueLength = 0;
    this.handleBlur = (evt) => {
      if (this.props.onBlur) {
        this.props.onBlur(evt);
      } else {
        this.fire("blur", this.props.value);
      }
    };
    this.handleFocus = (evt) => {
      if (this.props.onFocus) {
        this.props.onFocus(evt);
      } else {
        this.fire("focus", this.props.value);
      }
    };
    this.handleChange = (evt) => {
      this.__$value = evt.target.value;
      this.props.value = evt.target.value;
      if (this.props.onChange) {
        this.props.onChange(evt);
      } else {
        this.fire("change", this.props.value);
      }
    };
    this.handleInput = (evt) => {
      evt.stopPropagation();
      this.__$value = evt.target.value;
      this.props.value = evt.target.value;
      if (this.props.onInput) {
        this.props.onInput(evt);
      } else {
        this.fire("input", this.props.value);
      }
      if (this.props.maxLength) {
        this.valueLength = evt.target.value.length;
        this.update();
      }
    };
    this.clearInput = () => {
      this.updateProps({
        value: ""
      });
      this.__$value = "";
    };
  }
  install() {
    this.__$value = this.props.value;
    Object.defineProperty(this, "value", {
      get: this._onGetValue,
      set: this._onSetValue
    });
  }
  focus() {
    this.shadowRoot.querySelector("input").focus();
  }
  blur() {
    this.shadowRoot.querySelector("input").blur();
  }
  render(props) {
    const {
      type,
      size,
      suffixIcon,
      prefixIcon,
      autoComplete,
      validating,
      onMouseEnter,
      onMouseLeave,
      trim,
      ...otherProps
    } = props;
    this._tempTagName = "o-icon-" + (suffixIcon || prefixIcon);
    this._tempInputTagName = type === "textarea" ? "textarea" : "input";
    return /* @__PURE__ */ h("div", {
      ...extractClass(props, "o-input", {
        [`o-input--${size}`]: props.size,
        "is-disabled": this.props.disabled,
        "o-input-suffix": suffixIcon,
        "o-input-prefix": prefixIcon,
        "is-block": props.block
      }),
      onMouseEnter,
      onMouseLeave
    }, (prefixIcon || suffixIcon) && /* @__PURE__ */ h(this._tempTagName, {
      css: `svg{
            width: 1em;
          }`,
      ...extractClass(props, "o-input__icon", {
        "is-prefix": prefixIcon,
        "is-suffix": suffixIcon
      })
    }), /* @__PURE__ */ h(this._tempInputTagName, {
      ...otherProps,
      type,
      class: `o-${this._tempInputTagName}__inner`,
      autocomplete: autoComplete,
      maxLength: props.maxLength,
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onInput: this.handleInput
    }), props.clearable && /* @__PURE__ */ h("svg", {
      onClick: this.clearInput,
      class: "o-icon-clear",
      fill: "currentColor",
      width: "1em",
      height: "1em",
      focusable: "false",
      viewBox: "0 0 24 24",
      "aria-hidden": "true"
    }, /* @__PURE__ */ h("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    })), props.maxLength && /* @__PURE__ */ h("span", {
      class: "o-input__count"
    }, /* @__PURE__ */ h("span", {
      class: "o-input__count-inner"
    }, this.valueLength, "/", props.maxLength)));
  }
};
Input.css = css;
Input.defaultProps = {
  value: "",
  type: "text",
  autosize: false,
  rows: 2,
  trim: false,
  autoComplete: "off",
  block: false
};
Input.propTypes = {
  disabled: Boolean,
  type: String,
  placeholder: String,
  clearable: Boolean,
  suffixIcon: String,
  size: String,
  prefixIcon: String,
  maxLength: Number,
  autoComplete: String,
  block: Boolean,
  value: String
};
Input = __decorateClass([
  tag("o-input")
], Input);
