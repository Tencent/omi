/**
 * @omiu/action-sheet v0.0.5 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

(function (omi) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    var css_248z = ".o-actionsheet {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  -webkit-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 5000;\n  width: 100%;\n  background-color: #EFEFF4;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.o-actionsheet__title {\n  position: relative;\n  height: 65px;\n  padding: 0 20px;\n  line-height: 1.4;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  text-align: center;\n  font-size: 14px;\n  color: #808080;\n  background: #FCFCFD;\n}\n\n.o-actionsheet__title:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #e5e5e5;\n  color: #e5e5e5;\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n\n.o-actionsheet__title .o-actionsheet__title-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\n.o-actionsheet__menu {\n  background-color: #FCFCFD;\n}\n\n.o-actionsheet__action {\n  margin-top: 6px;\n  background-color: #FCFCFD;\n}\n\n.o-actionsheet__cell {\n  position: relative;\n  padding: 10px 0;\n  text-align: center;\n  font-size: 18px;\n}\n\n.o-actionsheet__cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #e5e5e5;\n  color: #e5e5e5;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n\n.o-actionsheet__cell:active {\n  background-color: #ECECEC;\n}\n\n.o-actionsheet__cell:first-child:before {\n  display: none;\n}\n\n.o-skin_android .o-actionsheet {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  bottom: auto;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 274px;\n  box-sizing: border-box;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  background: transparent;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.o-skin_android .o-actionsheet__action {\n  display: none;\n}\n\n.o-skin_android .o-actionsheet__menu {\n  border-radius: 2px;\n  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);\n}\n\n.o-skin_android .o-actionsheet__cell {\n  padding: 13px 24px;\n  font-size: 16px;\n  line-height: 1.4;\n  text-align: left;\n}\n\n.o-skin_android .o-actionsheet__cell:first-child {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n}\n\n.o-skin_android .o-actionsheet__cell:last-child {\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n}\n\n.o-actionsheet_toggle {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\n.mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.4;\n  z-index: 100;\n  left: 0;\n  top: 0;\n}\n\n.o-skin_android .o-actionsheet_toggle {\n  opacity: 1 !important;\n  top: 50% !important;\n  bottom: auto !important;\n}\n\n.o-skin_android .o-actionsheet {\n  opacity: 0;\n  transition: opacity 0.3s;\n  top: 150%;\n  bottom: 0;\n}";
    var stylesheet=".o-actionsheet {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  -webkit-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 5000;\n  width: 100%;\n  background-color: #EFEFF4;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.o-actionsheet__title {\n  position: relative;\n  height: 65px;\n  padding: 0 20px;\n  line-height: 1.4;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  text-align: center;\n  font-size: 14px;\n  color: #808080;\n  background: #FCFCFD;\n}\n\n.o-actionsheet__title:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #e5e5e5;\n  color: #e5e5e5;\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n\n.o-actionsheet__title .o-actionsheet__title-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\n.o-actionsheet__menu {\n  background-color: #FCFCFD;\n}\n\n.o-actionsheet__action {\n  margin-top: 6px;\n  background-color: #FCFCFD;\n}\n\n.o-actionsheet__cell {\n  position: relative;\n  padding: 10px 0;\n  text-align: center;\n  font-size: 18px;\n}\n\n.o-actionsheet__cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #e5e5e5;\n  color: #e5e5e5;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n\n.o-actionsheet__cell:active {\n  background-color: #ECECEC;\n}\n\n.o-actionsheet__cell:first-child:before {\n  display: none;\n}\n\n.o-skin_android .o-actionsheet {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  bottom: auto;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 274px;\n  box-sizing: border-box;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  background: transparent;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.o-skin_android .o-actionsheet__action {\n  display: none;\n}\n\n.o-skin_android .o-actionsheet__menu {\n  border-radius: 2px;\n  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);\n}\n\n.o-skin_android .o-actionsheet__cell {\n  padding: 13px 24px;\n  font-size: 16px;\n  line-height: 1.4;\n  text-align: left;\n}\n\n.o-skin_android .o-actionsheet__cell:first-child {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n}\n\n.o-skin_android .o-actionsheet__cell:last-child {\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n}\n\n.o-actionsheet_toggle {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\n.mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.4;\n  z-index: 100;\n  left: 0;\n  top: 0;\n}\n\n.o-skin_android .o-actionsheet_toggle {\n  opacity: 1 !important;\n  top: 50% !important;\n  bottom: auto !important;\n}\n\n.o-skin_android .o-actionsheet {\n  opacity: 0;\n  transition: opacity 0.3s;\n  top: 150%;\n  bottom: 0;\n}";

    var css = /*#__PURE__*/Object.freeze({
        __proto__: null,
        'default': css_248z,
        stylesheet: stylesheet
    });

    var ActionSheet = /** @class */ (function (_super) {
        __extends(ActionSheet, _super);
        function ActionSheet() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.handleMaskClick = function (e) {
                _this.hide();
                _this.fire('close');
            };
            return _this;
        }
        ActionSheet.prototype.renderMenuItem = function () {
            var _this = this;
            return this.props.menus.map(function (menu, idx) {
                var _a;
                var label = menu.label, className = menu.className, others = __rest(menu, ["label", "className"]);
                var cls = omi.classNames((_a = {
                        'o-actionsheet__cell': true
                    },
                    _a[className] = className,
                    _a));
                return (omi.h("div", __assign({ key: idx, onClick: function (_) {
                        _this.hide();
                        _this.fire('item-click', menu);
                    } }, others, { class: cls }), label));
            });
        };
        ActionSheet.prototype.show = function () {
            this.updateProps({
                show: true
            });
        };
        ActionSheet.prototype.hide = function () {
            this.updateProps({
                show: false
            });
        };
        ActionSheet.prototype.renderActions = function () {
            var _this = this;
            return this.props.actions.map(function (action, idx) {
                var _a;
                var label = action.label, className = action.className, others = __rest(action, ["label", "className"]);
                var cls = omi.classNames((_a = {
                        'o-actionsheet__cell': true
                    },
                    _a[className] = className,
                    _a));
                return (omi.h("div", __assign({ key: idx }, others, { onClick: function (_) {
                        _this.hide();
                        _this.fire('item-click', action);
                    }, className: cls }), label));
            });
        };
        ActionSheet.prototype.render = function () {
            var _a = this.props, show = _a.show, type = _a.type; _a.menus; _a.actions; var others = __rest(_a, ["show", "type", "menus", "actions"]);
            var cls = omi.classNames({
                'o-actionsheet': true,
                'o-actionsheet_toggle': show
            });
            var styleType = type ? type : 'ios';
            return (omi.h("div", { className: styleType === 'android' ? 'o-skin_android' : '' },
                omi.h("div", { class: "mask", style: { display: show ? 'block' : 'none' }, onClick: this.handleMaskClick }),
                omi.h("div", __assign({ className: cls }, others),
                    omi.h("div", { className: "o-actionsheet__menu" }, this.renderMenuItem()),
                    omi.h("div", { className: "o-actionsheet__action" }, this.renderActions()))));
        };
        ActionSheet.css = css;
        ActionSheet.defaultProps = {
            type: '',
            menus: [],
            actions: [],
            show: false
        };
        ActionSheet.propTypes = {
            type: String,
            menus: Array,
            actions: Array,
            show: Boolean
        };
        ActionSheet = __decorate([
            omi.tag('o-action-sheet')
        ], ActionSheet);
        return ActionSheet;
    }(omi.WeElement));

    return ActionSheet;

})(omi);
//# sourceMappingURL=index.js.map
