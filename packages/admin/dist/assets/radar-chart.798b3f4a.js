import{W as d,h as t,t as p,s as u,a as m}from"./index.9c37cd5e.js";import"./admin-docs.eb2437f0.js";import"./index.00ea1e07.js";import"./container.e93fe2c1.js";import"./index.esm.e961753a.js";import"./___vite-browser-external_commonjs-proxy.48fd82b4.js";var h=Object.defineProperty,c=Object.getOwnPropertyDescriptor,g=(n,a,s,r)=>{for(var e=r>1?void 0:r?c(a,s):a,l=n.length-1,o;l>=0;l--)(o=n[l])&&(e=(r?o(a,s,e):o(e))||e);return r&&e&&h(a,s,e),e};const f="radar-chart";let i=class extends d{constructor(){super(...arguments),this.options={maintainAspectRatio:!0,spanGaps:!1,elements:{line:{tension:1e-6}},plugins:{filler:{propagate:!1},"samples-filler-analyser":{target:"chart-analyser"}}},this.data={labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:"rgba(255, 99, 132, .2)",borderColor:"rgb(255, 99, 132)",borderWidth:1}]},this.mdA=`
  \`\`\`html
<o-radar id="myRadar" width="300" height="300"
  data="{
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, .2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
    }]
  }"

  options="{
    maintainAspectRatio: true,
    spanGaps: false,
    elements: {
      line: {
        tension: 0.000001
      }
    },
    plugins: {
      filler: {
        propagate: false
      },
      'samples-filler-analyser': {
        target: 'chart-analyser'
      }
    }
  }">
</o-radar>
  \`\`\`
  `}installed(){}render(){return t("code-demo-container",null,t("code-demo",{title:"\u96F7\u8FBE\u56FE",describe:"\u96F7\u8FBE\u56FE\u663E\u793A",code:this.mdA},t("div",{slot:"demo",class:p`px-3 py-5`},t("o-radar",{id:"myRadar",width:"300",height:"300",data:this.data,options:this.options}))))}};i.css=[u.target];i=g([m(f)],i);export{i as default};
