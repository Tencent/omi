import{W as g,h as t,t as i,s as n,a as u}from"./index.2b48b3a4.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./index.esm.103996f8.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var p=Object.defineProperty,c=Object.getOwnPropertyDescriptor,h=(d,a,o,e)=>{for(var r=e>1?void 0:e?c(a,o):a,s=d.length-1,b;s>=0;s--)(b=d[s])&&(r=(e?b(a,o,r):b(r))||r);return e&&r&&p(a,o,r),r};const m="bar-chart";let l=class extends g{constructor(){super(...arguments),this.options={legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},this.data={labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},this.mdA=`
  \`\`\`html
<o-bar id="myBar" width="600" height="300" data="{
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
}"
    options="{
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}"></o-bar>
  \`\`\`
  `}installed(){}render(){return t("code-demo-container",null,t("code-demo",{title:"\u67F1\u72B6\u56FE",describe:"\u67F1\u72B6\u56FE\u663E\u793A",code:this.mdA},t("div",{slot:"demo",class:i`px-3 py-5`},t("o-bar",{id:"myBar",width:"560",height:"300",data:this.data,options:this.options}))))}};l.css=[n.target];l=h([u(m)],l);export{l as default};
