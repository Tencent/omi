import{a as x,W as u,h as d,e as h,b as p}from"./index.4eaad2fd.js";import"./index.0af00a1f.js";import"./index.esm.2b492744.js";var m=Object.defineProperty,y=Object.defineProperties,k=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&b(e,n,t[n]);if(f)for(var n of f(t))w.call(t,n)&&b(e,n,t[n]);return e},s=(e,t)=>y(e,k(t));function g(e,t,n){const i=function(){this.removeEventListener(t,i),n()}.bind(e);e.addEventListener(t,i)}var S=Object.defineProperty,C=Object.getOwnPropertyDescriptor;let c=class extends u{constructor(){super(...arguments),this.deleteRow=e=>{this.props.dataSource.splice(this.props.dataSource.indexOf(e),1),this.update()},this._changeHandlerTh=(e,t)=>{this.fire("change-all",{item:t,checked:e.detail}),this.props.dataSource.forEach(n=>{n.checked=e.detail}),this.update()},this._changeHandlerTd=(e,t)=>{this.fire("change",{item:t,checked:e.detail}),t.checked=e.detail,this.update()},this.onChange=(e,t,n)=>{const i=t[n.key];t[n.key]=e.detail,this.update(),this.fire("data-changed",{value:t[n.key],oldValue:i,item:t,column:n})},this.onTdClick=(e,t,n)=>{n.stopPropagation(),this.props.dataSource.forEach(i=>{i.editingKey=null}),e.editingKey=t.key,this.update(),this.editingInput&&this.editingInput.focus()}}async deleteRowById(e){const{dataSource:t}=this.props;await async function(n,i,a){return new Promise(o=>{n.classList.remove(i+"-enter-active"),n.classList.remove(i+"-enter-to"),n.classList.add(i+"-leave"),n.classList.add(i+"-leave-active");const r=function(L){n.classList.remove(i+"-leave-active"),o(1)};g(n,"transitionend",r),g(n,"animationend",r),window.setTimeout(function(){n.classList.remove(i+"-leave"),n.classList.add(i+"-leave-to")},a)})}(this["row"+e],"slide-fade"),this.deleteRow(t.find(n=>n.id+""==e+""))}_getCheckedState(){let e=0,t=0;for(let n=0,i=this.props.dataSource.length;n<i;n++)if(this.props.dataSource[n].checked?e++:t++,e>0&&t>0)return{indeterminate:!0};return e===0?{unchecked:!0}:{checked:!0}}installed(){this.setFixedLeft(),this.setFixedRight(),window.addEventListener("click",()=>{let e=!1;this.props.dataSource.forEach(t=>{t.editingKey&&(e=!0),t.editingKey=null}),e&&this.update()})}updated(){this.setFixedLeft(),this.setFixedRight()}setFixedLeft(){const e=this.rootNode.querySelectorAll(".fixed-left"),t=this.rootNode.getBoundingClientRect();e.forEach((n,i)=>{const a=n.getBoundingClientRect();n.style.left=a.left-t.left-1+"px"})}setFixedRight(){this.rootNode.querySelectorAll(".fixed-right").forEach((e,t)=>{e.style.right="0px"})}render(e){if(e.columns&&e.dataSource)return e.fixedRight&&(e.columns[e.columns.length-1].fixed=!0),d("div",l({style:{width:e.width&&e.width,height:e.height&&e.height}},h(e,"o-table",{"o-table-checkbox":e.checkbox,"o-table-border":e.border,"o-table-stripe":e.stripe})),d("table",l({},h(e,"o-table-table")),d("thead",null,d("tr",null,e.columns.map((t,n)=>{const i={},{width:a}=t;return a!==void 0&&(i.style={width:typeof a=="number"?a+"px":a}),d("th",s(l({},i),{class:p({[`o-table-align-${t.align}`]:t.align,compact:e.compact,"fixed-top":e.fixedTop,"fixed-left":n<e.fixedLeftCount,"fixed-right":t.fixed})}),n===0&&e.checkbox&&d("o-checkbox",s(l({},this._getCheckedState()),{onChange:o=>this._changeHandlerTh(o,t)})),t.title)}))),d("tbody",{class:"o-table-tbody"},e.dataSource.map(t=>d("tr",{key:t.id,ref:n=>this["row"+t.id]=n,style:{background:t.$config&&t.$config.bgColor}},e.columns.map((n,i)=>{const a={},{width:o}=n;return o!==void 0&&(a.style={width:typeof o=="number"?o+"px":o}),d("td",s(l({onclick:r=>this.onTdClick(t,n,r)},a),{class:p({[`o-table-align-${n.align}`]:n.align,compact:e.compact,"fixed-left":i<e.fixedLeftCount,"fixed-right":n.fixed})}),i===0&&e.checkbox&&d("o-checkbox",{checked:t.checked,onChange:r=>this._changeHandlerTd(r,t)}),n.editable&&t.editingKey===n.key?d("o-input",{ref:r=>this.editingInput=r,size:"mini",onChange:r=>{this.onChange(r,t,n)},value:t[n.key]}):n.render?n.render(t):t[n.key])}))))))}};c.css=`:host {
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
}`,c.defaultProps={dataSource:[],columns:[],checkbox:!1,border:!1,stripe:!1,compact:!1,fixedTop:!1,fixedRight:!1,fixedLeftCount:0},c.propTypes={dataSource:Object,columns:Object,checkbox:Boolean,border:Boolean,stripe:Boolean,compact:Boolean,width:String,height:String,fixedTop:Boolean,fixedRight:Boolean,fixedLeftCount:Number},c=((e,t,n,i)=>{for(var a,o=i>1?void 0:i?C(t,n):t,r=e.length-1;r>=0;r--)(a=e[r])&&(o=(i?a(t,n,o):a(o))||o);return i&&o&&S(t,n,o),o})([x("o-table")],c);
