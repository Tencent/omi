function Re(){return typeof global!="object"||!global||global.Math!==Math||global.Array!==Array?self||window||global||function(){return this}():global}var g={store:null,root:Re(),mapping:{}};/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */(function(){if(!(window.Reflect===void 0||window.customElements===void 0||window.customElements.hasOwnProperty("polyfillWrapFlushCallback"))){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}})();function pe(t){var e=document.createElement("style");return e.textContent=t,e}function ue(t){return t.replace(/-(\w)/g,function(e,r){return r.toUpperCase()})}function K(t){return t.children}function fe(t,e){for(var r in e)t[r]=e[r];return t}function he(t,e){t!=null&&(typeof t=="function"?t(e):t.current=e)}typeof Promise=="function"&&Promise.resolve().then.bind(Promise.resolve());function Z(t){return Object.prototype.toString.call(t)==="[object Array]"}function ee(t){return typeof t!="string"||!t?[]:t.replace(/]/g,"").replace(/\[/g,".").split(".")}var je=/\B([A-Z])/g;function Le(t){return t.replace(je,"-$1").toLowerCase()}function Te(t){return t.replace(/\-(\w)/g,function(e,r){return r.toUpperCase()}).replace(/^\S/,function(e){return e.toUpperCase()})}function Ie(t,e){var r=ee(t);return r.forEach(function(o){e=e[o]}),e}var M=[];function E(t,e){var r=[],o,n,i,s;for(s=arguments.length;s-- >2;)M.push(arguments[s]);for(e&&e.children!=null&&(M.length||M.push(e.children),delete e.children);M.length;)if((n=M.pop())&&n.pop!==void 0)for(s=n.length;s--;)M.push(n[s]);else typeof n=="boolean"&&(n=null),(i=typeof t!="function")&&(n==null?n="":typeof n=="number"?n=String(n):typeof n!="string"&&(i=!1)),i&&o?r[r.length-1]+=n:r.length===0?r=[n]:r.push(n),o=i;if(t===K)return r;var p={nodeName:t,children:r,attributes:e==null?void 0:e,key:e==null?void 0:e.key};return g.vnode!==void 0&&g.vnode(p),p}var Me=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function $e(t,e,r){return typeof e=="string"||typeof e=="number"?t.splitText!==void 0:typeof e.nodeName=="string"?!t._componentConstructor&&we(t,e.nodeName):typeof e.nodeName=="function"?g.mapping[t.nodeName.toLowerCase()]===e.nodeName:r||t._componentConstructor===e.nodeName}function we(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}var Q={};function We(t,e){Q["o-"+t]=e}function De(t,e,r){for(var o=ee(e),n=t,i=0,s=o.length;i<s;i++)i===s-1?n[o[i]]=r:n=n[o[i]]}function ze(t,e){for(var r=ee(e),o=t,n=0,i=r.length;n<i;n++)o=o[r[n]];return o}function Se(t){return this._listeners[t.type](t)}function Fe(t,e,r){t._listeners=t._listeners||{},t._listeners[e]=r,t.addEventListener(e,Se)}function Ue(t,e){t.removeEventListener(e,Se)}function Be(t,e){var r=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return r.normalizedNodeName=t,r}function ke(t){var e=t.parentNode;e&&e.removeChild(t)}function X(t,e,r,o,n,i){if(e==="className"&&(e="class"),e[0]=="o"&&e[1]=="-")Q[e]&&Q[e](t,o,i);else if(e!=="key")if(e==="ref")he(r,null),he(o,t);else if(e==="class"&&!n)t.className=o||"";else if(e==="style"){if((!o||typeof o=="string"||typeof r=="string")&&(t.style.cssText=o||""),o&&typeof o=="object"){if(typeof r!="string")for(var s in r)s in o||(t.style[s]="");for(var s in o)t.style[s]=typeof o[s]=="number"&&Me.test(s)===!1?o[s]+"px":o[s]}}else if(e==="dangerouslySetInnerHTML")o&&(t.innerHTML=o.__html||"");else if(e[0]=="o"&&e[1]=="n")He(t,e,o,r);else if(t.nodeName==="INPUT"&&e==="value")t[e]=o==null?"":o;else if(e!=="list"&&e!=="type"&&e!=="css"&&!n&&e in t&&o!==""){try{t[e]=o==null?"":o}catch{}(o==null||o===!1)&&e!="spellcheck"&&(t.pureRemoveAttribute?t.pureRemoveAttribute(e):t.removeAttribute(e))}else{var p=n&&e!==(e=e.replace(/^xlink:?/,""));o==null||o===!1?p?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.pureRemoveAttribute?t.pureRemoveAttribute(e):t.removeAttribute(e):typeof o!="function"&&(p?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),o):t.pureSetAttribute?t.pureSetAttribute(e,o):t.setAttribute(e,o))}}function de(t){return this._listeners[t.type](g.event&&g.event(t)||t)}function He(t,e,r,o){var n=e!==(e=e.replace(/Capture$/,"")),i=e.toLowerCase();e=(i in t?i:e).slice(2),r?o||t.addEventListener(e,de,n):t.removeEventListener(e,de,n),(t._listeners||(t._listeners={}))[e]=r}var be=0,N=!1,W=!1;function Y(t,e,r,o,n){if(!(!t&&!e)){var i;return be++||(N=r!=null&&r.ownerSVGElement!==void 0,W=t!=null&&!("prevProps"in t)),e&&e.nodeName===K&&(e=e.children),Z(e)?r?_e(r,e,W,o,n):(i=[],e.forEach(function(s,p){var l=V(p===0?t:null,s,o,n);i.push(l)})):(Z(t)?t.forEach(function(s,p){p===0?i=V(s,e,o,n):$(s,!1)}):i=V(t,e,o,n),r&&i.parentNode!==r&&r.appendChild(i)),--be||(W=!1),i}}function V(t,e,r,o){t&&e&&t.props&&(t.props.children=e.children);var n=t,i=N;if((e==null||typeof e=="boolean")&&(e=""),typeof e=="string"||typeof e=="number")return t&&t.splitText!==void 0&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(n=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(n,t),$(t,!0))),n.prevProps=!0,n;var s=e.nodeName;if(typeof s=="function"){for(var p in g.mapping)if(g.mapping[p]===s){s=p,e.nodeName=p;break}}if(N=s==="svg"?!0:s==="foreignObject"?!1:N,s=String(s),(!t||!we(t,s))&&(n=Be(s,N),t)){for(;t.firstChild;)n.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(n,t),$(t,!0)}var l=n.firstChild,f=n.prevProps,d=e.children;if(f==null){f=n.prevProps={};for(var b=n.attributes,w=b.length;w--;)f[b[w].name]=b[w].value}return!W&&d&&d.length===1&&typeof d[0]=="string"&&l!=null&&l.splitText!==void 0&&l.nextSibling==null?l.nodeValue!=d[0]&&(l.nodeValue=d[0]):(d&&d.length||l!=null)&&(n.constructor.is=="WeElement"&&n.constructor.noSlot||_e(n,d,W||f.dangerouslySetInnerHTML!=null,r,o)),qe(n,e.attributes,f,r,o),n.props&&(n.props.children=e.children),N=i,n}function _e(t,e,r,o,n){var i=t.childNodes,s=[],p={},l=0,f=0,d=i.length,b=0,w=e?e.length:0,h,A,C,P,m;if(d!==0)for(var y=0;y<d;y++){var k=i[y],O=k.prevProps,x=w&&O?k._component?k._component.__key:O.key:null;x!=null?(l++,p[x]=k):(O||(k.splitText!==void 0?r?k.nodeValue.trim():!0:r))&&(s[b++]=k)}if(w!==0)for(var y=0;y<w;y++){if(P=e[y],m=null,P){var x=P.key;if(x!=null)l&&p[x]!==void 0&&(m=p[x],p[x]=void 0,l--);else if(!m&&f<b){for(h=f;h<b;h++)if(s[h]!==void 0&&$e(A=s[h],P,r)){m=A,s[h]=void 0,h===b-1&&b--,h===f&&f++;break}}}m=V(m,P,o,n),C=i[y],m&&m!==t&&m!==C&&(C==null?t.appendChild(m):m===C.nextSibling?ke(C):t.insertBefore(m,C))}if(l)for(var y in p)p[y]!==void 0&&$(p[y],!1);for(;f<=b;)(m=s[b--])!==void 0&&$(m,!1)}function $(t,e){t.prevProps!=null&&t.prevProps.ref&&(typeof t.prevProps.ref=="function"?t.prevProps.ref(null):t.prevProps.ref.current&&(t.prevProps.ref.current=null)),(e===!1||t.prevProps==null)&&ke(t),Ve(t)}function Ve(t){for(t=t.lastChild;t;){var e=t.previousSibling;$(t,!0),t=e}}function qe(t,e,r,o,n){var i,s=t.update,p;t.receiveProps&&(p=Object.assign({},r));for(i in r)!(e&&e[i]!=null)&&r[i]!=null&&(X(t,i,r[i],r[i]=void 0,N,o),s&&delete t.props[i]);for(i in e)if(s&&typeof e[i]=="object"&&i!=="ref"){i==="style"&&X(t,i,r[i],r[i]=e[i],N,o);var l=ue(i);t.props[l]=r[l]=e[i]}else if(i!=="children"&&(!(i in r)||e[i]!==(i==="value"||i==="checked"?t[i]:r[i])))if(X(t,i,r[i],e[i],N,o),t.nodeName.indexOf("-")!==-1){t.props=t.props||{};var f=ue(i);t.props[f]=r[f]=e[i]}else r[i]=e[i];s&&!n&&t.parentNode&&t.receiveProps(t.props,p)!==!1&&t.update()}function Je(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ge(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Xe(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Ze=0,D=function(t){Xe(e,t);function e(){Je(this,e);var r=Ge(this,t.call(this));return r.props=Object.assign({},r.constructor.defaultProps,r.props),r.elementId=Ze++,r.computed={},r.isInstalled=!1,r}return e.prototype.connectedCallback=function(){for(var o=this,n=this.parentNode;n&&!this.store;)this.store=n.store,n=n.parentNode||n.host;if(this.inject){this.injection={},n=this.parentNode;for(var i;n&&!i;)i=n.provide,n=n.parentNode||n.host;if(i)this.inject.forEach(function(h){o.injection[h]=i[h]});else throw"The provide prop was not found on the parent node or the provide type is incorrect."}this.attrsToProps(),this.beforeInstall(),this.install(),this.afterInstall();var s;if(this.constructor.isLightDom)s=this;else if(!this.shadowRoot)s=this.attachShadow({mode:"open"});else{s=this.shadowRoot;for(var p;p=s.firstChild;)s.removeChild(p)}if(this.constructor.elementStyles)s.adoptedStyleSheets=this.constructor.elementStyles;else{var l=this.constructor.css;if(l){if(typeof l=="string"){var f=new CSSStyleSheet;f.replaceSync(l),s.adoptedStyleSheets=[f]}else if(Object.prototype.toString.call(l)==="[object Array]"){var d=[];l.forEach(function(h){if(typeof h=="string"){var A=new CSSStyleSheet;A.replaceSync(h),d.push(A)}else d.push(h);s.adoptedStyleSheets=d})}else if(l.default&&typeof l.default=="string"){var b=new CSSStyleSheet;b.replaceSync(l.default),s.adoptedStyleSheets=[b]}else s.adoptedStyleSheets=[l];this.constructor.elementStyles=s.adoptedStyleSheets}}this.beforeRender(),g.afterInstall&&g.afterInstall(this);var w=this.render(this.props,this.store);this.rootNode=Y(null,w,null,this),this.rendered(),this.css&&s.appendChild(pe(typeof this.css=="function"?this.css():this.css)),this.props.css&&(this._customStyleElement=pe(this.props.css),this._customStyleContent=this.props.css,s.appendChild(this._customStyleElement)),Z(this.rootNode)?this.rootNode.forEach(function(h){s.appendChild(h)}):this.rootNode&&s.appendChild(this.rootNode),this.installed(),this.isInstalled=!0},e.prototype.disconnectedCallback=function(){this.uninstall(),this.isInstalled=!1},e.prototype.update=function(o,n){this._willUpdate=!0,this.beforeUpdate(),this.beforeRender(),this._customStyleContent!=this.props.css&&(this._customStyleContent=this.props.css,this._customStyleElement.textContent=this._customStyleContent),this.attrsToProps(o);var i=this.render(this.props,this.store);this.rendered(),this.rootNode=Y(this.rootNode,i,this.constructor.isLightDom?this:this.shadowRoot,this,n),this._willUpdate=!1,this.updated()},e.prototype.forceUpdate=function(){this.update(!0)},e.prototype.updateProps=function(o){var n=this;Object.keys(o).forEach(function(i){n.props[i]=o[i],n.prevProps&&(n.prevProps[i]=o[i])}),this.forceUpdate()},e.prototype.updateSelf=function(o){this.update(o,!0)},e.prototype.removeAttribute=function(o){t.prototype.removeAttribute.call(this,o),this.isInstalled&&this.update()},e.prototype.setAttribute=function(o,n){n&&typeof n=="object"?t.prototype.setAttribute.call(this,o,JSON.stringify(n)):t.prototype.setAttribute.call(this,o,n),this.isInstalled&&this.update()},e.prototype.pureRemoveAttribute=function(o){t.prototype.removeAttribute.call(this,o)},e.prototype.pureSetAttribute=function(o,n){t.prototype.setAttribute.call(this,o,n)},e.prototype.attrsToProps=function(o){if(!(o||this.store&&this.store.ignoreAttrs||this.props.ignoreAttrs)){var n=this;n.props.css=n.getAttribute("css");var i=this.constructor.propTypes;!i||Object.keys(i).forEach(function(s){var p=i[s],l=n.getAttribute(Le(s));if(l!==null)switch(p){case String:n.props[s]=l;break;case Number:n.props[s]=Number(l);break;case Boolean:l==="false"||l==="0"?n.props[s]=!1:n.props[s]=!0;break;case Array:case Object:l[0]===":"?n.props[s]=Ie(l.substr(1),Omi.$):n.props[s]=JSON.parse(l.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g,'"$2":$4').replace(/'([\s\S]*?)'/g,'"$1"').replace(/,(\s*})/g,"$1"));break}else n.constructor.defaultProps&&n.constructor.defaultProps.hasOwnProperty(s)?n.props[s]=n.constructor.defaultProps[s]:n.props[s]=null})}},e.prototype.fire=function(o,n){var i=this.props["on"+Te(o)];i?i(new CustomEvent(o,{detail:n})):this.dispatchEvent(new CustomEvent(o,{detail:n}))},e.prototype.beforeInstall=function(){},e.prototype.install=function(){},e.prototype.afterInstall=function(){},e.prototype.installed=function(){},e.prototype.uninstall=function(){},e.prototype.beforeUpdate=function(){},e.prototype.updated=function(){},e.prototype.beforeRender=function(){},e.prototype.rendered=function(){},e.prototype.receiveProps=function(){},e}(HTMLElement);D.is="WeElement";function Qe(t,e,r){return e=typeof e=="string"?document.querySelector(e):e,r&&(e.store=r),Y(null,t,e,!1)}function Ye(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ye(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Ke(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var et=["use","useSelf"];function te(t,e,r){if(!customElements.get(t)&&!g.mapping[t])if(e.is==="WeElement")customElements.define(t,e),g.mapping[t]=e;else{typeof r=="string"?r={css:r}:r=r||{};var o=function(s){Ke(p,s);function p(){var l,f,d;Ye(this,p);for(var b=arguments.length,w=Array(b),h=0;h<b;h++)w[h]=arguments[h];return d=(l=(f=ye(this,s.call.apply(s,[this].concat(w))),f),f.compute=r.compute,l),ye(f,d)}return p.prototype.render=function(){return e.call(this,this)},p}(D);o.css=r.css,o.propTypes=r.propTypes,o.defaultProps=r.defaultProps,o.isLightDom=r.isLightDom;var n=function(p){typeof r[p]=="function"&&(o.prototype[p]=function(){return r[p].apply(this,arguments)})};for(var i in r)n(i);et.forEach(function(s){r[s]&&r[s]!=="function"&&(o.prototype[s]=function(){return r[s]})}),customElements.define(t,o),g.mapping[t]=o}}function xe(t){return function(e){te(t,e)}}function tt(t,e){return E(t.nodeName,fe(fe({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function rt(t){for(var e=t.parentNode;e;){if(e.host)return e.host;if(e.shadowRoot&&e.shadowRoot.host)return e.shadowRoot.host;e=e.parentNode}}function nt(t){return t.replace(/([1-9]\d*|0)(\.\d*)*rpx/g,function(e,r){return window.innerWidth*Number(r)/750+"px"})}var ot={}.hasOwnProperty;function re(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(!!r){var o=typeof r;if(o==="string"||o==="number")t.push(r);else if(Array.isArray(r)&&r.length){var n=re.apply(null,r);n&&t.push(n)}else if(o==="object")for(var i in r)ot.call(r,i)&&r[i]&&t.push(i)}}return t.join(" ")}function Ce(){var t=Array.prototype.slice.call(arguments,0),e=t[0],r=t.slice(1);if(e.class?(r.unshift(e.class),delete e.class):e.className&&(r.unshift(e.className),delete e.className),r.length>0)return{class:re.apply(null,r)}}function it(t){return JSON.stringify(t)}(function(){if(typeof document=="undefined"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,n=Object.defineProperty,i=Array.prototype.forEach,s=/@import.+?;?$/gm;function p(c){var a=c.replace(s,"");return a!==c&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),a.trim()}function l(c){return"isConnected"in c?c.isConnected:document.contains(c)}function f(c){return c.filter(function(a,u){return c.indexOf(a)===u})}function d(c,a){return c.filter(function(u){return a.indexOf(u)===-1})}function b(c){c.parentNode.removeChild(c)}function w(c){return c.shadowRoot||r.get(c)}var h=["addRule","deleteRule","insertRule","removeRule"],A=CSSStyleSheet,C=A.prototype;C.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},C.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function P(c){return typeof c=="object"?j.isPrototypeOf(c)||C.isPrototypeOf(c):!1}function m(c){return typeof c=="object"?C.isPrototypeOf(c):!1}var y=new WeakMap,k=new WeakMap,O=new WeakMap,x=new WeakMap;function Ne(c,a){var u=document.createElement("style");return O.get(c).set(a,u),k.get(c).push(a),u}function R(c,a){return O.get(c).get(a)}function Pe(c,a){O.get(c).delete(a),k.set(c,k.get(c).filter(function(u){return u!==a}))}function ne(c,a){requestAnimationFrame(function(){a.textContent=y.get(c).textContent,x.get(c).forEach(function(u){return a.sheet[u.method].apply(a.sheet,u.args)})})}function z(c){if(!y.has(c))throw new TypeError("Illegal invocation")}function q(){var c=this,a=document.createElement("style");e.body.appendChild(a),y.set(c,a),k.set(c,[]),O.set(c,new WeakMap),x.set(c,[])}var j=q.prototype;j.replace=function(a){try{return this.replaceSync(a),Promise.resolve(this)}catch(u){return Promise.reject(u)}},j.replaceSync=function(a){if(z(this),typeof a=="string"){var u=this;y.get(u).textContent=p(a),x.set(u,[]),k.get(u).forEach(function(S){S.isConnected()&&ne(u,R(u,S))})}},n(j,"cssRules",{configurable:!0,enumerable:!0,get:function(){return z(this),y.get(this).sheet.cssRules}}),n(j,"media",{configurable:!0,enumerable:!0,get:function(){return z(this),y.get(this).sheet.media}}),h.forEach(function(c){j[c]=function(){var a=this;z(a);var u=arguments;x.get(a).push({method:c,args:u}),k.get(a).forEach(function(_){if(_.isConnected()){var v=R(a,_).sheet;v[c].apply(v,u)}});var S=y.get(a).sheet;return S[c].apply(S,u)}}),n(q,Symbol.hasInstance,{configurable:!0,value:P});var oe={childList:!0,subtree:!0},ie=new WeakMap;function L(c){var a=ie.get(c);return a||(a=new ae(c),ie.set(c,a)),a}function se(c){n(c.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return L(this).sheets},set:function(a){L(this).update(a)}})}function J(c,a){for(var u=document.createNodeIterator(c,NodeFilter.SHOW_ELEMENT,function(_){return w(_)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),S=void 0;S=u.nextNode();)a(w(S))}var F=new WeakMap,T=new WeakMap,U=new WeakMap;function Oe(c,a){return a instanceof HTMLStyleElement&&T.get(c).some(function(u){return R(u,c)})}function ce(c){var a=F.get(c);return a instanceof Document?a.body:a}function G(c){var a=document.createDocumentFragment(),u=T.get(c),S=U.get(c),_=ce(c);S.disconnect(),u.forEach(function(v){a.appendChild(R(v,c)||Ne(v,c))}),_.insertBefore(a,null),S.observe(_,oe),u.forEach(function(v){ne(v,R(v,c))})}function ae(c){var a=this;a.sheets=[],F.set(a,c),T.set(a,[]),U.set(a,new MutationObserver(function(u,S){if(!document){S.disconnect();return}u.forEach(function(_){t||i.call(_.addedNodes,function(v){v instanceof Element&&J(v,function(I){L(I).connect()})}),i.call(_.removedNodes,function(v){v instanceof Element&&(Oe(a,v)&&G(a),t||J(v,function(I){L(I).disconnect()}))})})}))}if(ae.prototype={isConnected:function(){var c=F.get(this);return c instanceof Document?c.readyState!=="loading":l(c.host)},connect:function(){var c=ce(this);U.get(this).observe(c,oe),T.get(this).length>0&&G(this),J(c,function(a){L(a).connect()})},disconnect:function(){U.get(this).disconnect()},update:function(c){var a=this,u=F.get(a)===document?"Document":"ShadowRoot";if(!Array.isArray(c))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+u+": Iterator getter is not callable.");if(!c.every(P))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+u+": Failed to convert value to 'CSSStyleSheet'");if(c.some(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+u+": Can't adopt non-constructed stylesheets");a.sheets=c;var S=T.get(a),_=f(c),v=d(S,_);v.forEach(function(I){b(R(I,a)),Pe(I,a)}),T.set(a,_),a.isConnected()&&_.length>0&&G(a)}},window.CSSStyleSheet=q,se(Document),"ShadowRoot"in window){se(ShadowRoot);var le=Element.prototype,Ae=le.attachShadow;le.attachShadow=function(a){var u=Ae.call(this,a);return a.mode==="closed"&&r.set(this,u),u}}var B=L(document);B.isConnected()?B.connect():document.addEventListener("DOMContentLoaded",B.connect.bind(B))})();E.f=K;function st(){return{}}var ct={},at=D,lt=te,pt=g.mapping,Ee={tag:xe,WeElement:D,Component:at,render:Qe,h:E,createElement:E,options:g,define:te,cloneElement:tt,getHost:rt,rpx:nt,defineElement:lt,classNames:re,extractClass:Ce,createRef:st,o:it,elements:pt,$:ct,extend:We,get:ze,set:De,bind:Fe,unbind:Ue};g.root.Omi=Ee;g.root.omi=Ee;g.root.Omi.version="6.23.0";var ut=Object.defineProperty,ft=Object.defineProperties,ht=Object.getOwnPropertyDescriptors,ve=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable,ge=(t,e,r)=>e in t?ut(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,me=(t,e)=>{for(var r in e||(e={}))dt.call(e,r)&&ge(t,r,e[r]);if(ve)for(var r of ve(e))bt.call(e,r)&&ge(t,r,e[r]);return t},yt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor;let H=class extends D{constructor(){super(...arguments),this.changeHandler=t=>{this.props.disabled||(this.props.checked=!this.props.checked,this.update(),this.fire("change",t.currentTarget.checked),this.props.indeterminate&&(this.props.checked=!0,this.props.indeterminate=!1,this.prevProps&&(this.prevProps.checked=!0,this.prevProps.indeterminate=!1),this.update(!0)))}}render(t){return E("div",me({},Ce(t,"o-checkbox",{"o-checkbox__disabled":t.disabled,"o-checkbox__indeterminate":t.indeterminate})),E("input",(e=me({type:"checkbox",disabled:t.disabled,onChange:this.changeHandler},function(r,o){if(typeof o!="string"){const n={};return o.forEach(i=>{r.hasOwnProperty(i)&&(n[i]=r[i])}),n}if(r.hasOwnProperty(o))return{[o]:r[o]}}(t,["checked","value","indeterminate"])),ft(e,ht({class:"o-checkbox__native-control",id:"checkbox"})))),E("div",{class:"o-checkbox__background"},E("svg",{class:"o-checkbox__checkmark",viewBox:"0 0 24 24"},E("path",{class:"o-checkbox__checkmark-path",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),E("div",{class:"o-checkbox__mixedmark"})),t.label&&E("label",{class:"o-checkbox__label",for:"checkbox"},t.label));var e}};H.css=`:host {
  display: inline-block;
}

* {
  box-sizing: border-box;
}

.o-checkbox {
  position: relative;
  font-size: 14px;
  line-height: 14px;
  height: 14px;
  white-space: nowrap;
}

.o-checkbox:hover {
  cursor: pointer;
}

.o-checkbox__native-control:enabled:checked ~ .o-checkbox__background,
.o-checkbox__native-control:enabled:indeterminate ~ .o-checkbox__background {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  background-color: #07c160;
  background-color: var(--o-primary, #07c160);
  opacity: 1;
}

.o-checkbox__indeterminate .o-checkbox__checkmark {
  opacity: 0;
}

.o-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 1;
  transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  color: #ffffff;
}

.o-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.78334;
  stroke-dasharray: 29.78334;
}

.o-checkbox__native-control:checked ~ .o-checkbox__background .o-checkbox__checkmark-path,
.o-checkbox__native-control:indeterminate ~ .o-checkbox__background .o-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.o-checkbox__background {
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 45%;
  height: 45%;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
}

.o-checkbox__background,
.o-checkbox__label {
  display: inline-block;
  height: 14px;
  vertical-align: middle;
}

.o-checkbox__background {
  width: 14px;
}

.o-checkbox__label {
  margin-left: 10px;
}

.o-checkbox__native-control:indeterminate ~ .o-checkbox__background .o-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

.o-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border: 1px solid white;
  top: 50%;
  position: relative;
  margin-top: -1px;
  opacity: 0;
  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
}

.o-checkbox__native-control {
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
}

.o-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .o-checkbox__background {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.54);
  color: white;
}

.o-checkbox__native-control:disabled:checked ~ .o-checkbox__background,
.o-checkbox__native-control:disabled:indeterminate ~ .o-checkbox__background {
  border-color: #07c160;
  border-color: var(--o-primary, #07c160);
  background-color: #07c160;
  background-color: var(--o-primary, #07c160);
  opacity: 0.5;
}

.o-checkbox__native-control:disabled:not(:checked):not(:indeterminate) ~ .o-checkbox__background {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.34);
  color: white;
}

.o-checkbox__disabled .o-checkbox__label {
  color: #888;
}

.o-checkbox__disabled:hover {
  cursor: not-allowed;
}`,H.propTypes={label:String,disabled:Boolean,indeterminate:Boolean,checked:Boolean,value:String},H=((t,e,r,o)=>{for(var n,i=o>1?void 0:o?vt(e,r):e,s=t.length-1;s>=0;s--)(n=t[s])&&(i=(o?n(e,r,i):n(i))||i);return o&&i&&yt(e,r,i),i})([xe("o-checkbox")],H);
