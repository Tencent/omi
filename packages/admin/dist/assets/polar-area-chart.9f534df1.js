import{W as n,h as r,t as p,s as u,a as m}from"./index.2b48b3a4.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./index.esm.103996f8.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,g=(d,t,o,a)=>{for(var e=a>1?void 0:a?b(t,o):t,i=d.length-1,s;i>=0;i--)(s=d[i])&&(e=(a?s(t,o,e):s(e))||e);return a&&e&&h(t,o,e),e};const c="polar-area-chart";let l=class extends n{constructor(){super(...arguments),this.options={responsive:!0,legend:{position:"top"},title:{display:!0,text:"Omim Pie Chart"},animation:{animateScale:!0,animateRotate:!0}},this.data={labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderColor:"white",borderWidth:1}]},this.mdA=`
  \`\`\`html
<o-polar-area id="myChart" width="350" height="350"
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
      position: 'top',
    },
    title: {
      display: true,
      text: 'Omim Pie Chart'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }">
</o-polar-area>
  \`\`\`
  `}installed(){}render(){return r("code-demo-container",null,r("code-demo",{title:"\u6781\u533A\u56FE",describe:"\u6781\u533A\u56FE\u663E\u793A",code:this.mdA},r("div",{slot:"demo",class:p`px-3 py-5`},r("o-polar-area",{id:"myChart",width:"350",height:"350",data:this.data,options:this.options}))))}};l.css=[u.target];l=g([m(c)],l);export{l as default};
