/**
 * @omiu/transition v0.0.4 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

import { tag, WeElement } from 'omi';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _dready_0_0_1_dready = createCommonjsModule(function (module, exports) {
// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
  {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  }
}(commonjsGlobal, function () {

  const readyCallbacks = [];
  document.addEventListener('DOMContentLoaded', () => {
    domReady.done = true;
    readyCallbacks.forEach(callback => {
      callback();
    });
  });

  function domReady(callback) {
    if (domReady.done) {
      callback();
      return
    }
    readyCallbacks.push(callback);
  }

  domReady.done = false;


  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return domReady
}));
});

/**
 * o-transition element based on vue-transition
 * Tom Fales (@enlightenmentor)
 * Licensed under the MIT License
 * https://github.com/enlightenmentor/vue-transition/blob/master/LICENSE
 *
 * modified by dntzhang
 *
 */
var Transition = /** @class */ (function (_super) {
    __extends(Transition, _super);
    function Transition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transition.prototype.installed = function () {
        var _this = this;
        if (this.props.appear) {
            _dready_0_0_1_dready(function () {
                _this.transitionTarget = _this.children[0];
                _this.enter();
                if (_this.props.leavingTime) {
                    setTimeout(function () {
                        _this.leave();
                    }, _this.props.leavingTime);
                }
            });
        }
    };
    Transition.prototype.enter = function () {
        this.fire('before-enter');
        this.transitionTarget.classList.remove(this.props.name + '-leave-active');
        this.transitionTarget.classList.remove(this.props.name + '-leave-to');
        this.transitionTarget.classList.add(this.props.name + '-enter');
        this.transitionTarget.classList.add(this.props.name + '-enter-active');
        this.callback = function () {
            this.transitionTarget.classList.remove(this.props.name + '-enter-active');
            this.fire('after-enter');
        }.bind(this);
        this.once('transitionend', this.callback);
        this.once('animationend', this.callback);
        window.setTimeout(function () {
            this.transitionTarget.classList.remove(this.props.name + '-enter');
            this.transitionTarget.classList.add(this.props.name + '-enter-to');
            this.fire('enter');
        }.bind(this), 0);
    };
    Transition.prototype.leave = function () {
        this.fire('before-leave');
        this.transitionTarget.classList.remove(this.props.name + '-enter-active');
        this.transitionTarget.classList.remove(this.props.name + '-enter-to');
        this.transitionTarget.classList.add(this.props.name + '-leave');
        this.transitionTarget.classList.add(this.props.name + '-leave-active');
        this.callback = function (e) {
            this.transitionTarget.classList.remove(this.props.name + '-leave-active');
            this.fire('after-leave');
            if (this.props.autoRemove && this.parentNode) {
                this.parentNode.removeChild(this);
            }
        }.bind(this);
        this.once('transitionend', this.callback);
        this.once('animationend', this.callback);
        window.setTimeout(function () {
            this.transitionTarget.classList.remove(this.props.name + '-leave');
            this.transitionTarget.classList.add(this.props.name + '-leave-to');
            this.fire('leave');
        }.bind(this), 0);
    };
    Transition.prototype.once = function (name, callback) {
        var wrapCall = function () {
            this.removeEventListener(name, wrapCall);
            callback();
        }.bind(this);
        this.addEventListener(name, wrapCall);
    };
    Transition.prototype.render = function () {
        return;
    };
    Transition.propTypes = {
        name: String,
        leavingTime: Number,
        autoRemove: Boolean,
        appear: Boolean
    };
    Transition.isLightDom = true;
    Transition.defaultProps = {
        name: 'o'
    };
    Transition = __decorate([
        tag('o-transition')
    ], Transition);
    return Transition;
}(WeElement));

export default Transition;
//# sourceMappingURL=index.esm.js.map
