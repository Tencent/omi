/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/**
 * This shim allows elements written in, or compiled to, ES5 to work on native
 * implementations of Custom Elements v1. It sets new.target to the value of
 * this.constructor so that the native HTMLElement constructor can access the
 * current under-construction element's definition.
 */
(function() {
    if (
      // No Reflect, no classes, no need for shim because native custom elements
      // require ES2015 classes or Reflect.
      window.Reflect === undefined ||
      window.customElements === undefined ||
      // The webcomponentsjs custom elements polyfill doesn't require
      // ES2015-compatible construction (`super()` or `Reflect.construct`).
      window.customElements.hasOwnProperty('polyfillWrapFlushCallback')
    ) {
      return;
    }
    const BuiltInHTMLElement = HTMLElement;
    window.HTMLElement = function HTMLElement() {
      return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
    };
    HTMLElement.prototype = BuiltInHTMLElement.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
  })();

export function vdToDom(vd) {
    if(vd){
    if (vd.nodeName) {
        const dom = document.createElement(vd.nodeName)
        Object.keys(vd.attributes).forEach(key=>{
            dom.setAttribute(key,vd.attributes[key])
        })
        bind(vd, dom)
        vd.children && vd.children.forEach(child => {
            const n = vdToDom(child)
            n&&dom.appendChild(n)
        })
        return dom
    } else {
        return document.createTextNode(vd)
    }
}
}

function bind(vd, dom) {
    if (vd.attributes.onClick) {
        
        dom.onclick = vd.attributes.onClick
    }
}


export function cssToDom(css) {
    const node = document.createElement('style')
    node.innerText = css
    return node
}


export function npn(str) {
    return str.replace(/-(\w)/g, function ($, $1) {
        return $1.toUpperCase();
    });
}

/**
 *  Copy all properties from `props` onto `obj`.
 *  @param {Object} obj		Object onto which properties should be copied.
 *  @param {Object} props	Object from which to copy properties.
 *  @returns obj
 *  @private
 */
export function extend(obj, props) {
	for (let i in props) obj[i] = props[i];
	return obj;
}

/**
 * Call a function asynchronously, as soon as possible. Makes
 * use of HTML Promise to schedule the callback if available,
 * otherwise falling back to `setTimeout` (mainly for IE<11).
 *
 * @param {Function} callback
 */

let usePromise = typeof Promise == 'function';

// for native
if (typeof document !== 'object' && typeof global !== 'undefined' && global.__config__) {
	if (global.__config__.platform === 'android') {
		usePromise = true;
	} else {
		let systemVersion = global.__config__.systemVersion && global.__config__.systemVersion.split('.')[0] || 0;
		if (systemVersion > 8) {
			usePromise = true;
		}
	}
}

export const defer = usePromise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
