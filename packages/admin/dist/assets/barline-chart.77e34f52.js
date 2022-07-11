import{W as d,h as b,t as i,s as n,a as u}from"./index.929ba56b.js";import"./admin-docs.6706dcda.js";import"./index.ecf353d5.js";import"./container.66f82c8c.js";import"./index.esm.15ed8406.js";import"./___vite-browser-external_commonjs-proxy.259ae521.js";var p=Object.defineProperty,c=Object.getOwnPropertyDescriptor,h=(l,a,t,e)=>{for(var r=e>1?void 0:e?c(a,t):a,o=l.length-1,g;o>=0;o--)(g=l[o])&&(r=(e?g(a,t,r):g(r))||r);return e&&r&&p(a,t,r),r};const m="barline-chart";let s=class extends d{constructor(){super(...arguments),this.options={legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},this.data={labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1},{type:"line",label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},this.mdA=`
  \`\`\`html
<o-bar id="myBar" width="600" height="300"
  data="{
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
    },
    {
      type: 'line',
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
    }
    ]
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
  }">
</o-bar>
  \`\`\`
  `}installed(){}render(){return b("code-demo-container",null,b("code-demo",{title:"\u5408\u6210\u56FE",describe:"\u5408\u6210\u56FE\u663E\u793A",code:this.mdA},b("div",{slot:"demo",class:i`px-3 py-5`},b("o-bar",{id:"myBar",width:"600",height:"300",data:this.data,options:this.options}))))}};s.css=[n.target];s=h([u(m)],s);export{s as default};
