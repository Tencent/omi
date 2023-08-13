import{W as v,h as o,t as i,s as b,a as y}from"./index.2b48b3a4.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./index.esm.103996f8.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var h=Object.defineProperty,p=Object.getOwnPropertyDescriptor,c=(n,t,a,e)=>{for(var r=e>1?void 0:e?p(t,a):t,s=n.length-1,d;s>=0;s--)(d=n[s])&&(r=(e?d(t,a,r):d(r))||r);return e&&r&&h(t,a,r),r};const x="bubble-chart";let l=class extends v{constructor(){super(...arguments),this.options={aspectRatio:1,legend:!1,tooltips:!1,elements:{point:{borderColor:"#ccc",borderWidth:1,hoverBackgroundColor:"transparent",hoverBorderColor:"red",hoverBorderWidth:2,radius:"3 + Math.abs($v)/100 * $w/24"}}},this.data={datasets:[{label:"My First dataset",borderColor:"rgb(55,99,132)",backgroundColor:"transparent",data:[{x:11,y:44,v:22},{x:77,y:11,v:11},{x:55,y:22,v:99},{x:44,y:33,v:34},{x:33,y:9,v:98},{x:20,y:1,v:1},{x:55,y:3,v:2}]},{label:"My Second dataset",borderColor:"rgb(255,99,132)",backgroundColor:"transparent",data:[{x:18,y:44,v:22},{x:77,y:21,v:11},{x:55,y:122,v:99},{x:84,y:3,v:34},{x:33,y:29,v:98},{x:20,y:111,v:1},{x:55,y:13,v:2}]}]},this.mdA=`
  \`\`\`html
<o-bubble id="myChart" width="300" height="350"
  data="{
    datasets: [{
      label: 'My First dataset',
      borderColor: 'rgb(55,99,132)',
      backgroundColor: 'transparent',
      data: [
        { x: 11, y: 44, v: 22 },
        { x: 77, y: 11, v: 11 },
        { x: 55, y: 22, v: 99 },
        { x: 44, y: 33, v: 34 },
        { x: 33, y: 9, v: 98 },
        { x: 20, y: 1, v: 1 },
        { x: 55, y: 3, v: 2 }
      ]
      }, {
        label: 'My Second dataset',
        borderColor: 'rgb(255,99,132)',
        backgroundColor: 'transparent',
        data: [
        { x: 18, y: 44, v: 22 },
        { x: 77, y: 21, v: 11 },
        { x: 55, y: 122, v: 99 },
        { x: 84, y: 3, v: 34 },
        { x: 33, y: 29, v: 98 },
        { x: 20, y: 111, v: 1 },
        { x: 55, y: 13, v: 2 }
        ]
      }]
    }"

  options="{
    aspectRatio: 1,
    legend: false,
    tooltips: false,

    elements: {
      point: {
        borderColor: '#ccc',

        borderWidth: 1,

        hoverBackgroundColor: 'transparent',

        hoverBorderColor: 'red',

        hoverBorderWidth: 2,

        radius: '3 + Math.abs($v)/100 * $w/24'
      }
    }
  }">
</o-bubble>
  \`\`\`
  `}installed(){}render(){return o("code-demo-container",null,o("code-demo",{title:"\u6C14\u6CE1\u56FE",describe:"\u6C14\u6CE1\u56FE\u663E\u793A",code:this.mdA},o("div",{slot:"demo",class:i`px-3 py-5`},o("o-bubble",{id:"myChart",width:"300",height:"350",data:this.data,options:this.options}))))}};l.css=[b.target];l=c([y(x)],l);export{l as default};
