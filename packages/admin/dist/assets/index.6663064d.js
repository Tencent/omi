import"./index.6588c3b6.js";import"./index.esm.c1a854df.js";function je(){return typeof global!="object"||!global||global.Math!==Math||global.Array!==Array?self||window||global||function(){return this}():global}var v={store:null,root:je(),mapping:{}};/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */(function(){if(!(window.Reflect===void 0||window.customElements===void 0||window.customElements.hasOwnProperty("polyfillWrapFlushCallback"))){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}})();function he(t){var e=document.createElement("style");return e.textContent=t,e}function de(t){return t.replace(/-(\w)/g,function(e,n){return n.toUpperCase()})}function re(t){return t.children}function ye(t,e){for(var n in e)t[n]=e[n];return t}function ge(t,e){t!=null&&(typeof t=="function"?t(e):t.current=e)}typeof Promise=="function"&&Promise.resolve().then.bind(Promise.resolve());function Y(t){return Object.prototype.toString.call(t)==="[object Array]"}function ie(t){return typeof t!="string"||!t?[]:t.replace(/]/g,"").replace(/\[/g,".").split(".")}var _e=/\B([A-Z])/g;function Ie(t){return t.replace(_e,"-$1").toLowerCase()}function $e(t){return t.replace(/\-(\w)/g,function(e,n){return n.toUpperCase()}).replace(/^\S/,function(e){return e.toUpperCase()})}function Me(t,e){var n=ie(t);return n.forEach(function(r){e=e[r]}),e}var $=[];function x(t,e){var n=[],r,i,o,s;for(s=arguments.length;s-- >2;)$.push(arguments[s]);for(e&&e.children!=null&&($.length||$.push(e.children),delete e.children);$.length;)if((i=$.pop())&&i.pop!==void 0)for(s=i.length;s--;)$.push(i[s]);else typeof i=="boolean"&&(i=null),(o=typeof t!="function")&&(i==null?i="":typeof i=="number"?i=String(i):typeof i!="string"&&(o=!1)),o&&r?n[n.length-1]+=i:n.length===0?n=[i]:n.push(i),r=o;if(t===re)return n;var f={nodeName:t,children:n,attributes:e==null?void 0:e,key:e==null?void 0:e.key};return v.vnode!==void 0&&v.vnode(f),f}var Fe=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function We(t,e,n){return typeof e=="string"||typeof e=="number"?t.splitText!==void 0:typeof e.nodeName=="string"?!t._componentConstructor&&Ce(t,e.nodeName):typeof e.nodeName=="function"?v.mapping[t.nodeName.toLowerCase()]===e.nodeName:n||t._componentConstructor===e.nodeName}function Ce(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}var ee={};function De(t,e){ee["o-"+t]=e}function Be(t,e,n){for(var r=ie(e),i=t,o=0,s=r.length;o<s;o++)o===s-1?i[r[o]]=n:i=i[r[o]]}function He(t,e){for(var n=ie(e),r=t,i=0,o=n.length;i<o;i++)r=r[n[i]];return r}function Ee(t){return this._listeners[t.type](t)}function ze(t,e,n){t._listeners=t._listeners||{},t._listeners[e]=n,t.addEventListener(e,Ee)}function Ue(t,e){t.removeEventListener(e,Ee)}function qe(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.normalizedNodeName=t,n}function Ne(t){var e=t.parentNode;e&&e.removeChild(t)}function X(t,e,n,r,i,o){if(e==="className"&&(e="class"),e[0]=="o"&&e[1]=="-")ee[e]&&ee[e](t,r,o);else if(e!=="key")if(e==="ref")ge(n,null),ge(r,t);else if(e==="class"&&!i)t.className=r||"";else if(e==="style"){if((!r||typeof r=="string"||typeof n=="string")&&(t.style.cssText=r||""),r&&typeof r=="object"){if(typeof n!="string")for(var s in n)s in r||(t.style[s]="");for(var s in r)t.style[s]=typeof r[s]=="number"&&Fe.test(s)===!1?r[s]+"px":r[s]}}else if(e==="dangerouslySetInnerHTML")r&&(t.innerHTML=r.__html||"");else if(e[0]=="o"&&e[1]=="n")Ve(t,e,r,n);else if(t.nodeName==="INPUT"&&e==="value")t[e]=r==null?"":r;else if(e!=="list"&&e!=="type"&&e!=="css"&&!i&&e in t&&r!==""){try{t[e]=r==null?"":r}catch{}(r==null||r===!1)&&e!="spellcheck"&&(t.pureRemoveAttribute?t.pureRemoveAttribute(e):t.removeAttribute(e))}else{var f=i&&e!==(e=e.replace(/^xlink:?/,""));r==null||r===!1?f?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.pureRemoveAttribute?t.pureRemoveAttribute(e):t.removeAttribute(e):typeof r!="function"&&(f?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.pureSetAttribute?t.pureSetAttribute(e,r):t.setAttribute(e,r))}}function be(t){return this._listeners[t.type](v.event&&v.event(t)||t)}function Ve(t,e,n,r){var i=e!==(e=e.replace(/Capture$/,"")),o=e.toLowerCase();e=(o in t?o:e).slice(2),n?r||t.addEventListener(e,be,i):t.removeEventListener(e,be,i),(t._listeners||(t._listeners={}))[e]=n}var ve=0,k=!1,D=!1;function te(t,e,n,r,i){if(!(!t&&!e)){var o;return ve++||(k=n!=null&&n.ownerSVGElement!==void 0,D=t!=null&&!("prevProps"in t)),e&&e.nodeName===re&&(e=e.children),Y(e)?n?Pe(n,e,D,r,i):(o=[],e.forEach(function(s,f){var c=J(f===0?t:null,s,r,i);o.push(c)})):(Y(t)?t.forEach(function(s,f){f===0?o=J(s,e,r,i):M(s,!1)}):o=J(t,e,r,i),n&&o.parentNode!==n&&n.appendChild(o)),--ve||(D=!1),o}}function J(t,e,n,r){t&&e&&t.props&&(t.props.children=e.children);var i=t,o=k;if((e==null||typeof e=="boolean")&&(e=""),typeof e=="string"||typeof e=="number")return t&&t.splitText!==void 0&&t.parentNode&&(!t._component||n)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),M(t,!0))),i.prevProps=!0,i;var s=e.nodeName;if(typeof s=="function"){for(var f in v.mapping)if(v.mapping[f]===s){s=f,e.nodeName=f;break}}if(k=s==="svg"?!0:s==="foreignObject"?!1:k,s=String(s),(!t||!Ce(t,s))&&(i=qe(s,k),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),M(t,!0)}var c=i.firstChild,u=i.prevProps,d=e.children;if(u==null){u=i.prevProps={};for(var y=i.attributes,S=y.length;S--;)u[y[S].name]=y[S].value}return!D&&d&&d.length===1&&typeof d[0]=="string"&&c!=null&&c.splitText!==void 0&&c.nextSibling==null?c.nodeValue!=d[0]&&(c.nodeValue=d[0]):(d&&d.length||c!=null)&&(i.constructor.is=="WeElement"&&i.constructor.noSlot||Pe(i,d,D||u.dangerouslySetInnerHTML!=null,n,r)),Ke(i,e.attributes,u,n,r),i.props&&(i.props.children=e.children),k=o,i}function Pe(t,e,n,r,i){var o=t.childNodes,s=[],f={},c=0,u=0,d=o.length,y=0,S=e?e.length:0,h,L,P,O,m;if(d!==0)for(var g=0;g<d;g++){var C=o[g],A=C.prevProps,N=S&&A?C._component?C._component.__key:A.key:null;N!=null?(c++,f[N]=C):(A||(C.splitText!==void 0?n?C.nodeValue.trim():!0:n))&&(s[y++]=C)}if(S!==0)for(var g=0;g<S;g++){if(O=e[g],m=null,O){var N=O.key;if(N!=null)c&&f[N]!==void 0&&(m=f[N],f[N]=void 0,c--);else if(!m&&u<y){for(h=u;h<y;h++)if(s[h]!==void 0&&We(L=s[h],O,n)){m=L,s[h]=void 0,h===y-1&&y--,h===u&&u++;break}}}m=J(m,O,r,i),P=o[g],m&&m!==t&&m!==P&&(P==null?t.appendChild(m):m===P.nextSibling?Ne(P):t.insertBefore(m,P))}if(c)for(var g in f)f[g]!==void 0&&M(f[g],!1);for(;u<=y;)(m=s[y--])!==void 0&&M(m,!1)}function M(t,e){t.prevProps!=null&&t.prevProps.ref&&(typeof t.prevProps.ref=="function"?t.prevProps.ref(null):t.prevProps.ref.current&&(t.prevProps.ref.current=null)),(e===!1||t.prevProps==null)&&Ne(t),Je(t)}function Je(t){for(t=t.lastChild;t;){var e=t.previousSibling;M(t,!0),t=e}}function Ke(t,e,n,r,i){var o,s=t.update,f;t.receiveProps&&(f=Object.assign({},n));for(o in n)!(e&&e[o]!=null)&&n[o]!=null&&(X(t,o,n[o],n[o]=void 0,k,r),s&&delete t.props[o]);for(o in e)if(s&&typeof e[o]=="object"&&o!=="ref"){o==="style"&&X(t,o,n[o],n[o]=e[o],k,r);var c=de(o);t.props[c]=n[c]=e[o]}else if(o!=="children"&&(!(o in n)||e[o]!==(o==="value"||o==="checked"?t[o]:n[o])))if(X(t,o,n[o],e[o],k,r),t.nodeName.indexOf("-")!==-1){t.props=t.props||{};var u=de(o);t.props[u]=n[u]=e[o]}else n[o]=e[o];s&&!i&&t.parentNode&&t.receiveProps(t.props,f)!==!1&&t.update()}function Ge(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ze(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Xe(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Qe=0,H=function(t){Xe(e,t);function e(){Ge(this,e);var n=Ze(this,t.call(this));return n.props=Object.assign({},n.constructor.defaultProps,n.props),n.elementId=Qe++,n.computed={},n.isInstalled=!1,n}return e.prototype.connectedCallback=function(){for(var r=this,i=this.parentNode;i&&!this.store;)this.store=i.store,i=i.parentNode||i.host;if(this.inject){this.injection={},i=this.parentNode;for(var o;i&&!o;)o=i.provide,i=i.parentNode||i.host;if(o)this.inject.forEach(function(h){r.injection[h]=o[h]});else throw"The provide prop was not found on the parent node or the provide type is incorrect."}this.attrsToProps(),this.beforeInstall(),this.install(),this.afterInstall();var s;if(this.constructor.isLightDom)s=this;else if(!this.shadowRoot)s=this.attachShadow({mode:"open"});else{s=this.shadowRoot;for(var f;f=s.firstChild;)s.removeChild(f)}if(this.constructor.elementStyles)s.adoptedStyleSheets=this.constructor.elementStyles;else{var c=this.constructor.css;if(c){if(typeof c=="string"){var u=new CSSStyleSheet;u.replaceSync(c),s.adoptedStyleSheets=[u]}else if(Object.prototype.toString.call(c)==="[object Array]"){var d=[];c.forEach(function(h){if(typeof h=="string"){var L=new CSSStyleSheet;L.replaceSync(h),d.push(L)}else d.push(h);s.adoptedStyleSheets=d})}else if(c.default&&typeof c.default=="string"){var y=new CSSStyleSheet;y.replaceSync(c.default),s.adoptedStyleSheets=[y]}else s.adoptedStyleSheets=[c];this.constructor.elementStyles=s.adoptedStyleSheets}}this.beforeRender(),v.afterInstall&&v.afterInstall(this);var S=this.render(this.props,this.store);this.rootNode=te(null,S,null,this),this.rendered(),this.css&&s.appendChild(he(typeof this.css=="function"?this.css():this.css)),this.props.css&&(this._customStyleElement=he(this.props.css),this._customStyleContent=this.props.css,s.appendChild(this._customStyleElement)),Y(this.rootNode)?this.rootNode.forEach(function(h){s.appendChild(h)}):this.rootNode&&s.appendChild(this.rootNode),this.installed(),this.isInstalled=!0},e.prototype.disconnectedCallback=function(){this.uninstall(),this.isInstalled=!1},e.prototype.update=function(r,i){this._willUpdate=!0,this.beforeUpdate(),this.beforeRender(),this._customStyleContent!=this.props.css&&(this._customStyleContent=this.props.css,this._customStyleElement.textContent=this._customStyleContent),this.attrsToProps(r);var o=this.render(this.props,this.store);this.rendered(),this.rootNode=te(this.rootNode,o,this.constructor.isLightDom?this:this.shadowRoot,this,i),this._willUpdate=!1,this.updated()},e.prototype.forceUpdate=function(){this.update(!0)},e.prototype.updateProps=function(r){var i=this;Object.keys(r).forEach(function(o){i.props[o]=r[o],i.prevProps&&(i.prevProps[o]=r[o])}),this.forceUpdate()},e.prototype.updateSelf=function(r){this.update(r,!0)},e.prototype.removeAttribute=function(r){t.prototype.removeAttribute.call(this,r),this.isInstalled&&this.update()},e.prototype.setAttribute=function(r,i){i&&typeof i=="object"?t.prototype.setAttribute.call(this,r,JSON.stringify(i)):t.prototype.setAttribute.call(this,r,i),this.isInstalled&&this.update()},e.prototype.pureRemoveAttribute=function(r){t.prototype.removeAttribute.call(this,r)},e.prototype.pureSetAttribute=function(r,i){t.prototype.setAttribute.call(this,r,i)},e.prototype.attrsToProps=function(r){if(!(r||this.store&&this.store.ignoreAttrs||this.props.ignoreAttrs)){var i=this;i.props.css=i.getAttribute("css");var o=this.constructor.propTypes;!o||Object.keys(o).forEach(function(s){var f=o[s],c=i.getAttribute(Ie(s));if(c!==null)switch(f){case String:i.props[s]=c;break;case Number:i.props[s]=Number(c);break;case Boolean:c==="false"||c==="0"?i.props[s]=!1:i.props[s]=!0;break;case Array:case Object:c[0]===":"?i.props[s]=Me(c.substr(1),Omi.$):i.props[s]=JSON.parse(c.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g,'"$2":$4').replace(/'([\s\S]*?)'/g,'"$1"').replace(/,(\s*})/g,"$1"));break}else i.constructor.defaultProps&&i.constructor.defaultProps.hasOwnProperty(s)?i.props[s]=i.constructor.defaultProps[s]:i.props[s]=null})}},e.prototype.fire=function(r,i){var o=this.props["on"+$e(r)];o?o(new CustomEvent(r,{detail:i})):this.dispatchEvent(new CustomEvent(r,{detail:i}))},e.prototype.beforeInstall=function(){},e.prototype.install=function(){},e.prototype.afterInstall=function(){},e.prototype.installed=function(){},e.prototype.uninstall=function(){},e.prototype.beforeUpdate=function(){},e.prototype.updated=function(){},e.prototype.beforeRender=function(){},e.prototype.rendered=function(){},e.prototype.receiveProps=function(){},e}(HTMLElement);H.is="WeElement";function Ye(t,e,n){return e=typeof e=="string"?document.querySelector(e):e,n&&(e.store=n),te(null,t,e,!1)}function et(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function me(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function tt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var nt=["use","useSelf"];function oe(t,e,n){if(!customElements.get(t)&&!v.mapping[t])if(e.is==="WeElement")customElements.define(t,e),v.mapping[t]=e;else{typeof n=="string"?n={css:n}:n=n||{};var r=function(s){tt(f,s);function f(){var c,u,d;et(this,f);for(var y=arguments.length,S=Array(y),h=0;h<y;h++)S[h]=arguments[h];return d=(c=(u=me(this,s.call.apply(s,[this].concat(S))),u),u.compute=n.compute,c),me(u,d)}return f.prototype.render=function(){return e.call(this,this)},f}(H);r.css=n.css,r.propTypes=n.propTypes,r.defaultProps=n.defaultProps,r.isLightDom=n.isLightDom;var i=function(f){typeof n[f]=="function"&&(r.prototype[f]=function(){return n[f].apply(this,arguments)})};for(var o in n)i(o);nt.forEach(function(s){n[s]&&n[s]!=="function"&&(r.prototype[s]=function(){return n[s]})}),customElements.define(t,r),v.mapping[t]=r}}function ke(t){return function(e){oe(t,e)}}function rt(t,e){return x(t.nodeName,ye(ye({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function it(t){for(var e=t.parentNode;e;){if(e.host)return e.host;if(e.shadowRoot&&e.shadowRoot.host)return e.shadowRoot.host;e=e.parentNode}}function ot(t){return t.replace(/([1-9]\d*|0)(\.\d*)*rpx/g,function(e,n){return window.innerWidth*Number(n)/750+"px"})}var st={}.hasOwnProperty;function B(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(!!n){var r=typeof n;if(r==="string"||r==="number")t.push(n);else if(Array.isArray(n)&&n.length){var i=B.apply(null,n);i&&t.push(i)}else if(r==="object")for(var o in n)st.call(n,o)&&n[o]&&t.push(o)}}return t.join(" ")}function ne(){var t=Array.prototype.slice.call(arguments,0),e=t[0],n=t.slice(1);if(e.class?(n.unshift(e.class),delete e.class):e.className&&(n.unshift(e.className),delete e.className),n.length>0)return{class:B.apply(null,n)}}function at(t){return JSON.stringify(t)}(function(){if(typeof document=="undefined"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),n=new WeakMap,r=typeof DOMException=="object"?Error:DOMException,i=Object.defineProperty,o=Array.prototype.forEach,s=/@import.+?;?$/gm;function f(a){var l=a.replace(s,"");return l!==a&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),l.trim()}function c(a){return"isConnected"in a?a.isConnected:document.contains(a)}function u(a){return a.filter(function(l,p){return a.indexOf(l)===p})}function d(a,l){return a.filter(function(p){return l.indexOf(p)===-1})}function y(a){a.parentNode.removeChild(a)}function S(a){return a.shadowRoot||n.get(a)}var h=["addRule","deleteRule","insertRule","removeRule"],L=CSSStyleSheet,P=L.prototype;P.replace=function(){return Promise.reject(new r("Can't call replace on non-constructed CSSStyleSheets."))},P.replaceSync=function(){throw new r("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function O(a){return typeof a=="object"?T.isPrototypeOf(a)||P.isPrototypeOf(a):!1}function m(a){return typeof a=="object"?P.isPrototypeOf(a):!1}var g=new WeakMap,C=new WeakMap,A=new WeakMap,N=new WeakMap;function Ae(a,l){var p=document.createElement("style");return A.get(a).set(l,p),C.get(a).push(l),p}function R(a,l){return A.get(a).get(l)}function Le(a,l){A.get(a).delete(l),C.set(a,C.get(a).filter(function(p){return p!==l}))}function se(a,l){requestAnimationFrame(function(){l.textContent=g.get(a).textContent,N.get(a).forEach(function(p){return l.sheet[p.method].apply(l.sheet,p.args)})})}function z(a){if(!g.has(a))throw new TypeError("Illegal invocation")}function K(){var a=this,l=document.createElement("style");e.body.appendChild(l),g.set(a,l),C.set(a,[]),A.set(a,new WeakMap),N.set(a,[])}var T=K.prototype;T.replace=function(l){try{return this.replaceSync(l),Promise.resolve(this)}catch(p){return Promise.reject(p)}},T.replaceSync=function(l){if(z(this),typeof l=="string"){var p=this;g.get(p).textContent=f(l),N.set(p,[]),C.get(p).forEach(function(w){w.isConnected()&&se(p,R(p,w))})}},i(T,"cssRules",{configurable:!0,enumerable:!0,get:function(){return z(this),g.get(this).sheet.cssRules}}),i(T,"media",{configurable:!0,enumerable:!0,get:function(){return z(this),g.get(this).sheet.media}}),h.forEach(function(a){T[a]=function(){var l=this;z(l);var p=arguments;N.get(l).push({method:a,args:p}),C.get(l).forEach(function(E){if(E.isConnected()){var b=R(l,E).sheet;b[a].apply(b,p)}});var w=g.get(l).sheet;return w[a].apply(w,p)}}),i(K,Symbol.hasInstance,{configurable:!0,value:O});var ae={childList:!0,subtree:!0},le=new WeakMap;function j(a){var l=le.get(a);return l||(l=new pe(a),le.set(a,l)),l}function ce(a){i(a.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return j(this).sheets},set:function(l){j(this).update(l)}})}function G(a,l){for(var p=document.createNodeIterator(a,NodeFilter.SHOW_ELEMENT,function(E){return S(E)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),w=void 0;w=p.nextNode();)l(S(w))}var U=new WeakMap,_=new WeakMap,q=new WeakMap;function Re(a,l){return l instanceof HTMLStyleElement&&_.get(a).some(function(p){return R(p,a)})}function fe(a){var l=U.get(a);return l instanceof Document?l.body:l}function Z(a){var l=document.createDocumentFragment(),p=_.get(a),w=q.get(a),E=fe(a);w.disconnect(),p.forEach(function(b){l.appendChild(R(b,a)||Ae(b,a))}),E.insertBefore(l,null),w.observe(E,ae),p.forEach(function(b){se(b,R(b,a))})}function pe(a){var l=this;l.sheets=[],U.set(l,a),_.set(l,[]),q.set(l,new MutationObserver(function(p,w){if(!document){w.disconnect();return}p.forEach(function(E){t||o.call(E.addedNodes,function(b){b instanceof Element&&G(b,function(I){j(I).connect()})}),o.call(E.removedNodes,function(b){b instanceof Element&&(Re(l,b)&&Z(l),t||G(b,function(I){j(I).disconnect()}))})})}))}if(pe.prototype={isConnected:function(){var a=U.get(this);return a instanceof Document?a.readyState!=="loading":c(a.host)},connect:function(){var a=fe(this);q.get(this).observe(a,ae),_.get(this).length>0&&Z(this),G(a,function(l){j(l).connect()})},disconnect:function(){q.get(this).disconnect()},update:function(a){var l=this,p=U.get(l)===document?"Document":"ShadowRoot";if(!Array.isArray(a))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+p+": Iterator getter is not callable.");if(!a.every(O))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+p+": Failed to convert value to 'CSSStyleSheet'");if(a.some(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+p+": Can't adopt non-constructed stylesheets");l.sheets=a;var w=_.get(l),E=u(a),b=d(w,E);b.forEach(function(I){y(R(I,l)),Le(I,l)}),_.set(l,E),l.isConnected()&&E.length>0&&Z(l)}},window.CSSStyleSheet=K,ce(Document),"ShadowRoot"in window){ce(ShadowRoot);var ue=Element.prototype,Te=ue.attachShadow;ue.attachShadow=function(l){var p=Te.call(this,l);return l.mode==="closed"&&n.set(this,p),p}}var V=j(document);V.isConnected()?V.connect():document.addEventListener("DOMContentLoaded",V.connect.bind(V))})();x.f=re;function lt(){return{}}var ct={},ft=H,pt=oe,ut=v.mapping,Oe={tag:ke,WeElement:H,Component:ft,render:Ye,h:x,createElement:x,options:v,define:oe,cloneElement:rt,getHost:it,rpx:ot,defineElement:pt,classNames:B,extractClass:ne,createRef:lt,o:at,elements:ut,$:ct,extend:De,get:He,set:Be,bind:ze,unbind:Ue};v.root.Omi=Oe;v.root.omi=Oe;v.root.Omi.version="6.23.0";var ht=Object.defineProperty,dt=Object.defineProperties,yt=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable,we=(t,e,n)=>e in t?ht(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,F=(t,e)=>{for(var n in e||(e={}))gt.call(e,n)&&we(t,n,e[n]);if(Se)for(var n of Se(e))bt.call(e,n)&&we(t,n,e[n]);return t},Q=(t,e)=>dt(t,yt(e));function xe(t,e,n){const r=function(){this.removeEventListener(e,r),n()}.bind(t);t.addEventListener(e,r)}var vt=Object.defineProperty,mt=Object.getOwnPropertyDescriptor;let W=class extends H{constructor(){super(...arguments),this.deleteRow=t=>{this.props.dataSource.splice(this.props.dataSource.indexOf(t),1),this.update()},this._changeHandlerTh=(t,e)=>{this.fire("change-all",{item:e,checked:t.detail}),this.props.dataSource.forEach(n=>{n.checked=t.detail}),this.update()},this._changeHandlerTd=(t,e)=>{this.fire("change",{item:e,checked:t.detail}),e.checked=t.detail,this.update()},this.onChange=(t,e,n)=>{const r=e[n.key];e[n.key]=t.detail,this.update(),this.fire("data-changed",{value:e[n.key],oldValue:r,item:e,column:n})},this.onTdClick=(t,e,n)=>{n.stopPropagation(),this.props.dataSource.forEach(r=>{r.editingKey=null}),t.editingKey=e.key,this.update(),this.editingInput&&this.editingInput.focus()}}async deleteRowById(t){const{dataSource:e}=this.props;await async function(n,r,i){return new Promise(o=>{n.classList.remove(r+"-enter-active"),n.classList.remove(r+"-enter-to"),n.classList.add(r+"-leave"),n.classList.add(r+"-leave-active");const s=function(f){n.classList.remove(r+"-leave-active"),o(1)};xe(n,"transitionend",s),xe(n,"animationend",s),window.setTimeout(function(){n.classList.remove(r+"-leave"),n.classList.add(r+"-leave-to")},i)})}(this["row"+t],"slide-fade"),this.deleteRow(e.find(n=>n.id+""==t+""))}_getCheckedState(){let t=0,e=0;for(let n=0,r=this.props.dataSource.length;n<r;n++)if(this.props.dataSource[n].checked?t++:e++,t>0&&e>0)return{indeterminate:!0};return t===0?{unchecked:!0}:{checked:!0}}installed(){this.setFixedLeft(),this.setFixedRight(),window.addEventListener("click",()=>{let t=!1;this.props.dataSource.forEach(e=>{e.editingKey&&(t=!0),e.editingKey=null}),t&&this.update()})}updated(){this.setFixedLeft(),this.setFixedRight()}setFixedLeft(){const t=this.rootNode.querySelectorAll(".fixed-left"),e=this.rootNode.getBoundingClientRect();t.forEach((n,r)=>{const i=n.getBoundingClientRect();n.style.left=i.left-e.left-1+"px"})}setFixedRight(){this.rootNode.querySelectorAll(".fixed-right").forEach((t,e)=>{t.style.right="0px"})}render(t){if(t.columns&&t.dataSource)return t.fixedRight&&(t.columns[t.columns.length-1].fixed=!0),x("div",F({style:{width:t.width&&t.width,height:t.height&&t.height}},ne(t,"o-table",{"o-table-checkbox":t.checkbox,"o-table-border":t.border,"o-table-stripe":t.stripe})),x("table",F({},ne(t,"o-table-table")),x("thead",null,x("tr",null,t.columns.map((e,n)=>{const r={},{width:i}=e;return i!==void 0&&(r.style={width:typeof i=="number"?i+"px":i}),x("th",Q(F({},r),{class:B({[`o-table-align-${e.align}`]:e.align,compact:t.compact,"fixed-top":t.fixedTop,"fixed-left":n<t.fixedLeftCount,"fixed-right":e.fixed})}),n===0&&t.checkbox&&x("o-checkbox",Q(F({},this._getCheckedState()),{onChange:o=>this._changeHandlerTh(o,e)})),e.title)}))),x("tbody",{class:"o-table-tbody"},t.dataSource.map(e=>x("tr",{key:e.id,ref:n=>this["row"+e.id]=n,style:{background:e.$config&&e.$config.bgColor}},t.columns.map((n,r)=>{const i={},{width:o}=n;return o!==void 0&&(i.style={width:typeof o=="number"?o+"px":o}),x("td",Q(F({onclick:s=>this.onTdClick(e,n,s)},i),{class:B({[`o-table-align-${n.align}`]:n.align,compact:t.compact,"fixed-left":r<t.fixedLeftCount,"fixed-right":n.fixed})}),r===0&&t.checkbox&&x("o-checkbox",{checked:e.checked,onChange:s=>this._changeHandlerTd(s,e)}),n.editable&&e.editingKey===n.key?x("o-input",{ref:s=>this.editingInput=s,size:"mini",onChange:s=>{this.onChange(s,e,n)},value:e[n.key]}):n.render?n.render(e):e[n.key])}))))))}};W.css=`:host {
  display: block;
}

.o-table {
  overflow: auto;
}

.o-table-table {
  background: white;
  margin: auto;
  padding: 5px;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  color: #606266;
  font-weight: 400;
}

.o-table-checkbox th:first-child,
.o-table-checkbox td:first-child {
  padding: 2px 10px 2px;
}

th {
  border-bottom: 1px solid #E0E0E0;
  text-align: left;
  vertical-align: middle;
  padding: 10px 10px 10px;
  color: rgba(0, 0, 0, 0.54);
  line-height: 1.3125rem;
  font-weight: 500;
  background: #fafafa;
  white-space: nowrap;
}

th,
td {
  white-space: nowrap;
  font-size: 0.875rem;
}

th.fixed-top {
  position: sticky;
  top: -1px;
  z-index: 1000;
}

table thead th.fixed-left {
  position: sticky;
  left: -1px;
  z-index: 1001;
}

table tbody td.fixed-left {
  position: sticky;
  left: -1px;
  z-index: 999;
}

table thead th.fixed-right {
  position: sticky;
  z-index: 1001;
}

table tbody td.fixed-right {
  position: sticky;
  z-index: 1000;
}

.o-table-border td,
.o-table-border th {
  border-right: 1px solid #ebeef5;
}

.o-table-border td:first-child,
.o-table-border th:first-child {
  border-left: 1px solid #ebeef5;
}

.o-table-border th {
  border-top: 1px solid #ebeef5;
}

tr {
  border-bottom: 1px solid #E0E0E0;
}

tr:hover td {
  background: #f5f5f5;
}

td {
  text-align: left;
  vertical-align: middle;
  padding: 10px 10px 10px;
  background: white;
}

td.compact,
th.compact {
  padding: 4px 10px 4px;
}

a {
  text-decoration: none;
}

.o-table-align-left {
  text-align: left;
}

.o-table-align-center {
  text-align: center;
}

o-checkbox {
  height: 20px;
  vertical-align: middle;
}

.o-table-align-right {
  text-align: right;
}

a,
a:link,
a:visited,
a:active {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #07c160;
  color: var(--o-primary, #07c160);
}

o-checkbox {
  margin-right: 5px;
}

.o-table-stripe tr:nth-of-type(odd) {
  background: white;
}

.o-table-stripe tr:nth-of-type(even) {
  background: #fafafa;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}`,W.defaultProps={dataSource:[],columns:[],checkbox:!1,border:!1,stripe:!1,compact:!1,fixedTop:!1,fixedRight:!1,fixedLeftCount:0},W.propTypes={dataSource:Object,columns:Object,checkbox:Boolean,border:Boolean,stripe:Boolean,compact:Boolean,width:String,height:String,fixedTop:Boolean,fixedRight:Boolean,fixedLeftCount:Number},W=((t,e,n,r)=>{for(var i,o=r>1?void 0:r?mt(e,n):e,s=t.length-1;s>=0;s--)(i=t[s])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&vt(e,n,o),o})([ke("o-table")],W);
