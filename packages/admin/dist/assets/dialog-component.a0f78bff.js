import{W as r,h as o,t as c,s as m,a as p}from"./index.2b48b3a4.js";import"./index.es.17e2d960.js";import{a as f,c as g,p as d}from"./index.esm.cca4fac1.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var b=Object.defineProperty,C=Object.getOwnPropertyDescriptor,v=(t,n,i,l)=>{for(var e=l>1?void 0:l?C(n,i):n,s=t.length-1,u;s>=0;s--)(u=t[s])&&(e=(l?u(n,i,e):u(e))||e);return l&&e&&b(n,i,e),e};const x="dialog-component";let a=class extends r{constructor(){super(...arguments),this.visibleA=!1}install(){}render(){return o("code-demo-container",null,o("code-demo",{title:"\u5F39\u7A97",describe:"\u57FA\u7840\u6F14\u793A",code:`
\`\`\`jsx
<o-dialog visible={this.visibleA} title="\u63D0\u793A">
  <span>\u4F60\u8FD8\uFF0Comiu dialog</span>
  <span slot="footer">
    <o-button size="small">\u53D6 \u6D88</o-button>
    <o-button size="small" type="primary">\u786E \u5B9A</o-button>
  </span>
</o-dialog>
\`\`\`
          `},o("div",{slot:"demo",class:c`px-5 py-5`},o("o-dialog",{visible:this.visibleA,title:"\u63D0\u793A"},o("span",null,"\u4F60\u8FD8\uFF0Comiu dialog"),o("span",{slot:"footer"},o("o-button",{size:"small",onClick:t=>{this.visibleA=!1,this.update()}},"\u53D6 \u6D88"),o("o-button",{size:"small",onClick:t=>{this.visibleA=!1,this.update()},type:"primary"},"\u786E \u5B9A"))),o("o-button",{onClick:t=>{this.visibleA=!0,this.update()},value:"4",max:"10",color:"red"},"\u663E\u793A\u5F39\u7A97"))),o("code-demo",{title:"\u5F39\u7A97",describe:"\u57FA\u7840\u6F14\u793A",code:`
\`\`\`jsx
<o-button onClick={e => {
  alert({
    msg: 'Simple Message',
    title: 'Msg',
    confirmButtonText: 'OK',
    onConfirm: function () {
      console.log('ok')
    }
  })
}} type="default">alert</o-button>

<o-button onClick={e => {
  confirm({
    msg: 'Simple Message',
    title: 'Msg',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'OK',
    onCancel: function () {

    },
    onConfirm: function () {
      console.log('ok')
    }
  })
}} type="default">confirm</o-button>

<o-button onClick={e => {
  prompt({
    msg: 'Simple Message',
    title: 'Msg',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'OK',
    onCancel: function () {

    },
    onConfirm: function (val) {
      console.log(val)
    }
  })
}} type="default">prompt</o-button>
\`\`\`
          `},o("div",{slot:"demo",class:c`px-5 py-5`},o("o-button",{onClick:t=>{f({msg:"Simple Message",title:"Msg",confirmButtonText:"OK",onConfirm:function(){console.log("ok")}})},type:"default"},"alert"),o("o-button",{onClick:t=>{g({msg:"Simple Message",title:"Msg",cancelButtonText:"Cancel",confirmButtonText:"OK",onCancel:function(){},onConfirm:function(){console.log("ok")}})},type:"default"},"confirm"),o("o-button",{onClick:t=>{d({msg:"Simple Message",title:"Msg",cancelButtonText:"Cancel",confirmButtonText:"OK",onCancel:function(){},onConfirm:function(n){console.log(n)}})},type:"default"},"prompt"))))}};a.css=[m.target,"o-button{margin-left:10px;}"];a=v([p(x)],a);export{a as default};
