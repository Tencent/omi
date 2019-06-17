(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MPlayer"] = factory(require("omi"));
	else
		root["MPlayer"] = factory(root["Omi"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_omi__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/player/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/player/index.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-3!./src/player/index.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".eplayer,\nvideo {\n  height: 100%;\n  width: 100%;\n  color: var(--icons, rgba(255, 255, 255, 0.6));\n  font-size: 12px;\n  background: #000; }\n\n.eplayer {\n  user-select: none;\n  position: relative;\n  overflow: hidden; }\n\n.controls {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 10px;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));\n  transition: 0.3s ease-out;\n  z-index: 1; }\n\n.progress {\n  position: relative;\n  bottom: 15px;\n  left: 0;\n  right: 0;\n  cursor: pointer; }\n\n.options {\n  display: flex;\n  align-items: center; }\n\n.epicon {\n  color: var(--icons, rgba(255, 255, 255, 0.6));\n  padding: 0 10px; }\n\n.epicon {\n  font-size: 18px;\n  transition: 0.3s;\n  cursor: pointer; }\n\n.epicon:hover {\n  color: #fff; }\n\n.time {\n  display: inline-block;\n  height: 24px;\n  line-height: 25px;\n  vertical-align: top; }\n\n.time b {\n  font-weight: normal; }\n\n.line {\n  padding: 0 1px;\n  margin-bottom: -2px;\n  cursor: pointer; }\n\n.line i {\n  width: 4px;\n  border-radius: 4px;\n  display: inline-block;\n  background: var(--icons, rgba(255, 255, 255, 0.6));\n  height: 12px;\n  transform: scaleX(0.7);\n  transition: 0.3s; }\n\n.line:hover i {\n  height: 14px;\n  background: var(--mdc-theme-primary, #6200ee); }\n\n.active i {\n  background: var(--mdc-theme-primary, #6200ee); }\n\n.left {\n  flex: 1; }\n\n.right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n.bg,\n.current,\n.buffer {\n  left: 0;\n  height: 3px;\n  position: absolute;\n  top: 0; }\n\n.bg {\n  right: 0;\n  background: var(--progress, rgba(255, 255, 255, 0.3)); }\n\n.current {\n  background: var(--mdc-theme-primary, #6200ee); }\n\n.buffer {\n  background: var(--buffer, rgba(255, 255, 255, 0.5)); }\n\n.dot {\n  position: absolute;\n  border-radius: 50%;\n  display: block;\n  background: var(--mdc-theme-primary, #6200ee);\n  height: 9px;\n  width: 9px;\n  right: -5px;\n  top: -3px;\n  cursor: pointer;\n  z-index: 1; }\n\n.cycle {\n  position: absolute;\n  border-radius: 50%;\n  display: block;\n  background: var(--mdc-theme-primary, #6200ee);\n  opacity: 0.3;\n  height: 15px;\n  width: 15px;\n  right: -8px;\n  top: -6px;\n  cursor: pointer;\n  z-index: 1; }\n\n@keyframes loading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.playing {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.loading {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  margin: -20px 0 0 -20px;\n  width: 40px;\n  height: 40px;\n  z-index: 1;\n  box-shadow: 2px 0px rgba(255, 255, 255, 0.6);\n  border-radius: 50%;\n  animation: loading 1s linear infinite; }\n\n.ep-video {\n  position: absolute;\n  bottom: 25px;\n  right: 20px;\n  font-size: 40px;\n  color: var(--icons, rgba(255, 255, 255, 0.6));\n  z-index: 1;\n  cursor: pointer;\n  z-index: 1; }\n\n.icon {\n  cursor: pointer;\n  color: var(--icons, rgba(255, 255, 255, 0.6));\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  vertical-align: top; }\n\n.icon:hover {\n  color: white; }\n\n.ep-video {\n  transform: scale(4);\n  transform-origin: right bottom; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src/player/index.scss":
/*!*******************************!*\
  !*** ./src/player/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/_css-loader@1.0.1@css-loader!../../node_modules/_resolve-url-loader@3.1.0@resolve-url-loader!../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-3!./index.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/player/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/player/index.tsx":
/*!******************************!*\
  !*** ./src/player/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var dom_ready_1 = __webpack_require__(/*! ../util/dom-ready */ "./src/util/dom-ready.js");
var css = __webpack_require__(/*! ./index.scss */ "./src/player/index.scss");
__webpack_require__(/*! ../theme.ts */ "./src/theme.ts");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.totalTime = '00:00';
        _this.muted = false;
        return _this;
    }
    Player.prototype.$ = function (node) {
        var dom = this.shadowRoot.querySelectorAll(node);
        return dom.length > 1 ? dom : dom[0];
    };
    Player.prototype.dom = function () {
        var _this = this;
        this.video = this.$('video');
        this.video.volume = 0.5;
        setVolume(this.video.volume * 10, this.$('.line'));
        this.$('.is-volume').onclick = function () { return _this.volume(); };
        this.$('.line').forEach(function (item, index) {
            item.onclick = function () {
                _this.video.volume = (index + 1) / 10;
                setVolume(index + 1, _this.$('.line'));
            };
        });
        this.$('.progress').onmousedown = function (e) { return _this.progress(e); };
        this.video.onwaiting = function () { return _this.waiting(); };
        this.video.oncanplay = function () { return _this.canplay(); };
        this.video.ontimeupdate = function () { return _this.updating(); };
        this.$('.cycle').onmousedown = function (e) { return _this.down(e); };
        this.$('.eplayer').onmousemove = function () { return _this.alow(); };
        document.onkeydown = function (e) { return _this.keydown(e); };
        this.$('.ep-full').onclick = function () { return _this.full(); };
        this.$('.ep-video').onclick = this.$('.is-play').onclick = function () { return _this.play(); };
        this.video.onended = function () { return _this.ended(); };
        this.$('.mark').ondblclick = function () {
            clearTimeout(_this.timer);
            _this.full();
        };
    };
    Player.prototype.waiting = function () {
        this.$('.mark').classList.remove('playing');
        this.$('.mark').classList.add('loading');
    };
    Player.prototype.canplay = function () {
        var _this = this;
        this.$('.mark').classList.remove('loading');
        this.$('.mark').classList.add('playing');
        this.$('.playing').onclick = function () {
            clearTimeout(_this.timer);
            _this.timer = setTimeout(function () {
                _this.play();
            }, 200);
        };
        this.$('.total').innerHTML = getTimeStr(this.video.duration);
        this.totalTime = getTimeStr(this.video.duration);
        this.$('.total').innerHTML = this.totalTime;
    };
    Player.prototype.play = function () {
        if (this.video.paused) {
            this.video.play();
            this.isPlaying = true;
            this.$('.ep-video').style.display = 'none';
        }
        else {
            this.video.pause();
            this.isPlaying = false;
            this.$('.ep-video').style.display = 'block';
        }
        this.update();
    };
    Player.prototype.volume = function () {
        if (this.video.muted) {
            this.video.muted = false;
            this.muted = false;
            setVolume(this.video.volume * 10, this.$('.line'));
        }
        else {
            this.muted = true;
            this.video.muted = true;
            setVolume(0, this.$('.line'));
        }
        this.update();
    };
    Player.prototype.updating = function () {
        var cTime = getTimeStr(this.video.currentTime);
        if (this.video.buffered.length) {
            var bufferEnd = this.video.buffered.end(this.video.buffered.length - 1);
            this.$('.buffer').style.width =
                (bufferEnd / this.video.duration) * this.$('.progress').clientWidth +
                    'px';
        }
        var offset = (this.video.currentTime / this.video.duration) * this.$('.bg').clientWidth;
        this.$('.now').innerHTML = cTime;
        this.$('.current').style.width = offset + 'px';
    };
    Player.prototype.progress = function (e) {
        var offset = e.offsetX / this.$('.progress').offsetWidth;
        this.video.currentTime = this.video.duration * offset;
    };
    Player.prototype.down = function (e) {
        var _this = this;
        e.stopPropagation();
        this.disX = e.clientX - this.$('.cycle').offsetLeft;
        document.onmousemove = function (e) { return _this.move(e); };
        document.onmouseup = function () {
            e.stopPropagation();
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
    Player.prototype.move = function (e) {
        var _this = this;
        e.stopPropagation();
        var offset = e.clientX - this.disX + 7;
        if (offset < 0)
            offset = 0;
        if (offset > this.$('.progress').clientWidth) {
            offset = this.$('.progress').clientWidth;
        }
        this.$('.current').style.width = offset + 'px';
        this.video.currentTime =
            (offset / this.$('.progress').clientWidth) * this.video.duration;
        document.onmousemove = null;
        setTimeout((document.onmousemove = function (e) {
            if (e)
                _this.move(e);
        }), 30);
    };
    Player.prototype.alow = function () {
        var _this = this;
        clearTimeout(this.timer);
        this.$('.controls').style.bottom = 0;
        this.$('.ep-video').style.bottom = 70 + 'px';
        this.timer = setTimeout(function () {
            _this.$('.controls').style.bottom = -50 + 'px';
            _this.$('.ep-video').style.bottom = 25 + 'px';
        }, 5000);
    };
    Player.prototype.keydown = function (e) {
        switch (e.keyCode) {
            case 37:
                this.video.currentTime -= 10;
                break;
            case 39:
                this.video.currentTime += 10;
                break;
            case 38:
                setVolume(this.video.volume.toFixed(1) * 10, this.$('.line'));
                break;
            case 40:
                setVolume(this.video.volume.toFixed(1) * 10, this.$('.line'));
                break;
            case 32:
                this.play();
                break;
            default:
        }
    };
    Player.prototype.ended = function () {
        this.isPlaying = false;
        this.update();
    };
    Player.prototype.full = function () {
        if (isFullScreen()) {
            document.exitFullscreen();
        }
        else {
            var el = this.$('.eplayer');
            var rfs = el.requestFullScreen ||
                el.webkitRequestFullScreen ||
                el.mozRequestFullScreen ||
                el.msRequestFullscreen;
            return rfs.call(el);
        }
    };
    Player.prototype.installed = function () {
        var _this = this;
        dom_ready_1.domReady(function () {
            _this.update();
            _this.dom();
        });
    };
    Player.prototype.render = function (props) {
        // this.stream(props.src, props.type)
        return (omi_1.h("div", { class: "eplayer" },
            omi_1.h("video", { id: "video", class: "video", src: props.src }),
            omi_1.h("div", { class: "mark loading" }),
            omi_1.h("div", { class: "controls", style: "bottom:-50px" },
                omi_1.h("div", { class: "progress" },
                    omi_1.h("b", { class: "bg" }),
                    omi_1.h("b", { class: "buffer" }),
                    omi_1.h("div", { class: "current", style: "width:0" },
                        omi_1.h("div", { class: "dot" }),
                        omi_1.h("div", { class: "cycle" }))),
                omi_1.h("div", { class: "options" },
                    omi_1.h("div", { class: "left" },
                        omi_1.h("svg", { xmlns: "http://www.w3.org/2000/svg", class: 'is-play icon', width: "24", height: "24", viewBox: "0 0 24 24" },
                            omi_1.h("path", { d: this.isPlaying ? "M6 19h4V5H6v14zm8-14v14h4V5h-4z" : "M8 5v14l11-7z", fill: "currentColor" }),
                            omi_1.h("path", { d: "M0 0h24v24H0z", fill: "none" })),
                        omi_1.h("span", { class: "time" },
                            omi_1.h("b", { class: "now" }, "00:00"),
                            " / ",
                            omi_1.h("b", { class: "total" }, this.totalTime))),
                    omi_1.h("div", { class: "right" },
                        omi_1.h("svg", { class: "is-volume icon", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
                            omi_1.h("path", { fill: "currentColor", d: !this.muted ? "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" : "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" }),
                            omi_1.h("path", { d: "M0 0h24v24H0z", fill: "none" })),
                        omi_1.h("span", { class: "line" },
                            omi_1.h("i", null)),
                        omi_1.h("span", { class: "line" },
                            omi_1.h("i", null)),
                        omi_1.h("span", { class: "line" },
                            omi_1.h("i", null)),
                        omi_1.h("span", { class: "line" },
                            omi_1.h("i", null)),
                        omi_1.h("span", { class: "line" },
                            omi_1.h("i", null)),
                        omi_1.h("span", { class: "line" },
                            omi_1.h("i", null)),
                        omi_1.h("span", { class: "line" },
                            omi_1.h("i", null)),
                        omi_1.h("span", { class: "line" },
                            omi_1.h("i", null)),
                        omi_1.h("span", { class: "line" },
                            omi_1.h("i", null)),
                        omi_1.h("span", { class: "line" },
                            omi_1.h("i", null)),
                        omi_1.h("svg", { class: "ep-full icon", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
                            omi_1.h("path", { d: "M0 0h24v24H0z", fill: "none" }),
                            omi_1.h("path", { fill: "currentColor", d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }))))),
            omi_1.h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "ep-video icon", width: "24", height: "24", viewBox: "0 0 24 24" },
                omi_1.h("path", { d: "M0 0h24v24H0z", fill: "none" }),
                omi_1.h("path", { fill: "currentColor", d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" }))));
    };
    Player.css = css;
    Player.propTypes = {
        src: String,
        type: String
    };
    Player = __decorate([
        omi_1.tag('m-player')
    ], Player);
    return Player;
}(omi_1.WeElement));
exports.default = Player;
function getTimeStr(time) {
    var h = Math.floor(time / 3600);
    var m = Math.floor((time % 3600) / 60);
    var s = Math.floor(time % 60);
    h = h >= 10 ? h : '0' + h;
    m = m >= 10 ? m : '0' + m;
    s = s >= 10 ? s : '0' + s;
    return h === '00' ? m + ':' + s : h + ':' + m + ':' + s;
}
function setVolume(index, node) {
    for (var j = index; j < node.length; j++) {
        node[j].classList.remove('active');
    }
    for (var i = 0; i < index; i++) {
        node[i].classList.add('active');
    }
}
function isFullScreen() {
    return document.fullscreen;
}


/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

theme();
document.addEventListener('DOMContentLoaded', function () {
    theme();
});
function theme() {
    if (document.body && !document.body.style.getPropertyValue('--mdc-theme-primary')) {
        document.body.style.setProperty('--mdc-theme-primary', '#0072d9');
        document.body.style.setProperty('--mdc-theme-secondary', '#2170b8');
        document.body.style.setProperty('--mdc-theme-error', '#f5222d');
        document.body.style.setProperty('--mdc-theme-surface', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-primary', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-secondary', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-error', '#ffffff');
        document.body.style.setProperty('--mdc-theme-on-surface', '#000000');
        document.body.style.setProperty('--mdc-theme-background', '#ffffff');
        document.body.style.setProperty('--mdc-shape-small-component-radius', '4px');
        document.body.style.setProperty('--mdc-shape-medium-component-radius', '4px');
        document.body.style.setProperty('--mdc-shape-large-component-radius', '0px');
        document.body.style.setProperty('--mdc-typography--font-family', 'Roboto, sans-serif');
    }
}


/***/ }),

/***/ "./src/util/dom-ready.js":
/*!*******************************!*\
  !*** ./src/util/dom-ready.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var readyCallbacks = [];
document.addEventListener('DOMContentLoaded', function () {
    domReady.done = true;
    readyCallbacks.forEach(function (callback) {
        callback();
    });
});
function domReady(callback) {
    if (domReady.done) {
        callback();
        return;
    }
    readyCallbacks.push(callback);
}
exports.domReady = domReady;
domReady.done = false;


/***/ }),

/***/ "omi":
/*!******************************************************************************!*\
  !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.js.map