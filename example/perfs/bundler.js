!function(e){function t(r){if(n[r])return n[r].exports
var i=n[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={}
return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e}
return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=15)}([function(e,t,n){"use strict"
function r(e){return e&&"Widget"===e.type}e.exports=r},function(e,t,n){"use strict"
e.exports="2"},function(e,t,n){"use strict"
function r(e){return e&&"VirtualNode"===e.type&&e.version===i}var i=n(1)
e.exports=r},function(e,t,n){"use strict"
function r(e){return e&&"Thunk"===e.type}e.exports=r},function(e,t,n){"use strict"
function r(e){return e&&("function"==typeof e.hook&&!e.hasOwnProperty("hook")||"function"==typeof e.unhook&&!e.hasOwnProperty("unhook"))}e.exports=r},function(e,t,n){"use strict"
function r(e){return e&&"VirtualText"===e.type&&e.version===i}var i=n(1)
e.exports=r},function(e,t,n){"use strict"
function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0})
var i=n(17),o=r(i),a=n(28),u=r(a),s={x:o["default"],tags:(0,u["default"])(o["default"]),instances:{},_instanceId:0,PREFIX:"__s_",getInstanceId:function(){return s._instanceId++},plugins:{},scopedStyle:!0,customTags:[],mapping:{},style:{},componentConstructor:{}}
s.$=function(e,t){return t?t.querySelector(e):document.querySelector(e)},s.$$=function(e,t){return t?Array.prototype.slice.call(t.querySelectorAll(e)):Array.prototype.slice.call(document.querySelectorAll(e))},s._capitalize=function(e){return e=e.toLowerCase(),e=e.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}).replace(/-/g,"")},s.tag=function(e,t){var n=e.toUpperCase()
s.componentConstructor[n]=t,s.customTags.push(n,n.replace(/-/g,"")),t.is=n,document.documentMode<9&&document.createElement(e.toLowerCase())
var r=s._capitalize(e)
s.tags[r]=s.tags.createTag(r)},s.getConstructor=function(e){for(var t in s.componentConstructor)if(t===e||t.replace(/-/g,"")===e)return s.componentConstructor[t]},s.render=function(e,t,n){return e.renderTo="string"==typeof t?document.querySelector(t):t,"boolean"==typeof n?e._omi_increment=n:n&&(e._omi_increment=n.increment),e.install(),e.beforeRender(),e._render(!0),e._childrenInstalled(e),e.installed(),e._execInstalledHandlers(),e},s.get=function(e){return s.mapping[e]},s.extendPlugin=function(e,t){s.plugins[e]=t},s.deletePlugin=function(e){delete s.plugins[e]},t["default"]=s},function(e,t,n){"use strict"
function r(e){return"[object Array]"===o.call(e)}var i=Array.isArray,o=Object.prototype.toString
e.exports=i||r},function(e,t,n){"use strict"
var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
r=function(){return this}()
try{r=r||Function("return this")()||(1,eval)("this")}catch(o){"object"===("undefined"==typeof window?"undefined":i(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict"
function r(e,t,n){this.type=+e,this.vNode=t,this.patch=n}var i=n(1)
r.NONE=0,r.VTEXT=1,r.VNODE=2,r.WIDGET=3,r.PROPS=4,r.ORDER=5,r.INSERT=6,r.REMOVE=7,r.THUNK=8,e.exports=r,r.prototype.version=i,r.prototype.type="VirtualPatch"},function(e,t,n){"use strict"
function r(e,t){var n=e,r=t
return s(t)&&(r=i(t,e)),s(e)&&(n=i(e,null)),{a:n,b:r}}function i(e,t){var n=e.vnode
if(n||(n=e.vnode=e.render(t)),!(o(n)||a(n)||u(n)))throw Error("thunk did not return a valid node")
return n}var o=n(2),a=n(5),u=n(0),s=n(3)
e.exports=r},function(e,t,n){"use strict"
var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
e.exports=function(e){return"object"===(void 0===e?"undefined":r(e))&&null!==e}},function(e,t,n){"use strict";(function(t){var r,i=void 0!==t?t:"undefined"!=typeof window?window:{},o=n(36)
"undefined"!=typeof document?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=o)),e.exports=r}).call(t,n(8))},function(e,t,n){"use strict"
function r(e,t){var n=t?t.document||i:i,f=t?t.warn:null
if(e=l(e).a,s(e))return e.init()
if(u(e))return n.createTextNode(e.text)
if(!a(e))return f&&f("Item is not a valid virtual dom node",e),null
var c=null===e.namespace?n.createElement(e.tagName):n.createElementNS(e.namespace,e.tagName),d=e.properties
o(c,d)
for(var p=e.children,v=0;v<p.length;v++){var h=r(p[v],t)
h&&c.appendChild(h)}return c}var i=n(12),o=n(14),a=n(2),u=n(5),s=n(0),l=n(10)
e.exports=r},function(e,t,n){"use strict"
function r(e,t,n){for(var r in t){var a=t[r]
void 0===a?i(e,r,a,n):s(a)?(i(e,r,a,n),a.hook&&a.hook(e,r,n?n[r]:void 0)):u(a)?o(e,t,n,r,a):("function"!=typeof a&&e.setAttribute(r,a),e[r]=a)}}function i(e,t,n,r){if(r){var i=r[t]
if(s(i))i.unhook&&i.unhook(e,t,n)
else if("attributes"===t)for(var o in i)e.removeAttribute(o)
else if("style"===t)for(var a in i)e.style[a]=""
else"string"==typeof i?e[t]="":e[t]=null}}function o(e,t,n,r,i){var o=n?n[r]:void 0
if("attributes"!==r){if(o&&u(o)&&a(o)!==a(i))return void(e[r]=i)
u(e[r])||(e[r]={})
var s="style"===r?"":void 0
for(var l in i){var f=i[l]
e[r][l]=void 0===f?s:f}}else for(var c in i){var d=i[c]
void 0===d?e.removeAttribute(c):e.setAttribute(c,d)}}function a(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}var u=n(11),s=n(4)
e.exports=r},function(e,t,n){"use strict"
function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(16),l=r(s),f=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"install",value:function(){this.data.databases=[]}},{key:"loadSamples",value:function(){this.data.databases=ENV.generateData().toArray(),Monitoring.renderRate.ping(),this.update(),setTimeout(this.loadSamples.bind(this),ENV.timeout)}},{key:"installed",value:function(){this.loadSamples()}},{key:"render",value:function(){return l["default"].x("div",null,[l["default"].x("table",{className:"table table-striped latest-data"},[l["default"].x("tbody",null,[this.data.databases.map(function(e){return l["default"].x("tr",{key:e.dbname},[l["default"].x("td",{className:"dbname"},[e.dbname]),l["default"].x("td",{className:"query-count"},[l["default"].x("span",{className:e.lastSample.countClassName},[e.lastSample.nbQueries])]),e.lastSample.topFiveQueries.map(function(e,t){return l["default"].x("td",{className:"Query "+e.elapsedClassName},[e.formatElapsed,l["default"].x("div",{className:"popover left"},[l["default"].x("div",{className:"popover-content"},[e.query]),l["default"].x("div",{className:"arrow"})])])})])})])])])}}]),t}(l["default"].Component)
l["default"].render(new f,document.getElementById("dbmon"))},function(e,t,n){"use strict"
function r(e){return e&&e.__esModule?e:{"default":e}}var i=n(6),o=r(i),a=n(29),u=r(a)
o["default"].Component=u["default"],window&&window.Omi?e.exports=window.Omi:(window&&(window.Omi=o["default"]),e.exports=o["default"])},function(e,t,n){"use strict"
var r=n(18)
e.exports=r},function(e,t,n){"use strict"
function r(e,t,n){var r,a,s,l,f=[]
return!n&&u(t)&&(n=t,a={}),a=a||t||{},r=g(e,a),a.hasOwnProperty("key")&&(s=a.key,a.key=void 0),a.hasOwnProperty("namespace")&&(l=a.namespace,a.namespace=void 0),"INPUT"!==r||l||!a.hasOwnProperty("value")||void 0===a.value||y(a.value)||(a.value=_(a.value)),o(a),void 0!==n&&null!==n&&i(n,f,r,a),new c(r,a,f,s,l)}function i(e,t,n,r){if("string"==typeof e)t.push(new d(e))
else if("number"==typeof e)t.push(new d(e+""))
else if(a(e))t.push(e)
else{if(!f(e)){if(null===e||void 0===e||e===!1)return
throw s({foreignObject:e,parentVnode:{tagName:n,properties:r}})}for(var o=0;o<e.length;o++)i(e[o],t,n,r)}}function o(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t]
if(y(n))continue
"ev-"===t.substr(0,3)&&(e[t]=b(n))}}function a(e){return p(e)||v(e)||h(e)||m(e)}function u(e){return"string"==typeof e||f(e)||a(e)}function s(e){var t=Error()
return t.type="virtual-hyperscript.unexpected.virtual-element",t.message="Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n"+l(e.foreignObject)+".\nThe parent vnode is:\n"+l(e.parentVnode),t.foreignObject=e.foreignObject,t.parentVnode=e.parentVnode,t}function l(e){try{return JSON.stringify(e,null,"    ")}catch(t){return e+""}}var f=n(7),c=n(19),d=n(20),p=n(2),v=n(5),h=n(0),y=n(4),m=n(3),g=n(21),_=n(23),b=n(24)
e.exports=r},function(e,t,n){"use strict"
function r(e,t,n,r,i){this.tagName=e,this.properties=t||l,this.children=n||f,this.key=null!=r?r+"":void 0,this.namespace="string"==typeof i?i:null
var c,d=n&&n.length||0,p=0,v=!1,h=!1,y=!1
for(var m in t)if(t.hasOwnProperty(m)){var g=t[m]
s(g)&&g.unhook&&(c||(c={}),c[m]=g)}for(var _=0;d>_;_++){var b=n[_]
o(b)?(p+=b.count||0,!v&&b.hasWidgets&&(v=!0),!h&&b.hasThunks&&(h=!0),y||!b.hooks&&!b.descendantHooks||(y=!0)):!v&&a(b)?"function"==typeof b.destroy&&(v=!0):!h&&u(b)&&(h=!0)}this.count=d+p,this.hasWidgets=v,this.hasThunks=h,this.hooks=c,this.descendantHooks=y}var i=n(1),o=n(2),a=n(0),u=n(3),s=n(4)
e.exports=r
var l={},f=[]
r.prototype.version=i,r.prototype.type="VirtualNode"},function(e,t,n){"use strict"
function r(e){this.text=e+""}var i=n(1)
e.exports=r,r.prototype.version=i,r.prototype.type="VirtualText"},function(e,t,n){"use strict"
function r(e,t){if(!e)return"DIV"
var n=!t.hasOwnProperty("id"),r=i(e,o),u=null
a.test(r[1])&&(u="DIV")
var s,l,f,c
for(c=0;c<r.length;c++)l=r[c],l&&(f=l.charAt(0),u?"."===f?(s=s||[],s.push(l.substring(1,l.length))):"#"===f&&n&&(t.id=l.substring(1,l.length)):u=l)
return s&&(t.className&&s.push(t.className),t.className=s.join(" ")),t.namespace?u:u.toUpperCase()}var i=n(22),o=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,a=/^\.|#/
e.exports=r},function(e,t,n){"use strict"
e.exports=function(e){var t,n=String.prototype.split,r=/()??/.exec("")[1]===e
return t=function(t,i,o){if("[object RegExp]"!==Object.prototype.toString.call(i))return n.call(t,i,o)
var a,u,s,l,f=[],c=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.extended?"x":"")+(i.sticky?"y":""),d=0,i=RegExp(i.source,c+"g")
for(t+="",r||(a=RegExp("^"+i.source+"$(?!\\s)",c)),o=o===e?-1>>>0:o>>>0;(u=i.exec(t))&&(s=u.index+u[0].length,!(s>d&&(f.push(t.slice(d,u.index)),!r&&u.length>1&&u[0].replace(a,function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(u[t]=e)}),u.length>1&&u.index<t.length&&Array.prototype.push.apply(f,u.slice(1)),l=u[0].length,d=s,f.length>=o)));)i.lastIndex===u.index&&i.lastIndex++
return d===t.length?(l||!i.test(""))&&f.push(""):f.push(t.slice(d)),f.length>o?f.slice(0,o):f}}()},function(e,t,n){"use strict"
function r(e){return this instanceof r?void(this.value=e):new r(e)}e.exports=r,r.prototype.hook=function(e,t){e[t]!==this.value&&(e[t]=this.value)}},function(e,t,n){"use strict"
function r(e){return this instanceof r?void(this.value=e):new r(e)}var i=n(25)
e.exports=r,r.prototype.hook=function(e,t){var n=i(e),r=t.substr(3)
n[r]=this.value},r.prototype.unhook=function(e,t){var n=i(e),r=t.substr(3)
n[r]=void 0}},function(e,t,n){"use strict"
function r(e){var t=e[a]
return t||(t=e[a]={}),t}var i=n(26),o="7"
i("ev-store",o)
var a="__EV_STORE_KEY@"+o
e.exports=r},function(e,t,n){"use strict"
function r(e,t,n){var r="__INDIVIDUAL_ONE_VERSION_"+e,o=r+"_ENFORCE_SINGLETON",a=i(o,t)
if(a!==t)throw Error("Can only have one copy of "+e+".\nYou already have version "+a+" installed.\nThis means you cannot install version "+t)
return i(r,n)}var i=n(27)
e.exports=r},function(e,t,n){"use strict";(function(t){function n(e,t){return e in r?r[e]:(r[e]=t,t)}var r="undefined"!=typeof window?window:void 0!==t?t:{}
e.exports=n}).call(t,n(8))},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(e){return"string"==typeof e&&e.length>0},i=function(e,t){return e[0]===t},o=function(e){return r(e)&&(i(e,".")||i(e,"#"))},a=function(e){return function(t){return function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;r>a;a++)i[a-1]=arguments[a]
return o(n)?e.apply(void 0,[t+n].concat(i)):void 0===n?e(t):e.apply(void 0,[t,n].concat(i))}}},u=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]
t["default"]=function(e){var t=a(e),n={TAG_NAMES:u,isSelector:o,createTag:t}
return u.forEach(function(e){n[e]=t(e)}),n},e.exports=t["default"]},function(e,t,n){"use strict"
function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0})
var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(6),u=r(a),s=n(30),l=r(s),f=n(31),c=r(f),d=n(34),p=r(d),v=n(40),h=r(v),y=function(){function e(t){i(this,e),this.data=Object.assign({scopedSelfCSS:!1,selfDataFirst:!1},t),this.id=u["default"].getInstanceId(),this.children=[],this._omi_scopedAttr=u["default"].PREFIX+this.id,u["default"].instances[this.id]=this,this.refs={}}return o(e,[{key:"render",value:function(){}},{key:"install",value:function(){}},{key:"beforeUpdate",value:function(){}},{key:"update",value:function(){this._preVirtualDom=this._virtualDom,this._virtualDom=this.render(),this._normalize(this._virtualDom),(0,p["default"])(this.node,(0,c["default"])(this._preVirtualDom,this._virtualDom))}},{key:"_childrenAfterUpdate",value:function(e){var t=this
e.children.forEach(function(e){t._childrenAfterUpdate(e),e.afterUpdate()})}},{key:"afterUpdate",value:function(){}},{key:"beforeRender",value:function(){}},{key:"installed",value:function(){}},{key:"style",value:function(){}},{key:"onInstalled",value:function(e){this._omi_installedHandlers||(this._omi_installedHandlers=[]),this._omi_installedHandlers.push(e)}},{key:"_execInstalledHandlers",value:function(){this._omi_installedHandlers&&this._omi_installedHandlers.forEach(function(e){e()})}},{key:"_render",value:function(){if(this._virtualDom=this.render(),this._normalize(this._virtualDom),this.renderTo){for(this.node=(0,h["default"])(this._virtualDom);this.renderTo.firstChild;)this.renderTo.removeChild(this.renderTo.firstChild)
this.renderTo.appendChild(this.node)}}},{key:"_generateCSS",value:function(){var e=this.constructor.is
this.CSS=(this.style()||"").replace(/<\/?style>/g,"")
var t=e?u["default"].PREFIX+e.toLowerCase():this._omi_scopedAttr
this.CSS&&(this.data.scopedSelfCSS||!u["default"].style[t])&&(u["default"].scopedStyle&&(this.CSS=l["default"].scoper(this.CSS,this.data.scopedSelfCSS?"["+this._omi_scopedAttr+"]":"["+t+"]")),u["default"].style[t]=this.CSS,this.CSS!==this._preCSS&&(l["default"].addStyle(this.CSS,this.id),this._preCSS=this.CSS))}},{key:"_normalize",value:function(e,t,n,r){var i=this
if(e.tagName&&-1!==u["default"].customTags.indexOf(e.tagName)){var o=this._getNextChild(e.tagName,r)
if(o)o.data.selfDataFirst?o.data=Object.assign({},e.properties,o.data):o.data=Object.assign({},o.data,e.properties),o.beforeUpdate(),o.beforeRender(),o._render(),t[n]=o._virtualDom
else{var a=u["default"].getConstructor(e.tagName)
if(a){var s=new a(e.properties)
void 0!==s.data.children&&(s.data._children=s.data.children,console.warn("The children property will be covered.access it by _children")),s.data.children=e.children,s.install(),s.beforeRender(),s._render(),s.parent=r,s._omi_needInstalled=!0,r?(s.parent=r,s._omi_instanceIndex=r.children.length,r.children.push(s),t[n]=s._virtualDom,e.properties["omi-name"]&&(r[e.properties["omi-name"]]=s)):(this._virtualDom=s._virtualDom,e.properties["omi-name"]&&(this[e.properties["omi-name"]]=s)),e.properties["omi-id"]&&(u["default"].mapping[e.properties["omi-id"]]=s)}}}e.children&&e.children.forEach(function(t,n){i._normalize(t,e.children,n,i)})}},{key:"_resetUsing",value:function(e){var t=this
e.children.forEach(function(e){t._resetUsing(e),e._using=!1})}},{key:"_getNextChild",value:function(e,t){if(t)for(var n=0,r=t.children.length;r>n;n++){var i=t.children[n]
if(e===i.constructor.is&&!i._using)return i._using=!0,i}}},{key:"_childrenInstalled",value:function(e){var t=this
e.children.forEach(function(e){t._childrenInstalled(e),e._omi_needInstalled&&e.installed(),e._omi_needInstalled=!1,e._execInstalledHandlers()})}},{key:"_mixPlugins",value:function(){var e=this
Object.keys(u["default"].plugins).forEach(function(t){var n=u["default"].$$("*["+t+"]",e.node)
n.forEach(function(n){n.hasAttribute(e._omi_scopedAttr)&&u["default"].plugins[t](n,e)}),e.node.hasAttribute(t)&&u["default"].plugins[t](e.node,e)})}},{key:"_mixRefs",value:function(){var e=this
this.refs={}
var t=u["default"].$$("*[ref]",this.node)
t.forEach(function(t){t.hasAttribute(e._omi_scopedAttr)&&(e.refs[t.getAttribute("ref")]=t)})
var n=this.node.getAttribute("ref")
n&&(this.refs[n]=this.node)}},{key:"_mixAttr",value:function(e){e._mixRefs(),e._mixPlugins(),e.children.forEach(function(t,n){t._omi_instanceIndex=n,t.node=u["default"].$("["+t._omi_scopedAttr+"]",e.node),e._mixAttr(t)})}}]),e}()
t["default"]=y},function(e,t,n){"use strict"
function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){e=e.replace(/\/\*[^*]*\*+([^\/][^*]*\*+)*\//g,"")
var n=RegExp("([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|s*{)","g")
return e=e.replace(n,function(e,n,r,i){if(void 0===r&&(r=""),n.match(/^\s*(@media|\d+%?|@-webkit-keyframes|@keyframes|to|from|@font-face)/))return n+r+i
var o=n.replace(/(\s*)$/,"")+t+r,a=t+" "+n.trim()+r
return o+","+a+i})}function o(e,t){var n=document.getElementById(u["default"].PREFIX+t),r=document.getElementsByTagName("head")[0]
n&&n.parentNode===r&&r.removeChild(n)
var i=document.createElement("style")
r.appendChild(i),i.setAttribute("type","text/css"),i.setAttribute("id",u["default"].PREFIX+t),window.ActiveXObject?i.styleSheet.cssText=e:i.textContent=e}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(6),u=r(a)
t["default"]={scoper:i,addStyle:o}},function(e,t,n){"use strict"
var r=n(32)
e.exports=r},function(e,t,n){"use strict"
function r(e,t){var n={a:e}
return i(e,t,n,0),n}function i(e,t,n,r){if(e!==t){var i=n[r],u=!1
if(x(e)||x(t))s(e,t,n,r)
else if(null==t)b(e)||(a(e,n,r),i=n[r]),i=h(i,new m(m.REMOVE,e,t))
else if(g(t))if(g(e))if(e.tagName===t.tagName&&e.namespace===t.namespace&&e.key===t.key){var l=w(e.properties,t.properties)
l&&(i=h(i,new m(m.PROPS,e,l))),i=o(e,t,n,i,r)}else i=h(i,new m(m.VNODE,e,t)),u=!0
else i=h(i,new m(m.VNODE,e,t)),u=!0
else _(t)?_(e)?e.text!==t.text&&(i=h(i,new m(m.VTEXT,e,t))):(i=h(i,new m(m.VTEXT,e,t)),u=!0):b(t)&&(b(e)||(u=!0),i=h(i,new m(m.WIDGET,e,t)))
i&&(n[r]=i),u&&a(e,n,r)}}function o(e,t,n,r,o){for(var a=e.children,u=d(a,t.children),s=u.children,l=a.length,f=s.length,c=l>f?l:f,p=0;c>p;p++){var v=a[p],y=s[p]
o+=1,v?i(v,y,n,o):y&&(r=h(r,new m(m.INSERT,null,y))),g(v)&&v.count&&(o+=v.count)}return u.moves&&(r=h(r,new m(m.ORDER,e,u.moves))),r}function a(e,t,n){f(e,t,n),u(e,t,n)}function u(e,t,n){if(b(e))"function"==typeof e.destroy&&(t[n]=h(t[n],new m(m.REMOVE,e,null)))
else if(g(e)&&(e.hasWidgets||e.hasThunks))for(var r=e.children,i=r.length,o=0;i>o;o++){var a=r[o]
n+=1,u(a,t,n),g(a)&&a.count&&(n+=a.count)}else x(e)&&s(e,null,t,n)}function s(e,t,n,i){var o=k(e,t),a=r(o.a,o.b)
l(a)&&(n[i]=new m(m.THUNK,null,a))}function l(e){for(var t in e)if("a"!==t)return!0
return!1}function f(e,t,n){if(g(e)){if(e.hooks&&(t[n]=h(t[n],new m(m.PROPS,e,c(e.hooks)))),e.descendantHooks||e.hasThunks)for(var r=e.children,i=r.length,o=0;i>o;o++){var a=r[o]
n+=1,f(a,t,n),g(a)&&a.count&&(n+=a.count)}}else x(e)&&s(e,null,t,n)}function c(e){var t={}
for(var n in e)t[n]=void 0
return t}function d(e,t){var n=v(t),r=n.keys,i=n.free
if(i.length===t.length)return{children:t,moves:null}
var o=v(e),a=o.keys,u=o.free
if(u.length===e.length)return{children:t,moves:null}
for(var s=[],l=0,f=i.length,c=0,d=0;d<e.length;d++){var h,y=e[d]
y.key?r.hasOwnProperty(y.key)?(h=r[y.key],s.push(t[h])):(h=d-c++,s.push(null)):f>l?(h=i[l++],s.push(t[h])):(h=d-c++,s.push(null))}for(var m=l>=i.length?t.length:i[l],g=0;g<t.length;g++){var _=t[g]
_.key?a.hasOwnProperty(_.key)||s.push(_):g>=m&&s.push(_)}for(var b,x=s.slice(),k=0,w=[],S=[],E=0;E<t.length;){var O=t[E]
for(b=x[k];null===b&&x.length;)w.push(p(x,k,null)),b=x[k]
b&&b.key===O.key?(k++,E++):O.key?(b&&b.key&&r[b.key]!==E+1?(w.push(p(x,k,b.key)),b=x[k],b&&b.key===O.key?k++:S.push({key:O.key,to:E})):S.push({key:O.key,to:E}),E++):b&&b.key&&w.push(p(x,k,b.key))}for(;k<x.length;)b=x[k],w.push(p(x,k,b&&b.key))
return w.length!==c||S.length?{children:s,moves:{removes:w,inserts:S}}:{children:s,moves:null}}function p(e,t,n){return e.splice(t,1),{from:t,key:n}}function v(e){for(var t={},n=[],r=e.length,i=0;r>i;i++){var o=e[i]
o.key?t[o.key]=i:n.push(i)}return{keys:t,free:n}}function h(e,t){return e?(y(e)?e.push(t):e=[e,t],e):t}var y=n(7),m=n(9),g=n(2),_=n(5),b=n(0),x=n(3),k=n(10),w=n(33)
e.exports=r},function(e,t,n){"use strict"
function r(e,t){var n
for(var u in e){u in t||(n=n||{},n[u]=void 0)
var s=e[u],l=t[u]
if(s!==l)if(o(s)&&o(l))if(i(l)!==i(s))n=n||{},n[u]=l
else if(a(l))n=n||{},n[u]=l
else{var f=r(s,l)
f&&(n=n||{},n[u]=f)}else n=n||{},n[u]=l}for(var c in t)c in e||(n=n||{},n[c]=t[c])
return n}function i(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}var o=n(11),a=n(4)
e.exports=r},function(e,t,n){"use strict"
var r=n(35)
e.exports=r},function(e,t,n){"use strict"
function r(e,t,n){return n=n||{},n.patch=n.patch&&n.patch!==r?n.patch:i,n.render=n.render||l,n.patch(e,t,n)}function i(e,t,n){var r=a(t)
if(0===r.length)return e
var i=f(e,t.a,r),s=e.ownerDocument
n.document||s===u||(n.document=s)
for(var l=0;l<r.length;l++){var c=r[l]
e=o(e,i[c],t[c],n)}return e}function o(e,t,n,r){if(!t)return e
var i
if(s(n))for(var o=0;o<n.length;o++)i=c(n[o],t,r),t===e&&(e=i)
else i=c(n,t,r),t===e&&(e=i)
return e}function a(e){var t=[]
for(var n in e)"a"!==n&&t.push(+n)
return t}var u=n(12),s=n(7),l=n(13),f=n(37),c=n(38)
e.exports=r},function(e,t){},function(e,t,n){"use strict"
function r(e,t,n,r){return n&&0!==n.length?(n.sort(a),i(e,t,n,r,0)):{}}function i(e,t,n,r,a){if(r=r||{},e){o(n,a,a)&&(r[a]=e)
var s=t.children
if(s)for(var l=e.childNodes,f=0;f<t.children.length;f++){a+=1
var c=s[f]||u,d=a+(c.count||0)
o(n,a,d)&&i(l[f],c,n,r,a),a=d}}return r}function o(e,t,n){if(0===e.length)return!1
for(var r,i,o=0,a=e.length-1;a>=o;){if(r=(a+o)/2>>0,i=e[r],o===a)return i>=t&&n>=i
if(t>i)o=r+1
else{if(!(i>n))return!0
a=r-1}}return!1}function a(e,t){return e>t?1:-1}var u={}
e.exports=r},function(e,t,n){"use strict"
function r(e,t,n){var r=e.type,l=e.vNode,p=e.patch
switch(r){case v.REMOVE:return i(t,l)
case v.INSERT:return o(t,p,n)
case v.VTEXT:return a(t,l,p,n)
case v.WIDGET:return u(t,l,p,n)
case v.VNODE:return s(t,l,p,n)
case v.ORDER:return f(t,p),t
case v.PROPS:return d(t,p,l.properties),t
case v.THUNK:return c(t,n.patch(t,p,n))
default:return t}}function i(e,t){var n=e.parentNode
return n&&n.removeChild(e),l(e,t),null}function o(e,t,n){var r=n.render(t,n)
return e&&e.appendChild(r),e}function a(e,t,n,r){var i
if(3===e.nodeType)e.replaceData(0,e.length,n.text),i=e
else{var o=e.parentNode
i=r.render(n,r),o&&i!==e&&o.replaceChild(i,e)}return i}function u(e,t,n,r){var i,o=h(t,n)
i=o?n.update(t,e)||e:r.render(n,r)
var a=e.parentNode
return a&&i!==e&&a.replaceChild(i,e),o||l(e,t),i}function s(e,t,n,r){var i=e.parentNode,o=r.render(n,r)
return i&&o!==e&&i.replaceChild(o,e),o}function l(e,t){"function"==typeof t.destroy&&p(t)&&t.destroy(e)}function f(e,t){for(var n,r,i,o=e.childNodes,a={},u=0;u<t.removes.length;u++)r=t.removes[u],n=o[r.from],r.key&&(a[r.key]=n),e.removeChild(n)
for(var s=o.length,l=0;l<t.inserts.length;l++)i=t.inserts[l],n=a[i.key],e.insertBefore(n,i.to>=s++?null:o[i.to])}function c(e,t){return e&&t&&e!==t&&e.parentNode&&e.parentNode.replaceChild(t,e),t}var d=n(14),p=n(0),v=n(9),h=n(39)
e.exports=r},function(e,t,n){"use strict"
function r(e,t){return i(e)&&i(t)?"name"in e&&"name"in t?e.id===t.id:e.init===t.init:!1}var i=n(0)
e.exports=r},function(e,t,n){"use strict"
var r=n(13)
e.exports=r}])