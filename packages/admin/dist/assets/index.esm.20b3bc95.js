var Wt=Object.defineProperty;var Ut=(e,t,r)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var $=(e,t,r)=>(Ut(e,typeof t!="symbol"?t+"":t,r),r);function Xt(){return typeof global!="object"||!global||global.Math!==Math||global.Array!==Array?self||window||global||function(){return this}():global}var x={store:null,root:Xt(),mapping:{}};/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */(function(){if(!(window.Reflect===void 0||window.customElements===void 0||window.customElements.hasOwnProperty("polyfillWrapFlushCallback"))){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}})();function kt(e){var t=document.createElement("style");return t.textContent=e,t}function St(e){return e.replace(/-(\w)/g,function(t,r){return r.toUpperCase()})}function at(e){return e.children}function _t(e,t){for(var r in t)e[r]=t[r];return e}function Ct(e,t){e!=null&&(typeof e=="function"?e(t):e.current=t)}typeof Promise=="function"&&Promise.resolve().then.bind(Promise.resolve());function ot(e){return Object.prototype.toString.call(e)==="[object Array]"}function pt(e){return typeof e!="string"||!e?[]:e.replace(/]/g,"").replace(/\[/g,".").split(".")}var qt=/\B([A-Z])/g;function Yt(e){return e.replace(qt,"-$1").toLowerCase()}function Gt(e){return e.replace(/\-(\w)/g,function(t,r){return r.toUpperCase()}).replace(/^\S/,function(t){return t.toUpperCase()})}function Kt(e,t){var r=pt(e);return r.forEach(function(n){t=t[n]}),t}var j=[];function z(e,t){var r=[],n,o,i,s;for(s=arguments.length;s-- >2;)j.push(arguments[s]);for(t&&t.children!=null&&(j.length||j.push(t.children),delete t.children);j.length;)if((o=j.pop())&&o.pop!==void 0)for(s=o.length;s--;)j.push(o[s]);else typeof o=="boolean"&&(o=null),(i=typeof e!="function")&&(o==null?o="":typeof o=="number"?o=String(o):typeof o!="string"&&(i=!1)),i&&n?r[r.length-1]+=o:r.length===0?r=[o]:r.push(o),n=i;if(e===at)return r;var c={nodeName:e,children:r,attributes:t==null?void 0:t,key:t==null?void 0:t.key};return x.vnode!==void 0&&x.vnode(c),c}var Jt=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function Qt(e,t,r){return typeof t=="string"||typeof t=="number"?e.splitText!==void 0:typeof t.nodeName=="string"?!e._componentConstructor&&Nt(e,t.nodeName):typeof t.nodeName=="function"?x.mapping[e.nodeName.toLowerCase()]===t.nodeName:r||e._componentConstructor===t.nodeName}function Nt(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}var it={};function te(e,t){it["o-"+e]=t}function ee(e,t,r){for(var n=pt(t),o=e,i=0,s=n.length;i<s;i++)i===s-1?o[n[i]]=r:o=o[n[i]]}function re(e,t){for(var r=pt(t),n=e,o=0,i=r.length;o<i;o++)n=n[r[o]];return n}function Mt(e){return this._listeners[e.type](e)}function oe(e,t,r){e._listeners=e._listeners||{},e._listeners[t]=r,e.addEventListener(t,Mt)}function ie(e,t){e.removeEventListener(t,Mt)}function ne(e,t){var r=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return r.normalizedNodeName=e,r}function $t(e){var t=e.parentNode;t&&t.removeChild(e)}function et(e,t,r,n,o,i){if(t==="className"&&(t="class"),t[0]=="o"&&t[1]=="-")it[t]&&it[t](e,n,i);else if(t!=="key")if(t==="ref")Ct(r,null),Ct(n,e);else if(t==="class"&&!o)e.className=n||"";else if(t==="style"){if((!n||typeof n=="string"||typeof r=="string")&&(e.style.cssText=n||""),n&&typeof n=="object"){if(typeof r!="string")for(var s in r)s in n||(e.style[s]="");for(var s in n)e.style[s]=typeof n[s]=="number"&&Jt.test(s)===!1?n[s]+"px":n[s]}}else if(t==="dangerouslySetInnerHTML")n&&(e.innerHTML=n.__html||"");else if(t[0]=="o"&&t[1]=="n")se(e,t,n,r);else if(e.nodeName==="INPUT"&&t==="value")e[t]=n==null?"":n;else if(t!=="list"&&t!=="type"&&t!=="css"&&!o&&t in e&&n!==""){try{e[t]=n==null?"":n}catch{}(n==null||n===!1)&&t!="spellcheck"&&(e.pureRemoveAttribute?e.pureRemoveAttribute(t):e.removeAttribute(t))}else{var c=o&&t!==(t=t.replace(/^xlink:?/,""));n==null||n===!1?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.pureRemoveAttribute?e.pureRemoveAttribute(t):e.removeAttribute(t):typeof n!="function"&&(c?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):e.pureSetAttribute?e.pureSetAttribute(t,n):e.setAttribute(t,n))}}function At(e){return this._listeners[e.type](x.event&&x.event(e)||e)}function se(e,t,r,n){var o=t!==(t=t.replace(/Capture$/,"")),i=t.toLowerCase();t=(i in e?i:t).slice(2),r?n||e.addEventListener(t,At,o):e.removeEventListener(t,At,o),(e._listeners||(e._listeners={}))[t]=r}var Ht=0,N=!1,I=!1;function nt(e,t,r,n,o){if(!(!e&&!t)){var i;return Ht++||(N=r!=null&&r.ownerSVGElement!==void 0,I=e!=null&&!("prevProps"in e)),t&&t.nodeName===at&&(t=t.children),ot(t)?r?Pt(r,t,I,n,o):(i=[],t.forEach(function(s,c){var a=G(c===0?e:null,s,n,o);i.push(a)})):(ot(e)?e.forEach(function(s,c){c===0?i=G(s,t,n,o):T(s,!1)}):i=G(e,t,n,o),r&&i.parentNode!==r&&r.appendChild(i)),--Ht||(I=!1),i}}function G(e,t,r,n){e&&t&&e.props&&(e.props.children=t.children);var o=e,i=N;if((t==null||typeof t=="boolean")&&(t=""),typeof t=="string"||typeof t=="number")return e&&e.splitText!==void 0&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(o=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(o,e),T(e,!0))),o.prevProps=!0,o;var s=t.nodeName;if(typeof s=="function"){for(var c in x.mapping)if(x.mapping[c]===s){s=c,t.nodeName=c;break}}if(N=s==="svg"?!0:s==="foreignObject"?!1:N,s=String(s),(!e||!Nt(e,s))&&(o=ne(s,N),e)){for(;e.firstChild;)o.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(o,e),T(e,!0)}var a=o.firstChild,p=o.prevProps,f=t.children;if(p==null){p=o.prevProps={};for(var h=o.attributes,b=h.length;b--;)p[h[b].name]=h[b].value}return!I&&f&&f.length===1&&typeof f[0]=="string"&&a!=null&&a.splitText!==void 0&&a.nextSibling==null?a.nodeValue!=f[0]&&(a.nodeValue=f[0]):(f&&f.length||a!=null)&&(o.constructor.is=="WeElement"&&o.constructor.noSlot||Pt(o,f,I||p.dangerouslySetInnerHTML!=null,r,n)),ae(o,t.attributes,p,r,n),o.props&&(o.props.children=t.children),N=i,o}function Pt(e,t,r,n,o){var i=e.childNodes,s=[],c={},a=0,p=0,f=i.length,h=0,b=t?t.length:0,g,E,_,H,v;if(f!==0)for(var m=0;m<f;m++){var k=i[m],V=k.prevProps,S=b&&V?k._component?k._component.__key:V.key:null;S!=null?(a++,c[S]=k):(V||(k.splitText!==void 0?r?k.nodeValue.trim():!0:r))&&(s[h++]=k)}if(b!==0)for(var m=0;m<b;m++){if(H=t[m],v=null,H){var S=H.key;if(S!=null)a&&c[S]!==void 0&&(v=c[S],c[S]=void 0,a--);else if(!v&&p<h){for(g=p;g<h;g++)if(s[g]!==void 0&&Qt(E=s[g],H,r)){v=E,s[g]=void 0,g===h-1&&h--,g===p&&p++;break}}}v=G(v,H,n,o),_=i[m],v&&v!==e&&v!==_&&(_==null?e.appendChild(v):v===_.nextSibling?$t(_):e.insertBefore(v,_))}if(a)for(var m in c)c[m]!==void 0&&T(c[m],!1);for(;p<=h;)(v=s[h--])!==void 0&&T(v,!1)}function T(e,t){e.prevProps!=null&&e.prevProps.ref&&(typeof e.prevProps.ref=="function"?e.prevProps.ref(null):e.prevProps.ref.current&&(e.prevProps.ref.current=null)),(t===!1||e.prevProps==null)&&$t(e),ce(e)}function ce(e){for(e=e.lastChild;e;){var t=e.previousSibling;T(e,!0),e=t}}function ae(e,t,r,n,o){var i,s=e.update,c;e.receiveProps&&(c=Object.assign({},r));for(i in r)!(t&&t[i]!=null)&&r[i]!=null&&(et(e,i,r[i],r[i]=void 0,N,n),s&&delete e.props[i]);for(i in t)if(s&&typeof t[i]=="object"&&i!=="ref"){i==="style"&&et(e,i,r[i],r[i]=t[i],N,n);var a=St(i);e.props[a]=r[a]=t[i]}else if(i!=="children"&&(!(i in r)||t[i]!==(i==="value"||i==="checked"?e[i]:r[i])))if(et(e,i,r[i],t[i],N,n),e.nodeName.indexOf("-")!==-1){e.props=e.props||{};var p=St(i);e.props[p]=r[p]=t[i]}else r[i]=t[i];s&&!o&&e.parentNode&&e.receiveProps(e.props,c)!==!1&&e.update()}function pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function le(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ue(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var fe=0,W=function(e){ue(t,e);function t(){pe(this,t);var r=le(this,e.call(this));return r.props=Object.assign({},r.constructor.defaultProps,r.props),r.elementId=fe++,r.computed={},r.isInstalled=!1,r}return t.prototype.connectedCallback=function(){for(var n=this,o=this.parentNode;o&&!this.store;)this.store=o.store,o=o.parentNode||o.host;if(this.inject){this.injection={},o=this.parentNode;for(var i;o&&!i;)i=o.provide,o=o.parentNode||o.host;if(i)this.inject.forEach(function(g){n.injection[g]=i[g]});else throw"The provide prop was not found on the parent node or the provide type is incorrect."}this.attrsToProps(),this.beforeInstall(),this.install(),this.afterInstall();var s;if(this.constructor.isLightDom)s=this;else if(!this.shadowRoot)s=this.attachShadow({mode:"open"});else{s=this.shadowRoot;for(var c;c=s.firstChild;)s.removeChild(c)}if(this.constructor.elementStyles)s.adoptedStyleSheets=this.constructor.elementStyles;else{var a=this.constructor.css;if(a){if(typeof a=="string"){var p=new CSSStyleSheet;p.replaceSync(a),s.adoptedStyleSheets=[p]}else if(Object.prototype.toString.call(a)==="[object Array]"){var f=[];a.forEach(function(g){if(typeof g=="string"){var E=new CSSStyleSheet;E.replaceSync(g),f.push(E)}else f.push(g);s.adoptedStyleSheets=f})}else if(a.default&&typeof a.default=="string"){var h=new CSSStyleSheet;h.replaceSync(a.default),s.adoptedStyleSheets=[h]}else s.adoptedStyleSheets=[a];this.constructor.elementStyles=s.adoptedStyleSheets}}this.beforeRender(),x.afterInstall&&x.afterInstall(this);var b=this.render(this.props,this.store);this.rootNode=nt(null,b,null,this),this.rendered(),this.css&&s.appendChild(kt(typeof this.css=="function"?this.css():this.css)),this.props.css&&(this._customStyleElement=kt(this.props.css),this._customStyleContent=this.props.css,s.appendChild(this._customStyleElement)),ot(this.rootNode)?this.rootNode.forEach(function(g){s.appendChild(g)}):this.rootNode&&s.appendChild(this.rootNode),this.installed(),this.isInstalled=!0},t.prototype.disconnectedCallback=function(){this.uninstall(),this.isInstalled=!1},t.prototype.update=function(n,o){this._willUpdate=!0,this.beforeUpdate(),this.beforeRender(),this._customStyleContent!=this.props.css&&(this._customStyleContent=this.props.css,this._customStyleElement.textContent=this._customStyleContent),this.attrsToProps(n);var i=this.render(this.props,this.store);this.rendered(),this.rootNode=nt(this.rootNode,i,this.constructor.isLightDom?this:this.shadowRoot,this,o),this._willUpdate=!1,this.updated()},t.prototype.forceUpdate=function(){this.update(!0)},t.prototype.updateProps=function(n){var o=this;Object.keys(n).forEach(function(i){o.props[i]=n[i],o.prevProps&&(o.prevProps[i]=n[i])}),this.forceUpdate()},t.prototype.updateSelf=function(n){this.update(n,!0)},t.prototype.removeAttribute=function(n){e.prototype.removeAttribute.call(this,n),this.isInstalled&&this.update()},t.prototype.setAttribute=function(n,o){o&&typeof o=="object"?e.prototype.setAttribute.call(this,n,JSON.stringify(o)):e.prototype.setAttribute.call(this,n,o),this.isInstalled&&this.update()},t.prototype.pureRemoveAttribute=function(n){e.prototype.removeAttribute.call(this,n)},t.prototype.pureSetAttribute=function(n,o){e.prototype.setAttribute.call(this,n,o)},t.prototype.attrsToProps=function(n){if(!(n||this.store&&this.store.ignoreAttrs||this.props.ignoreAttrs)){var o=this;o.props.css=o.getAttribute("css");var i=this.constructor.propTypes;!i||Object.keys(i).forEach(function(s){var c=i[s],a=o.getAttribute(Yt(s));if(a!==null)switch(c){case String:o.props[s]=a;break;case Number:o.props[s]=Number(a);break;case Boolean:a==="false"||a==="0"?o.props[s]=!1:o.props[s]=!0;break;case Array:case Object:a[0]===":"?o.props[s]=Kt(a.substr(1),Omi.$):o.props[s]=JSON.parse(a.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g,'"$2":$4').replace(/'([\s\S]*?)'/g,'"$1"').replace(/,(\s*})/g,"$1"));break}else o.constructor.defaultProps&&o.constructor.defaultProps.hasOwnProperty(s)?o.props[s]=o.constructor.defaultProps[s]:o.props[s]=null})}},t.prototype.fire=function(n,o){var i=this.props["on"+Gt(n)];i?i(new CustomEvent(n,{detail:o})):this.dispatchEvent(new CustomEvent(n,{detail:o}))},t.prototype.beforeInstall=function(){},t.prototype.install=function(){},t.prototype.afterInstall=function(){},t.prototype.installed=function(){},t.prototype.uninstall=function(){},t.prototype.beforeUpdate=function(){},t.prototype.updated=function(){},t.prototype.beforeRender=function(){},t.prototype.rendered=function(){},t.prototype.receiveProps=function(){},t}(HTMLElement);W.is="WeElement";function he(e,t,r){return t=typeof t=="string"?document.querySelector(t):t,r&&(t.store=r),nt(null,e,t,!1)}function de(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Et(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ge(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var be=["use","useSelf"];function lt(e,t,r){if(!customElements.get(e)&&!x.mapping[e])if(t.is==="WeElement")customElements.define(e,t),x.mapping[e]=t;else{typeof r=="string"?r={css:r}:r=r||{};var n=function(s){ge(c,s);function c(){var a,p,f;de(this,c);for(var h=arguments.length,b=Array(h),g=0;g<h;g++)b[g]=arguments[g];return f=(a=(p=Et(this,s.call.apply(s,[this].concat(b))),p),p.compute=r.compute,a),Et(p,f)}return c.prototype.render=function(){return t.call(this,this)},c}(W);n.css=r.css,n.propTypes=r.propTypes,n.defaultProps=r.defaultProps,n.isLightDom=r.isLightDom;var o=function(c){typeof r[c]=="function"&&(n.prototype[c]=function(){return r[c].apply(this,arguments)})};for(var i in r)o(i);be.forEach(function(s){r[s]&&r[s]!=="function"&&(n.prototype[s]=function(){return r[s]})}),customElements.define(e,n),x.mapping[e]=n}}function Ot(e){return function(t){lt(e,t)}}function me(e,t){return z(e.nodeName,_t(_t({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function ve(e){for(var t=e.parentNode;t;){if(t.host)return t.host;if(t.shadowRoot&&t.shadowRoot.host)return t.shadowRoot.host;t=t.parentNode}}function ye(e){return e.replace(/([1-9]\d*|0)(\.\d*)*rpx/g,function(t,r){return window.innerWidth*Number(r)/750+"px"})}var we={}.hasOwnProperty;function ut(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(!!r){var n=typeof r;if(n==="string"||n==="number")e.push(r);else if(Array.isArray(r)&&r.length){var o=ut.apply(null,r);o&&e.push(o)}else if(n==="object")for(var i in r)we.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}function Rt(){var e=Array.prototype.slice.call(arguments,0),t=e[0],r=e.slice(1);if(t.class?(r.unshift(t.class),delete t.class):t.className&&(r.unshift(t.className),delete t.className),r.length>0)return{class:ut.apply(null,r)}}function xe(e){return JSON.stringify(e)}(function(){if(typeof document=="undefined"||"adoptedStyleSheets"in document)return;var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),r=new WeakMap,n=typeof DOMException=="object"?Error:DOMException,o=Object.defineProperty,i=Array.prototype.forEach,s=/@import.+?;?$/gm;function c(l){var u=l.replace(s,"");return u!==l&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),u.trim()}function a(l){return"isConnected"in l?l.isConnected:document.contains(l)}function p(l){return l.filter(function(u,d){return l.indexOf(u)===d})}function f(l,u){return l.filter(function(d){return u.indexOf(d)===-1})}function h(l){l.parentNode.removeChild(l)}function b(l){return l.shadowRoot||r.get(l)}var g=["addRule","deleteRule","insertRule","removeRule"],E=CSSStyleSheet,_=E.prototype;_.replace=function(){return Promise.reject(new n("Can't call replace on non-constructed CSSStyleSheets."))},_.replaceSync=function(){throw new n("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function H(l){return typeof l=="object"?O.isPrototypeOf(l)||_.isPrototypeOf(l):!1}function v(l){return typeof l=="object"?_.isPrototypeOf(l):!1}var m=new WeakMap,k=new WeakMap,V=new WeakMap,S=new WeakMap;function Zt(l,u){var d=document.createElement("style");return V.get(l).set(u,d),k.get(l).push(u),d}function P(l,u){return V.get(l).get(u)}function It(l,u){V.get(l).delete(u),k.set(l,k.get(l).filter(function(d){return d!==u}))}function gt(l,u){requestAnimationFrame(function(){u.textContent=m.get(l).textContent,S.get(l).forEach(function(d){return u.sheet[d.method].apply(u.sheet,d.args)})})}function U(l){if(!m.has(l))throw new TypeError("Illegal invocation")}function J(){var l=this,u=document.createElement("style");t.body.appendChild(u),m.set(l,u),k.set(l,[]),V.set(l,new WeakMap),S.set(l,[])}var O=J.prototype;O.replace=function(u){try{return this.replaceSync(u),Promise.resolve(this)}catch(d){return Promise.reject(d)}},O.replaceSync=function(u){if(U(this),typeof u=="string"){var d=this;m.get(d).textContent=c(u),S.set(d,[]),k.get(d).forEach(function(C){C.isConnected()&&gt(d,P(d,C))})}},o(O,"cssRules",{configurable:!0,enumerable:!0,get:function(){return U(this),m.get(this).sheet.cssRules}}),o(O,"media",{configurable:!0,enumerable:!0,get:function(){return U(this),m.get(this).sheet.media}}),g.forEach(function(l){O[l]=function(){var u=this;U(u);var d=arguments;S.get(u).push({method:l,args:d}),k.get(u).forEach(function(A){if(A.isConnected()){var w=P(u,A).sheet;w[l].apply(w,d)}});var C=m.get(u).sheet;return C[l].apply(C,d)}}),o(J,Symbol.hasInstance,{configurable:!0,value:H});var bt={childList:!0,subtree:!0},mt=new WeakMap;function R(l){var u=mt.get(l);return u||(u=new wt(l),mt.set(l,u)),u}function vt(l){o(l.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return R(this).sheets},set:function(u){R(this).update(u)}})}function Q(l,u){for(var d=document.createNodeIterator(l,NodeFilter.SHOW_ELEMENT,function(A){return b(A)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),C=void 0;C=d.nextNode();)u(b(C))}var X=new WeakMap,L=new WeakMap,q=new WeakMap;function Ft(l,u){return u instanceof HTMLStyleElement&&L.get(l).some(function(d){return P(d,l)})}function yt(l){var u=X.get(l);return u instanceof Document?u.body:u}function tt(l){var u=document.createDocumentFragment(),d=L.get(l),C=q.get(l),A=yt(l);C.disconnect(),d.forEach(function(w){u.appendChild(P(w,l)||Zt(w,l))}),A.insertBefore(u,null),C.observe(A,bt),d.forEach(function(w){gt(w,P(w,l))})}function wt(l){var u=this;u.sheets=[],X.set(u,l),L.set(u,[]),q.set(u,new MutationObserver(function(d,C){if(!document){C.disconnect();return}d.forEach(function(A){e||i.call(A.addedNodes,function(w){w instanceof Element&&Q(w,function(B){R(B).connect()})}),i.call(A.removedNodes,function(w){w instanceof Element&&(Ft(u,w)&&tt(u),e||Q(w,function(B){R(B).disconnect()}))})})}))}if(wt.prototype={isConnected:function(){var l=X.get(this);return l instanceof Document?l.readyState!=="loading":a(l.host)},connect:function(){var l=yt(this);q.get(this).observe(l,bt),L.get(this).length>0&&tt(this),Q(l,function(u){R(u).connect()})},disconnect:function(){q.get(this).disconnect()},update:function(l){var u=this,d=X.get(u)===document?"Document":"ShadowRoot";if(!Array.isArray(l))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+d+": Iterator getter is not callable.");if(!l.every(H))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+d+": Failed to convert value to 'CSSStyleSheet'");if(l.some(v))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+d+": Can't adopt non-constructed stylesheets");u.sheets=l;var C=L.get(u),A=p(l),w=f(C,A);w.forEach(function(B){h(P(B,u)),It(B,u)}),L.set(u,A),u.isConnected()&&A.length>0&&tt(u)}},window.CSSStyleSheet=J,vt(Document),"ShadowRoot"in window){vt(ShadowRoot);var xt=Element.prototype,Dt=xt.attachShadow;xt.attachShadow=function(u){var d=Dt.call(this,u);return u.mode==="closed"&&r.set(this,d),d}}var Y=R(document);Y.isConnected()?Y.connect():document.addEventListener("DOMContentLoaded",Y.connect.bind(Y))})();z.f=at;function ke(){return{}}var Se={},_e=W,Ce=lt,Ae=x.mapping,Lt={tag:Ot,WeElement:W,Component:_e,render:he,h:z,createElement:z,options:x,define:lt,cloneElement:me,getHost:ve,rpx:ye,defineElement:Ce,classNames:ut,extractClass:Rt,createRef:ke,o:xe,elements:Ae,$:Se,extend:te,get:re,set:ee,bind:oe,unbind:ie};x.root.Omi=Lt;x.root.omi=Lt;x.root.Omi.version="6.23.0";/*! *****************************************************************************
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
***************************************************************************** */var st=function(e,t){return st=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o])},st(e,t)};function He(e,t){st(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var ct=function(){return ct=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},ct.apply(this,arguments)};function Ee(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}var Ve=`.pickr {
  position: relative;
  overflow: visible;
  transform: translateY(0); }
  .pickr * {
    box-sizing: border-box; }

.pickr .pcr-button {
  position: relative;
  height: 2em;
  width: 2em;
  padding: 0.5em;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
  border-radius: 0.15em;
  background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" stroke="%2342445A" stroke-width="5px" stroke-linecap="round"><path d="M45,45L5,5"></path><path d="M45,5L5,45"></path></svg>') no-repeat center;
  background-size: 0;
  transition: all 0.3s; }
  .pickr .pcr-button::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
    background-size: 0.5em;
    border-radius: 0.15em;
    z-index: -1; }
  .pickr .pcr-button::before {
    z-index: initial; }
  .pickr .pcr-button::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: background 0.3s;
    background: currentColor;
    border-radius: 0.15em; }
  .pickr .pcr-button.clear {
    background-size: 70%; }
    .pickr .pcr-button.clear::before {
      opacity: 0; }
    .pickr .pcr-button.clear:focus {
      box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px currentColor; }
  .pickr .pcr-button.disabled {
    cursor: not-allowed; }

.pickr input,
.pickr button,
.pcr-app input,
.pcr-app button {
  outline: none;
  border: none;
  -webkit-appearance: none; }
  .pickr input:focus,
  .pickr button:focus,
  .pcr-app input:focus,
  .pcr-app button:focus {
    box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px currentColor; }

.pcr-app {
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 10000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
  box-shadow: 0 0.15em 1.5em 0 rgba(0, 0, 0, 0.1), 0 0 1em 0 rgba(0, 0, 0, 0.03);
  width: 22.5em;
  max-width: 95vw;
  padding: 0.8em;
  border-radius: 0.1em;
  background: #fff;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  left: 0;
  top: 0; }
  .pcr-app.visible {
    visibility: visible;
    opacity: 1; }

.pcr-app .pcr-swatches {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.75em; }
  .pcr-app .pcr-swatches.pcr-last {
    margin: 0; }
  @supports (display: grid) {
    .pcr-app .pcr-swatches {
      display: grid;
      align-items: center;
      justify-content: space-around;
      grid-template-columns: repeat(auto-fit, 1.75em); } }
  .pcr-app .pcr-swatches > button {
    position: relative;
    width: 1.75em;
    height: 1.75em;
    border-radius: 0.15em;
    cursor: pointer;
    margin: 2.5px;
    flex-shrink: 0;
    justify-self: center;
    transition: all 0.15s;
    overflow: hidden;
    background: transparent;
    z-index: 1; }
    .pcr-app .pcr-swatches > button::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
      background-size: 6px;
      border-radius: 0.15em;
      z-index: -1; }
    .pcr-app .pcr-swatches > button::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: currentColor;
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 0.15em;
      box-sizing: border-box; }
    .pcr-app .pcr-swatches > button:hover {
      filter: brightness(1.05); }

.pcr-app .pcr-interaction {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -0.2em 0 -0.2em; }
  .pcr-app .pcr-interaction > * {
    margin: 0 0.2em; }
  .pcr-app .pcr-interaction input {
    letter-spacing: 0.07em;
    font-size: 0.75em;
    text-align: center;
    cursor: pointer;
    color: #75797e;
    background: #f1f3f4;
    border-radius: 0.15em;
    transition: all 0.15s;
    padding: 0.45em 0.5em;
    margin-top: 0.75em; }
    .pcr-app .pcr-interaction input:hover {
      filter: brightness(0.975); }
    .pcr-app .pcr-interaction input:focus {
      box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px rgba(66, 133, 244, 0.75); }
  .pcr-app .pcr-interaction .pcr-result {
    color: #75797e;
    text-align: left;
    flex: 1 1 8em;
    min-width: 8em;
    transition: all 0.2s;
    border-radius: 0.15em;
    background: #f1f3f4;
    cursor: text; }
    .pcr-app .pcr-interaction .pcr-result::selection {
      background: #4285f4;
      color: #fff; }
  .pcr-app .pcr-interaction .pcr-type.active {
    color: #fff;
    background: #4285f4; }
  .pcr-app .pcr-interaction .pcr-clear,
  .pcr-app .pcr-interaction .pcr-save {
    color: #fff;
    width: auto; }
  .pcr-app .pcr-interaction .pcr-save,
  .pcr-app .pcr-interaction .pcr-clear {
    color: #fff; }
    .pcr-app .pcr-interaction .pcr-save:hover,
    .pcr-app .pcr-interaction .pcr-clear:hover {
      filter: brightness(0.925); }
  .pcr-app .pcr-interaction .pcr-save {
    background: #4285f4; }
  .pcr-app .pcr-interaction .pcr-clear {
    background: #f44250; }
    .pcr-app .pcr-interaction .pcr-clear:focus {
      box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px rgba(244, 66, 80, 0.75); }

.pcr-app .pcr-selection {
  display: flex;
  justify-content: space-between;
  flex-grow: 1; }
  .pcr-app .pcr-selection .pcr-picker {
    position: absolute;
    height: 18px;
    width: 18px;
    border: 2px solid #fff;
    border-radius: 100%;
    user-select: none; }
  .pcr-app .pcr-selection .pcr-color-preview {
    position: relative;
    z-index: 1;
    width: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 0.75em; }
    .pcr-app .pcr-selection .pcr-color-preview::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
      background-size: 0.5em;
      border-radius: 0.15em;
      z-index: -1; }
    .pcr-app .pcr-selection .pcr-color-preview .pcr-last-color {
      cursor: pointer;
      transition: background-color 0.3s, box-shadow 0.3s;
      border-radius: 0.15em 0.15em 0 0;
      z-index: 2; }
    .pcr-app .pcr-selection .pcr-color-preview .pcr-current-color {
      border-radius: 0 0 0.15em 0.15em; }
    .pcr-app .pcr-selection .pcr-color-preview .pcr-last-color,
    .pcr-app .pcr-selection .pcr-color-preview .pcr-current-color {
      background: currentColor;
      width: 100%;
      height: 50%; }
  .pcr-app .pcr-selection .pcr-color-palette,
  .pcr-app .pcr-selection .pcr-color-chooser,
  .pcr-app .pcr-selection .pcr-color-opacity {
    position: relative;
    user-select: none;
    display: flex;
    flex-direction: column;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab; }
    .pcr-app .pcr-selection .pcr-color-palette:active,
    .pcr-app .pcr-selection .pcr-color-chooser:active,
    .pcr-app .pcr-selection .pcr-color-opacity:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing; }
  .pcr-app .pcr-selection .pcr-color-palette {
    width: 100%;
    height: 8em;
    z-index: 1; }
    .pcr-app .pcr-selection .pcr-color-palette .pcr-palette {
      flex-grow: 1;
      border-radius: 0.15em; }
      .pcr-app .pcr-selection .pcr-color-palette .pcr-palette::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
        background-size: 0.5em;
        border-radius: 0.15em;
        z-index: -1; }
  .pcr-app .pcr-selection .pcr-color-chooser,
  .pcr-app .pcr-selection .pcr-color-opacity {
    margin-left: 0.75em; }
    .pcr-app .pcr-selection .pcr-color-chooser .pcr-picker,
    .pcr-app .pcr-selection .pcr-color-opacity .pcr-picker {
      left: 50%;
      transform: translateX(-50%); }
    .pcr-app .pcr-selection .pcr-color-chooser .pcr-slider,
    .pcr-app .pcr-selection .pcr-color-opacity .pcr-slider {
      width: 8px;
      flex-grow: 1;
      border-radius: 50em; }
  .pcr-app .pcr-selection .pcr-color-chooser .pcr-slider {
    background: linear-gradient(to bottom, red, yellow, lime, cyan, blue, magenta, red); }
  .pcr-app .pcr-selection .pcr-color-opacity .pcr-slider {
    background: linear-gradient(to bottom, transparent, black), url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
    background-size: 100%, 50%; }

.pickr {
  position: relative;
  overflow: visible;
  transform: translateY(0); }
  .pickr * {
    box-sizing: border-box; }

.pickr .pcr-button {
  position: relative;
  height: 2em;
  width: 2em;
  padding: 0.5em;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
  border-radius: 0.15em;
  background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" stroke="%2342445A" stroke-width="5px" stroke-linecap="round"><path d="M45,45L5,5"></path><path d="M45,5L5,45"></path></svg>') no-repeat center;
  background-size: 0;
  transition: all 0.3s; }
  .pickr .pcr-button::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
    background-size: 0.5em;
    border-radius: 0.15em;
    z-index: -1; }
  .pickr .pcr-button::before {
    z-index: initial; }
  .pickr .pcr-button::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: background 0.3s;
    background: currentColor;
    border-radius: 0.15em; }
  .pickr .pcr-button.clear {
    background-size: 70%; }
    .pickr .pcr-button.clear::before {
      opacity: 0; }
    .pickr .pcr-button.clear:focus {
      box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px currentColor; }
  .pickr .pcr-button.disabled {
    cursor: not-allowed; }

.pickr input,
.pickr button,
.pcr-app input,
.pcr-app button {
  outline: none;
  border: none;
  -webkit-appearance: none; }
  .pickr input:focus,
  .pickr button:focus,
  .pcr-app input:focus,
  .pcr-app button:focus {
    box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px currentColor; }

.pcr-app {
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 10000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
  box-shadow: 0 0.15em 1.5em 0 rgba(0, 0, 0, 0.1), 0 0 1em 0 rgba(0, 0, 0, 0.03);
  width: 22.5em;
  max-width: 95vw;
  padding: 0.8em;
  border-radius: 0.1em;
  background: #fff;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  left: 0;
  top: 0; }
  .pcr-app.visible {
    visibility: visible;
    opacity: 1; }

.pcr-app .pcr-swatches {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.75em; }
  .pcr-app .pcr-swatches.pcr-last {
    margin: 0; }
  @supports (display: grid) {
    .pcr-app .pcr-swatches {
      display: grid;
      align-items: center;
      justify-content: space-around;
      grid-template-columns: repeat(auto-fit, 1.75em); } }
  .pcr-app .pcr-swatches > button {
    position: relative;
    width: 1.75em;
    height: 1.75em;
    border-radius: 0.15em;
    cursor: pointer;
    margin: 2.5px;
    flex-shrink: 0;
    justify-self: center;
    transition: all 0.15s;
    overflow: hidden;
    background: transparent;
    z-index: 1; }
    .pcr-app .pcr-swatches > button::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
      background-size: 6px;
      border-radius: 0.15em;
      z-index: -1; }
    .pcr-app .pcr-swatches > button::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: currentColor;
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 0.15em;
      box-sizing: border-box; }
    .pcr-app .pcr-swatches > button:hover {
      filter: brightness(1.05); }

.pcr-app .pcr-interaction {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -0.2em 0 -0.2em; }
  .pcr-app .pcr-interaction > * {
    margin: 0 0.2em; }
  .pcr-app .pcr-interaction input {
    letter-spacing: 0.07em;
    font-size: 0.75em;
    text-align: center;
    cursor: pointer;
    color: #75797e;
    background: #f1f3f4;
    border-radius: 0.15em;
    transition: all 0.15s;
    padding: 0.45em 0.5em;
    margin-top: 0.75em; }
    .pcr-app .pcr-interaction input:hover {
      filter: brightness(0.975); }
    .pcr-app .pcr-interaction input:focus {
      box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px rgba(66, 133, 244, 0.75); }
  .pcr-app .pcr-interaction .pcr-result {
    color: #75797e;
    text-align: left;
    flex: 1 1 8em;
    min-width: 8em;
    transition: all 0.2s;
    border-radius: 0.15em;
    background: #f1f3f4;
    cursor: text; }
    .pcr-app .pcr-interaction .pcr-result::selection {
      background: #4285f4;
      color: #fff; }
  .pcr-app .pcr-interaction .pcr-type.active {
    color: #fff;
    background: #4285f4; }
  .pcr-app .pcr-interaction .pcr-clear,
  .pcr-app .pcr-interaction .pcr-save {
    color: #fff;
    width: auto; }
  .pcr-app .pcr-interaction .pcr-save,
  .pcr-app .pcr-interaction .pcr-clear {
    color: #fff; }
    .pcr-app .pcr-interaction .pcr-save:hover,
    .pcr-app .pcr-interaction .pcr-clear:hover {
      filter: brightness(0.925); }
  .pcr-app .pcr-interaction .pcr-save {
    background: #4285f4; }
  .pcr-app .pcr-interaction .pcr-clear {
    background: #f44250; }
    .pcr-app .pcr-interaction .pcr-clear:focus {
      box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 3px rgba(244, 66, 80, 0.75); }

.pcr-app .pcr-selection {
  display: flex;
  justify-content: space-between;
  flex-grow: 1; }
  .pcr-app .pcr-selection .pcr-picker {
    position: absolute;
    height: 18px;
    width: 18px;
    border: 2px solid #fff;
    border-radius: 100%;
    user-select: none; }
  .pcr-app .pcr-selection .pcr-color-preview {
    position: relative;
    z-index: 1;
    width: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 0.75em; }
    .pcr-app .pcr-selection .pcr-color-preview::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
      background-size: 0.5em;
      border-radius: 0.15em;
      z-index: -1; }
    .pcr-app .pcr-selection .pcr-color-preview .pcr-last-color {
      cursor: pointer;
      transition: background-color 0.3s, box-shadow 0.3s;
      border-radius: 0.15em 0.15em 0 0;
      z-index: 2; }
    .pcr-app .pcr-selection .pcr-color-preview .pcr-current-color {
      border-radius: 0 0 0.15em 0.15em; }
    .pcr-app .pcr-selection .pcr-color-preview .pcr-last-color,
    .pcr-app .pcr-selection .pcr-color-preview .pcr-current-color {
      background: currentColor;
      width: 100%;
      height: 50%; }
  .pcr-app .pcr-selection .pcr-color-palette,
  .pcr-app .pcr-selection .pcr-color-chooser,
  .pcr-app .pcr-selection .pcr-color-opacity {
    position: relative;
    user-select: none;
    display: flex;
    flex-direction: column;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab; }
    .pcr-app .pcr-selection .pcr-color-palette:active,
    .pcr-app .pcr-selection .pcr-color-chooser:active,
    .pcr-app .pcr-selection .pcr-color-opacity:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing; }
  .pcr-app .pcr-selection .pcr-color-palette {
    width: 100%;
    height: 8em;
    z-index: 1; }
    .pcr-app .pcr-selection .pcr-color-palette .pcr-palette {
      flex-grow: 1;
      border-radius: 0.15em; }
      .pcr-app .pcr-selection .pcr-color-palette .pcr-palette::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
        background-size: 0.5em;
        border-radius: 0.15em;
        z-index: -1; }
  .pcr-app .pcr-selection .pcr-color-chooser,
  .pcr-app .pcr-selection .pcr-color-opacity {
    margin-left: 0.75em; }
    .pcr-app .pcr-selection .pcr-color-chooser .pcr-picker,
    .pcr-app .pcr-selection .pcr-color-opacity .pcr-picker {
      left: 50%;
      transform: translateX(-50%); }
    .pcr-app .pcr-selection .pcr-color-chooser .pcr-slider,
    .pcr-app .pcr-selection .pcr-color-opacity .pcr-slider {
      width: 8px;
      flex-grow: 1;
      border-radius: 50em; }
  .pcr-app .pcr-selection .pcr-color-chooser .pcr-slider {
    background: linear-gradient(to bottom, red, yellow, lime, cyan, blue, magenta, red); }
  .pcr-app .pcr-selection .pcr-color-opacity .pcr-slider {
    background: linear-gradient(to bottom, transparent, black), url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');
    background-size: 100%, 50%; }
`;const y=Bt.bind(null,"addEventListener"),M=Bt.bind(null,"removeEventListener");function Bt(e,t,r,n,o={}){t instanceof HTMLCollection||t instanceof NodeList?t=Array.from(t):Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);for(const i of t)for(const s of r)i[e](s,n,{capture:!1,...o});return Array.prototype.slice.call(arguments,1)}function ft(e){const t=document.createElement("div");return t.innerHTML=e.trim(),t.firstElementChild}function K(e,t){const r=e.getAttribute(t);return e.removeAttribute(t),r}function jt(e){function t(r,n={}){const o=K(r,"data-con"),i=K(r,"data-key");i&&(n[i]=r);const s=o?n[o]={}:n;for(let c of Array.from(r.children)){const a=K(c,"data-arr");a?(s[a]||(s[a]=[])).push(c):t(c,s)}return n}return t(ft(e))}function zt(e){let t=e.path||e.composedPath&&e.composedPath();if(t)return t;let r=e.target.parentElement;for(t=[e.target,r];r=r.parentElement;)t.push(r);return t.push(document,window),t}function Tt(e,t=!0){const r=o=>o>="0"&&o<="9"||o==="-"||o===".";function n(o){const i=e.value,s=e.selectionStart;let c=s,a="";for(let p=s-1;p>0&&r(i[p]);p--)a=i[p]+a,c--;for(let p=s,f=i.length;p<f&&r(i[p]);p++)a+=i[p];if(a.length>0&&!isNaN(a)&&isFinite(a)){const p=o.deltaY<0?1:-1,f=[1,10,100][Number(o.shiftKey||o.ctrlKey*2)]*p;let h=Number(a)+f;!t&&h<0&&(h=0);const b=i.substr(0,c)+h+i.substring(c+a.length,i.length),g=c+String(h).length;e.value=b,e.focus(),e.setSelectionRange(g,g)}o.preventDefault(),e.dispatchEvent(new Event("input"))}y(e,"focus",()=>y(window,"wheel",n,{passive:!1})),y(e,"blur",()=>M(window,"wheel",n))}var Ne=Object.freeze({__proto__:null,on:y,off:M,createElementFromString:ft,removeAttribute:K,createFromTemplate:jt,eventPath:zt,adjustableInputNumbers:Tt});const{min:F,max:Me,floor:$e,round:Pe}=Math;function Oe(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}function ht(e,t,r){e=e/360*6,t/=100,r/=100;let n=$e(e),o=e-n,i=r*(1-t),s=r*(1-o*t),c=r*(1-(1-o)*t),a=n%6,p=[r,s,i,i,c,r][a],f=[c,r,r,s,i,i][a],h=[i,i,c,r,r,s][a];return[p*255,f*255,h*255]}function Re(e,t,r){return ht(e,t,r).map(n=>Pe(n).toString(16).padStart(2,"0"))}function Le(e,t,r){const n=ht(e,t,r),o=n[0]/255,i=n[1]/255,s=n[2]/255;let c,a,p,f;return c=F(1-o,1-i,1-s),a=c===1?0:(1-o-c)/(1-c),p=c===1?0:(1-i-c)/(1-c),f=c===1?0:(1-s-c)/(1-c),[a*100,p*100,f*100,c*100]}function Be(e,t,r){t/=100,r/=100;let n=(2-t)*r/2;return n!==0&&(n===1?t=0:n<.5?t=t*r/(n*2):t=t*r/(2-n*2)),[e,t*100,n*100]}function dt(e,t,r){e/=255,t/=255,r/=255;let n,o,i;const s=F(e,t,r),c=Me(e,t,r),a=c-s;if(i=c,a===0)n=o=0;else{o=a/c;let p=((c-e)/6+a/2)/a,f=((c-t)/6+a/2)/a,h=((c-r)/6+a/2)/a;e===c?n=h-f:t===c?n=1/3+p-h:r===c&&(n=2/3+f-p),n<0?n+=1:n>1&&(n-=1)}return[n*360,o*100,i*100]}function je(e,t,r,n){e/=100,t/=100,r/=100,n/=100;const o=(1-F(1,e*(1-n)+n))*255,i=(1-F(1,t*(1-n)+n))*255,s=(1-F(1,r*(1-n)+n))*255;return[...dt(o,i,s)]}function ze(e,t,r){t/=100,r/=100,t*=r<.5?r:1-r;let n=2*t/(r+t)*100,o=(r+t)*100;return[e,n,o]}function Te(e){return dt(...e.match(/.{2}/g).map(t=>parseInt(t,16)))}function Vt(e){e=e.match(/^[a-zA-Z]+$/)?Oe(e):e;const t={cmyk:/^cmyk[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)/i,rgba:/^(rgb|rgba)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,hsla:/^(hsl|hsla)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,hsva:/^(hsv|hsva)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,hex:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},r=o=>o.map(i=>/^(|\d+)\.\d+|\d+$/.test(i)?Number(i):void 0);let n;for(const o in t)if(!!(n=t[o].exec(e)))switch(o){case"cmyk":{let[,i,s,c,a]=r(n);if(i>100||s>100||c>100||a>100)break;return{values:[...je(i,s,c,a),1],type:o}}case"rgba":{let[,,i,s,c,a=1]=r(n);if(i>255||s>255||c>255||a<0||a>1)break;return{values:[...dt(i,s,c),a],type:o}}case"hex":{const i=(a,p)=>[a.substring(0,p),a.substring(p,a.length)];let[,s]=n;s.length===3?s+="F":s.length===6&&(s+="FF");let c;return s.length===4?[s,c]=i(s,3).map(a=>a+a):s.length===8&&([s,c]=i(s,6)),c=parseInt(c,16)/255,{values:[...Te(s),c],type:o}}case"hsla":{let[,,i,s,c,a=1]=r(n);if(i>360||s>100||c>100||a<0||a>1)break;return{values:[...ze(i,s,c),a],type:o}}case"hsva":{let[,,i,s,c,a=1]=r(n);if(i>360||s>100||c>100||a<0||a>1)break;return{values:[i,s,c,a],type:o}}}return{values:null,type:null}}function Z(e=0,t=0,r=0,n=1){const{ceil:o}=Math,i={h:e,s:t,v:r,a:n,toHSVA(){const s=[i.h,i.s,i.v],c=s.map(o);return s.push(i.a),s.toString=()=>`hsva(${c[0]}, ${c[1]}%, ${c[2]}%, ${i.a.toFixed(1)})`,s},toHSLA(){const s=Be(i.h,i.s,i.v),c=s.map(o);return s.push(i.a),s.toString=()=>`hsla(${c[0]}, ${c[1]}%, ${c[2]}%, ${i.a.toFixed(1)})`,s},toRGBA(){const s=ht(i.h,i.s,i.v),c=s.map(o);return s.push(i.a),s.toString=()=>`rgba(${c[0]}, ${c[1]}, ${c[2]}, ${i.a.toFixed(1)})`,s},toCMYK(){const s=Le(i.h,i.s,i.v),c=s.map(o);return s.toString=()=>`cmyk(${c[0]}%, ${c[1]}%, ${c[2]}%, ${c[3]}%)`,s},toHEXA(){const s=Re(i.h,i.s,i.v);return s.toString=()=>{const c=i.a>=1?"":Number((i.a*255).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return`#${s.join("").toUpperCase()+c}`},s},clone(){return Z(i.h,i.s,i.v,i.a)}};return i}function rt(e){const t={options:Object.assign({lockX:!1,lockY:!1,onchange:()=>0},e),_tapstart(o){y(document,["mouseup","touchend","touchcancel"],t._tapstop),y(document,["mousemove","touchmove"],t._tapmove),o.preventDefault(),t._tapmove(o)},_tapmove(o){const{options:i,cache:s}=t,{element:c}=i,a=t.options.wrapper.getBoundingClientRect();let p=0,f=0;if(o){const h=o&&o.touches&&o.touches[0];p=o?(h||o).clientX:0,f=o?(h||o).clientY:0,p<a.left?p=a.left:p>a.left+a.width&&(p=a.left+a.width),f<a.top?f=a.top:f>a.top+a.height&&(f=a.top+a.height),p-=a.left,f-=a.top}else s&&(p=s.x*a.width,f=s.y*a.height);i.lockX||(c.style.left=`calc(${p/a.width*100}% - ${c.offsetWidth/2}px)`),i.lockY||(c.style.top=`calc(${f/a.height*100}% - ${c.offsetWidth/2}px)`),t.cache={x:p/a.width,y:f/a.height},i.onchange(p,f)},_tapstop(){M(document,["mouseup","touchend","touchcancel"],t._tapstop),M(document,["mousemove","touchmove"],t._tapmove)},trigger(){t._tapmove()},update(o=0,i=0){const s=t.options.wrapper.getBoundingClientRect();t._tapmove({clientX:s.left+o,clientY:s.top+i})},destroy(){const{options:o,_tapstart:i}=t;M([o.wrapper,o.element],"mousedown",i),M([o.wrapper,o.element],"touchstart",i,{passive:!1})}},{options:r,_tapstart:n}=t;return y([r.wrapper,r.element],"mousedown",n),y([r.wrapper,r.element],"touchstart",n,{passive:!1}),t}function Ze(e={}){e=Object.assign({onchange:()=>0,className:"",elements:[]},e);const t=y(e.elements,"click",r=>{e.elements.forEach(n=>n.classList[r.target===n?"add":"remove"](e.className)),e.onchange(r)});return{destroy:()=>M(...t)}}function Ie({el:e,reference:t,pos:r,padding:n=8}){const o={start:"sme",middle:"mse",end:"ems"},i={top:"tb",right:"rl",bottom:"bt",left:"lr"},[s,c="middle"]=r.split("-"),a=s==="top"||s==="bottom";return{update(){const p=t.getBoundingClientRect(),f=e.getBoundingClientRect(),h=a?{t:p.top-f.height-n,b:p.bottom+n}:{r:p.right+n,l:p.left-f.width-n},b=a?{s:p.left+p.width-f.width,m:-f.width/2+(p.left+p.width/2),e:p.left}:{s:p.bottom-f.height,m:p.bottom-p.height/2-f.height/2,e:p.bottom-p.height};function g(E,_,H){const v=H==="top",m=v?f.height:f.width,k=window[v?"innerHeight":"innerWidth"];for(const V of E){const S=_[V];if(S>0&&S+m<k){e.style[H]=`${S}px`;break}}}g(o[c],b,a?"left":"top"),g(i[s],h,a?"top":"left")}}}var Fe=({components:e,strings:t,useAsButton:r,inline:n,appClass:o,width:i})=>{const s=p=>p?"":'style="display:none" hidden',c=jt(`
      <div data-key="root" class="pickr">

        ${r?"":'<button type="button" data-key="button" class="pcr-button"></button>'}

        <div data-key="app" class="pcr-app ${o||""}" ${`style="${n?"position: unset;":""}${i?`width:${i};`:""}"`}>
          <div class="pcr-selection" ${s(e.palette)}>
            <div data-con="preview" class="pcr-color-preview" ${s(e.preview)}>
              <button type="button" data-key="lastColor" class="pcr-last-color"></button>
              <div data-key="currentColor" class="pcr-current-color"></div>
            </div>

            <div data-con="palette" class="pcr-color-palette">
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="palette" class="pcr-palette"></div>
            </div>

            <div data-con="hue" class="pcr-color-chooser" ${s(e.hue)}>
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="slider" class="pcr-hue pcr-slider"></div>
            </div>

            <div data-con="opacity" class="pcr-color-opacity" ${s(e.opacity)}>
              <div data-key="picker" class="pcr-picker"></div>
              <div data-key="slider" class="pcr-opacity pcr-slider"></div>
            </div>
          </div>

          <div class="pcr-swatches ${e.palette?"":" pcr-last"}" data-key="swatches"></div> 

          <div data-con="interaction" class="pcr-interaction" ${s(Object.keys(e.interaction).length)}>
            <input data-key="result" class="pcr-result" type="text" spellcheck="false" ${s(e.interaction.input)}>

            <input data-arr="options" class="pcr-type" data-type="HEXA" value="HEXA" type="button" ${s(e.interaction.hex)}>
            <input data-arr="options" class="pcr-type" data-type="RGBA" value="RGBA" type="button" ${s(e.interaction.rgba)}>
            <input data-arr="options" class="pcr-type" data-type="HSLA" value="HSLA" type="button" ${s(e.interaction.hsla)}>
            <input data-arr="options" class="pcr-type" data-type="HSVA" value="HSVA" type="button" ${s(e.interaction.hsva)}>
            <input data-arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ${s(e.interaction.cmyk)}>

            <input data-key="save" class="pcr-save" value="${t.save||"Save"}" type="button" ${s(e.interaction.save)}>
            <input data-key="clear" class="pcr-clear" value="${t.clear||"Clear"}" type="button" ${s(e.interaction.clear)}>
          </div>
        </div>
      </div>
    `),a=c.interaction;return a.options.find(p=>!p.hidden&&!p.classList.add("active")),a.type=()=>a.options.find(p=>p.classList.contains("active")),c};class D{constructor(t){$(this,"_initializingActive",!0);$(this,"_recalc",!0);$(this,"_color",Z());$(this,"_lastColor",Z());$(this,"_swatchColors",[]);$(this,"_eventListener",{swatchselect:[],change:[],save:[],init:[]});this.options=t=Object.assign({appClass:null,useAsButton:!1,disabled:!1,comparison:!0,components:{interaction:{}},strings:{},swatches:null,inline:!1,default:"#42445A",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"},t);const{swatches:r,inline:n,components:o,position:i}=t;o.interaction||(o.interaction={});const{preview:s,opacity:c,hue:a,palette:p}=o;o.palette=p||s||c||a,n&&(t.showAlways=!0),this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),r&&r.length&&r.forEach(b=>this.addSwatch(b)),this._nanopop=Ie({reference:this._root.button,el:this._root.app,pos:i});const{button:f}=this._root,h=this;requestAnimationFrame(function b(){if(f.offsetParent===null&&f!==document.body)return requestAnimationFrame(b);h.setColor(t.default),h._rePositioningPicker(),t.defaultRepresentation&&(h._representation=t.defaultRepresentation,h.setColorRepresentation(h._representation)),t.showAlways&&h.show(),h._initializingActive=!1,h._emit("init")})}_preBuild(){const t=this.options;typeof t.el=="string"&&(t.el=t.el.split(/>>/g).reduce((r,n,o,i)=>(r=r.querySelector(n),o<i.length-1?r.shadowRoot:r),document)),this._root=Fe(t),t.useAsButton&&(this._root.button=t.el),document.body.appendChild(this._root.root)}_finalBuild(){const t=this.options,r=this._root;document.body.removeChild(r.root);const{parentElement:n}=t.el;n.lastChild===t.el?n.appendChild(r.app):n.insertBefore(r.app,t.el.nextSibling),t.useAsButton||t.el.parentNode.replaceChild(r.root,t.el),t.disabled&&this.disable(),t.comparison||(r.button.style.transition="none",t.useAsButton||(r.preview.lastColor.style.transition="none")),this.hide()}_buildComponents(){const t=this,r=this.options.components,n={palette:rt({element:t._root.palette.picker,wrapper:t._root.palette.palette,onchange(o,i){if(!r.palette)return;const{_color:s,_root:c,options:a}=t;s.s=o/this.wrapper.offsetWidth*100,s.v=100-i/this.wrapper.offsetHeight*100,s.v<0&&(s.v=0);const p=s.toRGBA().toString();this.element.style.background=p,this.wrapper.style.background=`
                        linear-gradient(to top, rgba(0, 0, 0, ${s.a}), transparent),
                        linear-gradient(to left, hsla(${s.h}, 100%, 50%, ${s.a}), rgba(255, 255, 255, ${s.a}))
                    `,a.comparison||(c.button.style.color=p,a.useAsButton||(c.preview.lastColor.style.color=p)),c.preview.currentColor.style.color=p,t._recalc&&t._updateOutput(),c.button.classList.remove("clear")}}),hue:rt({lockX:!0,element:t._root.hue.picker,wrapper:t._root.hue.slider,onchange(o,i){!r.hue||!r.palette||(t._color.h=i/this.wrapper.offsetHeight*360,this.element.style.backgroundColor=`hsl(${t._color.h}, 100%, 50%)`,n.palette.trigger())}}),opacity:rt({lockX:!0,element:t._root.opacity.picker,wrapper:t._root.opacity.slider,onchange(o,i){!r.opacity||!r.palette||(t._color.a=Math.round(i/this.wrapper.offsetHeight*100)/100,this.element.style.background=`rgba(0, 0, 0, ${t._color.a})`,t.components.palette.trigger())}}),selectable:Ze({elements:t._root.interaction.options,className:"active",onchange(o){t._representation=o.target.getAttribute("data-type").toUpperCase(),t._updateOutput()}})};this.components=n}_bindEvents(){const{_root:t,options:r}=this,n=[y(t.interaction.clear,"click",()=>this._clearColor()),y(t.preview.lastColor,"click",()=>this.setHSVA(...this._lastColor.toHSVA())),y(t.interaction.save,"click",()=>{!this.applyColor()&&!r.showAlways&&this.hide()}),y(t.interaction.result,["keyup","input"],o=>{this._recalc=!1,this.setColor(o.target.value,!0)&&!this._initializingActive&&this._emit("change",this._color),o.stopImmediatePropagation()}),y([t.palette.palette,t.palette.picker,t.hue.slider,t.hue.picker,t.opacity.slider,t.opacity.picker],["mousedown","touchstart"],()=>this._recalc=!0)];if(!r.showAlways){const o=r.closeWithKey;n.push(y(t.button,"click",()=>this.isOpen()?this.hide():this.show()),y(document,"keyup",i=>this.isOpen()&&(i.key===o||i.code===o)&&this.hide()),y(document,["touchstart","mousedown"],i=>{this.isOpen()&&!zt(i).some(s=>s===t.app||s===t.button)&&this.hide()},{capture:!0}))}if(r.adjustableNumbers&&Tt(t.interaction.result,!1),!r.inline){let o=null;const i=this;n.push(y(window,["scroll","resize"],()=>{i.isOpen()&&(o===null?(o=setTimeout(()=>o=null,100),requestAnimationFrame(function s(){i._rePositioningPicker(),o!==null&&requestAnimationFrame(s)})):(clearTimeout(o),o=setTimeout(()=>o=null,100)))}))}this._eventBindings=n}_rePositioningPicker(){this.options.inline||this._nanopop.update()}_updateOutput(){if(this._root.interaction.type()){const t=`to${this._root.interaction.type().getAttribute("data-type")}`;this._root.interaction.result.value=typeof this._color[t]=="function"?this._color[t]().toString():""}this._initializingActive||this._emit("change",this._color)}_clearColor(){const{_root:t,options:r}=this;r.useAsButton||(t.button.style.color="rgba(0, 0, 0, 0.15)"),t.button.classList.add("clear"),r.showAlways||this.hide(),this._initializingActive||this._emit("save",null)}_emit(t,...r){this._eventListener[t].forEach(n=>n(...r,this))}on(t,r){return typeof r=="function"&&typeof t=="string"&&t in this._eventListener&&this._eventListener[t].push(r),this}off(t,r){const n=this._eventListener[t];if(n){const o=n.indexOf(r);~o&&n.splice(o,1)}return this}addSwatch(t){const{values:r}=Vt(t);if(r){const{_swatchColors:n,_root:o}=this,i=Z(...r),s=ft(`<button type="button" style="color: ${i.toRGBA()}"></button>`);return o.swatches.appendChild(s),n.push({element:s,hsvaColorObject:i}),this._eventBindings.push(y(s,"click",()=>{this.setHSVA(...i.toHSVA(),!0),this._emit("swatchselect",i)})),!0}return!1}removeSwatch(t){if(typeof t=="number"){const r=this._swatchColors[t];if(r){const{element:n}=r;return this._root.swatches.removeChild(n),this._swatchColors.splice(t,1),!0}}return!1}applyColor(t=!1){const{preview:r,button:n}=this._root,o=this._color.toRGBA().toString();r.lastColor.style.color=o,this.options.useAsButton||(n.style.color=o),n.classList.remove("clear"),this._lastColor=this._color.clone(),!this._initializingActive&&!t&&this._emit("save",this._color)}destroy(){this._eventBindings.forEach(t=>M(...t)),Object.keys(this.components).forEach(t=>this.components[t].destroy())}destroyAndRemove(){this.destroy();const t=this._root.root;t.parentElement.removeChild(t);const r=this._root.app;r.parentElement.removeChild(r);const n=this;Object.keys(n).forEach(o=>n[o]=null)}hide(){return this._root.app.classList.remove("visible"),this}show(){if(!this.options.disabled)return this._root.app.classList.add("visible"),this._rePositioningPicker(),this}isOpen(){return this._root.app.classList.contains("visible")}setHSVA(t=360,r=0,n=0,o=1,i=!1){const s=this._recalc;if(this._recalc=!1,t<0||t>360||r<0||r>100||n<0||n>100||o<0||o>1)return!1;this._color=Z(t,r,n,o);const{hue:c,opacity:a,palette:p}=this.components,h=c.options.wrapper.offsetHeight*(t/360);c.update(0,h);const g=a.options.wrapper.offsetHeight*o;a.update(0,g);const E=p.options.wrapper,_=E.offsetWidth*(r/100),H=E.offsetHeight*(1-n/100);return p.update(_,H),this._recalc=s,this._recalc&&this._updateOutput(),i||this.applyColor(),!0}setColor(t,r=!1){if(t===null)return this._clearColor(),!0;const{values:n,type:o}=Vt(t);if(n){const i=o.toUpperCase(),{options:s}=this._root.interaction,c=s.find(a=>a.getAttribute("data-type").startsWith(i));if(c&&!c.hidden)for(const a of s)a.classList[a===c?"add":"remove"]("active");return this.setHSVA(...n,r)}}setColorRepresentation(t){return t=t.toUpperCase(),!!this._root.interaction.options.find(r=>r.getAttribute("data-type").startsWith(t)&&!r.click())}getColorRepresentation(){return this._representation}getColor(){return this._color}getRoot(){return this._root}disable(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this}enable(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this}}D.utils=Ne;D.create=e=>new D(e);D.version="0.6.2";var We=function(e){He(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.installed=function(){var r=this,n=D.create({el:this.shadowRoot.querySelector(".picker"),inline:this.props.inline,default:this.props.default,useAsButton:!this.props.button,swatches:this.props.swatches,width:this.props.width,components:{preview:this.props.preview,opacity:this.props.opacity,hue:this.props.hue,interaction:{hex:this.props.hex,rgba:this.props.rgba,hsla:this.props.hsla,hsva:this.props.hsva,cmyk:this.props.cmyk,input:this.props.input,clear:this.props.clear,save:this.props.save}},strings:this.props.strings});n.on("init",function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];r.fire("init",o[0])}).on("save",function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];r.fire("save",{color:o[0].toHEXA().toString(),colorObject:o[0]})}).on("change",function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];r.fire("change",{color:o[0].toHEXA().toString(),colorObject:o[0]})}).on("swatchselect",function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];r.fire("swatch-select",{color:o[0].toHEXA().toString(),colorObject:o[0]})}),this.picker=n},t.prototype.setColor=function(r){return this.picker.setColor(r)},t.prototype.render=function(r){return z("div",ct({},Rt(r,"o-color-picker")),z("div",{class:"picker"}))},t.css=Ve,t.defaultProps={button:!0,preview:!0,opacity:!0,hue:!0,hex:!0,rgba:!0,hsla:!0,hsva:!1,input:!0,clear:!0,save:!0,cmyk:!1,default:"#07c160",swatches:[],inline:!0,strings:{save:"Save",clear:"Clear"}},t.propTypes={button:Boolean,preview:Boolean,opacity:Boolean,hue:Boolean,hex:Boolean,rgba:Boolean,hsla:Boolean,hsva:Boolean,input:Boolean,clear:Boolean,save:Boolean,cmyk:Boolean,default:String,swatches:Array,inline:Boolean,strings:Object,width:String},t=Ee([Ot("o-color-picker")],t),t}(W);export{We as default};
