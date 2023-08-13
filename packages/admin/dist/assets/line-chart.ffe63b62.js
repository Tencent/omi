import{W as n,h as a,t as u,s as p,a as c}from"./index.2b48b3a4.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./index.esm.103996f8.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,m=(d,t,s,r)=>{for(var e=r>1?void 0:r?b(t,s):t,l=d.length-1,i;l>=0;l--)(i=d[l])&&(e=(r?i(t,s,e):i(e))||e);return r&&e&&h(t,s,e),e};const g="line-chart";let o=class extends n{constructor(){super(...arguments),this.options={responsive:!0,title:{display:!0,text:"Omi-chart Line Chart"},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Month"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Value"}}]}},this.data={labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:"rgba(255, 99, 132, .4)",borderColor:"rgb(255, 99, 132)",borderWidth:1}]},this.mdA=`
  \`\`\`html
<o-line id="myLine" width="560" height="300"
  data="{
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, .4)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
    }]
  }"

  options="{
    responsive: true,
    title: {
      display: true,
      text: 'Omi-chart Line Chart'
    },
    tooltips: {
      mode: 'index',
      intersect: false
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  }">
</o-line>
  \`\`\`
  `}installed(){}render(){return a("code-demo-container",null,a("code-demo",{title:"\u7EBF\u72B6\u56FE",describe:"\u7EBF\u72B6\u56FE\u663E\u793A",code:this.mdA},a("div",{slot:"demo",class:u`px-3 py-5`},a("o-line",{id:"myLine",width:"560",height:"300",data:this.data,options:this.options}))))}};o.css=[p.target];o=m([c(g)],o);export{o as default};
