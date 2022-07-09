import{W as Ie,h as I,t as je,s as Re,a as Le}from"./index.ccd4bdaa.js";import"./index.esm.c66f3b14.js";import"./admin-docs.04dd404a.js";import"./index.da6d7df9.js";import"./container.06a2c407.js";import"./___vite-browser-external_commonjs-proxy.96474226.js";function Te(){return typeof global!="object"||!global||global.Math!==Math||global.Array!==Array?self||window||global||function(){return this}():global}var m={store:null,root:Te(),mapping:{}};/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */(function(){if(!(window.Reflect===void 0||window.customElements===void 0||window.customElements.hasOwnProperty("polyfillWrapFlushCallback"))){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}})();function de(t){var e=document.createElement("style");return e.textContent=t,e}function ye(t){return t.replace(/-(\w)/g,function(e,r){return r.toUpperCase()})}function oe(t){return t.children}function be(t,e){for(var r in e)t[r]=e[r];return t}function ve(t,e){t!=null&&(typeof t=="function"?t(e):t.current=e)}typeof Promise=="function"&&Promise.resolve().then.bind(Promise.resolve());function K(t){return Object.prototype.toString.call(t)==="[object Array]"}function ie(t){return typeof t!="string"||!t?[]:t.replace(/]/g,"").replace(/\[/g,".").split(".")}var Me=/\B([A-Z])/g;function Fe(t){return t.replace(Me,"-$1").toLowerCase()}function $e(t){return t.replace(/\-(\w)/g,function(e,r){return r.toUpperCase()}).replace(/^\S/,function(e){return e.toUpperCase()})}function De(t,e){var r=ie(t);return r.forEach(function(n){e=e[n]}),e}var F=[];function N(t,e){var r=[],n,o,i,s;for(s=arguments.length;s-- >2;)F.push(arguments[s]);for(e&&e.children!=null&&(F.length||F.push(e.children),delete e.children);F.length;)if((o=F.pop())&&o.pop!==void 0)for(s=o.length;s--;)F.push(o[s]);else typeof o=="boolean"&&(o=null),(i=typeof t!="function")&&(o==null?o="":typeof o=="number"?o=String(o):typeof o!="string"&&(i=!1)),i&&n?r[r.length-1]+=o:r.length===0?r=[o]:r.push(o),n=i;if(t===oe)return r;var c={nodeName:t,children:r,attributes:e==null?void 0:e,key:e==null?void 0:e.key};return m.vnode!==void 0&&m.vnode(c),c}var We=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function Be(t,e,r){return typeof e=="string"||typeof e=="number"?t.splitText!==void 0:typeof e.nodeName=="string"?!t._componentConstructor&&Se(t,e.nodeName):typeof e.nodeName=="function"?m.mapping[t.nodeName.toLowerCase()]===e.nodeName:r||t._componentConstructor===e.nodeName}function Se(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}var ee={};function Ue(t,e){ee["o-"+t]=e}function ze(t,e,r){for(var n=ie(e),o=t,i=0,s=n.length;i<s;i++)i===s-1?o[n[i]]=r:o=o[n[i]]}function He(t,e){for(var r=ie(e),n=t,o=0,i=r.length;o<i;o++)n=n[r[o]];return n}function Ce(t){return this._listeners[t.type](t)}function Ve(t,e,r){t._listeners=t._listeners||{},t._listeners[e]=r,t.addEventListener(e,Ce)}function qe(t,e){t.removeEventListener(e,Ce)}function Je(t,e){var r=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return r.normalizedNodeName=t,r}function _e(t){var e=t.parentNode;e&&e.removeChild(t)}function Q(t,e,r,n,o,i){if(e==="className"&&(e="class"),e[0]=="o"&&e[1]=="-")ee[e]&&ee[e](t,n,i);else if(e!=="key")if(e==="ref")ve(r,null),ve(n,t);else if(e==="class"&&!o)t.className=n||"";else if(e==="style"){if((!n||typeof n=="string"||typeof r=="string")&&(t.style.cssText=n||""),n&&typeof n=="object"){if(typeof r!="string")for(var s in r)s in n||(t.style[s]="");for(var s in n)t.style[s]=typeof n[s]=="number"&&We.test(s)===!1?n[s]+"px":n[s]}}else if(e==="dangerouslySetInnerHTML")n&&(t.innerHTML=n.__html||"");else if(e[0]=="o"&&e[1]=="n")Ye(t,e,n,r);else if(t.nodeName==="INPUT"&&e==="value")t[e]=n==null?"":n;else if(e!=="list"&&e!=="type"&&e!=="css"&&!o&&e in t&&n!==""){try{t[e]=n==null?"":n}catch{}(n==null||n===!1)&&e!="spellcheck"&&(t.pureRemoveAttribute?t.pureRemoveAttribute(e):t.removeAttribute(e))}else{var c=o&&e!==(e=e.replace(/^xlink:?/,""));n==null||n===!1?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.pureRemoveAttribute?t.pureRemoveAttribute(e):t.removeAttribute(e):typeof n!="function"&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):t.pureSetAttribute?t.pureSetAttribute(e,n):t.setAttribute(e,n))}}function me(t){return this._listeners[t.type](m.event&&m.event(t)||t)}function Ye(t,e,r,n){var o=e!==(e=e.replace(/Capture$/,"")),i=e.toLowerCase();e=(i in t?i:e).slice(2),r?n||t.addEventListener(e,me,o):t.removeEventListener(e,me,o),(t._listeners||(t._listeners={}))[e]=r}var ge=0,E=!1,W=!1;function te(t,e,r,n,o){if(!(!t&&!e)){var i;return ge++||(E=r!=null&&r.ownerSVGElement!==void 0,W=t!=null&&!("prevProps"in t)),e&&e.nodeName===oe&&(e=e.children),K(e)?r?xe(r,e,W,n,o):(i=[],e.forEach(function(s,c){var f=J(c===0?t:null,s,n,o);i.push(f)})):(K(t)?t.forEach(function(s,c){c===0?i=J(s,e,n,o):D(s,!1)}):i=J(t,e,n,o),r&&i.parentNode!==r&&r.appendChild(i)),--ge||(W=!1),i}}function J(t,e,r,n){t&&e&&t.props&&(t.props.children=e.children);var o=t,i=E;if((e==null||typeof e=="boolean")&&(e=""),typeof e=="string"||typeof e=="number")return t&&t.splitText!==void 0&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(o=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(o,t),D(t,!0))),o.prevProps=!0,o;var s=e.nodeName;if(typeof s=="function"){for(var c in m.mapping)if(m.mapping[c]===s){s=c,e.nodeName=c;break}}if(E=s==="svg"?!0:s==="foreignObject"?!1:E,s=String(s),(!t||!Se(t,s))&&(o=Je(s,E),t)){for(;t.firstChild;)o.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(o,t),D(t,!0)}var f=o.firstChild,u=o.prevProps,d=e.children;if(u==null){u=o.prevProps={};for(var y=o.attributes,w=y.length;w--;)u[y[w].name]=y[w].value}return!W&&d&&d.length===1&&typeof d[0]=="string"&&f!=null&&f.splitText!==void 0&&f.nextSibling==null?f.nodeValue!=d[0]&&(f.nodeValue=d[0]):(d&&d.length||f!=null)&&(o.constructor.is=="WeElement"&&o.constructor.noSlot||xe(o,d,W||u.dangerouslySetInnerHTML!=null,r,n)),Ze(o,e.attributes,u,r,n),o.props&&(o.props.children=e.children),E=i,o}function xe(t,e,r,n,o){var i=t.childNodes,s=[],c={},f=0,u=0,d=i.length,y=0,w=e?e.length:0,h,P,k,O,g;if(d!==0)for(var b=0;b<d;b++){var C=i[b],A=C.prevProps,x=w&&A?C._component?C._component.__key:A.key:null;x!=null?(f++,c[x]=C):(A||(C.splitText!==void 0?r?C.nodeValue.trim():!0:r))&&(s[y++]=C)}if(w!==0)for(var b=0;b<w;b++){if(O=e[b],g=null,O){var x=O.key;if(x!=null)f&&c[x]!==void 0&&(g=c[x],c[x]=void 0,f--);else if(!g&&u<y){for(h=u;h<y;h++)if(s[h]!==void 0&&Be(P=s[h],O,r)){g=P,s[h]=void 0,h===y-1&&y--,h===u&&u++;break}}}g=J(g,O,n,o),k=i[b],g&&g!==t&&g!==k&&(k==null?t.appendChild(g):g===k.nextSibling?_e(k):t.insertBefore(g,k))}if(f)for(var b in c)c[b]!==void 0&&D(c[b],!1);for(;u<=y;)(g=s[y--])!==void 0&&D(g,!1)}function D(t,e){t.prevProps!=null&&t.prevProps.ref&&(typeof t.prevProps.ref=="function"?t.prevProps.ref(null):t.prevProps.ref.current&&(t.prevProps.ref.current=null)),(e===!1||t.prevProps==null)&&_e(t),Ge(t)}function Ge(t){for(t=t.lastChild;t;){var e=t.previousSibling;D(t,!0),t=e}}function Ze(t,e,r,n,o){var i,s=t.update,c;t.receiveProps&&(c=Object.assign({},r));for(i in r)!(e&&e[i]!=null)&&r[i]!=null&&(Q(t,i,r[i],r[i]=void 0,E,n),s&&delete t.props[i]);for(i in e)if(s&&typeof e[i]=="object"&&i!=="ref"){i==="style"&&Q(t,i,r[i],r[i]=e[i],E,n);var f=ye(i);t.props[f]=r[f]=e[i]}else if(i!=="children"&&(!(i in r)||e[i]!==(i==="value"||i==="checked"?t[i]:r[i])))if(Q(t,i,r[i],e[i],E,n),t.nodeName.indexOf("-")!==-1){t.props=t.props||{};var u=ye(i);t.props[u]=r[u]=e[i]}else r[i]=e[i];s&&!o&&t.parentNode&&t.receiveProps(t.props,c)!==!1&&t.update()}function Qe(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xe(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Ke(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var et=0,U=function(t){Ke(e,t);function e(){Qe(this,e);var r=Xe(this,t.call(this));return r.props=Object.assign({},r.constructor.defaultProps,r.props),r.elementId=et++,r.computed={},r.isInstalled=!1,r}return e.prototype.connectedCallback=function(){for(var n=this,o=this.parentNode;o&&!this.store;)this.store=o.store,o=o.parentNode||o.host;if(this.inject){this.injection={},o=this.parentNode;for(var i;o&&!i;)i=o.provide,o=o.parentNode||o.host;if(i)this.inject.forEach(function(h){n.injection[h]=i[h]});else throw"The provide prop was not found on the parent node or the provide type is incorrect."}this.attrsToProps(),this.beforeInstall(),this.install(),this.afterInstall();var s;if(this.constructor.isLightDom)s=this;else if(!this.shadowRoot)s=this.attachShadow({mode:"open"});else{s=this.shadowRoot;for(var c;c=s.firstChild;)s.removeChild(c)}if(this.constructor.elementStyles)s.adoptedStyleSheets=this.constructor.elementStyles;else{var f=this.constructor.css;if(f){if(typeof f=="string"){var u=new CSSStyleSheet;u.replaceSync(f),s.adoptedStyleSheets=[u]}else if(Object.prototype.toString.call(f)==="[object Array]"){var d=[];f.forEach(function(h){if(typeof h=="string"){var P=new CSSStyleSheet;P.replaceSync(h),d.push(P)}else d.push(h);s.adoptedStyleSheets=d})}else if(f.default&&typeof f.default=="string"){var y=new CSSStyleSheet;y.replaceSync(f.default),s.adoptedStyleSheets=[y]}else s.adoptedStyleSheets=[f];this.constructor.elementStyles=s.adoptedStyleSheets}}this.beforeRender(),m.afterInstall&&m.afterInstall(this);var w=this.render(this.props,this.store);this.rootNode=te(null,w,null,this),this.rendered(),this.css&&s.appendChild(de(typeof this.css=="function"?this.css():this.css)),this.props.css&&(this._customStyleElement=de(this.props.css),this._customStyleContent=this.props.css,s.appendChild(this._customStyleElement)),K(this.rootNode)?this.rootNode.forEach(function(h){s.appendChild(h)}):this.rootNode&&s.appendChild(this.rootNode),this.installed(),this.isInstalled=!0},e.prototype.disconnectedCallback=function(){this.uninstall(),this.isInstalled=!1},e.prototype.update=function(n,o){this._willUpdate=!0,this.beforeUpdate(),this.beforeRender(),this._customStyleContent!=this.props.css&&(this._customStyleContent=this.props.css,this._customStyleElement.textContent=this._customStyleContent),this.attrsToProps(n);var i=this.render(this.props,this.store);this.rendered(),this.rootNode=te(this.rootNode,i,this.constructor.isLightDom?this:this.shadowRoot,this,o),this._willUpdate=!1,this.updated()},e.prototype.forceUpdate=function(){this.update(!0)},e.prototype.updateProps=function(n){var o=this;Object.keys(n).forEach(function(i){o.props[i]=n[i],o.prevProps&&(o.prevProps[i]=n[i])}),this.forceUpdate()},e.prototype.updateSelf=function(n){this.update(n,!0)},e.prototype.removeAttribute=function(n){t.prototype.removeAttribute.call(this,n),this.isInstalled&&this.update()},e.prototype.setAttribute=function(n,o){o&&typeof o=="object"?t.prototype.setAttribute.call(this,n,JSON.stringify(o)):t.prototype.setAttribute.call(this,n,o),this.isInstalled&&this.update()},e.prototype.pureRemoveAttribute=function(n){t.prototype.removeAttribute.call(this,n)},e.prototype.pureSetAttribute=function(n,o){t.prototype.setAttribute.call(this,n,o)},e.prototype.attrsToProps=function(n){if(!(n||this.store&&this.store.ignoreAttrs||this.props.ignoreAttrs)){var o=this;o.props.css=o.getAttribute("css");var i=this.constructor.propTypes;!i||Object.keys(i).forEach(function(s){var c=i[s],f=o.getAttribute(Fe(s));if(f!==null)switch(c){case String:o.props[s]=f;break;case Number:o.props[s]=Number(f);break;case Boolean:f==="false"||f==="0"?o.props[s]=!1:o.props[s]=!0;break;case Array:case Object:f[0]===":"?o.props[s]=De(f.substr(1),Omi.$):o.props[s]=JSON.parse(f.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g,'"$2":$4').replace(/'([\s\S]*?)'/g,'"$1"').replace(/,(\s*})/g,"$1"));break}else o.constructor.defaultProps&&o.constructor.defaultProps.hasOwnProperty(s)?o.props[s]=o.constructor.defaultProps[s]:o.props[s]=null})}},e.prototype.fire=function(n,o){var i=this.props["on"+$e(n)];i?i(new CustomEvent(n,{detail:o})):this.dispatchEvent(new CustomEvent(n,{detail:o}))},e.prototype.beforeInstall=function(){},e.prototype.install=function(){},e.prototype.afterInstall=function(){},e.prototype.installed=function(){},e.prototype.uninstall=function(){},e.prototype.beforeUpdate=function(){},e.prototype.updated=function(){},e.prototype.beforeRender=function(){},e.prototype.rendered=function(){},e.prototype.receiveProps=function(){},e}(HTMLElement);U.is="WeElement";function tt(t,e,r){return e=typeof e=="string"?document.querySelector(e):e,r&&(e.store=r),te(null,t,e,!1)}function rt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function we(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function nt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ot=["use","useSelf"];function se(t,e,r){if(!customElements.get(t)&&!m.mapping[t])if(e.is==="WeElement")customElements.define(t,e),m.mapping[t]=e;else{typeof r=="string"?r={css:r}:r=r||{};var n=function(s){nt(c,s);function c(){var f,u,d;rt(this,c);for(var y=arguments.length,w=Array(y),h=0;h<y;h++)w[h]=arguments[h];return d=(f=(u=we(this,s.call.apply(s,[this].concat(w))),u),u.compute=r.compute,f),we(u,d)}return c.prototype.render=function(){return e.call(this,this)},c}(U);n.css=r.css,n.propTypes=r.propTypes,n.defaultProps=r.defaultProps,n.isLightDom=r.isLightDom;var o=function(c){typeof r[c]=="function"&&(n.prototype[c]=function(){return r[c].apply(this,arguments)})};for(var i in r)o(i);ot.forEach(function(s){r[s]&&r[s]!=="function"&&(n.prototype[s]=function(){return r[s]})}),customElements.define(t,n),m.mapping[t]=n}}function ke(t){return function(e){se(t,e)}}function it(t,e){return N(t.nodeName,be(be({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function st(t){for(var e=t.parentNode;e;){if(e.host)return e.host;if(e.shadowRoot&&e.shadowRoot.host)return e.shadowRoot.host;e=e.parentNode}}function at(t){return t.replace(/([1-9]\d*|0)(\.\d*)*rpx/g,function(e,r){return window.innerWidth*Number(r)/750+"px"})}var lt={}.hasOwnProperty;function $(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(!!r){var n=typeof r;if(n==="string"||n==="number")t.push(r);else if(Array.isArray(r)&&r.length){var o=$.apply(null,r);o&&t.push(o)}else if(n==="object")for(var i in r)lt.call(r,i)&&r[i]&&t.push(i)}}return t.join(" ")}function ct(){var t=Array.prototype.slice.call(arguments,0),e=t[0],r=t.slice(1);if(e.class?(r.unshift(e.class),delete e.class):e.className&&(r.unshift(e.className),delete e.className),r.length>0)return{class:$.apply(null,r)}}function ft(t){return JSON.stringify(t)}(function(){if(typeof document=="undefined"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,n=typeof DOMException=="object"?Error:DOMException,o=Object.defineProperty,i=Array.prototype.forEach,s=/@import.+?;?$/gm;function c(a){var l=a.replace(s,"");return l!==a&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),l.trim()}function f(a){return"isConnected"in a?a.isConnected:document.contains(a)}function u(a){return a.filter(function(l,p){return a.indexOf(l)===p})}function d(a,l){return a.filter(function(p){return l.indexOf(p)===-1})}function y(a){a.parentNode.removeChild(a)}function w(a){return a.shadowRoot||r.get(a)}var h=["addRule","deleteRule","insertRule","removeRule"],P=CSSStyleSheet,k=P.prototype;k.replace=function(){return Promise.reject(new n("Can't call replace on non-constructed CSSStyleSheets."))},k.replaceSync=function(){throw new n("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function O(a){return typeof a=="object"?R.isPrototypeOf(a)||k.isPrototypeOf(a):!1}function g(a){return typeof a=="object"?k.isPrototypeOf(a):!1}var b=new WeakMap,C=new WeakMap,A=new WeakMap,x=new WeakMap;function Ee(a,l){var p=document.createElement("style");return A.get(a).set(l,p),C.get(a).push(l),p}function j(a,l){return A.get(a).get(l)}function Oe(a,l){A.get(a).delete(l),C.set(a,C.get(a).filter(function(p){return p!==l}))}function ae(a,l){requestAnimationFrame(function(){l.textContent=b.get(a).textContent,x.get(a).forEach(function(p){return l.sheet[p.method].apply(l.sheet,p.args)})})}function z(a){if(!b.has(a))throw new TypeError("Illegal invocation")}function Y(){var a=this,l=document.createElement("style");e.body.appendChild(l),b.set(a,l),C.set(a,[]),A.set(a,new WeakMap),x.set(a,[])}var R=Y.prototype;R.replace=function(l){try{return this.replaceSync(l),Promise.resolve(this)}catch(p){return Promise.reject(p)}},R.replaceSync=function(l){if(z(this),typeof l=="string"){var p=this;b.get(p).textContent=c(l),x.set(p,[]),C.get(p).forEach(function(S){S.isConnected()&&ae(p,j(p,S))})}},o(R,"cssRules",{configurable:!0,enumerable:!0,get:function(){return z(this),b.get(this).sheet.cssRules}}),o(R,"media",{configurable:!0,enumerable:!0,get:function(){return z(this),b.get(this).sheet.media}}),h.forEach(function(a){R[a]=function(){var l=this;z(l);var p=arguments;x.get(l).push({method:a,args:p}),C.get(l).forEach(function(_){if(_.isConnected()){var v=j(l,_).sheet;v[a].apply(v,p)}});var S=b.get(l).sheet;return S[a].apply(S,p)}}),o(Y,Symbol.hasInstance,{configurable:!0,value:O});var le={childList:!0,subtree:!0},ce=new WeakMap;function L(a){var l=ce.get(a);return l||(l=new ue(a),ce.set(a,l)),l}function fe(a){o(a.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return L(this).sheets},set:function(l){L(this).update(l)}})}function G(a,l){for(var p=document.createNodeIterator(a,NodeFilter.SHOW_ELEMENT,function(_){return w(_)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),S=void 0;S=p.nextNode();)l(w(S))}var H=new WeakMap,T=new WeakMap,V=new WeakMap;function Ae(a,l){return l instanceof HTMLStyleElement&&T.get(a).some(function(p){return j(p,a)})}function pe(a){var l=H.get(a);return l instanceof Document?l.body:l}function Z(a){var l=document.createDocumentFragment(),p=T.get(a),S=V.get(a),_=pe(a);S.disconnect(),p.forEach(function(v){l.appendChild(j(v,a)||Ee(v,a))}),_.insertBefore(l,null),S.observe(_,le),p.forEach(function(v){ae(v,j(v,a))})}function ue(a){var l=this;l.sheets=[],H.set(l,a),T.set(l,[]),V.set(l,new MutationObserver(function(p,S){if(!document){S.disconnect();return}p.forEach(function(_){t||i.call(_.addedNodes,function(v){v instanceof Element&&G(v,function(M){L(M).connect()})}),i.call(_.removedNodes,function(v){v instanceof Element&&(Ae(l,v)&&Z(l),t||G(v,function(M){L(M).disconnect()}))})})}))}if(ue.prototype={isConnected:function(){var a=H.get(this);return a instanceof Document?a.readyState!=="loading":f(a.host)},connect:function(){var a=pe(this);V.get(this).observe(a,le),T.get(this).length>0&&Z(this),G(a,function(l){L(l).connect()})},disconnect:function(){V.get(this).disconnect()},update:function(a){var l=this,p=H.get(l)===document?"Document":"ShadowRoot";if(!Array.isArray(a))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+p+": Iterator getter is not callable.");if(!a.every(O))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+p+": Failed to convert value to 'CSSStyleSheet'");if(a.some(g))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+p+": Can't adopt non-constructed stylesheets");l.sheets=a;var S=T.get(l),_=u(a),v=d(S,_);v.forEach(function(M){y(j(M,l)),Oe(M,l)}),T.set(l,_),l.isConnected()&&_.length>0&&Z(l)}},window.CSSStyleSheet=Y,fe(Document),"ShadowRoot"in window){fe(ShadowRoot);var he=Element.prototype,Pe=he.attachShadow;he.attachShadow=function(l){var p=Pe.call(this,l);return l.mode==="closed"&&r.set(this,p),p}}var q=L(document);q.isConnected()?q.connect():document.addEventListener("DOMContentLoaded",q.connect.bind(q))})();N.f=oe;function pt(){return{}}var ut={},ht=U,dt=se,yt=m.mapping,Ne={tag:ke,WeElement:U,Component:ht,render:tt,h:N,createElement:N,options:m,define:se,cloneElement:it,getHost:st,rpx:at,defineElement:dt,classNames:$,extractClass:ct,createRef:pt,o:ft,elements:yt,$:ut,extend:Ue,get:He,set:ze,bind:Ve,unbind:qe};m.root.Omi=Ne;m.root.omi=Ne;m.root.Omi.version="6.23.0";/*! *****************************************************************************
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
***************************************************************************** */var re=function(t,e){return re=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o])},re(t,e)};function bt(t,e){re(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var B=function(){return B=Object.assign||function(e){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},B.apply(this,arguments)};function X(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r}function vt(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i}var mt=`.o-actionsheet {
  position: fixed;
  left: 0;
  bottom: 0;
  -webkit-transform: translate(0, 100%);
  transform: translate(0, 100%);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 5000;
  width: 100%;
  background-color: #EFEFF4;
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s; }

.o-actionsheet__title {
  position: relative;
  height: 65px;
  padding: 0 20px;
  line-height: 1.4;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  color: #808080;
  background: #FCFCFD; }

.o-actionsheet__title:before {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
  color: #e5e5e5;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5); }

.o-actionsheet__title .o-actionsheet__title-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; }

.o-actionsheet__menu {
  background-color: #FCFCFD; }

.o-actionsheet__action {
  margin-top: 6px;
  background-color: #FCFCFD; }

.o-actionsheet__cell {
  position: relative;
  padding: 10px 0;
  text-align: center;
  font-size: 18px; }

.o-actionsheet__cell:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #e5e5e5;
  color: #e5e5e5;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5); }

.o-actionsheet__cell:active {
  background-color: #ECECEC; }

.o-actionsheet__cell:first-child:before {
  display: none; }

.o-skin_android .o-actionsheet {
  position: fixed;
  left: 50%;
  top: 50%;
  bottom: auto;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 274px;
  box-sizing: border-box;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: transparent;
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s; }

.o-skin_android .o-actionsheet__action {
  display: none; }

.o-skin_android .o-actionsheet__menu {
  border-radius: 2px;
  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1); }

.o-skin_android .o-actionsheet__cell {
  padding: 13px 24px;
  font-size: 16px;
  line-height: 1.4;
  text-align: left; }

.o-skin_android .o-actionsheet__cell:first-child {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px; }

.o-skin_android .o-actionsheet__cell:last-child {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px; }

.o-actionsheet_toggle {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0); }

.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
  z-index: 100;
  left: 0;
  top: 0; }

.o-skin_android .o-actionsheet_toggle {
  opacity: 1 !important;
  top: 50% !important;
  bottom: auto !important; }

.o-skin_android .o-actionsheet {
  opacity: 0;
  transition: opacity .3s;
  top: 150%;
  bottom: 0; }
`;(function(t){bt(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.handleMaskClick=function(n){r.hide(),r.fire("close")},r}return e.prototype.renderMenuItem=function(){var r=this;return this.props.menus.map(function(n,o){var i,s=n.label,c=n.className,f=X(n,["label","className"]),u=$((i={"o-actionsheet__cell":!0},i[c]=c,i));return N("div",B({key:o,onClick:function(d){r.hide(),r.fire("item-click",n)}},f,{class:u}),s)})},e.prototype.show=function(){this.updateProps({show:!0})},e.prototype.hide=function(){this.updateProps({show:!1})},e.prototype.renderActions=function(){var r=this;return this.props.actions.map(function(n,o){var i,s=n.label,c=n.className,f=X(n,["label","className"]),u=$((i={"o-actionsheet__cell":!0},i[c]=c,i));return N("div",B({key:o},f,{onClick:function(d){r.hide(),r.fire("item-click",n)},className:u}),s)})},e.prototype.render=function(){var r=this.props,n=r.show,o=r.type;r.menus,r.actions;var i=X(r,["show","type","menus","actions"]),s=$({"o-actionsheet":!0,"o-actionsheet_toggle":n}),c=o||"ios";return N("div",{className:c==="android"?"o-skin_android":""},N("div",{class:"mask",style:{display:n?"block":"none"},onClick:this.handleMaskClick}),N("div",B({className:s},i),N("div",{className:"o-actionsheet__menu"},this.renderMenuItem()),N("div",{className:"o-actionsheet__action"},this.renderActions())))},e.css=mt,e.defaultProps={type:"",menus:[],actions:[],show:!1},e.propTypes={type:String,menus:Array,actions:Array,show:Boolean},e=vt([ke("o-action-sheet")],e),e})(U);var gt=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,St=(t,e,r,n)=>{for(var o=n>1?void 0:n?wt(e,r):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(o=(n?s(e,r,o):s(o))||o);return n&&o&&gt(e,r,o),o};const Ct="action-sheet-component";let ne=class extends Ie{constructor(){super(...arguments),this.visibleA=!1,this.visibleB=!1,this.ItemClick=()=>{this.visibleA=!1,this.visibleB=!1,this.update()}}install(){}render(){return I("code-demo-container",null,I("code-demo",{title:"\u5F39\u51FA\u5F0F\u83DC\u5355",describe:"\u57FA\u7840\u6F14\u793A",code:`
\`\`\`jsx
  visibleA = false
  visibleB = false

  ItemClick = () => {
    this.visibleA = false
    this.visibleB = false
    this.update()
  }

<o-action-sheet 
  onItemClick={e => {this.ItemClick()}} 
  onClose={e => {this.ItemClick()}} 
  menus={[{
    label: 'Option 1'
  }, {
    label: 'Option 2'
  }]} actions={[{
    label: 'Cancel'
  }]} show={this.visibleA} type="ios">
</o-action-sheet>

<o-action-sheet 
  onItemClick={e => {this.ItemClick()}} 
  onClose={e => {this.ItemClick()}} 
  menus={[{
    label: 'Option 1'
  }, {
    label: 'Option 2'
  }]} actions={[{
    label: 'Cancel'
  }]} show={this.visibleB} type="android">
</o-action-sheet>
\`\`\`
          `},I("div",{slot:"demo",class:je`px-5 py-5`},I("o-button",{onClick:t=>{this.visibleA=!0,this.update()},block:!0,type:"default",text:"IOS ActionSheet"}),I("o-action-sheet",{onItemClick:t=>{this.ItemClick()},onClose:t=>{this.ItemClick()},menus:[{label:"Option 1"},{label:"Option 2"}],actions:[{label:"Cancel"}],show:this.visibleA,type:"ios"}),I("o-button",{onClick:t=>{this.visibleB=!0,this.update()},block:!0,type:"default",style:"margin-top: 15px;",text:"Android ActionSheet"}),I("o-action-sheet",{onItemClick:t=>{this.ItemClick()},onClose:t=>{this.ItemClick()},menus:[{label:"Option 1"},{label:"Option 2"}],actions:[{label:"Cancel"}],show:this.visibleB,type:"android"}))))}};ne.css=[Re.target,"o-button{margin-left:10px;}"];ne=St([Le(Ct)],ne);export{ne as default};
