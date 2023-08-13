import{W as l,h as e,t as x,s as c,a as b}from"./index.2b48b3a4.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./index.esm.103996f8.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var m=Object.defineProperty,n=Object.getOwnPropertyDescriptor,u=(i,r,o,a)=>{for(var t=a>1?void 0:a?n(r,o):r,s=i.length-1,d;s>=0;s--)(d=i[s])&&(t=(a?d(r,o,t):d(t))||t);return a&&t&&m(r,o,t),t};const p="scatter-chart";let y=class extends l{constructor(){super(...arguments),this.options={title:{display:!0,text:"Omim Scatter Chart"}},this.data={datasets:[{label:"My First dataset",borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, .2)",data:[{x:50,y:32},{x:22,y:10},{x:80,y:44},{x:22,y:77},{x:3,y:9},{x:44,y:11},{x:12,y:100}]},{label:"My Second dataset",borderColor:"rgb(54, 162, 235)",backgroundColor:"rgba(54, 162, 235, .2)",data:[{x:20,y:132},{x:32,y:40},{x:80,y:84},{x:32,y:77},{x:13,y:9},{x:24,y:11},{x:12,y:60}]}]},this.mdA=`
  \`\`\`html
<o-scatter id="myScatter" width="560" height="300" data=" {
  datasets: [{
      label: 'My First dataset',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, .2)',
      data: [{
        x: 50,
        y: 32
      }, {
        x: 22,
        y: 10
      }, {
        x: 80,
        y: 44
      }, {
        x: 22,
        y: 77
      }, {
        x: 3,
        y: 9
      }, {
        x: 44,
        y: 11
      }, {
        x: 12,
        y: 100
      }]
    }, {
      label: 'My Second dataset',
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, .2)',
      data: [{
        x: 20,
        y: 132
      }, {
        x: 32,
        y: 40
      }, {
        x: 80,
        y: 84
      }, {
        x: 32,
        y: 77
      }, {
        x: 13,
        y: 9
      }, {
        x: 24,
        y: 11
      }, {
        x: 12,
        y: 60
      }]
    }]
  }"

  options="{
    title: {
      display: true,
      text: 'Omim Scatter Chart'
    }
  }">
</o-scatter>
  \`\`\`
  `}installed(){}render(){return e("code-demo-container",null,e("code-demo",{title:"\u6563\u70B9\u56FE",describe:"\u6563\u70B9\u56FE\u663E\u793A",code:this.mdA},e("div",{slot:"demo",class:x`px-3 py-5`},e("o-scatter",{id:"myScatter",width:"560",height:"300",data:this.data,options:this.options}))))}};y.css=[c.target];y=u([b(p)],y);export{y as default};
