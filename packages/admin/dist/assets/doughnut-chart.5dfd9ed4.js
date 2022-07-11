import{W as d,h as r,t as l,s as g,a as h}from"./index.929ba56b.js";import"./admin-docs.6706dcda.js";import"./index.ecf353d5.js";import"./container.66f82c8c.js";import"./index.esm.15ed8406.js";import"./___vite-browser-external_commonjs-proxy.259ae521.js";var p=Object.defineProperty,m=Object.getOwnPropertyDescriptor,b=(n,e,o,a)=>{for(var t=a>1?void 0:a?m(e,o):e,i=n.length-1,s;i>=0;i--)(s=n[i])&&(t=(a?s(e,o,t):s(t))||t);return a&&t&&p(e,o,t),t};const c="doughnut-chart";let u=class extends d{constructor(){super(...arguments),this.options={responsive:!0,legend:{position:"top"},title:{display:!0,text:"Omim Pie Chart"},animation:{animateScale:!0,animateRotate:!0}},this.data={labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderColor:"white",borderWidth:1}]},this.mdA=`
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
