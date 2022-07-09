import{r as require$$0,c as commonjsGlobal$1,h as h$2,e as extractClass$2,a as tag$2,W as WeElement$2,s as sheet,t as tw}from"./index.ccd4bdaa.js";import"./admin-docs.04dd404a.js";function getGlobal$1(){return typeof global!="object"||!global||global.Math!==Math||global.Array!==Array?self||window||global||function(){return this}():global}var options$1={store:null,root:getGlobal$1(),mapping:{}};/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */(function(){if(!(window.Reflect===void 0||window.customElements===void 0||window.customElements.hasOwnProperty("polyfillWrapFlushCallback"))){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}})();function cssToDom$1(t){var e=document.createElement("style");return e.textContent=t,e}function camelCase$1(t){return t.replace(/-(\w)/g,function(e,r){return r.toUpperCase()})}function Fragment$1(t){return t.children}function extend$2(t,e){for(var r in e)t[r]=e[r];return t}function applyRef$1(t,e){t!=null&&(typeof t=="function"?t(e):t.current=e)}typeof Promise=="function"&&Promise.resolve().then.bind(Promise.resolve());function isArray$1(t){return Object.prototype.toString.call(t)==="[object Array]"}function pathToArr$1(t){return typeof t!="string"||!t?[]:t.replace(/]/g,"").replace(/\[/g,".").split(".")}var hyphenateRE$1=/\B([A-Z])/g;function hyphenate$1(t){return t.replace(hyphenateRE$1,"-$1").toLowerCase()}function capitalize$1(t){return t.replace(/\-(\w)/g,function(e,r){return r.toUpperCase()}).replace(/^\S/,function(e){return e.toUpperCase()})}function getValByPath$1(t,e){var r=pathToArr$1(t);return r.forEach(function(s){e=e[s]}),e}var stack$1=[];function h$1(t,e){var r=[],s,a,c,l;for(l=arguments.length;l-- >2;)stack$1.push(arguments[l]);for(e&&e.children!=null&&(stack$1.length||stack$1.push(e.children),delete e.children);stack$1.length;)if((a=stack$1.pop())&&a.pop!==void 0)for(l=a.length;l--;)stack$1.push(a[l]);else typeof a=="boolean"&&(a=null),(c=typeof t!="function")&&(a==null?a="":typeof a=="number"?a=String(a):typeof a!="string"&&(c=!1)),c&&s?r[r.length-1]+=a:r.length===0?r=[a]:r.push(a),s=c;if(t===Fragment$1)return r;var f={nodeName:t,children:r,attributes:e==null?void 0:e,key:e==null?void 0:e.key};return options$1.vnode!==void 0&&options$1.vnode(f),f}var IS_NON_DIMENSIONAL$1=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function isSameNodeType$1(t,e,r){return typeof e=="string"||typeof e=="number"?t.splitText!==void 0:typeof e.nodeName=="string"?!t._componentConstructor&&isNamedNode$1(t,e.nodeName):typeof e.nodeName=="function"?options$1.mapping[t.nodeName.toLowerCase()]===e.nodeName:r||t._componentConstructor===e.nodeName}function isNamedNode$1(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}var extension$1={};function extend$1$1(t,e){extension$1["o-"+t]=e}function set$1(t,e,r){for(var s=pathToArr$1(e),a=t,c=0,l=s.length;c<l;c++)c===l-1?a[s[c]]=r:a=a[s[c]]}function get$1(t,e){for(var r=pathToArr$1(e),s=t,a=0,c=r.length;a<c;a++)s=s[r[a]];return s}function eventProxy$2(t){return this._listeners[t.type](t)}function bind$1(t,e,r){t._listeners=t._listeners||{},t._listeners[e]=r,t.addEventListener(e,eventProxy$2)}function unbind$1(t,e){t.removeEventListener(e,eventProxy$2)}function createNode$1(t,e){var r=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return r.normalizedNodeName=t,r}function removeNode$1(t){var e=t.parentNode;e&&e.removeChild(t)}function setAccessor$1(t,e,r,s,a,c){if(e==="className"&&(e="class"),e[0]=="o"&&e[1]=="-")extension$1[e]&&extension$1[e](t,s,c);else if(e!=="key")if(e==="ref")applyRef$1(r,null),applyRef$1(s,t);else if(e==="class"&&!a)t.className=s||"";else if(e==="style"){if((!s||typeof s=="string"||typeof r=="string")&&(t.style.cssText=s||""),s&&typeof s=="object"){if(typeof r!="string")for(var l in r)l in s||(t.style[l]="");for(var l in s)t.style[l]=typeof s[l]=="number"&&IS_NON_DIMENSIONAL$1.test(l)===!1?s[l]+"px":s[l]}}else if(e==="dangerouslySetInnerHTML")s&&(t.innerHTML=s.__html||"");else if(e[0]=="o"&&e[1]=="n")bindEvent$1(t,e,s,r);else if(t.nodeName==="INPUT"&&e==="value")t[e]=s==null?"":s;else if(e!=="list"&&e!=="type"&&e!=="css"&&!a&&e in t&&s!==""){try{t[e]=s==null?"":s}catch{}(s==null||s===!1)&&e!="spellcheck"&&(t.pureRemoveAttribute?t.pureRemoveAttribute(e):t.removeAttribute(e))}else{var f=a&&e!==(e=e.replace(/^xlink:?/,""));s==null||s===!1?f?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.pureRemoveAttribute?t.pureRemoveAttribute(e):t.removeAttribute(e):typeof s!="function"&&(f?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),s):t.pureSetAttribute?t.pureSetAttribute(e,s):t.setAttribute(e,s))}}function eventProxy$1$1(t){return this._listeners[t.type](options$1.event&&options$1.event(t)||t)}function bindEvent$1(t,e,r,s){var a=e!==(e=e.replace(/Capture$/,"")),c=e.toLowerCase();e=(c in t?c:e).slice(2),r?s||t.addEventListener(e,eventProxy$1$1,a):t.removeEventListener(e,eventProxy$1$1,a),(t._listeners||(t._listeners={}))[e]=r}var diffLevel$1=0,isSvgMode$1=!1,hydrating$1=!1;function diff$1(t,e,r,s,a){if(!(!t&&!e)){var c;return diffLevel$1++||(isSvgMode$1=r!=null&&r.ownerSVGElement!==void 0,hydrating$1=t!=null&&!("prevProps"in t)),e&&e.nodeName===Fragment$1&&(e=e.children),isArray$1(e)?r?innerDiffNode$1(r,e,hydrating$1,s,a):(c=[],e.forEach(function(l,f){var d=idiff$1(f===0?t:null,l,s,a);c.push(d)})):(isArray$1(t)?t.forEach(function(l,f){f===0?c=idiff$1(l,e,s,a):recollectNodeTree$1(l,!1)}):c=idiff$1(t,e,s,a),r&&c.parentNode!==r&&r.appendChild(c)),--diffLevel$1||(hydrating$1=!1),c}}function idiff$1(t,e,r,s){t&&e&&t.props&&(t.props.children=e.children);var a=t,c=isSvgMode$1;if((e==null||typeof e=="boolean")&&(e=""),typeof e=="string"||typeof e=="number")return t&&t.splitText!==void 0&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(a=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(a,t),recollectNodeTree$1(t,!0))),a.prevProps=!0,a;var l=e.nodeName;if(typeof l=="function"){for(var f in options$1.mapping)if(options$1.mapping[f]===l){l=f,e.nodeName=f;break}}if(isSvgMode$1=l==="svg"?!0:l==="foreignObject"?!1:isSvgMode$1,l=String(l),(!t||!isNamedNode$1(t,l))&&(a=createNode$1(l,isSvgMode$1),t)){for(;t.firstChild;)a.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(a,t),recollectNodeTree$1(t,!0)}var d=a.firstChild,m=a.prevProps,_=e.children;if(m==null){m=a.prevProps={};for(var b=a.attributes,x=b.length;x--;)m[b[x].name]=b[x].value}return!hydrating$1&&_&&_.length===1&&typeof _[0]=="string"&&d!=null&&d.splitText!==void 0&&d.nextSibling==null?d.nodeValue!=_[0]&&(d.nodeValue=_[0]):(_&&_.length||d!=null)&&(a.constructor.is=="WeElement"&&a.constructor.noSlot||innerDiffNode$1(a,_,hydrating$1||m.dangerouslySetInnerHTML!=null,r,s)),diffAttributes$1(a,e.attributes,m,r,s),a.props&&(a.props.children=e.children),isSvgMode$1=c,a}function innerDiffNode$1(t,e,r,s,a){var c=t.childNodes,l=[],f={},d=0,m=0,_=c.length,b=0,x=e?e.length:0,g,T,P,A,S;if(_!==0)for(var v=0;v<_;v++){var E=c[v],j=E.prevProps,O=x&&j?E._component?E._component.__key:j.key:null;O!=null?(d++,f[O]=E):(j||(E.splitText!==void 0?r?E.nodeValue.trim():!0:r))&&(l[b++]=E)}if(x!==0)for(var v=0;v<x;v++){if(A=e[v],S=null,A){var O=A.key;if(O!=null)d&&f[O]!==void 0&&(S=f[O],f[O]=void 0,d--);else if(!S&&m<b){for(g=m;g<b;g++)if(l[g]!==void 0&&isSameNodeType$1(T=l[g],A,r)){S=T,l[g]=void 0,g===b-1&&b--,g===m&&m++;break}}}S=idiff$1(S,A,s,a),P=c[v],S&&S!==t&&S!==P&&(P==null?t.appendChild(S):S===P.nextSibling?removeNode$1(P):t.insertBefore(S,P))}if(d)for(var v in f)f[v]!==void 0&&recollectNodeTree$1(f[v],!1);for(;m<=b;)(S=l[b--])!==void 0&&recollectNodeTree$1(S,!1)}function recollectNodeTree$1(t,e){t.prevProps!=null&&t.prevProps.ref&&(typeof t.prevProps.ref=="function"?t.prevProps.ref(null):t.prevProps.ref.current&&(t.prevProps.ref.current=null)),(e===!1||t.prevProps==null)&&removeNode$1(t),removeChildren$1(t)}function removeChildren$1(t){for(t=t.lastChild;t;){var e=t.previousSibling;recollectNodeTree$1(t,!0),t=e}}function diffAttributes$1(t,e,r,s,a){var c,l=t.update,f;t.receiveProps&&(f=Object.assign({},r));for(c in r)!(e&&e[c]!=null)&&r[c]!=null&&(setAccessor$1(t,c,r[c],r[c]=void 0,isSvgMode$1,s),l&&delete t.props[c]);for(c in e)if(l&&typeof e[c]=="object"&&c!=="ref"){c==="style"&&setAccessor$1(t,c,r[c],r[c]=e[c],isSvgMode$1,s);var d=camelCase$1(c);t.props[d]=r[d]=e[c]}else if(c!=="children"&&(!(c in r)||e[c]!==(c==="value"||c==="checked"?t[c]:r[c])))if(setAccessor$1(t,c,r[c],e[c],isSvgMode$1,s),t.nodeName.indexOf("-")!==-1){t.props=t.props||{};var m=camelCase$1(c);t.props[m]=r[m]=e[c]}else r[c]=e[c];l&&!a&&t.parentNode&&t.receiveProps(t.props,f)!==!1&&t.update()}function _classCallCheck$2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn$2(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function _inherits$2(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var id$1=0,WeElement$1=function(t){_inherits$2(e,t);function e(){_classCallCheck$2(this,e);var r=_possibleConstructorReturn$2(this,t.call(this));return r.props=Object.assign({},r.constructor.defaultProps,r.props),r.elementId=id$1++,r.computed={},r.isInstalled=!1,r}return e.prototype.connectedCallback=function(){for(var s=this,a=this.parentNode;a&&!this.store;)this.store=a.store,a=a.parentNode||a.host;if(this.inject){this.injection={},a=this.parentNode;for(var c;a&&!c;)c=a.provide,a=a.parentNode||a.host;if(c)this.inject.forEach(function(g){s.injection[g]=c[g]});else throw"The provide prop was not found on the parent node or the provide type is incorrect."}this.attrsToProps(),this.beforeInstall(),this.install(),this.afterInstall();var l;if(this.constructor.isLightDom)l=this;else if(!this.shadowRoot)l=this.attachShadow({mode:"open"});else{l=this.shadowRoot;for(var f;f=l.firstChild;)l.removeChild(f)}if(this.constructor.elementStyles)l.adoptedStyleSheets=this.constructor.elementStyles;else{var d=this.constructor.css;if(d){if(typeof d=="string"){var m=new CSSStyleSheet;m.replaceSync(d),l.adoptedStyleSheets=[m]}else if(Object.prototype.toString.call(d)==="[object Array]"){var _=[];d.forEach(function(g){if(typeof g=="string"){var T=new CSSStyleSheet;T.replaceSync(g),_.push(T)}else _.push(g);l.adoptedStyleSheets=_})}else if(d.default&&typeof d.default=="string"){var b=new CSSStyleSheet;b.replaceSync(d.default),l.adoptedStyleSheets=[b]}else l.adoptedStyleSheets=[d];this.constructor.elementStyles=l.adoptedStyleSheets}}this.beforeRender(),options$1.afterInstall&&options$1.afterInstall(this);var x=this.render(this.props,this.store);this.rootNode=diff$1(null,x,null,this),this.rendered(),this.css&&l.appendChild(cssToDom$1(typeof this.css=="function"?this.css():this.css)),this.props.css&&(this._customStyleElement=cssToDom$1(this.props.css),this._customStyleContent=this.props.css,l.appendChild(this._customStyleElement)),isArray$1(this.rootNode)?this.rootNode.forEach(function(g){l.appendChild(g)}):this.rootNode&&l.appendChild(this.rootNode),this.installed(),this.isInstalled=!0},e.prototype.disconnectedCallback=function(){this.uninstall(),this.isInstalled=!1},e.prototype.update=function(s,a){this._willUpdate=!0,this.beforeUpdate(),this.beforeRender(),this._customStyleContent!=this.props.css&&(this._customStyleContent=this.props.css,this._customStyleElement.textContent=this._customStyleContent),this.attrsToProps(s);var c=this.render(this.props,this.store);this.rendered(),this.rootNode=diff$1(this.rootNode,c,this.constructor.isLightDom?this:this.shadowRoot,this,a),this._willUpdate=!1,this.updated()},e.prototype.forceUpdate=function(){this.update(!0)},e.prototype.updateProps=function(s){var a=this;Object.keys(s).forEach(function(c){a.props[c]=s[c],a.prevProps&&(a.prevProps[c]=s[c])}),this.forceUpdate()},e.prototype.updateSelf=function(s){this.update(s,!0)},e.prototype.removeAttribute=function(s){t.prototype.removeAttribute.call(this,s),this.isInstalled&&this.update()},e.prototype.setAttribute=function(s,a){a&&typeof a=="object"?t.prototype.setAttribute.call(this,s,JSON.stringify(a)):t.prototype.setAttribute.call(this,s,a),this.isInstalled&&this.update()},e.prototype.pureRemoveAttribute=function(s){t.prototype.removeAttribute.call(this,s)},e.prototype.pureSetAttribute=function(s,a){t.prototype.setAttribute.call(this,s,a)},e.prototype.attrsToProps=function(s){if(!(s||this.store&&this.store.ignoreAttrs||this.props.ignoreAttrs)){var a=this;a.props.css=a.getAttribute("css");var c=this.constructor.propTypes;!c||Object.keys(c).forEach(function(l){var f=c[l],d=a.getAttribute(hyphenate$1(l));if(d!==null)switch(f){case String:a.props[l]=d;break;case Number:a.props[l]=Number(d);break;case Boolean:d==="false"||d==="0"?a.props[l]=!1:a.props[l]=!0;break;case Array:case Object:d[0]===":"?a.props[l]=getValByPath$1(d.substr(1),Omi.$):a.props[l]=JSON.parse(d.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g,'"$2":$4').replace(/'([\s\S]*?)'/g,'"$1"').replace(/,(\s*})/g,"$1"));break}else a.constructor.defaultProps&&a.constructor.defaultProps.hasOwnProperty(l)?a.props[l]=a.constructor.defaultProps[l]:a.props[l]=null})}},e.prototype.fire=function(s,a){var c=this.props["on"+capitalize$1(s)];c?c(new CustomEvent(s,{detail:a})):this.dispatchEvent(new CustomEvent(s,{detail:a}))},e.prototype.beforeInstall=function(){},e.prototype.install=function(){},e.prototype.afterInstall=function(){},e.prototype.installed=function(){},e.prototype.uninstall=function(){},e.prototype.beforeUpdate=function(){},e.prototype.updated=function(){},e.prototype.beforeRender=function(){},e.prototype.rendered=function(){},e.prototype.receiveProps=function(){},e}(HTMLElement);WeElement$1.is="WeElement";function render$1(t,e,r){return e=typeof e=="string"?document.querySelector(e):e,r&&(e.store=r),diff$1(null,t,e,!1)}function _classCallCheck$1$1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn$1$1(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function _inherits$1$1(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var storeHelpers$1=["use","useSelf"];function define$1(t,e,r){if(!customElements.get(t)&&!options$1.mapping[t])if(e.is==="WeElement")customElements.define(t,e),options$1.mapping[t]=e;else{typeof r=="string"?r={css:r}:r=r||{};var s=function(l){_inherits$1$1(f,l);function f(){var d,m,_;_classCallCheck$1$1(this,f);for(var b=arguments.length,x=Array(b),g=0;g<b;g++)x[g]=arguments[g];return _=(d=(m=_possibleConstructorReturn$1$1(this,l.call.apply(l,[this].concat(x))),m),m.compute=r.compute,d),_possibleConstructorReturn$1$1(m,_)}return f.prototype.render=function(){return e.call(this,this)},f}(WeElement$1);s.css=r.css,s.propTypes=r.propTypes,s.defaultProps=r.defaultProps,s.isLightDom=r.isLightDom;var a=function(f){typeof r[f]=="function"&&(s.prototype[f]=function(){return r[f].apply(this,arguments)})};for(var c in r)a(c);storeHelpers$1.forEach(function(l){r[l]&&r[l]!=="function"&&(s.prototype[l]=function(){return r[l]})}),customElements.define(t,s),options$1.mapping[t]=s}}function tag$1(t){return function(e){define$1(t,e)}}function cloneElement$1(t,e){return h$1(t.nodeName,extend$2(extend$2({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function getHost$1(t){for(var e=t.parentNode;e;){if(e.host)return e.host;if(e.shadowRoot&&e.shadowRoot.host)return e.shadowRoot.host;e=e.parentNode}}function rpx$1(t){return t.replace(/([1-9]\d*|0)(\.\d*)*rpx/g,function(e,r){return window.innerWidth*Number(r)/750+"px"})}var hasOwn$1={}.hasOwnProperty;function classNames$1(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(!!r){var s=typeof r;if(s==="string"||s==="number")t.push(r);else if(Array.isArray(r)&&r.length){var a=classNames$1.apply(null,r);a&&t.push(a)}else if(s==="object")for(var c in r)hasOwn$1.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}function extractClass$1(){var t=Array.prototype.slice.call(arguments,0),e=t[0],r=t.slice(1);if(e.class?(r.unshift(e.class),delete e.class):e.className&&(r.unshift(e.className),delete e.className),r.length>0)return{class:classNames$1.apply(null,r)}}function o$2(t){return JSON.stringify(t)}(function(){if(typeof document=="undefined"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,s=typeof DOMException=="object"?Error:DOMException,a=Object.defineProperty,c=Array.prototype.forEach,l=/@import.+?;?$/gm;function f(u){var p=u.replace(l,"");return p!==u&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),p.trim()}function d(u){return"isConnected"in u?u.isConnected:document.contains(u)}function m(u){return u.filter(function(p,y){return u.indexOf(p)===y})}function _(u,p){return u.filter(function(y){return p.indexOf(y)===-1})}function b(u){u.parentNode.removeChild(u)}function x(u){return u.shadowRoot||r.get(u)}var g=["addRule","deleteRule","insertRule","removeRule"],T=CSSStyleSheet,P=T.prototype;P.replace=function(){return Promise.reject(new s("Can't call replace on non-constructed CSSStyleSheets."))},P.replaceSync=function(){throw new s("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function A(u){return typeof u=="object"?R.isPrototypeOf(u)||P.isPrototypeOf(u):!1}function S(u){return typeof u=="object"?P.isPrototypeOf(u):!1}var v=new WeakMap,E=new WeakMap,j=new WeakMap,O=new WeakMap;function Y(u,p){var y=document.createElement("style");return j.get(u).set(p,y),E.get(u).push(p),y}function L(u,p){return j.get(u).get(p)}function Q(u,p){j.get(u).delete(p),E.set(u,E.get(u).filter(function(y){return y!==p}))}function H(u,p){requestAnimationFrame(function(){p.textContent=v.get(u).textContent,O.get(u).forEach(function(y){return p.sheet[y.method].apply(p.sheet,y.args)})})}function I(u){if(!v.has(u))throw new TypeError("Illegal invocation")}function z(){var u=this,p=document.createElement("style");e.body.appendChild(p),v.set(u,p),E.set(u,[]),j.set(u,new WeakMap),O.set(u,[])}var R=z.prototype;R.replace=function(p){try{return this.replaceSync(p),Promise.resolve(this)}catch(y){return Promise.reject(y)}},R.replaceSync=function(p){if(I(this),typeof p=="string"){var y=this;v.get(y).textContent=f(p),O.set(y,[]),E.get(y).forEach(function(C){C.isConnected()&&H(y,L(y,C))})}},a(R,"cssRules",{configurable:!0,enumerable:!0,get:function(){return I(this),v.get(this).sheet.cssRules}}),a(R,"media",{configurable:!0,enumerable:!0,get:function(){return I(this),v.get(this).sheet.media}}),g.forEach(function(u){R[u]=function(){var p=this;I(p);var y=arguments;O.get(p).push({method:u,args:y}),E.get(p).forEach(function(N){if(N.isConnected()){var w=L(p,N).sheet;w[u].apply(w,y)}});var C=v.get(p).sheet;return C[u].apply(C,y)}}),a(z,Symbol.hasInstance,{configurable:!0,value:A});var V={childList:!0,subtree:!0},G=new WeakMap;function M(u){var p=G.get(u);return p||(p=new J(u),G.set(u,p)),p}function X(u){a(u.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return M(this).sheets},set:function(p){M(this).update(p)}})}function q(u,p){for(var y=document.createNodeIterator(u,NodeFilter.SHOW_ELEMENT,function(N){return x(N)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),C=void 0;C=y.nextNode();)p(x(C))}var W=new WeakMap,k=new WeakMap,B=new WeakMap;function ee(u,p){return p instanceof HTMLStyleElement&&k.get(u).some(function(y){return L(y,u)})}function K(u){var p=W.get(u);return p instanceof Document?p.body:p}function F(u){var p=document.createDocumentFragment(),y=k.get(u),C=B.get(u),N=K(u);C.disconnect(),y.forEach(function(w){p.appendChild(L(w,u)||Y(w,u))}),N.insertBefore(p,null),C.observe(N,V),y.forEach(function(w){H(w,L(w,u))})}function J(u){var p=this;p.sheets=[],W.set(p,u),k.set(p,[]),B.set(p,new MutationObserver(function(y,C){if(!document){C.disconnect();return}y.forEach(function(N){t||c.call(N.addedNodes,function(w){w instanceof Element&&q(w,function(D){M(D).connect()})}),c.call(N.removedNodes,function(w){w instanceof Element&&(ee(p,w)&&F(p),t||q(w,function(D){M(D).disconnect()}))})})}))}if(J.prototype={isConnected:function(){var u=W.get(this);return u instanceof Document?u.readyState!=="loading":d(u.host)},connect:function(){var u=K(this);B.get(this).observe(u,V),k.get(this).length>0&&F(this),q(u,function(p){M(p).connect()})},disconnect:function(){B.get(this).disconnect()},update:function(u){var p=this,y=W.get(p)===document?"Document":"ShadowRoot";if(!Array.isArray(u))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+y+": Iterator getter is not callable.");if(!u.every(A))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+y+": Failed to convert value to 'CSSStyleSheet'");if(u.some(S))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+y+": Can't adopt non-constructed stylesheets");p.sheets=u;var C=k.get(p),N=m(u),w=_(C,N);w.forEach(function(D){b(L(D,p)),Q(D,p)}),k.set(p,N),p.isConnected()&&N.length>0&&F(p)}},window.CSSStyleSheet=z,X(Document),"ShadowRoot"in window){X(ShadowRoot);var Z=Element.prototype,te=Z.attachShadow;Z.attachShadow=function(p){var y=te.call(this,p);return p.mode==="closed"&&r.set(this,y),y}}var U=M(document);U.isConnected()?U.connect():document.addEventListener("DOMContentLoaded",U.connect.bind(U))})();h$1.f=Fragment$1;function createRef$1(){return{}}var $$1={},Component$1=WeElement$1,defineElement$1=define$1,elements$1=options$1.mapping,omi$1={tag:tag$1,WeElement:WeElement$1,Component:Component$1,render:render$1,h:h$1,createElement:h$1,options:options$1,define:define$1,cloneElement:cloneElement$1,getHost:getHost$1,rpx:rpx$1,defineElement:defineElement$1,classNames:classNames$1,extractClass:extractClass$1,createRef:createRef$1,o:o$2,elements:elements$1,$:$$1,extend:extend$1$1,get:get$1,set:set$1,bind:bind$1,unbind:unbind$1};options$1.root.Omi=omi$1;options$1.root.omi=omi$1;options$1.root.Omi.version="6.23.0";(function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0})}function e(r){if(r.ep)return;r.ep=!0;const s=function(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}(r);fetch(r.href,s)}})();var o$1=Object.defineProperty,i=Object.getOwnPropertyDescriptor;let n=class extends WeElement$1{constructor(){super(...arguments),this._opened=!1}installed(){this.style.transitionProperty=this._dimensionMaxCss,this.updateSize(this.props.opened?"auto":"0px",!1),this.toggleClass("o-collapse-closed",!0),this.toggleClass("o-collapse-opened",!1),this.addEventListener("transitionend",()=>{this._transitionEnd()}),this._opened=this.props.opened}receiveProps(){this._opened!==this.props.opened&&(this.updateSize(this.props.opened?"auto":"0px",!0),this._opened=this.props.opened)}updateSize(t,e){this._transitionStart(),t=t==="auto"?"":t,this._updateTransition(!1);const r=this._calcSize();t===""&&(this.style[this._dimensionMax]="",t=this._calcSize()),this.style[this._dimensionMax]=r,this.scrollTop=this.scrollTop,this._updateTransition(e),this.style[this._dimensionMax]=t,this.props.noAnimation&&this._transitionEnd()}get dimension(){return this.props.horizontal?"width":"height"}get _dimensionMax(){return this.props.horizontal?"maxWidth":"maxHeight"}get _dimensionMaxCss(){return this.props.horizontal?"max-width":"max-height"}toggle(){this.props.opened=!this.props.opened,this.receiveProps()}show(){this.props.opened=!0,this.receiveProps()}hide(){this.props.opened=!1,this.receiveProps()}_updateTransition(t){this.style.transitionDuration=t&&!this.props.noAnimation?".3s":"0s"}_transitionStart(){this.setAttribute("aria-hidden",!this.props.opened),this.toggleClass("o-collapse-closed",!1),this.toggleClass("o-collapse-opened",!1)}_transitionEnd(){this.style[this._dimensionMax]=this._desiredSize,this.toggleClass("o-collapse-closed",!this.props.opened),this.toggleClass("o-collapse-opened",this.props.opened),this._updateTransition(!1)}toggleClass(t,e){e?this.classList.add(t):this.classList.remove(t)}_calcSize(){return this.getBoundingClientRect()[this.dimension]+"px"}render(){return h$1("slot",null)}};n.css=`:host {
  display: block;
  overflow: visible;
}

:host(.o-collapse-closed) {
  display: none;
}

:host(:not(.o-collapse-opened)) {
  overflow: hidden;
}`,n.defaultProps={opened:!1,horizontal:!1,noAnimation:!1},n.propTypes={opened:Boolean,horizontal:Boolean,noAnimation:Boolean},n=((t,e,r,s)=>{for(var a,c=s>1?void 0:s?i(e,r):e,l=t.length-1;l>=0;l--)(a=t[l])&&(c=(s?a(e,r,c):a(c))||c);return s&&c&&o$1(e,r,c),c})([tag$1("o-collapse")],n);var keyboardArrowDown={exports:{}};(function(module,exports){(function(e,r){module.exports=r(require$$0)})(commonjsGlobal$1,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(t){var e={};function r(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(s,a,c){r.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:c})},r.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.t=function(s,a){if(a&1&&(s=r(s)),a&8||a&4&&typeof s=="object"&&s&&s.__esModule)return s;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:s}),a&2&&typeof s!="string")for(var l in s)r.d(c,l,function(f){return s[f]}.bind(null,l));return c},r.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return r.d(a,"a",a),a},r.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},r.p="",r(r.s="./esm/keyboard-arrow-down.js")}({"./esm/keyboard-arrow-down.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
}), 'KeyboardArrowDown');


//# sourceURL=webpack://%5Bname%5D/./esm/keyboard-arrow-down.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
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


//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?`)},omi:function(module,exports){eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(keyboardArrowDown);var keyboardArrowUp={exports:{}};(function(module,exports){(function(e,r){module.exports=r(require$$0)})(commonjsGlobal$1,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(t){var e={};function r(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(s,a,c){r.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:c})},r.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.t=function(s,a){if(a&1&&(s=r(s)),a&8||a&4&&typeof s=="object"&&s&&s.__esModule)return s;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:s}),a&2&&typeof s!="string")for(var l in s)r.d(c,l,function(f){return s[f]}.bind(null,l));return c},r.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return r.d(a,"a",a),a},r.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},r.p="",r(r.s="./esm/keyboard-arrow-up.js")}({"./esm/keyboard-arrow-up.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), 'KeyboardArrowUp');


//# sourceURL=webpack://%5Bname%5D/./esm/keyboard-arrow-up.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
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


//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?`)},omi:function(module,exports){eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(keyboardArrowUp);var code={exports:{}};(function(module,exports){(function(e,r){module.exports=r(require$$0)})(commonjsGlobal$1,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(t){var e={};function r(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(s,a,c){r.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:c})},r.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.t=function(s,a){if(a&1&&(s=r(s)),a&8||a&4&&typeof s=="object"&&s&&s.__esModule)return s;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:s}),a&2&&typeof s!="string")for(var l in s)r.d(c,l,function(f){return s[f]}.bind(null,l));return c},r.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return r.d(a,"a",a),a},r.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},r.p="",r(r.s="./esm/code.js")}({"./esm/code.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
}), 'Code');


//# sourceURL=webpack://%5Bname%5D/./esm/code.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
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


//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?`)},omi:function(module,exports){eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(code);var fileCopy={exports:{}};(function(module,exports){(function(e,r){module.exports=r(require$$0)})(commonjsGlobal$1,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(t){var e={};function r(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(s,a,c){r.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:c})},r.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.t=function(s,a){if(a&1&&(s=r(s)),a&8||a&4&&typeof s=="object"&&s&&s.__esModule)return s;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:s}),a&2&&typeof s!="string")for(var l in s)r.d(c,l,function(f){return s[f]}.bind(null,l));return c},r.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return r.d(a,"a",a),a},r.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},r.p="",r(r.s="./esm/file-copy.js")}({"./esm/file-copy.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
}), 'FileCopy');


//# sourceURL=webpack://%5Bname%5D/./esm/file-copy.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
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


//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?`)},omi:function(module,exports){eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(fileCopy);/*! *****************************************************************************
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
***************************************************************************** */var extendStatics$1=function(t,e){return extendStatics$1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,s){r.__proto__=s}||function(r,s){for(var a in s)s.hasOwnProperty(a)&&(r[a]=s[a])},extendStatics$1(t,e)};function __extends$1(t,e){extendStatics$1(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var __assign$1=function(){return __assign$1=Object.assign||function(e){for(var r,s=1,a=arguments.length;s<a;s++){r=arguments[s];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c])}return e},__assign$1.apply(this,arguments)};function __decorate$1(t,e,r,s){var a=arguments.length,c=a<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,r):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(t,e,r,s);else for(var f=t.length-1;f>=0;f--)(l=t[f])&&(c=(a<3?l(c):a>3?l(e,r,c):l(e,r))||c);return a>3&&c&&Object.defineProperty(e,r,c),c}var css$1=`.o-message__closeBtn:focus,
.o-message__content:focus {
  outline-width: 0; }

.o-message {
  min-width: 380px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #EBEEF5;
  position: fixed;
  left: 50%;
  top: 20px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #edf2fc;
  -webkit-transition: opacity .3s, top .4s, -webkit-transform .4s;
  transition: opacity .3s, top .4s, -webkit-transform .4s;
  transition: opacity .3s, transform .4s, top .4s;
  transition: opacity .3s, transform .4s, top .4s, -webkit-transform .4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; }

.o-message.is-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center; }

.o-message.is-closable .o-message__content {
  padding-right: 16px; }

.o-message p {
  margin: 0; }

.o-message--info .o-message__content {
  color: #909399; }

.o-message--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8; }

.o-message--success .o-message__content {
  color: #07c160;
  color: var(--o-primary, #07c160); }

.o-message--warning {
  background-color: #fdf6ec;
  border-color: #faecd8; }

.o-message--warning .o-message__content {
  color: #E6A23C; }

.o-message--error {
  background-color: #fef0f0;
  border-color: #fde2e2; }

.o-message--error .o-message__content {
  color: #F56C6C; }

.o-message__icon {
  margin-right: 10px; }

.o-message__content {
  padding: 0;
  font-size: 14px;
  line-height: 1; }

.o-message__closeBtn {
  position: absolute;
  top: 50%;
  right: 15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
  color: #C0C4CC;
  font-size: 16px; }

.o-message__closeBtn:hover {
  color: #909399; }

.o-message .o-icon-success {
  color: #07c160;
  color: var(--o-primary, #07c160); }

.o-message .o-icon-error {
  color: #F56C6C; }

.o-message .o-icon-info {
  color: #909399; }

.o-message .o-icon-warning {
  color: #E6A23C; }

.fade-enter,
.fade-leave-active,
.fade-leave-to {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%); }
`;/*! *****************************************************************************
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
***************************************************************************** */var extendStatics$1$1=function(t,e){return extendStatics$1$1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,s){r.__proto__=s}||function(r,s){for(var a in s)s.hasOwnProperty(a)&&(r[a]=s[a])},extendStatics$1$1(t,e)};function __extends$1$1(t,e){extendStatics$1$1(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}function __decorate$1$1(t,e,r,s){var a=arguments.length,c=a<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,r):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(t,e,r,s);else for(var f=t.length-1;f>=0;f--)(l=t[f])&&(c=(a<3?l(c):a>3?l(e,r,c):l(e,r))||c);return a>3&&c&&Object.defineProperty(e,r,c),c}var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function createCommonjsModule(t,e){return e={exports:{}},t(e,e.exports),e.exports}var _dready_0_0_1_dready=createCommonjsModule(function(t,e){(function(r,s){t.exports=s()})(commonjsGlobal,function(){const r=[];document.addEventListener("DOMContentLoaded",()=>{s.done=!0,r.forEach(a=>{a()})});function s(a){if(s.done){a();return}r.push(a)}return s.done=!1,s})}),_domReady=Object.freeze({__proto__:null,default:_dready_0_0_1_dready,__moduleExports:_dready_0_0_1_dready}),domReady=_dready_0_0_1_dready||_domReady;(function(t){__extends$1$1(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.installed=function(){var r=this;this.props.appear&&domReady(function(){r.transitionTarget=r.children[0],r.enter(),r.props.leavingTime&&setTimeout(function(){r.leave()},r.props.leavingTime)})},e.prototype.enter=function(){this.fire("before-enter"),this.transitionTarget.classList.remove(this.props.name+"-leave-active"),this.transitionTarget.classList.remove(this.props.name+"-leave-to"),this.transitionTarget.classList.add(this.props.name+"-enter"),this.transitionTarget.classList.add(this.props.name+"-enter-active"),this.callback=function(){this.transitionTarget.classList.remove(this.props.name+"-enter-active"),this.fire("after-enter")}.bind(this),this.once("transitionend",this.callback),this.once("animationend",this.callback),window.setTimeout(function(){this.transitionTarget.classList.remove(this.props.name+"-enter"),this.transitionTarget.classList.add(this.props.name+"-enter-to"),this.fire("enter")}.bind(this),0)},e.prototype.leave=function(){this.fire("before-leave"),this.transitionTarget.classList.remove(this.props.name+"-enter-active"),this.transitionTarget.classList.remove(this.props.name+"-enter-to"),this.transitionTarget.classList.add(this.props.name+"-leave"),this.transitionTarget.classList.add(this.props.name+"-leave-active"),this.callback=function(r){this.transitionTarget.classList.remove(this.props.name+"-leave-active"),this.fire("after-leave"),this.props.autoRemove&&this.parentNode&&this.parentNode.removeChild(this)}.bind(this),this.once("transitionend",this.callback),this.once("animationend",this.callback),window.setTimeout(function(){this.transitionTarget.classList.remove(this.props.name+"-leave"),this.transitionTarget.classList.add(this.props.name+"-leave-to"),this.fire("leave")}.bind(this),0)},e.prototype.once=function(r,s){var a=function(){this.removeEventListener(r,a),s()}.bind(this);this.addEventListener(r,a)},e.prototype.render=function(){},e.propTypes={name:String,leavingTime:Number,autoRemove:Boolean,appear:Boolean},e.isLightDom=!0,e.defaultProps={name:"o"},e=__decorate$1$1([tag$2("o-transition")],e),e})(WeElement$2);(function(t){__extends$1(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.onAfterLeave=function(){r.parentElement.removeChild(r)},r}return e.prototype.render=function(r){var s;return h$2("o-transition",{appear:!0,"onafter-leave":this.onAfterLeave,"leaving-time":r.duration,"auto-remove":!0,name:"fade"},h$2("div",__assign$1({},extractClass$2(r,"o-message",(s={},s["o-message--"+r.type]=r.type,s["is-closable"]=r.closable,s["is-center"]=r.center,s)),{style:"top: 20px; z-index: 2000;"}),h$2("p",{class:"o-message__content"},r.message),r.showClose&&h$2("i",{class:"o-message__closeBtn o-icon-close"})))},e.css=css$1,e.defaultProps={duration:3e3},e.propTypes={showClose:Boolean,type:String,message:String,center:Boolean,duration:Number},e=__decorate$1([tag$2("o-message")],e),e})(WeElement$2);function getGlobal(){return typeof global!="object"||!global||global.Math!==Math||global.Array!==Array?self||window||global||function(){return this}():global}var options={store:null,root:getGlobal(),mapping:{}};/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */(function(){if(!(window.Reflect===void 0||window.customElements===void 0||window.customElements.hasOwnProperty("polyfillWrapFlushCallback"))){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}})();function cssToDom(t){var e=document.createElement("style");return e.textContent=t,e}function camelCase(t){return t.replace(/-(\w)/g,function(e,r){return r.toUpperCase()})}function Fragment(t){return t.children}function extend(t,e){for(var r in e)t[r]=e[r];return t}function applyRef(t,e){t!=null&&(typeof t=="function"?t(e):t.current=e)}typeof Promise=="function"&&Promise.resolve().then.bind(Promise.resolve());function isArray(t){return Object.prototype.toString.call(t)==="[object Array]"}function pathToArr(t){return typeof t!="string"||!t?[]:t.replace(/]/g,"").replace(/\[/g,".").split(".")}var hyphenateRE=/\B([A-Z])/g;function hyphenate(t){return t.replace(hyphenateRE,"-$1").toLowerCase()}function capitalize(t){return t.replace(/\-(\w)/g,function(e,r){return r.toUpperCase()}).replace(/^\S/,function(e){return e.toUpperCase()})}function getValByPath(t,e){var r=pathToArr(t);return r.forEach(function(s){e=e[s]}),e}var stack=[];function h(t,e){var r=[],s,a,c,l;for(l=arguments.length;l-- >2;)stack.push(arguments[l]);for(e&&e.children!=null&&(stack.length||stack.push(e.children),delete e.children);stack.length;)if((a=stack.pop())&&a.pop!==void 0)for(l=a.length;l--;)stack.push(a[l]);else typeof a=="boolean"&&(a=null),(c=typeof t!="function")&&(a==null?a="":typeof a=="number"?a=String(a):typeof a!="string"&&(c=!1)),c&&s?r[r.length-1]+=a:r.length===0?r=[a]:r.push(a),s=c;if(t===Fragment)return r;var f={nodeName:t,children:r,attributes:e==null?void 0:e,key:e==null?void 0:e.key};return options.vnode!==void 0&&options.vnode(f),f}var IS_NON_DIMENSIONAL=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function isSameNodeType(t,e,r){return typeof e=="string"||typeof e=="number"?t.splitText!==void 0:typeof e.nodeName=="string"?!t._componentConstructor&&isNamedNode(t,e.nodeName):typeof e.nodeName=="function"?options.mapping[t.nodeName.toLowerCase()]===e.nodeName:r||t._componentConstructor===e.nodeName}function isNamedNode(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}var extension={};function extend$1(t,e){extension["o-"+t]=e}function set(t,e,r){for(var s=pathToArr(e),a=t,c=0,l=s.length;c<l;c++)c===l-1?a[s[c]]=r:a=a[s[c]]}function get(t,e){for(var r=pathToArr(e),s=t,a=0,c=r.length;a<c;a++)s=s[r[a]];return s}function eventProxy(t){return this._listeners[t.type](t)}function bind(t,e,r){t._listeners=t._listeners||{},t._listeners[e]=r,t.addEventListener(e,eventProxy)}function unbind(t,e){t.removeEventListener(e,eventProxy)}function createNode(t,e){var r=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return r.normalizedNodeName=t,r}function removeNode(t){var e=t.parentNode;e&&e.removeChild(t)}function setAccessor(t,e,r,s,a,c){if(e==="className"&&(e="class"),e[0]=="o"&&e[1]=="-")extension[e]&&extension[e](t,s,c);else if(e!=="key")if(e==="ref")applyRef(r,null),applyRef(s,t);else if(e==="class"&&!a)t.className=s||"";else if(e==="style"){if((!s||typeof s=="string"||typeof r=="string")&&(t.style.cssText=s||""),s&&typeof s=="object"){if(typeof r!="string")for(var l in r)l in s||(t.style[l]="");for(var l in s)t.style[l]=typeof s[l]=="number"&&IS_NON_DIMENSIONAL.test(l)===!1?s[l]+"px":s[l]}}else if(e==="dangerouslySetInnerHTML")s&&(t.innerHTML=s.__html||"");else if(e[0]=="o"&&e[1]=="n")bindEvent(t,e,s,r);else if(t.nodeName==="INPUT"&&e==="value")t[e]=s==null?"":s;else if(e!=="list"&&e!=="type"&&e!=="css"&&!a&&e in t&&s!==""){try{t[e]=s==null?"":s}catch{}(s==null||s===!1)&&e!="spellcheck"&&(t.pureRemoveAttribute?t.pureRemoveAttribute(e):t.removeAttribute(e))}else{var f=a&&e!==(e=e.replace(/^xlink:?/,""));s==null||s===!1?f?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.pureRemoveAttribute?t.pureRemoveAttribute(e):t.removeAttribute(e):typeof s!="function"&&(f?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),s):t.pureSetAttribute?t.pureSetAttribute(e,s):t.setAttribute(e,s))}}function eventProxy$1(t){return this._listeners[t.type](options.event&&options.event(t)||t)}function bindEvent(t,e,r,s){var a=e!==(e=e.replace(/Capture$/,"")),c=e.toLowerCase();e=(c in t?c:e).slice(2),r?s||t.addEventListener(e,eventProxy$1,a):t.removeEventListener(e,eventProxy$1,a),(t._listeners||(t._listeners={}))[e]=r}var diffLevel=0,isSvgMode=!1,hydrating=!1;function diff(t,e,r,s,a){if(!(!t&&!e)){var c;return diffLevel++||(isSvgMode=r!=null&&r.ownerSVGElement!==void 0,hydrating=t!=null&&!("prevProps"in t)),e&&e.nodeName===Fragment&&(e=e.children),isArray(e)?r?innerDiffNode(r,e,hydrating,s,a):(c=[],e.forEach(function(l,f){var d=idiff(f===0?t:null,l,s,a);c.push(d)})):(isArray(t)?t.forEach(function(l,f){f===0?c=idiff(l,e,s,a):recollectNodeTree(l,!1)}):c=idiff(t,e,s,a),r&&c.parentNode!==r&&r.appendChild(c)),--diffLevel||(hydrating=!1),c}}function idiff(t,e,r,s){t&&e&&t.props&&(t.props.children=e.children);var a=t,c=isSvgMode;if((e==null||typeof e=="boolean")&&(e=""),typeof e=="string"||typeof e=="number")return t&&t.splitText!==void 0&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(a=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(a,t),recollectNodeTree(t,!0))),a.prevProps=!0,a;var l=e.nodeName;if(typeof l=="function"){for(var f in options.mapping)if(options.mapping[f]===l){l=f,e.nodeName=f;break}}if(isSvgMode=l==="svg"?!0:l==="foreignObject"?!1:isSvgMode,l=String(l),(!t||!isNamedNode(t,l))&&(a=createNode(l,isSvgMode),t)){for(;t.firstChild;)a.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(a,t),recollectNodeTree(t,!0)}var d=a.firstChild,m=a.prevProps,_=e.children;if(m==null){m=a.prevProps={};for(var b=a.attributes,x=b.length;x--;)m[b[x].name]=b[x].value}return!hydrating&&_&&_.length===1&&typeof _[0]=="string"&&d!=null&&d.splitText!==void 0&&d.nextSibling==null?d.nodeValue!=_[0]&&(d.nodeValue=_[0]):(_&&_.length||d!=null)&&(a.constructor.is=="WeElement"&&a.constructor.noSlot||innerDiffNode(a,_,hydrating||m.dangerouslySetInnerHTML!=null,r,s)),diffAttributes(a,e.attributes,m,r,s),a.props&&(a.props.children=e.children),isSvgMode=c,a}function innerDiffNode(t,e,r,s,a){var c=t.childNodes,l=[],f={},d=0,m=0,_=c.length,b=0,x=e?e.length:0,g,T,P,A,S;if(_!==0)for(var v=0;v<_;v++){var E=c[v],j=E.prevProps,O=x&&j?E._component?E._component.__key:j.key:null;O!=null?(d++,f[O]=E):(j||(E.splitText!==void 0?r?E.nodeValue.trim():!0:r))&&(l[b++]=E)}if(x!==0)for(var v=0;v<x;v++){if(A=e[v],S=null,A){var O=A.key;if(O!=null)d&&f[O]!==void 0&&(S=f[O],f[O]=void 0,d--);else if(!S&&m<b){for(g=m;g<b;g++)if(l[g]!==void 0&&isSameNodeType(T=l[g],A,r)){S=T,l[g]=void 0,g===b-1&&b--,g===m&&m++;break}}}S=idiff(S,A,s,a),P=c[v],S&&S!==t&&S!==P&&(P==null?t.appendChild(S):S===P.nextSibling?removeNode(P):t.insertBefore(S,P))}if(d)for(var v in f)f[v]!==void 0&&recollectNodeTree(f[v],!1);for(;m<=b;)(S=l[b--])!==void 0&&recollectNodeTree(S,!1)}function recollectNodeTree(t,e){t.prevProps!=null&&t.prevProps.ref&&(typeof t.prevProps.ref=="function"?t.prevProps.ref(null):t.prevProps.ref.current&&(t.prevProps.ref.current=null)),(e===!1||t.prevProps==null)&&removeNode(t),removeChildren(t)}function removeChildren(t){for(t=t.lastChild;t;){var e=t.previousSibling;recollectNodeTree(t,!0),t=e}}function diffAttributes(t,e,r,s,a){var c,l=t.update,f;t.receiveProps&&(f=Object.assign({},r));for(c in r)!(e&&e[c]!=null)&&r[c]!=null&&(setAccessor(t,c,r[c],r[c]=void 0,isSvgMode,s),l&&delete t.props[c]);for(c in e)if(l&&typeof e[c]=="object"&&c!=="ref"){c==="style"&&setAccessor(t,c,r[c],r[c]=e[c],isSvgMode,s);var d=camelCase(c);t.props[d]=r[d]=e[c]}else if(c!=="children"&&(!(c in r)||e[c]!==(c==="value"||c==="checked"?t[c]:r[c])))if(setAccessor(t,c,r[c],e[c],isSvgMode,s),t.nodeName.indexOf("-")!==-1){t.props=t.props||{};var m=camelCase(c);t.props[m]=r[m]=e[c]}else r[c]=e[c];l&&!a&&t.parentNode&&t.receiveProps(t.props,f)!==!1&&t.update()}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function _inherits(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var id=0,WeElement=function(t){_inherits(e,t);function e(){_classCallCheck(this,e);var r=_possibleConstructorReturn(this,t.call(this));return r.props=Object.assign({},r.constructor.defaultProps,r.props),r.elementId=id++,r.computed={},r.isInstalled=!1,r}return e.prototype.connectedCallback=function(){for(var s=this,a=this.parentNode;a&&!this.store;)this.store=a.store,a=a.parentNode||a.host;if(this.inject){this.injection={},a=this.parentNode;for(var c;a&&!c;)c=a.provide,a=a.parentNode||a.host;if(c)this.inject.forEach(function(g){s.injection[g]=c[g]});else throw"The provide prop was not found on the parent node or the provide type is incorrect."}this.attrsToProps(),this.beforeInstall(),this.install(),this.afterInstall();var l;if(this.constructor.isLightDom)l=this;else if(!this.shadowRoot)l=this.attachShadow({mode:"open"});else{l=this.shadowRoot;for(var f;f=l.firstChild;)l.removeChild(f)}if(this.constructor.elementStyles)l.adoptedStyleSheets=this.constructor.elementStyles;else{var d=this.constructor.css;if(d){if(typeof d=="string"){var m=new CSSStyleSheet;m.replaceSync(d),l.adoptedStyleSheets=[m]}else if(Object.prototype.toString.call(d)==="[object Array]"){var _=[];d.forEach(function(g){if(typeof g=="string"){var T=new CSSStyleSheet;T.replaceSync(g),_.push(T)}else _.push(g);l.adoptedStyleSheets=_})}else if(d.default&&typeof d.default=="string"){var b=new CSSStyleSheet;b.replaceSync(d.default),l.adoptedStyleSheets=[b]}else l.adoptedStyleSheets=[d];this.constructor.elementStyles=l.adoptedStyleSheets}}this.beforeRender(),options.afterInstall&&options.afterInstall(this);var x=this.render(this.props,this.store);this.rootNode=diff(null,x,null,this),this.rendered(),this.css&&l.appendChild(cssToDom(typeof this.css=="function"?this.css():this.css)),this.props.css&&(this._customStyleElement=cssToDom(this.props.css),this._customStyleContent=this.props.css,l.appendChild(this._customStyleElement)),isArray(this.rootNode)?this.rootNode.forEach(function(g){l.appendChild(g)}):this.rootNode&&l.appendChild(this.rootNode),this.installed(),this.isInstalled=!0},e.prototype.disconnectedCallback=function(){this.uninstall(),this.isInstalled=!1},e.prototype.update=function(s,a){this._willUpdate=!0,this.beforeUpdate(),this.beforeRender(),this._customStyleContent!=this.props.css&&(this._customStyleContent=this.props.css,this._customStyleElement.textContent=this._customStyleContent),this.attrsToProps(s);var c=this.render(this.props,this.store);this.rendered(),this.rootNode=diff(this.rootNode,c,this.constructor.isLightDom?this:this.shadowRoot,this,a),this._willUpdate=!1,this.updated()},e.prototype.forceUpdate=function(){this.update(!0)},e.prototype.updateProps=function(s){var a=this;Object.keys(s).forEach(function(c){a.props[c]=s[c],a.prevProps&&(a.prevProps[c]=s[c])}),this.forceUpdate()},e.prototype.updateSelf=function(s){this.update(s,!0)},e.prototype.removeAttribute=function(s){t.prototype.removeAttribute.call(this,s),this.isInstalled&&this.update()},e.prototype.setAttribute=function(s,a){a&&typeof a=="object"?t.prototype.setAttribute.call(this,s,JSON.stringify(a)):t.prototype.setAttribute.call(this,s,a),this.isInstalled&&this.update()},e.prototype.pureRemoveAttribute=function(s){t.prototype.removeAttribute.call(this,s)},e.prototype.pureSetAttribute=function(s,a){t.prototype.setAttribute.call(this,s,a)},e.prototype.attrsToProps=function(s){if(!(s||this.store&&this.store.ignoreAttrs||this.props.ignoreAttrs)){var a=this;a.props.css=a.getAttribute("css");var c=this.constructor.propTypes;!c||Object.keys(c).forEach(function(l){var f=c[l],d=a.getAttribute(hyphenate(l));if(d!==null)switch(f){case String:a.props[l]=d;break;case Number:a.props[l]=Number(d);break;case Boolean:d==="false"||d==="0"?a.props[l]=!1:a.props[l]=!0;break;case Array:case Object:d[0]===":"?a.props[l]=getValByPath(d.substr(1),Omi.$):a.props[l]=JSON.parse(d.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g,'"$2":$4').replace(/'([\s\S]*?)'/g,'"$1"').replace(/,(\s*})/g,"$1"));break}else a.constructor.defaultProps&&a.constructor.defaultProps.hasOwnProperty(l)?a.props[l]=a.constructor.defaultProps[l]:a.props[l]=null})}},e.prototype.fire=function(s,a){var c=this.props["on"+capitalize(s)];c?c(new CustomEvent(s,{detail:a})):this.dispatchEvent(new CustomEvent(s,{detail:a}))},e.prototype.beforeInstall=function(){},e.prototype.install=function(){},e.prototype.afterInstall=function(){},e.prototype.installed=function(){},e.prototype.uninstall=function(){},e.prototype.beforeUpdate=function(){},e.prototype.updated=function(){},e.prototype.beforeRender=function(){},e.prototype.rendered=function(){},e.prototype.receiveProps=function(){},e}(HTMLElement);WeElement.is="WeElement";function render(t,e,r){return e=typeof e=="string"?document.querySelector(e):e,r&&(e.store=r),diff(null,t,e,!1)}function _classCallCheck$1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn$1(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function _inherits$1(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var storeHelpers=["use","useSelf"];function define(t,e,r){if(!customElements.get(t)&&!options.mapping[t])if(e.is==="WeElement")customElements.define(t,e),options.mapping[t]=e;else{typeof r=="string"?r={css:r}:r=r||{};var s=function(l){_inherits$1(f,l);function f(){var d,m,_;_classCallCheck$1(this,f);for(var b=arguments.length,x=Array(b),g=0;g<b;g++)x[g]=arguments[g];return _=(d=(m=_possibleConstructorReturn$1(this,l.call.apply(l,[this].concat(x))),m),m.compute=r.compute,d),_possibleConstructorReturn$1(m,_)}return f.prototype.render=function(){return e.call(this,this)},f}(WeElement);s.css=r.css,s.propTypes=r.propTypes,s.defaultProps=r.defaultProps,s.isLightDom=r.isLightDom;var a=function(f){typeof r[f]=="function"&&(s.prototype[f]=function(){return r[f].apply(this,arguments)})};for(var c in r)a(c);storeHelpers.forEach(function(l){r[l]&&r[l]!=="function"&&(s.prototype[l]=function(){return r[l]})}),customElements.define(t,s),options.mapping[t]=s}}function tag(t){return function(e){define(t,e)}}function cloneElement(t,e){return h(t.nodeName,extend(extend({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function getHost(t){for(var e=t.parentNode;e;){if(e.host)return e.host;if(e.shadowRoot&&e.shadowRoot.host)return e.shadowRoot.host;e=e.parentNode}}function rpx(t){return t.replace(/([1-9]\d*|0)(\.\d*)*rpx/g,function(e,r){return window.innerWidth*Number(r)/750+"px"})}var hasOwn={}.hasOwnProperty;function classNames(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(!!r){var s=typeof r;if(s==="string"||s==="number")t.push(r);else if(Array.isArray(r)&&r.length){var a=classNames.apply(null,r);a&&t.push(a)}else if(s==="object")for(var c in r)hasOwn.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}function extractClass(){var t=Array.prototype.slice.call(arguments,0),e=t[0],r=t.slice(1);if(e.class?(r.unshift(e.class),delete e.class):e.className&&(r.unshift(e.className),delete e.className),r.length>0)return{class:classNames.apply(null,r)}}function o(t){return JSON.stringify(t)}(function(){if(typeof document=="undefined"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,s=typeof DOMException=="object"?Error:DOMException,a=Object.defineProperty,c=Array.prototype.forEach,l=/@import.+?;?$/gm;function f(u){var p=u.replace(l,"");return p!==u&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),p.trim()}function d(u){return"isConnected"in u?u.isConnected:document.contains(u)}function m(u){return u.filter(function(p,y){return u.indexOf(p)===y})}function _(u,p){return u.filter(function(y){return p.indexOf(y)===-1})}function b(u){u.parentNode.removeChild(u)}function x(u){return u.shadowRoot||r.get(u)}var g=["addRule","deleteRule","insertRule","removeRule"],T=CSSStyleSheet,P=T.prototype;P.replace=function(){return Promise.reject(new s("Can't call replace on non-constructed CSSStyleSheets."))},P.replaceSync=function(){throw new s("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function A(u){return typeof u=="object"?R.isPrototypeOf(u)||P.isPrototypeOf(u):!1}function S(u){return typeof u=="object"?P.isPrototypeOf(u):!1}var v=new WeakMap,E=new WeakMap,j=new WeakMap,O=new WeakMap;function Y(u,p){var y=document.createElement("style");return j.get(u).set(p,y),E.get(u).push(p),y}function L(u,p){return j.get(u).get(p)}function Q(u,p){j.get(u).delete(p),E.set(u,E.get(u).filter(function(y){return y!==p}))}function H(u,p){requestAnimationFrame(function(){p.textContent=v.get(u).textContent,O.get(u).forEach(function(y){return p.sheet[y.method].apply(p.sheet,y.args)})})}function I(u){if(!v.has(u))throw new TypeError("Illegal invocation")}function z(){var u=this,p=document.createElement("style");e.body.appendChild(p),v.set(u,p),E.set(u,[]),j.set(u,new WeakMap),O.set(u,[])}var R=z.prototype;R.replace=function(p){try{return this.replaceSync(p),Promise.resolve(this)}catch(y){return Promise.reject(y)}},R.replaceSync=function(p){if(I(this),typeof p=="string"){var y=this;v.get(y).textContent=f(p),O.set(y,[]),E.get(y).forEach(function(C){C.isConnected()&&H(y,L(y,C))})}},a(R,"cssRules",{configurable:!0,enumerable:!0,get:function(){return I(this),v.get(this).sheet.cssRules}}),a(R,"media",{configurable:!0,enumerable:!0,get:function(){return I(this),v.get(this).sheet.media}}),g.forEach(function(u){R[u]=function(){var p=this;I(p);var y=arguments;O.get(p).push({method:u,args:y}),E.get(p).forEach(function(N){if(N.isConnected()){var w=L(p,N).sheet;w[u].apply(w,y)}});var C=v.get(p).sheet;return C[u].apply(C,y)}}),a(z,Symbol.hasInstance,{configurable:!0,value:A});var V={childList:!0,subtree:!0},G=new WeakMap;function M(u){var p=G.get(u);return p||(p=new J(u),G.set(u,p)),p}function X(u){a(u.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return M(this).sheets},set:function(p){M(this).update(p)}})}function q(u,p){for(var y=document.createNodeIterator(u,NodeFilter.SHOW_ELEMENT,function(N){return x(N)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),C=void 0;C=y.nextNode();)p(x(C))}var W=new WeakMap,k=new WeakMap,B=new WeakMap;function ee(u,p){return p instanceof HTMLStyleElement&&k.get(u).some(function(y){return L(y,u)})}function K(u){var p=W.get(u);return p instanceof Document?p.body:p}function F(u){var p=document.createDocumentFragment(),y=k.get(u),C=B.get(u),N=K(u);C.disconnect(),y.forEach(function(w){p.appendChild(L(w,u)||Y(w,u))}),N.insertBefore(p,null),C.observe(N,V),y.forEach(function(w){H(w,L(w,u))})}function J(u){var p=this;p.sheets=[],W.set(p,u),k.set(p,[]),B.set(p,new MutationObserver(function(y,C){if(!document){C.disconnect();return}y.forEach(function(N){t||c.call(N.addedNodes,function(w){w instanceof Element&&q(w,function(D){M(D).connect()})}),c.call(N.removedNodes,function(w){w instanceof Element&&(ee(p,w)&&F(p),t||q(w,function(D){M(D).disconnect()}))})})}))}if(J.prototype={isConnected:function(){var u=W.get(this);return u instanceof Document?u.readyState!=="loading":d(u.host)},connect:function(){var u=K(this);B.get(this).observe(u,V),k.get(this).length>0&&F(this),q(u,function(p){M(p).connect()})},disconnect:function(){B.get(this).disconnect()},update:function(u){var p=this,y=W.get(p)===document?"Document":"ShadowRoot";if(!Array.isArray(u))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+y+": Iterator getter is not callable.");if(!u.every(A))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+y+": Failed to convert value to 'CSSStyleSheet'");if(u.some(S))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+y+": Can't adopt non-constructed stylesheets");p.sheets=u;var C=k.get(p),N=m(u),w=_(C,N);w.forEach(function(D){b(L(D,p)),Q(D,p)}),k.set(p,N),p.isConnected()&&N.length>0&&F(p)}},window.CSSStyleSheet=z,X(Document),"ShadowRoot"in window){X(ShadowRoot);var Z=Element.prototype,te=Z.attachShadow;Z.attachShadow=function(p){var y=te.call(this,p);return p.mode==="closed"&&r.set(this,y),y}}var U=M(document);U.isConnected()?U.connect():document.addEventListener("DOMContentLoaded",U.connect.bind(U))})();h.f=Fragment;function createRef(){return{}}var $={},Component=WeElement,defineElement=define,elements=options.mapping,omi={tag,WeElement,Component,render,h,createElement:h,options,define,cloneElement,getHost,rpx,defineElement,classNames,extractClass,createRef,o,elements,$,extend:extend$1,get,set,bind,unbind};options.root.Omi=omi;options.root.omi=omi;options.root.Omi.version="6.23.0";/*! *****************************************************************************
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
***************************************************************************** */var extendStatics=function(t,e){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,s){r.__proto__=s}||function(r,s){for(var a in s)s.hasOwnProperty(a)&&(r[a]=s[a])},extendStatics(t,e)};function __extends(t,e){extendStatics(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var __assign=function(){return __assign=Object.assign||function(e){for(var r,s=1,a=arguments.length;s<a;s++){r=arguments[s];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c])}return e},__assign.apply(this,arguments)};function __decorate(t,e,r,s){var a=arguments.length,c=a<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,r):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(t,e,r,s);else for(var f=t.length-1;f>=0;f--)(l=t[f])&&(c=(a<3?l(c):a>3?l(e,r,c):l(e,r))||c);return a>3&&c&&Object.defineProperty(e,r,c),c}var css=`:host {
  display: inline-block; }

button {
  appearance: none;
  -webkit-appearance: none;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0;
  padding: 0;
  background-color: transparent; }

.is-disabled {
  cursor: not-allowed; }

.o-toggle-icon {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased; }
`;(function(t){__extends(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.clickHandler=function(){r.updateProps({isOn:!r.props.isOn}),r.fire("change",{isOn:r.props.isOn})},r}return e.prototype.render=function(r){var s=r.icons.map(function(a){return"o-icon-"+a});return this.tagA=s[0],this.tagB=s[1],h("button",__assign({style:"color:"+r.color+";",onClick:this.clickHandler},extractClass(r,"o-toggle-icon",{"is-disabled":r.disabled}),{disabled:r.disabled}),s.length>0&&(r.isOn?h(this.tagB,null):h(this.tagA,null)),r.imgs&&(r.isOn?h("img",{src:r.imgs[1]}):h("img",{src:r.imgs[0]})))},e.css=css,e.defaultProps={isOn:!1,icons:[]},e.propTypes={isOn:Boolean,icons:Object,imgs:Object,color:String,disabled:Boolean},e=__decorate([tag("o-toggle-icon")],e),e})(WeElement);var toggleSelection=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,r=[],s=0;s<t.rangeCount;s++)r.push(t.getRangeAt(s));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||r.forEach(function(a){t.addRange(a)}),e&&e.focus()}},deselectCurrent=toggleSelection,clipboardToIE11Formatting={"text/plain":"Text","text/html":"Url",default:"Text"},defaultMessage="Copy to clipboard: #{key}, Enter";function format(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function copy(t,e){var r,s,a,c,l,f,d=!1;e||(e={}),r=e.debug||!1;try{a=deselectCurrent(),c=document.createRange(),l=document.getSelection(),f=document.createElement("span"),f.textContent=t,f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",function(_){if(_.stopPropagation(),e.format)if(_.preventDefault(),typeof _.clipboardData=="undefined"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var b=clipboardToIE11Formatting[e.format]||clipboardToIE11Formatting.default;window.clipboardData.setData(b,t)}else _.clipboardData.clearData(),_.clipboardData.setData(e.format,t);e.onCopy&&(_.preventDefault(),e.onCopy(_.clipboardData))}),document.body.appendChild(f),c.selectNodeContents(f),l.addRange(c);var m=document.execCommand("copy");if(!m)throw new Error("copy command was unsuccessful");d=!0}catch(_){r&&console.error("unable to copy using execCommand: ",_),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(b){r&&console.error("unable to copy using clipboardData: ",b),r&&console.error("falling back to prompt"),s=format("message"in e?e.message:defaultMessage),window.prompt(s,t)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(c):l.removeAllRanges()),f&&document.body.removeChild(f),a()}return d}var copyToClipboard=copy,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(t,e,r,s)=>{for(var a=s>1?void 0:s?__getOwnPropDesc(e,r):e,c=t.length-1,l;c>=0;c--)(l=t[c])&&(a=(s?l(e,r,a):l(a))||a);return s&&a&&__defProp(e,r,a),a};const tagName="code-demo";let code_demo_default=class extends WeElement$2{constructor(){super(...arguments),this.openedA=!1,this.isOn=!1}message(t){const e=document.createElement("o-message");e.setAttribute("type","success"),e.setAttribute("center","center"),e.setAttribute("message",t),document.body.appendChild(e)}copy(t){copyToClipboard(t),this.message("Copied!")}render(t){return h$2("div",{class:tw`w-full border-1 mb-4 border-gray-300 rounded overflow-hidden ${t.class}`,style:Object.assign({breakInside:"avoid"},t.style)},h$2("div",null,h$2("slot",{name:"demo"})),h$2("div",{class:tw`border-t-1 border-gray-200 border-solid px-2 text-sm mb-3`},h$2("h3",{class:tw`font-bold bg-white relative -top-2.5 inline-block px-2`},t.title),h$2("p",null,t.describe),h$2("o-collapse",{opened:this.openedA,class:tw`m-3 mb-0`},h$2("div",null,h$2("admin-docs",{css:`
              .docs {
                padding: 0 !important;
              }
            `,mdContent:t.code}))),h$2("span",{class:tw`float-right mt-3 mb-2`},t.url?h$2("a",{href:t.url},h$2("o-icon-code",{class:tw`w-6 h-6 mr-2`})):null,t.code?h$2(h$2.f,null,h$2("o-icon-file-copy",{class:tw`w-3 h-3 mr-2 relative -top-1 cursor-pointer`,onClick:()=>{this.copy(t.code.replace("```jsx","").replace("```","").trim())}}),h$2("o-toggle-icon",{"is-on":this.isOn,icons:["keyboard-arrow-down","keyboard-arrow-up"],class:tw`w-6 h-6 mr-2`,onChange:()=>{this.openedA=!this.openedA,this.isOn=!this.isOn,this.update()}})):null)))}};code_demo_default.css=[sheet.target];code_demo_default=__decorateClass([tag$2(tagName)],code_demo_default);
