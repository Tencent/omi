import{W as i,h as e,t as x,s as c,a as b}from"./index.fc9addda.js";import"./admin-docs.491cbc27.js";import"./index.8e66e97a.js";import"./container.1547b4cb.js";import"./index.esm.3d7dc282.js";import"./___vite-browser-external_commonjs-proxy.96aed09f.js";var n=Object.defineProperty,u=Object.getOwnPropertyDescriptor,m=(l,a,o,r)=>{for(var t=r>1?void 0:r?u(a,o):a,s=l.length-1,d;s>=0;s--)(d=l[s])&&(t=(r?d(a,o,t):d(t))||t);return r&&t&&n(a,o,t),t};const p="scatter-chart";let y=class extends i{constructor(){super(...arguments),this.options={title:{display:!0,text:"Omim Scatter Chart"}},this.data={datasets:[{label:"My First dataset",borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, .2)",data:[{x:50,y:32},{x:22,y:10},{x:80,y:44},{x:22,y:77},{x:3,y:9},{x:44,y:11},{x:12,y:100}]},{label:"My Second dataset",borderColor:"rgb(54, 162, 235)",backgroundColor:"rgba(54, 162, 235, .2)",data:[{x:20,y:132},{x:32,y:40},{x:80,y:84},{x:32,y:77},{x:13,y:9},{x:24,y:11},{x:12,y:60}]}]},this.mdA=`
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
  `}installed(){}render(){return e("code-demo-container",null,e("code-demo",{title:"\u6563\u70B9\u56FE",describe:"\u6563\u70B9\u56FE\u663E\u793A",code:this.mdA},e("div",{slot:"demo",class:x`px-3 py-5`},e("o-scatter",{id:"myScatter",width:"560",height:"300",data:this.data,options:this.options}))))}};y.css=[c.target];y=m([b(p)],y);export{y as default};
