import{W as c,h as t,t as g,s as l,a as h}from"./index.107c0a65.js";import"./index.es.2aaaae1c.js";import"./index.esm.b2b6d0d2.js";import"./index.ef36bc93.js";import"./index.esm.e8c2c06e.js";var m=Object.defineProperty,p=Object.getOwnPropertyDescriptor,u=(e,a,i,s)=>{for(var n=s>1?void 0:s?p(a,i):a,d=e.length-1,r;d>=0;d--)(r=e[d])&&(n=(s?r(a,i,n):r(n))||n);return s&&n&&m(a,i,n),n};const f="pagination-table";let o=class extends c{constructor(){super(...arguments),this.dataSource=[{id:1,name:"xwang",age:18,address:"Tencent"},{id:2,name:"dntzhang",age:12,address:"Tencent",$config:{bgColor:"rgb(247 176 176 / 32%)"}},{id:3,name:"lucy",age:12,address:"Tencent"},{id:4,name:"john",age:12,address:"Tencent",$config:{bgColor:"rgb(230 162 60 / 34%)"}},{id:5,name:"tim",age:12,address:"Tencent"},{id:6,name:"tim",age:12,address:"Tencent"},{id:7,name:"tim",age:12,address:"Tencent"},{id:8,name:"tim",age:12,address:"Tencent"},{id:9,name:"xwang",age:18,address:"Tencent"},{id:10,name:"dntzhang",age:12,address:"Tencent",$config:{bgColor:"rgb(247 176 176 / 32%)"}},{id:11,name:"lucy",age:12,address:"Tencent"},{id:12,name:"john",age:12,address:"Tencent",$config:{bgColor:"rgb(230 162 60 / 34%)"}},{id:13,name:"tim",age:12,address:"Tencent"},{id:14,name:"tim",age:12,address:"Tencent"},{id:15,name:"tim",age:12,address:"Tencent"},{id:16,name:"tim",age:12,address:"Tencent"}],this.columns=[{title:"ID",render:e=>t("strong",null,e.id)},{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"\u64CD\u4F5C",align:"right",render:e=>t("o-tooltip",{content:"\u5220\u9664"+e.name},t("o-icon-delete",{"data-item-id":e.id,onClick:this.onClick,style:"cursor:pointer;font-size:20px;"}))}],this.paging=!0,this.pageSize=5,this.pageIndex=0,this.filterData=[],this.change=e=>{this.pageIndex=e.detail,this.renderTable()},this.onClick=e=>{this.table.deleteRowById(e.currentTarget.dataset.itemId)}}renderTable(){this.filterData=this.dataSource.slice(this.pageIndex*this.pageSize,this.pageIndex*this.pageSize+this.pageSize),this.update()}installed(){this.renderTable()}deleteItemById(e){const a=this.dataSource.indexOf(this.dataSource.find(i=>i.id===e));a!==-1&&this.dataSource.splice(a,1),this.update()}render(){return t("div",{class:g`pl-0.5`},t("div",{class:g`px-2`},t("o-table",{ref:e=>this.table=e,checkbox:!1,stripe:!1,border:!1,compact:!1,columns:this.columns,dataSource:this.filterData}),t("div",{class:g`mt-3 text-right`},t("o-pagination",{total:this.dataSource.length,"current-page":this.pageIndex,"page-size":this.pageSize,onchange:this.change}))))}};o.css=l.target;o=u([h(f)],o);export{o as default};
