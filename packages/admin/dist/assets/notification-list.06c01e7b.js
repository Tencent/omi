import{r as require$$0,c as commonjsGlobal,W as WeElement,h,t as tw,s as sheet,a as tag}from"./index.2b48b3a4.js";import"./index.es.324cee6e.js";import"./index.es.e4bbb943.js";import"./delete-outline.640bbfdd.js";import"./chat-outlined.39ee945f.js";var doneOutlineOutlined={exports:{}};(function(module,exports){(function(r,t){module.exports=t(require$$0)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(n){var r={};function t(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=n,t.c=r,t.d=function(e,i,o){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:o})},t.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(i&1&&(e=t(e)),i&8||i&4&&typeof e=="object"&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),i&2&&typeof e!="string")for(var s in e)t.d(o,s,function(a){return e[a]}.bind(null,s));return o},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="",t(t.s="./esm/done-outline-outlined.js")}({"./esm/done-outline-outlined.js":function(module,exports,__webpack_require__){eval(`
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");
exports.default = createSvgIcon_1.default(omi_1.h("path", {
    d: "M19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z"
}), 'DoneOutlineOutlined');


//# sourceURL=webpack://%5Bname%5D/./esm/done-outline-outlined.js?`)},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval(`
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

//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?`)}}).default})})(doneOutlineOutlined);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(n,r,t,e)=>{for(var i=e>1?void 0:e?__getOwnPropDesc(r,t):r,o=n.length-1,s;o>=0;o--)(s=n[o])&&(i=(e?s(r,t,i):s(i))||i);return e&&i&&__defProp(r,t,i),i};const tagName="notification-list";let notification_list_default=class extends WeElement{constructor(){super(...arguments),this.columns=[{title:"\u901A\u77E5\u5185\u5BB9",render:n=>h("strong",{style:this.changeColor(n.id)},n.content)},{title:"\u901A\u77E5\u7C7B\u578B",key:"category"},{title:"\u901A\u77E5\u65F6\u95F4",key:"time"},{title:"",align:"right",render:n=>h("div",null,this.store.notifications.find(r=>r.id===n.id).status===0?h("o-tooltip",{content:"\u8BBE\u4E3A\u5DF2\u8BFB",style:"padding-right:30px"},h("o-icon-done-outline-outlined",{"data-item-id":n.id,onClick:this.onRead,style:"cursor:pointer;font-size:15px;"})):h("o-tooltip",{content:"\u8BBE\u4E3A\u672A\u8BFB",style:"padding-right:30px"},h("o-icon-chat-outlined",{"data-item-id":n.id,onClick:this.onUnRead,style:"cursor:pointer;font-size:15px;"})),h("o-tooltip",{content:"\u5220\u9664\u901A\u77E5"},h("o-icon-delete-outline",{"data-item-id":n.id,onClick:this.onClick,style:"cursor:pointer;font-size:20px"})))}],this.paging=!0,this.pageSize=10,this.pageIndex=0,this.filterData=[],this.currentSource=[],this.changeColor=n=>this.store.notifications.find(r=>r.id===n).status===1?"color: #606266":"color: #0052D9",this.onChange=n=>{const r=n.detail.index;r===1?this.currentSource=this.store.notifications.filter(t=>t.status===0):r===2?this.currentSource=this.store.notifications.filter(t=>t.status===1):this.currentSource=this.store.notifications,this.activeIndex=n.detail.index,this.renderTable()},this.change=n=>{this.pageIndex=n.detail,this.renderTable()},this.activeIndex=0,this.onRead=n=>{const r=Number(n.currentTarget.dataset.itemId);this.store.notifications.find(t=>t.id===r).status=1,this.changeColor(r),this.renderTable()},this.onUnRead=n=>{const r=Number(n.currentTarget.dataset.itemId);this.store.notifications.find(t=>t.id===r).status=0,this.changeColor(r),this.renderTable()},this.onClick=n=>{this.table.deleteRowById(n.currentTarget.dataset.itemId)}}renderTable(){this.filterData=this.currentSource.slice(this.pageIndex*this.pageSize,this.pageIndex*this.pageSize+this.pageSize),this.update()}installed(){this.currentSource=this.store.notifications,this.renderTable()}deleteItemById(n){const r=this.currentSource.indexOf(this.currentSource.find(t=>t.id===n));r!==-1&&this.currentSource.splice(r,1),this.update()}render(){return h("div",{class:tw`px-2`},h("div",{class:tw`pr-5`},h("o-tabs",{tabs:[{label:"\u5168\u90E8\u901A\u77E5"},{label:"\u672A\u8BFB\u901A\u77E5"},{label:"\u5DF2\u8BFB\u901A\u77E5"}],onChange:this.onChange,activeIndex:this.activeIndex}),h("o-table",{ref:n=>this.table=n,checkbox:!1,stripe:!1,border:!1,compact:!1,columns:this.columns,dataSource:this.filterData}),h("div",{class:tw`mt-3 text-right`},h("o-pagination",{total:this.currentSource.length,"current-page":this.pageIndex,"page-size":this.pageSize,onchange:this.change}))))}};notification_list_default.css=sheet.target;notification_list_default=__decorateClass([tag(tagName)],notification_list_default);export{notification_list_default as default};
