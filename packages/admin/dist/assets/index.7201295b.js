import { a as tag, W as WeElement, h, r as require$$0, c as commonjsGlobal, e as extractClass, s as sheet, t as tw } from "./index.2b48b3a4.js"; import "./admin-docs.754e7d21.js"; (function () { const a = document.createElement("link").relList; if (!(a && a.supports && a.supports("modulepreload"))) { for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r); new MutationObserver(r => { for (const e of r) if (e.type === "childList") for (const t of e.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && s(t) }).observe(document, { childList: !0, subtree: !0 }) } function s(r) { if (r.ep) return; r.ep = !0; const e = function (t) { const c = {}; return t.integrity && (c.integrity = t.integrity), t.referrerpolicy && (c.referrerPolicy = t.referrerpolicy), t.crossorigin === "use-credentials" ? c.credentials = "include" : t.crossorigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c }(r); fetch(r.href, e) } })(); var o = Object.defineProperty, i = Object.getOwnPropertyDescriptor; let n = class extends WeElement { constructor() { super(...arguments), this._opened = !1 } installed() { this.style.transitionProperty = this._dimensionMaxCss, this.updateSize(this.props.opened ? "auto" : "0px", !1), this.toggleClass("o-collapse-closed", !0), this.toggleClass("o-collapse-opened", !1), this.addEventListener("transitionend", () => { this._transitionEnd() }), this._opened = this.props.opened } receiveProps() { this._opened !== this.props.opened && (this.updateSize(this.props.opened ? "auto" : "0px", !0), this._opened = this.props.opened) } updateSize(a, s) { this._transitionStart(), a = a === "auto" ? "" : a, this._updateTransition(!1); const r = this._calcSize(); a === "" && (this.style[this._dimensionMax] = "", a = this._calcSize()), this.style[this._dimensionMax] = r, this.scrollTop = this.scrollTop, this._updateTransition(s), this.style[this._dimensionMax] = a, this.props.noAnimation && this._transitionEnd() } get dimension() { return this.props.horizontal ? "width" : "height" } get _dimensionMax() { return this.props.horizontal ? "maxWidth" : "maxHeight" } get _dimensionMaxCss() { return this.props.horizontal ? "max-width" : "max-height" } toggle() { this.props.opened = !this.props.opened, this.receiveProps() } show() { this.props.opened = !0, this.receiveProps() } hide() { this.props.opened = !1, this.receiveProps() } _updateTransition(a) { this.style.transitionDuration = a && !this.props.noAnimation ? ".3s" : "0s" } _transitionStart() { this.setAttribute("aria-hidden", !this.props.opened), this.toggleClass("o-collapse-closed", !1), this.toggleClass("o-collapse-opened", !1) } _transitionEnd() { this.style[this._dimensionMax] = this._desiredSize, this.toggleClass("o-collapse-closed", !this.props.opened), this.toggleClass("o-collapse-opened", this.props.opened), this._updateTransition(!1) } toggleClass(a, s) { s ? this.classList.add(a) : this.classList.remove(a) } _calcSize() { return this.getBoundingClientRect()[this.dimension] + "px" } render() { return h("slot", null) } }; n.css = `:host {
  display: block;
  overflow: visible;
}

:host(.o-collapse-closed) {
  display: none;
}

:host(:not(.o-collapse-opened)) {
  overflow: hidden;
}`, n.defaultProps = { opened: !1, horizontal: !1, noAnimation: !1 }, n.propTypes = { opened: Boolean, horizontal: Boolean, noAnimation: Boolean }, n = ((a, s, r, e) => { for (var t, c = e > 1 ? void 0 : e ? i(s, r) : s, l = a.length - 1; l >= 0; l--)(t = a[l]) && (c = (e ? t(s, r, c) : t(c)) || c); return e && c && o(s, r, c), c })([tag("o-collapse")], n); var keyboardArrowDown = { exports: {} }; (function (module, exports) {
    (function (s, r) { module.exports = r(require$$0) })(commonjsGlobal, function (__WEBPACK_EXTERNAL_MODULE_omi__) {
        return function (a) { var s = {}; function r(e) { if (s[e]) return s[e].exports; var t = s[e] = { i: e, l: !1, exports: {} }; return a[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports } return r.m = a, r.c = s, r.d = function (e, t, c) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: c }) }, r.r = function (e) { typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function (e, t) { if (t & 1 && (e = r(e)), t & 8 || t & 4 && typeof e == "object" && e && e.__esModule) return e; var c = Object.create(null); if (r.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: e }), t & 2 && typeof e != "string") for (var l in e) r.d(c, l, function (d) { return e[d] }.bind(null, l)); return c }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return r.d(t, "a", t), t }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "", r(r.s = "./esm/keyboard-arrow-down.js") }({
            "./esm/keyboard-arrow-down.js": function (module, exports, __webpack_require__) {
                eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
}), 'KeyboardArrowDown');


//# sourceURL=webpack://%5Bname%5D/./esm/keyboard-arrow-down.js?`)
            }, "./esm/utils/createSvgIcon.js": function (module, exports, __webpack_require__) {
                eval(`
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var hyphenateRE = /\\B([A-Z])/g;
var hyphenate = function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
};
function createSvgIcon(path, displayName) {
    var _a;
    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.render = function () {
                return omi_1.h('svg', {
                    viewBox: '0 0 24 24',
                }, path);
            };
            return class_1;
        }(omi_1.WeElement)),
        _a.css = ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}",
        _a));
}
exports.default = createSvgIcon;


//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?`)
            }, omi: function (module, exports) {
                eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)
            }
        }).default
    })
})(keyboardArrowDown); var keyboardArrowUp = { exports: {} }; (function (module, exports) {
    (function (s, r) { module.exports = r(require$$0) })(commonjsGlobal, function (__WEBPACK_EXTERNAL_MODULE_omi__) {
        return function (a) { var s = {}; function r(e) { if (s[e]) return s[e].exports; var t = s[e] = { i: e, l: !1, exports: {} }; return a[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports } return r.m = a, r.c = s, r.d = function (e, t, c) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: c }) }, r.r = function (e) { typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function (e, t) { if (t & 1 && (e = r(e)), t & 8 || t & 4 && typeof e == "object" && e && e.__esModule) return e; var c = Object.create(null); if (r.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: e }), t & 2 && typeof e != "string") for (var l in e) r.d(c, l, function (d) { return e[d] }.bind(null, l)); return c }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return r.d(t, "a", t), t }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "", r(r.s = "./esm/keyboard-arrow-up.js") }({
            "./esm/keyboard-arrow-up.js": function (module, exports, __webpack_require__) {
                eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), 'KeyboardArrowUp');


//# sourceURL=webpack://%5Bname%5D/./esm/keyboard-arrow-up.js?`)
            }, "./esm/utils/createSvgIcon.js": function (module, exports, __webpack_require__) {
                eval(`
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var hyphenateRE = /\\B([A-Z])/g;
var hyphenate = function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
};
function createSvgIcon(path, displayName) {
    var _a;
    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.render = function () {
                return omi_1.h('svg', {
                    viewBox: '0 0 24 24',
                }, path);
            };
            return class_1;
        }(omi_1.WeElement)),
        _a.css = ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}",
        _a));
}
exports.default = createSvgIcon;


//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?`)
            }, omi: function (module, exports) {
                eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)
            }
        }).default
    })
})(keyboardArrowUp); var code = { exports: {} }; (function (module, exports) {
    (function (s, r) { module.exports = r(require$$0) })(commonjsGlobal, function (__WEBPACK_EXTERNAL_MODULE_omi__) {
        return function (a) { var s = {}; function r(e) { if (s[e]) return s[e].exports; var t = s[e] = { i: e, l: !1, exports: {} }; return a[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports } return r.m = a, r.c = s, r.d = function (e, t, c) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: c }) }, r.r = function (e) { typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function (e, t) { if (t & 1 && (e = r(e)), t & 8 || t & 4 && typeof e == "object" && e && e.__esModule) return e; var c = Object.create(null); if (r.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: e }), t & 2 && typeof e != "string") for (var l in e) r.d(c, l, function (d) { return e[d] }.bind(null, l)); return c }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return r.d(t, "a", t), t }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "", r(r.s = "./esm/code.js") }({
            "./esm/code.js": function (module, exports, __webpack_require__) {
                eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
}), 'Code');


//# sourceURL=webpack://%5Bname%5D/./esm/code.js?`)
            }, "./esm/utils/createSvgIcon.js": function (module, exports, __webpack_require__) {
                eval(`
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var hyphenateRE = /\\B([A-Z])/g;
var hyphenate = function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
};
function createSvgIcon(path, displayName) {
    var _a;
    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.render = function () {
                return omi_1.h('svg', {
                    viewBox: '0 0 24 24',
                }, path);
            };
            return class_1;
        }(omi_1.WeElement)),
        _a.css = ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}",
        _a));
}
exports.default = createSvgIcon;


//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?`)
            }, omi: function (module, exports) {
                eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)
            }
        }).default
    })
})(code); var fileCopy = { exports: {} }; (function (module, exports) {
    (function (s, r) { module.exports = r(require$$0) })(commonjsGlobal, function (__WEBPACK_EXTERNAL_MODULE_omi__) {
        return function (a) { var s = {}; function r(e) { if (s[e]) return s[e].exports; var t = s[e] = { i: e, l: !1, exports: {} }; return a[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports } return r.m = a, r.c = s, r.d = function (e, t, c) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: c }) }, r.r = function (e) { typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function (e, t) { if (t & 1 && (e = r(e)), t & 8 || t & 4 && typeof e == "object" && e && e.__esModule) return e; var c = Object.create(null); if (r.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: e }), t & 2 && typeof e != "string") for (var l in e) r.d(c, l, function (d) { return e[d] }.bind(null, l)); return c }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return r.d(t, "a", t), t }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "", r(r.s = "./esm/file-copy.js") }({
            "./esm/file-copy.js": function (module, exports, __webpack_require__) {
                eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
}), 'FileCopy');


//# sourceURL=webpack://%5Bname%5D/./esm/file-copy.js?`)
            }, "./esm/utils/createSvgIcon.js": function (module, exports, __webpack_require__) {
                eval(`
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var hyphenateRE = /\\B([A-Z])/g;
var hyphenate = function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
};
function createSvgIcon(path, displayName) {
    var _a;
    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.render = function () {
                return omi_1.h('svg', {
                    viewBox: '0 0 24 24',
                }, path);
            };
            return class_1;
        }(omi_1.WeElement)),
        _a.css = ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}",
        _a));
}
exports.default = createSvgIcon;


//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?`)
            }, omi: function (module, exports) {
                eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)
            }
        }).default
    })
})(fileCopy); var index$1 = `.o-message__closeBtn:focus,.o-message__content:focus{outline-width:0}.o-message{min-width:380px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;border-width:1px;border-style:solid;border-color:#ebeef5;position:fixed;left:50%;top:20px;-webkit-transform:translateX(-50%);transform:translate(-50%);background-color:#edf2fc;-webkit-transition:opacity .3s,top .4s,-webkit-transform .4s;transition:opacity .3s,top .4s,-webkit-transform .4s;transition:opacity .3s,transform .4s,top .4s;transition:opacity .3s,transform .4s,top .4s,-webkit-transform .4s;overflow:hidden;padding:15px 15px 15px 20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.o-message.is-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.o-message.is-closable .o-message__content{padding-right:16px}.o-message p{margin:0}.o-message--info .o-message__content{color:#909399}.o-message--success{background-color:#f0f9eb;border-color:#e1f3d8}.o-message--success .o-message__content{color:#07c160;color:var(--o-primary, #07c160)}.o-message--warning{background-color:#fdf6ec;border-color:#faecd8}.o-message--warning .o-message__content{color:#e6a23c}.o-message--error{background-color:#fef0f0;border-color:#fde2e2}.o-message--error .o-message__content{color:#f56c6c}.o-message__icon{margin-right:10px}.o-message__content{padding:0;font-size:14px;line-height:1}.o-message__closeBtn{position:absolute;top:50%;right:15px;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer;color:#c0c4cc;font-size:16px}.o-message__closeBtn:hover{color:#909399}.o-message .o-icon-success{color:#07c160;color:var(--o-primary, #07c160)}.o-message .o-icon-error{color:#f56c6c}.o-message .o-icon-info{color:#909399}.o-message .o-icon-warning{color:#e6a23c}.fade-enter-from,.fade-leave-active,.fade-leave-to{opacity:0;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}
`, css$1 = Object.freeze(Object.defineProperty({ __proto__: null, default: index$1 }, Symbol.toStringTag, { value: "Module" })); const readyCallbacks = []; document.addEventListener("DOMContentLoaded", () => { domReady.done = !0, readyCallbacks.forEach(a => { a() }) }); function domReady(a) { if (domReady.done) { a(); return } readyCallbacks.push(a) } domReady.done = !1; var __defProp$1$1 = Object.defineProperty, __getOwnPropDesc$1$1 = Object.getOwnPropertyDescriptor, __decorateClass$1$1 = (a, s, r, e) => { for (var t = e > 1 ? void 0 : e ? __getOwnPropDesc$1$1(s, r) : s, c = a.length - 1, l; c >= 0; c--)(l = a[c]) && (t = (e ? l(s, r, t) : l(t)) || t); return e && t && __defProp$1$1(s, r, t), t }; let Transition = class extends WeElement { constructor() { super(...arguments), this._show = !0 } installed() { domReady(() => { this.props.appear && this.enter(), this.props.leavingTime && setTimeout(() => { this.leave() }, this.props.leavingTime) }) } receiveProps() { this.props.appear && this.enter(), this.props.disappear && this.leave() } async toggle() { return this._show = !this._show, this._show ? await this.enter() : await this.leave() } async enter() { return new Promise(a => { const s = this.children[0]; s && (this.fire("before-enter"), s.classList.remove(this.props.name + "-leave-active"), s.classList.remove(this.props.name + "-leave-to"), s.classList.add(this.props.name + "-enter-from"), s.classList.add(this.props.name + "-enter-active"), this.callback = function () { s.classList.remove(this.props.name + "-enter-active"), this.fire("after-enter"), this._show = !0, a() }.bind(this), this.once("transitionend", this.callback), this.once("animationend", this.callback), window.setTimeout(function () { s.classList.remove(this.props.name + "-enter-from"), s.classList.add(this.props.name + "-enter-to"), this.fire("enter") }.bind(this), this.props.delay)) }) } async leave() { return new Promise(a => { const s = this.children[0]; s && (this.fire("before-leave"), s.classList.remove(this.props.name + "-enter-active"), s.classList.remove(this.props.name + "-enter-to"), s.classList.add(this.props.name + "-leave-from"), s.classList.add(this.props.name + "-leave-active"), this.callback = function (r) { s.classList.remove(this.props.name + "-leave-active"), this.fire("after-leave"), this._show = !1, this.props.autoRemove && this.parentNode && this.parentNode.removeChild(this), a() }.bind(this), this.once("transitionend", this.callback), this.once("animationend", this.callback), window.setTimeout(function () { s.classList.remove(this.props.name + "-leave-from"), s.classList.add(this.props.name + "-leave-to"), this.fire("leave") }.bind(this), this.props.delay)) }) } once(a, s) { const r = function () { this.removeEventListener(a, r), s() }.bind(this); this.addEventListener(a, r) } render() { } }; Transition.propTypes = { name: String, leavingTime: Number, autoRemove: Boolean, appear: Boolean, disappear: Boolean, delay: Number }; Transition.isLightDOM = !0; Transition.defaultProps = { name: "o", delay: 0 }; Transition = __decorateClass$1$1([tag("o-transition")], Transition); var __defProp$2 = Object.defineProperty, __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor, __decorateClass$2 = (a, s, r, e) => { for (var t = e > 1 ? void 0 : e ? __getOwnPropDesc$2(s, r) : s, c = a.length - 1, l; c >= 0; c--)(l = a[c]) && (t = (e ? l(s, r, t) : l(t)) || t); return e && t && __defProp$2(s, r, t), t }; let Message = class extends WeElement { constructor() { super(...arguments), this.onAfterLeave = () => { this.parentElement.removeChild(this) } } render(a) { return h("o-transition", { appear: !0, "onafter-leave": this.onAfterLeave, "leaving-time": a.duration, "auto-remove": !0, name: "fade" }, h("div", { ...extractClass(a, "o-message", { ["o-message--" + a.type]: a.type, "is-closable": a.closable, "is-center": a.center }), style: "top: 20px; z-index: 2000;" }, h("p", { class: "o-message__content" }, a.message), a.showClose && h("i", { class: "o-message__closeBtn o-icon-close" }))) } }; Message.css = css$1; Message.defaultProps = { duration: 3e3 }; Message.propTypes = { showClose: Boolean, type: String, message: String, center: Boolean, duration: Number }; Message = __decorateClass$2([tag("o-message")], Message); const p = function a() { const s = document.createElement("link").relList; if (s && s.supports && s.supports("modulepreload")) return; for (const t of document.querySelectorAll('link[rel="modulepreload"]')) e(t); new MutationObserver(t => { for (const c of t) if (c.type === "childList") for (const l of c.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && e(l) }).observe(document, { childList: !0, subtree: !0 }); function r(t) { const c = {}; return t.integrity && (c.integrity = t.integrity), t.referrerpolicy && (c.referrerPolicy = t.referrerpolicy), t.crossorigin === "use-credentials" ? c.credentials = "include" : t.crossorigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c } function e(t) { if (t.ep) return; t.ep = !0; const c = r(t); fetch(t.href, c) } }; p(); var index = `:root,:root[theme-mode=light]{--omi-gray-color-1: #f3f3f3;--omi-gray-color-2: #eee;--omi-gray-color-3: #e7e7e7;--omi-gray-color-4: #dcdcdc;--omi-gray-color-5: #c5c5c5;--omi-gray-color-6: #a6a6a6;--omi-gray-color-7: #8b8b8b;--omi-gray-color-8: #777;--omi-gray-color-9: #5e5e5e;--omi-gray-color-10: #4b4b4b;--omi-gray-color-11: #383838;--omi-gray-color-12: #2c2c2c;--omi-gray-color-13: #242424;--omi-gray-color-14: #181818;--omi-font-white-1: rgba(255, 255, 255, 100%);--omi-font-white-2: rgba(255, 255, 255, 55%);--omi-font-white-3: rgba(255, 255, 255, 35%);--omi-font-white-4: rgba(255, 255, 255, 22%);--omi-font-gray-1: rgba(0, 0, 0, 90%);--omi-font-gray-2: rgba(0, 0, 0, 60%);--omi-font-gray-3: rgba(0, 0, 0, 40%);--omi-font-gray-4: rgba(0, 0, 0, 26%);--omi-font-gray-5: rgba(0, 0, 0, .45);--omi-font-gray-6: rgba(0, 0, 0, .7);--omi-icon-gray-3:rgba(0, 0, 0, .54);--omi-mask-active: rgba(0, 0, 0, 60%);--omi-mask-disabled: rgba(255, 255, 255, 60%);--omi-bg-color-page: var(--omi-gray-color-2);--omi-bg-color-page-dark: #fff;--omi-bg-color-container: #fff;--omi-bg-color-container-hover: var(--omi-gray-color-1);--omi-bg-color-container-active: var(--omi-gray-color-3);--omi-bg-color-container-select: #fff;--omi-bg-color-secondarycontainer: var(--omi-gray-color-1);--omi-bg-color-secondarycontainer-hover: var(--omi-gray-color-2);--omi-bg-color-secondarycontainer-active: var(--omi-gray-color-4);--omi-bg-color-component: var(--omi-gray-color-3);--omi-bg-color-component-hover: var(--omi-gray-color-4);--omi-bg-color-component-active: var(--omi-gray-color-6);--omi-bg-color-component-disabled: var(--omi-gray-color-2);--omi-bg-cascader-hover:#f1fff8;--omi-bg-color-specialcomponent: #fff;--omi-text-color-primary: var(--omi-font-gray-1);--omi-text-color-secondary: var(--omi-font-gray-2);--omi-text-color-placeholder: var(--omi-font-gray-3);--omi-text-color-disabled: var(--omi-font-gray-4);--omi-text-color-anti: #fff;--omi-text-color-brand: var(--omi-brand-color-8);--omi-text-color-link: var(--omi-brand-color-8);--omi-text-color-gray:#606266;--omi-text-color-gray-5:var(--omi-font-gray-5);--omi-text-color-gray-6:var(--omi-font-gray-6);--omi-icon-color-primary: var(--omi-icon-gray-3);--omi-border-level-1-color: var(--omi-gray-color-3);--omi-component-stroke: var(--omi-gray-color-3);--omi-border-level-2-color: var(--omi-gray-color-4);--omi-component-border: var(--omi-gray-color-4)}:root[theme-mode=dark]{--omi-gray-color-1: #f3f3f3;--omi-gray-color-2: #eee;--omi-gray-color-3: #e7e7e7;--omi-gray-color-4: #dcdcdc;--omi-gray-color-5: #c5c5c5;--omi-gray-color-6: #a6a6a6;--omi-gray-color-7: #8b8b8b;--omi-gray-color-8: #777;--omi-gray-color-9: #5e5e5e;--omi-gray-color-10: #4b4b4b;--omi-gray-color-11: #383838;--omi-gray-color-12: #2c2c2c;--omi-gray-color-13: #242424;--omi-gray-color-14: #181818;--omi-font-white-1: rgba(255, 255, 255, 90%);--omi-font-white-2: rgba(255, 255, 255, 55%);--omi-font-white-3: rgba(255, 255, 255, 35%);--omi-font-white-4: rgba(255, 255, 255, 22%);--omi-font-gray-1: rgba(0, 0, 0, 90%);--omi-font-gray-2: rgba(0, 0, 0, 60%);--omi-font-gray-3: rgba(0, 0, 0, 40%);--omi-font-gray-4: rgba(0, 0, 0, 26%);--omi-bg-color-page: var(--omi-gray-color-14);--omi-bg-color-page-dark: var(--omi-gray-color-14);--omi-bg-color-container: var(--omi-gray-color-13);--omi-bg-color-container-hover: var(--omi-gray-color-12);--omi-bg-color-container-active: var(--omi-gray-color-10);--omi-bg-color-container-select: var(--omi-gray-color-9);--omi-bg-color-secondarycontainer: var(--omi-gray-color-12);--omi-bg-color-secondarycontainer-hover: var(--omi-gray-color-11);--omi-bg-color-secondarycontainer-active: var(--omi-gray-color-9);--omi-bg-color-component: var(--omi-gray-color-11);--omi-bg-color-component-hover: var(--omi-gray-color-10);--omi-bg-color-component-active: var(--omi-gray-color-9);--omi-bg-color-component-disabled: var(--omi-gray-color-12);--omi-bg-cascader-hover:var(--omi-gray-color-11);--omi-bg-color-specialcomponent: transparent;--omi-text-color-primary: var(--omi-font-white-1);--omi-text-color-secondary: var(--omi-font-white-2);--omi-text-color-placeholder: var(--omi-font-white-3);--omi-text-color-disabled: var(--omi-font-white-4);--omi-text-color-anti: #fff;--omi-text-color-gray:--omi-gray-color-7;--omi-text-color-gray-5:var(--omi-font-white-3);--omi-text-color-gray-6:var(--omi-font-white-2);--omi-icon-color-primary: var(--omi-font-white-1);--omi-border-level-1-color: var(--omi-gray-color-11);--omi-component-stroke: var(--omi-gray-color-11);--omi-border-level-2-color: var(--omi-gray-color-9);--omi-component-border: var(--omi-gray-color-9)}:host{display:inline-block}button{appearance:none;-webkit-appearance:none;border:none;cursor:pointer;outline:none;margin:0;padding:0;background-color:transparent;color:var(--omi-text-color-primary)}.is-disabled{cursor:not-allowed;color:var(--omi-bg-color-secondarycontainer)}.o-toggle-icon{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}
`, css = Object.freeze(Object.defineProperty({ __proto__: null, default: index }, Symbol.toStringTag, { value: "Module" })), __defProp$1 = Object.defineProperty, __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor, __decorateClass$1 = (a, s, r, e) => { for (var t = e > 1 ? void 0 : e ? __getOwnPropDesc$1(s, r) : s, c = a.length - 1, l; c >= 0; c--)(l = a[c]) && (t = (e ? l(s, r, t) : l(t)) || t); return e && t && __defProp$1(s, r, t), t }; let ToggleIcon = class extends WeElement { constructor() { super(...arguments), this.clickHandler = () => { this.updateProps({ isOn: !this.props.isOn }), this.fire("change", { isOn: this.props.isOn }) } } render(a) { const s = a.icons.map(r => `o-icon-${r}`); return this.tagA = s[0], this.tagB = s[1], h("button", { style: `color:${a.color};`, onClick: this.clickHandler, ...extractClass(a, "o-toggle-icon", { "is-disabled": a.disabled }), disabled: a.disabled }, s.length > 0 && (a.isOn ? h(this.tagB, null) : h(this.tagA, null)), a.imgs && (a.isOn ? h("img", { src: a.imgs[1] }) : h("img", { src: a.imgs[0] }))) } }; ToggleIcon.css = css; ToggleIcon.defaultProps = { isOn: !1, icons: [] }; ToggleIcon.propTypes = { isOn: Boolean, icons: Object, imgs: Object, color: String, disabled: Boolean }; ToggleIcon = __decorateClass$1([tag("o-toggle-icon")], ToggleIcon); var toggleSelection = function () { var a = document.getSelection(); if (!a.rangeCount) return function () { }; for (var s = document.activeElement, r = [], e = 0; e < a.rangeCount; e++)r.push(a.getRangeAt(e)); switch (s.tagName.toUpperCase()) { case "INPUT": case "TEXTAREA": s.blur(); break; default: s = null; break }return a.removeAllRanges(), function () { a.type === "Caret" && a.removeAllRanges(), a.rangeCount || r.forEach(function (t) { a.addRange(t) }), s && s.focus() } }, deselectCurrent = toggleSelection, clipboardToIE11Formatting = { "text/plain": "Text", "text/html": "Url", default: "Text" }, defaultMessage = "Copy to clipboard: #{key}, Enter"; function format(a) { var s = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C"; return a.replace(/#{\s*key\s*}/g, s) } function copy(a, s) { var r, e, t, c, l, d, u = !1; s || (s = {}), r = s.debug || !1; try { t = deselectCurrent(), c = document.createRange(), l = document.getSelection(), d = document.createElement("span"), d.textContent = a, d.ariaHidden = "true", d.style.all = "unset", d.style.position = "fixed", d.style.top = 0, d.style.clip = "rect(0, 0, 0, 0)", d.style.whiteSpace = "pre", d.style.webkitUserSelect = "text", d.style.MozUserSelect = "text", d.style.msUserSelect = "text", d.style.userSelect = "text", d.addEventListener("copy", function (m) { if (m.stopPropagation(), s.format) if (m.preventDefault(), typeof m.clipboardData == "undefined") { r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData(); var f = clipboardToIE11Formatting[s.format] || clipboardToIE11Formatting.default; window.clipboardData.setData(f, a) } else m.clipboardData.clearData(), m.clipboardData.setData(s.format, a); s.onCopy && (m.preventDefault(), s.onCopy(m.clipboardData)) }), document.body.appendChild(d), c.selectNodeContents(d), l.addRange(c); var _ = document.execCommand("copy"); if (!_) throw new Error("copy command was unsuccessful"); u = !0 } catch (m) { r && console.error("unable to copy using execCommand: ", m), r && console.warn("trying IE specific stuff"); try { window.clipboardData.setData(s.format || "text", a), s.onCopy && s.onCopy(window.clipboardData), u = !0 } catch (f) { r && console.error("unable to copy using clipboardData: ", f), r && console.error("falling back to prompt"), e = format("message" in s ? s.message : defaultMessage), window.prompt(e, a) } } finally { l && (typeof l.removeRange == "function" ? l.removeRange(c) : l.removeAllRanges()), d && document.body.removeChild(d), t() } return u } var copyToClipboard = copy, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __decorateClass = (a, s, r, e) => { for (var t = e > 1 ? void 0 : e ? __getOwnPropDesc(s, r) : s, c = a.length - 1, l; c >= 0; c--)(l = a[c]) && (t = (e ? l(s, r, t) : l(t)) || t); return e && t && __defProp(s, r, t), t }; const tagName = "code-demo"; let code_demo_default = class extends WeElement {
    constructor() { super(...arguments), this.openedA = !1, this.isOn = !1 } message(a) { const s = document.createElement("o-message"); s.setAttribute("type", "success"), s.setAttribute("center", "center"), s.setAttribute("message", a), document.body.appendChild(s) } copy(a) { copyToClipboard(a), this.message("Copied!") } render(a) {
        return h("div", { class: tw`w-full border-1 mb-4 border-gray-300 dark:(border-gray-600) rounded overflow-hidden bg-gray-50 ${a.class}`, style: Object.assign({ breakInside: "avoid" }, a.style) }, h("div", null, h("slot", { name: "demo" })), h("div", { class: tw`border-t-1 border-gray-200 dark:(border-gray-600) border-solid px-2 text-sm mb-3` }, h("h3", { class: tw`font-bold relative -top-2.5 inline-block px-2 bg-gray-50` }, a.title), h("p", { class: tw`px-2` }, a.describe), h("div", { className: tw`text-right` }, h("span", { class: tw`mt-3 mb-2` }, a.url ? h("a", { href: a.url }, h("o-icon-code", { className: tw`w-6 h-6 mr-2` })) : null, a.code ? h(h.f, null, h("o-icon-file-copy", { className: tw`w-3 h-3 mr-2 relative -top-1 cursor-pointer`, onClick: () => { this.copy(a.code.replace("```jsx", "").replace("```", "").trim()) } }), h("o-toggle-icon", { "is-on": this.isOn, icons: ["keyboard-arrow-down", "keyboard-arrow-up"], className: tw`w-6 h-6 mr-2`, onChange: () => { this.openedA = !this.openedA, this.isOn = !this.isOn, this.update() } })) : null))), h("o-collapse", { opened: this.openedA, className: tw`` }, h("div", null, h("admin-docs", {
            css: `
              .docs {
                padding: 0 !important;
              }
            `, mdContent: a.code
        }))))
    }
}; code_demo_default.css = [sheet.target]; code_demo_default = __decorateClass([tag(tagName)], code_demo_default);
