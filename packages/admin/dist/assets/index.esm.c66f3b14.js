function Ae(){return typeof global!="object"||!global||global.Math!==Math||global.Array!==Array?self||window||global||function(){return this}():global}var g={store:null,root:Ae(),mapping:{}};/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */(function(){if(!(window.Reflect===void 0||window.customElements===void 0||window.customElements.hasOwnProperty("polyfillWrapFlushCallback"))){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}})();function ye(t){var e=document.createElement("style");return e.textContent=t,e}function ve(t){return t.replace(/-(\w)/g,function(e,r){return r.toUpperCase()})}function ne(t){return t.children}function me(t,e){for(var r in e)t[r]=e[r];return t}function be(t,e){t!=null&&(typeof t=="function"?t(e):t.current=e)}typeof Promise=="function"&&Promise.resolve().then.bind(Promise.resolve());function X(t){return Object.prototype.toString.call(t)==="[object Array]"}function oe(t){return typeof t!="string"||!t?[]:t.replace(/]/g,"").replace(/\[/g,".").split(".")}var Re=/\B([A-Z])/g;function Te(t){return t.replace(Re,"-$1").toLowerCase()}function je(t){return t.replace(/\-(\w)/g,function(e,r){return r.toUpperCase()}).replace(/^\S/,function(e){return e.toUpperCase()})}function Me(t,e){var r=oe(t);return r.forEach(function(i){e=e[i]}),e}var I=[];function m(t,e){var r=[],i,o,n,s;for(s=arguments.length;s-- >2;)I.push(arguments[s]);for(e&&e.children!=null&&(I.length||I.push(e.children),delete e.children);I.length;)if((o=I.pop())&&o.pop!==void 0)for(s=o.length;s--;)I.push(o[s]);else typeof o=="boolean"&&(o=null),(n=typeof t!="function")&&(o==null?o="":typeof o=="number"?o=String(o):typeof o!="string"&&(n=!1)),n&&i?r[r.length-1]+=o:r.length===0?r=[o]:r.push(o),i=n;if(t===ne)return r;var f={nodeName:t,children:r,attributes:e==null?void 0:e,key:e==null?void 0:e.key};return g.vnode!==void 0&&g.vnode(f),f}var Ie=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function $e(t,e,r){return typeof e=="string"||typeof e=="number"?t.splitText!==void 0:typeof e.nodeName=="string"?!t._componentConstructor&&_e(t,e.nodeName):typeof e.nodeName=="function"?g.mapping[t.nodeName.toLowerCase()]===e.nodeName:r||t._componentConstructor===e.nodeName}function _e(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}var Y={};function ze(t,e){Y["o-"+t]=e}function De(t,e,r){for(var i=oe(e),o=t,n=0,s=i.length;n<s;n++)n===s-1?o[i[n]]=r:o=o[i[n]]}function We(t,e){for(var r=oe(e),i=t,o=0,n=r.length;o<n;o++)i=i[r[o]];return i}function xe(t){return this._listeners[t.type](t)}function Fe(t,e,r){t._listeners=t._listeners||{},t._listeners[e]=r,t.addEventListener(e,xe)}function Be(t,e){t.removeEventListener(e,xe)}function Ue(t,e){var r=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return r.normalizedNodeName=t,r}function Ce(t){var e=t.parentNode;e&&e.removeChild(t)}function J(t,e,r,i,o,n){if(e==="className"&&(e="class"),e[0]=="o"&&e[1]=="-")Y[e]&&Y[e](t,i,n);else if(e!=="key")if(e==="ref")be(r,null),be(i,t);else if(e==="class"&&!o)t.className=i||"";else if(e==="style"){if((!i||typeof i=="string"||typeof r=="string")&&(t.style.cssText=i||""),i&&typeof i=="object"){if(typeof r!="string")for(var s in r)s in i||(t.style[s]="");for(var s in i)t.style[s]=typeof i[s]=="number"&&Ie.test(s)===!1?i[s]+"px":i[s]}}else if(e==="dangerouslySetInnerHTML")i&&(t.innerHTML=i.__html||"");else if(e[0]=="o"&&e[1]=="n")He(t,e,i,r);else if(t.nodeName==="INPUT"&&e==="value")t[e]=i==null?"":i;else if(e!=="list"&&e!=="type"&&e!=="css"&&!o&&e in t&&i!==""){try{t[e]=i==null?"":i}catch{}(i==null||i===!1)&&e!="spellcheck"&&(t.pureRemoveAttribute?t.pureRemoveAttribute(e):t.removeAttribute(e))}else{var f=o&&e!==(e=e.replace(/^xlink:?/,""));i==null||i===!1?f?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.pureRemoveAttribute?t.pureRemoveAttribute(e):t.removeAttribute(e):typeof i!="function"&&(f?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),i):t.pureSetAttribute?t.pureSetAttribute(e,i):t.setAttribute(e,i))}}function ge(t){return this._listeners[t.type](g.event&&g.event(t)||t)}function He(t,e,r,i){var o=e!==(e=e.replace(/Capture$/,"")),n=e.toLowerCase();e=(n in t?n:e).slice(2),r?i||t.addEventListener(e,ge,o):t.removeEventListener(e,ge,o),(t._listeners||(t._listeners={}))[e]=r}var we=0,k=!1,D=!1;function K(t,e,r,i,o){if(!(!t&&!e)){var n;return we++||(k=r!=null&&r.ownerSVGElement!==void 0,D=t!=null&&!("prevProps"in t)),e&&e.nodeName===ne&&(e=e.children),X(e)?r?Ee(r,e,D,i,o):(n=[],e.forEach(function(s,f){var u=H(f===0?t:null,s,i,o);n.push(u)})):(X(t)?t.forEach(function(s,f){f===0?n=H(s,e,i,o):$(s,!1)}):n=H(t,e,i,o),r&&n.parentNode!==r&&r.appendChild(n)),--we||(D=!1),n}}function H(t,e,r,i){t&&e&&t.props&&(t.props.children=e.children);var o=t,n=k;if((e==null||typeof e=="boolean")&&(e=""),typeof e=="string"||typeof e=="number")return t&&t.splitText!==void 0&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(o=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(o,t),$(t,!0))),o.prevProps=!0,o;var s=e.nodeName;if(typeof s=="function"){for(var f in g.mapping)if(g.mapping[f]===s){s=f,e.nodeName=f;break}}if(k=s==="svg"?!0:s==="foreignObject"?!1:k,s=String(s),(!t||!_e(t,s))&&(o=Ue(s,k),t)){for(;t.firstChild;)o.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(o,t),$(t,!0)}var u=o.firstChild,c=o.prevProps,h=e.children;if(c==null){c=o.prevProps={};for(var y=o.attributes,S=y.length;S--;)c[y[S].name]=y[S].value}return!D&&h&&h.length===1&&typeof h[0]=="string"&&u!=null&&u.splitText!==void 0&&u.nextSibling==null?u.nodeValue!=h[0]&&(u.nodeValue=h[0]):(h&&h.length||u!=null)&&(o.constructor.is=="WeElement"&&o.constructor.noSlot||Ee(o,h,D||c.dangerouslySetInnerHTML!=null,r,i)),qe(o,e.attributes,c,r,i),o.props&&(o.props.children=e.children),k=n,o}function Ee(t,e,r,i,o){var n=t.childNodes,s=[],f={},u=0,c=0,h=n.length,y=0,S=e?e.length:0,d,O,N,P,w;if(h!==0)for(var v=0;v<h;v++){var x=n[v],L=x.prevProps,E=S&&L?x._component?x._component.__key:L.key:null;E!=null?(u++,f[E]=x):(L||(x.splitText!==void 0?r?x.nodeValue.trim():!0:r))&&(s[y++]=x)}if(S!==0)for(var v=0;v<S;v++){if(P=e[v],w=null,P){var E=P.key;if(E!=null)u&&f[E]!==void 0&&(w=f[E],f[E]=void 0,u--);else if(!w&&c<y){for(d=c;d<y;d++)if(s[d]!==void 0&&$e(O=s[d],P,r)){w=O,s[d]=void 0,d===y-1&&y--,d===c&&c++;break}}}w=H(w,P,i,o),N=n[v],w&&w!==t&&w!==N&&(N==null?t.appendChild(w):w===N.nextSibling?Ce(N):t.insertBefore(w,N))}if(u)for(var v in f)f[v]!==void 0&&$(f[v],!1);for(;c<=y;)(w=s[y--])!==void 0&&$(w,!1)}function $(t,e){t.prevProps!=null&&t.prevProps.ref&&(typeof t.prevProps.ref=="function"?t.prevProps.ref(null):t.prevProps.ref.current&&(t.prevProps.ref.current=null)),(e===!1||t.prevProps==null)&&Ce(t),Ve(t)}function Ve(t){for(t=t.lastChild;t;){var e=t.previousSibling;$(t,!0),t=e}}function qe(t,e,r,i,o){var n,s=t.update,f;t.receiveProps&&(f=Object.assign({},r));for(n in r)!(e&&e[n]!=null)&&r[n]!=null&&(J(t,n,r[n],r[n]=void 0,k,i),s&&delete t.props[n]);for(n in e)if(s&&typeof e[n]=="object"&&n!=="ref"){n==="style"&&J(t,n,r[n],r[n]=e[n],k,i);var u=ve(n);t.props[u]=r[u]=e[n]}else if(n!=="children"&&(!(n in r)||e[n]!==(n==="value"||n==="checked"?t[n]:r[n])))if(J(t,n,r[n],e[n],k,i),t.nodeName.indexOf("-")!==-1){t.props=t.props||{};var c=ve(n);t.props[c]=r[c]=e[n]}else r[n]=e[n];s&&!o&&t.parentNode&&t.receiveProps(t.props,f)!==!1&&t.update()}function Ge(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Je(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Ze(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Qe=0,z=function(t){Ze(e,t);function e(){Ge(this,e);var r=Je(this,t.call(this));return r.props=Object.assign({},r.constructor.defaultProps,r.props),r.elementId=Qe++,r.computed={},r.isInstalled=!1,r}return e.prototype.connectedCallback=function(){for(var i=this,o=this.parentNode;o&&!this.store;)this.store=o.store,o=o.parentNode||o.host;if(this.inject){this.injection={},o=this.parentNode;for(var n;o&&!n;)n=o.provide,o=o.parentNode||o.host;if(n)this.inject.forEach(function(d){i.injection[d]=n[d]});else throw"The provide prop was not found on the parent node or the provide type is incorrect."}this.attrsToProps(),this.beforeInstall(),this.install(),this.afterInstall();var s;if(this.constructor.isLightDom)s=this;else if(!this.shadowRoot)s=this.attachShadow({mode:"open"});else{s=this.shadowRoot;for(var f;f=s.firstChild;)s.removeChild(f)}if(this.constructor.elementStyles)s.adoptedStyleSheets=this.constructor.elementStyles;else{var u=this.constructor.css;if(u){if(typeof u=="string"){var c=new CSSStyleSheet;c.replaceSync(u),s.adoptedStyleSheets=[c]}else if(Object.prototype.toString.call(u)==="[object Array]"){var h=[];u.forEach(function(d){if(typeof d=="string"){var O=new CSSStyleSheet;O.replaceSync(d),h.push(O)}else h.push(d);s.adoptedStyleSheets=h})}else if(u.default&&typeof u.default=="string"){var y=new CSSStyleSheet;y.replaceSync(u.default),s.adoptedStyleSheets=[y]}else s.adoptedStyleSheets=[u];this.constructor.elementStyles=s.adoptedStyleSheets}}this.beforeRender(),g.afterInstall&&g.afterInstall(this);var S=this.render(this.props,this.store);this.rootNode=K(null,S,null,this),this.rendered(),this.css&&s.appendChild(ye(typeof this.css=="function"?this.css():this.css)),this.props.css&&(this._customStyleElement=ye(this.props.css),this._customStyleContent=this.props.css,s.appendChild(this._customStyleElement)),X(this.rootNode)?this.rootNode.forEach(function(d){s.appendChild(d)}):this.rootNode&&s.appendChild(this.rootNode),this.installed(),this.isInstalled=!0},e.prototype.disconnectedCallback=function(){this.uninstall(),this.isInstalled=!1},e.prototype.update=function(i,o){this._willUpdate=!0,this.beforeUpdate(),this.beforeRender(),this._customStyleContent!=this.props.css&&(this._customStyleContent=this.props.css,this._customStyleElement.textContent=this._customStyleContent),this.attrsToProps(i);var n=this.render(this.props,this.store);this.rendered(),this.rootNode=K(this.rootNode,n,this.constructor.isLightDom?this:this.shadowRoot,this,o),this._willUpdate=!1,this.updated()},e.prototype.forceUpdate=function(){this.update(!0)},e.prototype.updateProps=function(i){var o=this;Object.keys(i).forEach(function(n){o.props[n]=i[n],o.prevProps&&(o.prevProps[n]=i[n])}),this.forceUpdate()},e.prototype.updateSelf=function(i){this.update(i,!0)},e.prototype.removeAttribute=function(i){t.prototype.removeAttribute.call(this,i),this.isInstalled&&this.update()},e.prototype.setAttribute=function(i,o){o&&typeof o=="object"?t.prototype.setAttribute.call(this,i,JSON.stringify(o)):t.prototype.setAttribute.call(this,i,o),this.isInstalled&&this.update()},e.prototype.pureRemoveAttribute=function(i){t.prototype.removeAttribute.call(this,i)},e.prototype.pureSetAttribute=function(i,o){t.prototype.setAttribute.call(this,i,o)},e.prototype.attrsToProps=function(i){if(!(i||this.store&&this.store.ignoreAttrs||this.props.ignoreAttrs)){var o=this;o.props.css=o.getAttribute("css");var n=this.constructor.propTypes;!n||Object.keys(n).forEach(function(s){var f=n[s],u=o.getAttribute(Te(s));if(u!==null)switch(f){case String:o.props[s]=u;break;case Number:o.props[s]=Number(u);break;case Boolean:u==="false"||u==="0"?o.props[s]=!1:o.props[s]=!0;break;case Array:case Object:u[0]===":"?o.props[s]=Me(u.substr(1),Omi.$):o.props[s]=JSON.parse(u.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g,'"$2":$4').replace(/'([\s\S]*?)'/g,'"$1"').replace(/,(\s*})/g,"$1"));break}else o.constructor.defaultProps&&o.constructor.defaultProps.hasOwnProperty(s)?o.props[s]=o.constructor.defaultProps[s]:o.props[s]=null})}},e.prototype.fire=function(i,o){var n=this.props["on"+je(i)];n?n(new CustomEvent(i,{detail:o})):this.dispatchEvent(new CustomEvent(i,{detail:o}))},e.prototype.beforeInstall=function(){},e.prototype.install=function(){},e.prototype.afterInstall=function(){},e.prototype.installed=function(){},e.prototype.uninstall=function(){},e.prototype.beforeUpdate=function(){},e.prototype.updated=function(){},e.prototype.beforeRender=function(){},e.prototype.rendered=function(){},e.prototype.receiveProps=function(){},e}(HTMLElement);z.is="WeElement";function Xe(t,e,r){return e=typeof e=="string"?document.querySelector(e):e,r&&(e.store=r),K(null,t,e,!1)}function Ye(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Se(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Ke(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var et=["use","useSelf"];function ie(t,e,r){if(!customElements.get(t)&&!g.mapping[t])if(e.is==="WeElement")customElements.define(t,e),g.mapping[t]=e;else{typeof r=="string"?r={css:r}:r=r||{};var i=function(s){Ke(f,s);function f(){var u,c,h;Ye(this,f);for(var y=arguments.length,S=Array(y),d=0;d<y;d++)S[d]=arguments[d];return h=(u=(c=Se(this,s.call.apply(s,[this].concat(S))),c),c.compute=r.compute,u),Se(c,h)}return f.prototype.render=function(){return e.call(this,this)},f}(z);i.css=r.css,i.propTypes=r.propTypes,i.defaultProps=r.defaultProps,i.isLightDom=r.isLightDom;var o=function(f){typeof r[f]=="function"&&(i.prototype[f]=function(){return r[f].apply(this,arguments)})};for(var n in r)o(n);et.forEach(function(s){r[s]&&r[s]!=="function"&&(i.prototype[s]=function(){return r[s]})}),customElements.define(t,i),g.mapping[t]=i}}function se(t){return function(e){ie(t,e)}}function tt(t,e){return m(t.nodeName,me(me({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function rt(t){for(var e=t.parentNode;e;){if(e.host)return e.host;if(e.shadowRoot&&e.shadowRoot.host)return e.shadowRoot.host;e=e.parentNode}}function nt(t){return t.replace(/([1-9]\d*|0)(\.\d*)*rpx/g,function(e,r){return window.innerWidth*Number(r)/750+"px"})}var ot={}.hasOwnProperty;function ae(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(!!r){var i=typeof r;if(i==="string"||i==="number")t.push(r);else if(Array.isArray(r)&&r.length){var o=ae.apply(null,r);o&&t.push(o)}else if(i==="object")for(var n in r)ot.call(r,n)&&r[n]&&t.push(n)}}return t.join(" ")}function it(){var t=Array.prototype.slice.call(arguments,0),e=t[0],r=t.slice(1);if(e.class?(r.unshift(e.class),delete e.class):e.className&&(r.unshift(e.className),delete e.className),r.length>0)return{class:ae.apply(null,r)}}function st(t){return JSON.stringify(t)}(function(){if(typeof document=="undefined"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,i=typeof DOMException=="object"?Error:DOMException,o=Object.defineProperty,n=Array.prototype.forEach,s=/@import.+?;?$/gm;function f(a){var l=a.replace(s,"");return l!==a&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),l.trim()}function u(a){return"isConnected"in a?a.isConnected:document.contains(a)}function c(a){return a.filter(function(l,p){return a.indexOf(l)===p})}function h(a,l){return a.filter(function(p){return l.indexOf(p)===-1})}function y(a){a.parentNode.removeChild(a)}function S(a){return a.shadowRoot||r.get(a)}var d=["addRule","deleteRule","insertRule","removeRule"],O=CSSStyleSheet,N=O.prototype;N.replace=function(){return Promise.reject(new i("Can't call replace on non-constructed CSSStyleSheets."))},N.replaceSync=function(){throw new i("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function P(a){return typeof a=="object"?R.isPrototypeOf(a)||N.isPrototypeOf(a):!1}function w(a){return typeof a=="object"?N.isPrototypeOf(a):!1}var v=new WeakMap,x=new WeakMap,L=new WeakMap,E=new WeakMap;function ke(a,l){var p=document.createElement("style");return L.get(a).set(l,p),x.get(a).push(l),p}function A(a,l){return L.get(a).get(l)}function Pe(a,l){L.get(a).delete(l),x.set(a,x.get(a).filter(function(p){return p!==l}))}function le(a,l){requestAnimationFrame(function(){l.textContent=v.get(a).textContent,E.get(a).forEach(function(p){return l.sheet[p.method].apply(l.sheet,p.args)})})}function W(a){if(!v.has(a))throw new TypeError("Illegal invocation")}function V(){var a=this,l=document.createElement("style");e.body.appendChild(l),v.set(a,l),x.set(a,[]),L.set(a,new WeakMap),E.set(a,[])}var R=V.prototype;R.replace=function(l){try{return this.replaceSync(l),Promise.resolve(this)}catch(p){return Promise.reject(p)}},R.replaceSync=function(l){if(W(this),typeof l=="string"){var p=this;v.get(p).textContent=f(l),E.set(p,[]),x.get(p).forEach(function(_){_.isConnected()&&le(p,A(p,_))})}},o(R,"cssRules",{configurable:!0,enumerable:!0,get:function(){return W(this),v.get(this).sheet.cssRules}}),o(R,"media",{configurable:!0,enumerable:!0,get:function(){return W(this),v.get(this).sheet.media}}),d.forEach(function(a){R[a]=function(){var l=this;W(l);var p=arguments;E.get(l).push({method:a,args:p}),x.get(l).forEach(function(C){if(C.isConnected()){var b=A(l,C).sheet;b[a].apply(b,p)}});var _=v.get(l).sheet;return _[a].apply(_,p)}}),o(V,Symbol.hasInstance,{configurable:!0,value:P});var ce={childList:!0,subtree:!0},fe=new WeakMap;function T(a){var l=fe.get(a);return l||(l=new he(a),fe.set(a,l)),l}function ue(a){o(a.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return T(this).sheets},set:function(l){T(this).update(l)}})}function q(a,l){for(var p=document.createNodeIterator(a,NodeFilter.SHOW_ELEMENT,function(C){return S(C)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),_=void 0;_=p.nextNode();)l(S(_))}var F=new WeakMap,j=new WeakMap,B=new WeakMap;function Le(a,l){return l instanceof HTMLStyleElement&&j.get(a).some(function(p){return A(p,a)})}function pe(a){var l=F.get(a);return l instanceof Document?l.body:l}function G(a){var l=document.createDocumentFragment(),p=j.get(a),_=B.get(a),C=pe(a);_.disconnect(),p.forEach(function(b){l.appendChild(A(b,a)||ke(b,a))}),C.insertBefore(l,null),_.observe(C,ce),p.forEach(function(b){le(b,A(b,a))})}function he(a){var l=this;l.sheets=[],F.set(l,a),j.set(l,[]),B.set(l,new MutationObserver(function(p,_){if(!document){_.disconnect();return}p.forEach(function(C){t||n.call(C.addedNodes,function(b){b instanceof Element&&q(b,function(M){T(M).connect()})}),n.call(C.removedNodes,function(b){b instanceof Element&&(Le(l,b)&&G(l),t||q(b,function(M){T(M).disconnect()}))})})}))}if(he.prototype={isConnected:function(){var a=F.get(this);return a instanceof Document?a.readyState!=="loading":u(a.host)},connect:function(){var a=pe(this);B.get(this).observe(a,ce),j.get(this).length>0&&G(this),q(a,function(l){T(l).connect()})},disconnect:function(){B.get(this).disconnect()},update:function(a){var l=this,p=F.get(l)===document?"Document":"ShadowRoot";if(!Array.isArray(a))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+p+": Iterator getter is not callable.");if(!a.every(P))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+p+": Failed to convert value to 'CSSStyleSheet'");if(a.some(w))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+p+": Can't adopt non-constructed stylesheets");l.sheets=a;var _=j.get(l),C=c(a),b=h(_,C);b.forEach(function(M){y(A(M,l)),Pe(M,l)}),j.set(l,C),l.isConnected()&&C.length>0&&G(l)}},window.CSSStyleSheet=V,ue(Document),"ShadowRoot"in window){ue(ShadowRoot);var de=Element.prototype,Oe=de.attachShadow;de.attachShadow=function(l){var p=Oe.call(this,l);return l.mode==="closed"&&r.set(this,p),p}}var U=T(document);U.isConnected()?U.connect():document.addEventListener("DOMContentLoaded",U.connect.bind(U))})();m.f=ne;function at(){return{}}var lt={},ct=z,ft=ie,ut=g.mapping,Ne={tag:se,WeElement:z,Component:ct,render:Xe,h:m,createElement:m,options:g,define:ie,cloneElement:tt,getHost:rt,rpx:nt,defineElement:ft,classNames:ae,extractClass:it,createRef:at,o:st,elements:ut,$:lt,extend:ze,get:We,set:De,bind:Fe,unbind:Be};g.root.Omi=Ne;g.root.omi=Ne;g.root.Omi.version="6.23.0";/*! *****************************************************************************
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
***************************************************************************** */var ee=function(t,e){return ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},ee(t,e)};function pt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ee(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}function ht(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var f=t.length-1;f>=0;f--)(s=t[f])&&(n=(o<3?s(n):o>3?s(e,r,n):s(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n}var dt=`:host {
  position: fixed;
  z-index: 100000; }

.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  left: 0;
  top: 0; }

.o-dialog {
  position: relative;
  background: #FFF;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); }

.o-dialog.is-fullscreen {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  height: 100%;
  overflow: auto; }

.o-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0; }

.o-dialog__header {
  padding: 20px 20px 10px; }

.o-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: 0 0;
  border: none;
  outline: 0;
  cursor: pointer;
  font-size: 16px; }

.o-dialog__headerbtn .o-dialog__close {
  color: #909399; }

.o-dialog__headerbtn:focus .o-dialog__close,
.o-dialog__headerbtn:hover .o-dialog__close {
  color: #409EFF; }

.o-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #303133; }

.o-dialog__body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all; }

.o-dialog__footer {
  padding: 10px 20px 20px;
  text-align: right;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

.o-dialog--center {
  text-align: center; }

.o-dialog--center .o-dialog__body {
  text-align: initial;
  padding: 25px 25px 30px; }

.o-dialog--center .o-dialog__footer {
  text-align: inherit; }

.dialog-zoom-enter-active {
  -webkit-animation: dialog-zoom-in .3s;
  animation: dialog-zoom-in .3s; }

.dialog-zoom-leave-active {
  -webkit-animation: dialog-zoom-out .3s;
  animation: dialog-zoom-out .3s; }

@-webkit-keyframes dialog-zoom-in {
  0% {
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    opacity: 0; }
  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1; } }

@keyframes dialog-zoom-in {
  0% {
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    opacity: 0; }
  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1; } }

@-webkit-keyframes dialog-zoom-out {
  0% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1; }
  100% {
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    opacity: 0; } }

@keyframes dialog-zoom-out {
  0% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1; }
  100% {
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    opacity: 0; } }

.mask-enter-active {
  -webkit-animation: mask-in .3s;
  animation: mask-in .3s; }

.mask-leave-active {
  -webkit-animation: mask-out .3s;
  animation: mask-out .3s; }

@-webkit-keyframes mask-in {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

@keyframes mask-in {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

@-webkit-keyframes mask-out {
  0% {
    opacity: 1; }
  100% {
    opacity: 0; } }

@keyframes mask-out {
  0% {
    opacity: 1; }
  100% {
    opacity: 0; } }

.content {
  z-index: 101; }
`;/*! *****************************************************************************
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
***************************************************************************** */var te=function(t,e){return te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)i.hasOwnProperty(o)&&(r[o]=i[o])},te(t,e)};function yt(t,e){te(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}function vt(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var f=t.length-1;f>=0;f--)(s=t[f])&&(n=(o<3?s(n):o>3?s(e,r,n):s(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n}function Z(t,e,r,i){function o(n){return n instanceof r?n:new r(function(s){s(n)})}return new(r||(r=Promise))(function(n,s){function f(h){try{c(i.next(h))}catch(y){s(y)}}function u(h){try{c(i.throw(h))}catch(y){s(y)}}function c(h){h.done?n(h.value):o(h.value).then(f,u)}c((i=i.apply(t,e||[])).next())})}function Q(t,e){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,o,n,s;return s={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function f(c){return function(h){return u([c,h])}}function u(c){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,o&&(n=c[0]&2?o.return:c[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,c[1])).done)return n;switch(o=0,n&&(c=[c[0]&2,n.value]),c[0]){case 0:case 1:n=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,o=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!n||c[1]>n[0]&&c[1]<n[3])){r.label=c[1];break}if(c[0]===6&&r.label<n[1]){r.label=n[1],n=c;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(c);break}n[2]&&r.ops.pop(),r.trys.pop();continue}c=e.call(t,r)}catch(h){c=[6,h],o=0}finally{i=n=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var mt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function bt(t,e){return e={exports:{}},t(e,e.exports),e.exports}var re=bt(function(t,e){(function(r,i){t.exports=i()})(mt,function(){const r=[];document.addEventListener("DOMContentLoaded",()=>{i.done=!0,r.forEach(o=>{o()})});function i(o){if(i.done){o();return}r.push(o)}return i.done=!1,i})}),gt=Object.freeze({__proto__:null,default:re,__moduleExports:re}),wt=re||gt;(function(t){yt(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r._show=!0,r}return e.prototype.installed=function(){var r=this;wt(function(){r.props.appear&&r.enter(),r.props.leavingTime&&setTimeout(function(){r.leave()},r.props.leavingTime)})},e.prototype.receiveProps=function(){this.props.appear&&this.enter(),this.props.disappear&&this.leave()},e.prototype.toggle=function(){return Z(this,void 0,void 0,function(){return Q(this,function(r){switch(r.label){case 0:return this._show=!this._show,this._show?[4,this.enter()]:[3,2];case 1:return[2,r.sent()];case 2:return[4,this.leave()];case 3:return[2,r.sent()]}})})},e.prototype.enter=function(){return Z(this,void 0,void 0,function(){var r=this;return Q(this,function(i){return[2,new Promise(function(o){var n=r.children[0];n&&(r.fire("before-enter"),n.classList.remove(r.props.name+"-leave-active"),n.classList.remove(r.props.name+"-leave-to"),n.classList.add(r.props.name+"-enter"),n.classList.add(r.props.name+"-enter-active"),r.callback=function(){n.classList.remove(this.props.name+"-enter-active"),this.fire("after-enter"),this._show=!0,o()}.bind(r),r.once("transitionend",r.callback),r.once("animationend",r.callback),window.setTimeout(function(){n.classList.remove(this.props.name+"-enter"),n.classList.add(this.props.name+"-enter-to"),this.fire("enter")}.bind(r),r.props.delay))})]})})},e.prototype.leave=function(){return Z(this,void 0,void 0,function(){var r=this;return Q(this,function(i){return[2,new Promise(function(o){var n=r.children[0];n&&(r.fire("before-leave"),n.classList.remove(r.props.name+"-enter-active"),n.classList.remove(r.props.name+"-enter-to"),n.classList.add(r.props.name+"-leave"),n.classList.add(r.props.name+"-leave-active"),r.callback=function(s){n.classList.remove(this.props.name+"-leave-active"),this.fire("after-leave"),this._show=!1,this.props.autoRemove&&this.parentNode&&this.parentNode.removeChild(this),o()}.bind(r),r.once("transitionend",r.callback),r.once("animationend",r.callback),window.setTimeout(function(){n.classList.remove(this.props.name+"-leave"),n.classList.add(this.props.name+"-leave-to"),this.fire("leave")}.bind(r),r.props.delay))})]})})},e.prototype.once=function(r,i){var o=function(){this.removeEventListener(r,o),i()}.bind(this);this.addEventListener(r,o)},e.prototype.render=function(){},e.propTypes={name:String,leavingTime:Number,autoRemove:Boolean,appear:Boolean,disappear:Boolean,delay:Number},e.isLightDom=!0,e.defaultProps={name:"o",delay:0},e=vt([se("o-transition")],e),e})(z);(function(t){pt(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.handleMaskClick=function(){r.fire("mask-click")},r.close=function(){r.rootNode.childNodes[0].leave(),r.rootNode.childNodes[1].leave(),r.fire("close")},r.onAfterLeave=function(){r.updateProps({visible:!1})},r}return e.prototype.open=function(){this.updateProps({visible:!0}),this.rootNode.childNodes[0].enter(),this.rootNode.childNodes[1].enter(),this.fire("open")},e.prototype.render=function(r){return r.visible&&m("div",{class:"o-dialog__wrapper"},m("o-transition",{"onafter-leave":this.onAfterLeave,appear:!0,name:"dialog-zoom"},m("div",{class:"o-dialog__wrapper content"},m("div",{role:"dialog","aria-modal":"true","aria-label":r.title,class:"o-dialog",style:{width:r.width}},m("div",{class:"o-dialog__header"},m("span",{class:"o-dialog__title"},r.title),m("button",{type:"button","aria-label":"Close",class:"o-dialog__headerbtn"},m("svg",{onClick:this.close,class:"o-dialog__close o-icon o-icon-close",fill:"currentColor",width:"1em",height:"1em",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},m("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))),m("div",{class:"o-dialog__body"},m("slot",null)),m("div",{class:"o-dialog__footer"},m("slot",{name:"footer"}))))),m("o-transition",{appear:!0,name:"mask"},m("div",{class:"mask",onClick:this.handleMaskClick})))},e.css=dt,e.defaultProps={visible:!1,width:"50%"},e.propTypes={visible:Boolean,title:String,width:String},e=ht([se("o-dialog")],e),e})(z);
