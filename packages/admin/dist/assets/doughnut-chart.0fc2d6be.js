import{W as d,h as r,t as l,s as g,a as h}from"./index.2b48b3a4.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./index.esm.103996f8.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var p=Object.defineProperty,m=Object.getOwnPropertyDescriptor,b=(n,e,o,a)=>{for(var t=a>1?void 0:a?m(e,o):e,i=n.length-1,s;i>=0;i--)(s=n[i])&&(t=(a?s(e,o,t):s(t))||t);return a&&t&&p(e,o,t),t};const c="doughnut-chart";let u=class extends d{constructor(){super(...arguments),this.options={responsive:!0,legend:{position:"top"},title:{display:!0,text:"Omim Pie Chart"},animation:{animateScale:!0,animateRotate:!0}},this.data={labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderColor:"white",borderWidth:1}]},this.mdA=`
  \`\`\`html
<o-doughnut id="myDoughnut" width="300" height="300"
  data="{
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderColor: 'white',
      borderWidth: 1
    }]
  }"

  options="{
    responsive: true,
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Omim Doughnut Chart'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }">
</o-doughnut>
  \`\`\`
  `}installed(){}render(){return r("code-demo-container",null,r("code-demo",{title:"\u73AF\u72B6\u56FE",describe:"\u73AF\u72B6\u56FE\u663E\u793A",code:this.mdA},r("div",{slot:"demo",class:l`px-3 py-5`},r("o-doughnut",{id:"myDoughnut",width:"300",height:"300",data:this.data,options:this.options}))))}};u.css=[g.target];u=b([h(c)],u);export{u as default};
