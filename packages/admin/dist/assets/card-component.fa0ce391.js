import{W as p,d as i,f as c,h as e,t,s as m,a as h}from"./index.2b48b3a4.js";import"./index.es.cc57bce7.js";import"./index.esm.dc804846.js";import"./add-comment-rounded.707585a6.js";import"./add-ic-call-rounded.dfdf8b49.js";import"./admin-docs.754e7d21.js";import"./index.7201295b.js";import"./container.5cc2ff92.js";import"./encode.47cdd865.js";import"./___vite-browser-external_commonjs-proxy.2e3e84b6.js";var b=Object.defineProperty,C=Object.getOwnPropertyDescriptor,g=(u,o,r,d)=>{for(var a=d>1?void 0:d?C(o,r):o,n=u.length-1,l;n>=0;n--)(l=u[n])&&(a=(d?l(o,r,a):l(a))||a);return d&&a&&b(o,r,a),a};const F="card-component";let s=class extends p{constructor(){super(...arguments),this.pickAction=u=>{const o=u.detail.action;o.icon==="add-comment-rounded"?(i("\u53D1\u9001\u77ED\u4FE1\u606F..."),setTimeout(()=>{c()},1e3)):o.icon==="add-a-photo-rounded"?(i("\u6B63\u5728\u6253\u5F00\u76F8\u673A..."),setTimeout(()=>{c()},1e3)):o.icon==="add-ic-call-rounded"&&(i("\u6B63\u5728\u547C\u53EB..."),setTimeout(()=>{c()},1e3))},this.mdA=`
  \`\`\`html
  // hoverable?: String,  \u8BBE\u7F6E\u9634\u5F71,\u9ED8\u8BA4\u4E3A 'true' \u9F20\u6807\u79FB\u8FC7\u65F6\u60AC\u6D6E,'always'\u603B\u662F\u663E\u793A|'true'\u9F20\u6807\u79FB\u8FC7\u65F6\u60AC\u6D6E|'false'\u4ECE\u4E0D\u663E\u793A

  // bordered?:  Boolean, \u8BBE\u7F6E\u8FB9\u6846,\u9ED8\u8BA4\u5F00\u542F bordered=true,\u5173\u95ED bordered=false

  // title?: String,      \u8BBE\u7F6E\u9876\u90E8\u6807\u9898,\u9ED8\u8BA4\u4E3A''

  // actions?: any[],     \u8BBE\u7F6E\u5E95\u90E8\u6309\u94AE,\u4F8B\u5982\uFF1Aactions={ [{ icon: 'add-ic-call-rounded' }] },
  
  // onChange?: (evt: any, index: number) => void    \u8BBE\u7F6E\u56DE\u8C03\u4E8B\u4EF6,\u4F8B\u5982onChange={this.pickAction}\u89E6\u53D1\u56DE\u8C03

  //***\u7279\u522B\u6CE8\u610F\uFF1ACard\u7EC4\u4EF6\u6CA1\u6709\u9884\u8BBE\u5BBD\u9AD8\uFF0C\u9700\u5728\u5916\u90E8\u4E3A\u5BB9\u5668\u8BBE\u7F6E\u5BBD\u9AD8\u4EE5\u8FBE\u5230\u7406\u60F3\u6548\u679C\u3002

  <!-- slot="cover" \u82E5\u4E0D\u586B\u5145\u5185\u5BB9\uFF0C\u5219header\u680F\u4E0D\u663E\u793A\u3002-\u7B80\u5355\u5361\u7247 -->
  <o-card hoverable="always" block="1">
    <div slot="cover">
    </div>
      <p>Simple Card</p>
      <p>Card content</p>
      <p>Card content</p>
  </o-card>
  <o-card title="no border Card" hoverable="true" bordered={false} block="1">
    <div slot="cover"></div>
    <p>Simple Card</p>
    <p>Card content</p>
    <p>Card content</p>
  </o-card>
  \`\`\`
  `,this.mdB=`
  \`\`\`html
  <!-- slot="extra" \u586B\u5145\u5185\u5BB9\uFF0C\u4F4D\u7F6E\u5728header\u680F\u53F3\u4FA7\u3002-slot="extra" \u5177\u540D\u63D2\u69FD -->
  <o-card title="Default size card" hoverable="always" block="1">
    <o-link
      underline={false}
      type="primary"
      target="_blank"
      href="https://tencent.github.io/omi/"
      slot="extra">
        More
    </o-link>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
  </o-card>
  <o-card title="no border card" hoverable="true" bordered={false} block="1">
    <o-link
      underline={false}
      type="primary"
      target="_blank"
      href="https://tencent.github.io/omi/"
      slot="extra"
    >
      More
    </o-link>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </o-card>
  \`\`\`
  `,this.mdC=`
  \`\`\`html
  <!-- \u901A\u8FC7onChange\u8BBE\u7F6E\u56DE\u8C03\u4E8B\u4EF6,\u4F8B\u5982onChange={this.pickAction}\u89E6\u53D1\u56DE\u8C03 -->
  
  JSX:
  // \u7ED3\u5408 o-toast \u5C55\u793A
  pickAction = (evt) => {
    const btn = evt.detail.action
    if(btn.icon === 'add-comment-rounded') {
      showLoading('\u53D1\u9001\u77ED\u4FE1\u606F...')
      setTimeout(() => {
        hideLoading()
      }, 1000)
    } else if (btn.icon === 'add-a-photo-rounded') {
      showLoading('\u6B63\u5728\u6253\u5F00\u76F8\u673A...')
      setTimeout(() => {
        hideLoading()
      }, 1000)
    } else if (btn.icon === 'add-ic-call-rounded') {
      showLoading('\u6B63\u5728\u547C\u53EB...')
      setTimeout(() => {
        hideLoading()
      }, 1000)
    }
  }

  <o-card
    title="Action card"
    hoverable="always"
    onChange={this.pickAction}
    block="1"
    actions={
      [{icon: 'add-a-photo-rounded'},
      {icon: 'add-ic-call-rounded'},
      {icon: 'add-comment-rounded'}]}>
    <o-link
      underline={false}
      type="primary"
      target="_blank"
      href="https://tencent.github.io/omi/"
      slot="extra">
        More
    </o-link>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
  </o-card>

  <o-card
    title="DNT's card"
    onChange={this.pickAction}
    block="1"
    actions={[{icon: 'add-ic-call-rounded'}]}
    hoverable="true">
    <o-avatar slot="extra">DNT</o-avatar>
      <p>Tel:</p>
      <p>Company:</p>
      <p>...</p>
  </o-card>
  \`\`\`
  `,this.mdD=`
  \`\`\`html
  <!-- slot="cover" \u586B\u5145\u5185\u5BB9\uFF0C\u5C06\u8986\u76D6header\u680F\u3002\u586B\u5145<o-image><o-image/>\u4EE5\u5B8C\u6210\u76F8\u518C\u5361\u7247\u6548\u679C\u3002  -slot="cover" \u5177\u540D\u63D2\u69FD -->
  <o-card
    onChange={this.pickAction}
    actions={
      [{icon: 'add-ic-call-rounded'},
      {icon: 'add-comment-rounded'}]}
      hoverable="always"
      block="1">
    <o-image
      slot="cover"
      src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb">
    </o-image>
    <div style="display: flex; justify-content: space-around; margin: 10px 0px">
      <o-avatar style="margin: auto 0px;"
        src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png">
      </o-avatar>
      <div>
        <p style="font-weight: 600; font-size: 1.2em;">Card title</p>
        <p>This is the description</p>
      </div>
    </div>
  </o-card>

  <o-card hoverable="true" block="1">
    <o-image
      slot="cover"
      src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb">
    </o-image>
      <p style="font-weight: 500>OMI Card</p>
      <p><o-link
        underline={false}
        type="primary"
        target="_blank"
        href="https://tencent.github.io/omi/"
        slot="extra">
        Welcome to OMI
      </o-link></p>
  </o-card>
  \`\`\`
  `}installed(){}render(){const u={breakInside:"avoid",padding:"0 0 0 0"};return e("code-demo-container",null,e("code-demo",{title:"\u7B80\u5355\u5361\u7247",describe:"\u53EA\u5305\u542B\u5185\u5BB9\u533A\u57DF",code:this.mdA,style:u},e("div",{slot:"demo",class:t`flex flex-wrap justify-around px-5 py-5`},e("div",{class:t`mt-2 mb-10 mx-2 h-36 w-60`},e("o-card",{title:"Simple Card",hoverable:"always",block:"1"},e("div",{slot:"cover"}),e("p",null,"Simple Card"),e("p",null,"Card content"),e("p",null,"Card content"))),e("div",{class:t`mt-2 mb-10 mx-2 h-36 w-60`},e("o-card",{title:"Simple Card",hoverable:"true",block:"1",bordered:!1},e("div",{slot:"cover"}),e("p",null,"no border Card"),e("p",null,"Card content"),e("p",null,"Card content"))))),e("code-demo",{title:"\u529F\u80FD\u5361\u7247",describe:"\u652F\u6301\u5E95\u90E8\u680F\u6DFB\u52A0\u89E6\u53D1\u4E8B\u4EF6(o-icon)",code:this.mdC,style:u},e("div",{slot:"demo",class:t`flex flex-wrap justify-around px-5 py-5`},e("div",{class:t`mt-2 mb-10 mx-5 h-56 w-72`},e("o-card",{block:"1",title:"Action card",hoverable:"always",onChange:this.pickAction,actions:[{icon:"add-a-photo-rounded"},{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}]},e("o-link",{underline:!1,type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"More"),e("p",null,"Card content"),e("p",null,"Card content"),e("p",null,"Card content"))),e("div",{class:t`mt-2 mb-10 mx-5 h-56 w-72`},e("o-card",{block:"1",title:"DNT's card",onChange:this.pickAction,actions:[{icon:"add-ic-call-rounded"}],hoverable:"true"},e("o-avatar",{slot:"extra"},"DNT"),e("p",null,"Tel:"),e("p",null,"Company:"),e("p",null,"..."))))),e("code-demo",{title:"\u5178\u578B\u5361\u7247",describe:"\u5305\u542B\u6807\u9898\u3001\u5185\u5BB9\u3001\u64CD\u4F5C\u533A\u57DF(extra)",code:this.mdB,style:u},e("div",{slot:"demo",class:t`flex flex-wrap justify-around px-5 py-5`},e("div",{class:t`mt-2 mb-10 mx-2 h-36 w-60`},e("o-card",{title:"Default size card",hoverable:"true",block:"1"},e("o-link",{underline:!1,type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"More"),e("p",null,"Card content"),e("p",null,"Card content"),e("p",null,"Card content"))),e("div",{class:t`mt-2 mb-10 mx-2 h-36 w-60`},e("o-card",{title:"no border card",hoverable:"true",bordered:!1,block:"1"},e("o-link",{underline:!1,type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"More"),e("p",null,"Card content"),e("p",null,"Card content"),e("p",null,"Card content"))))),e("code-demo",{title:"\u76F8\u518C\u5361\u7247",describe:"\u652F\u6301\u5C01\u9762\u3001\u5934\u50CF\u3001\u6807\u9898\u548C\u63CF\u8FF0\u4FE1\u606F\u7684\u5361\u7247",code:this.mdD,style:u},e("div",{slot:"demo",class:t`flex flex-wrap justify-around px-5 py-5`},e("div",{class:t`mt-2 mb-10 mx-5 h-80 w-72`},e("o-card",{block:"1",onChange:this.pickAction,title:"Action card",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"always"},e("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),e("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},e("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),e("div",null,e("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),e("p",null,"This is the description"))))),e("div",{class:t`mt-2 mb-10 mx-5 h-80 w-72`},e("o-card",{block:"1",hoverable:"true"},e("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"}),e("p",null,"OMI Card"),e("p",null,e("o-link",{underline:!1,type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"Welcome to OMI")))))))}};s.css=m.target;s=g([h(F)],s);export{s as default};
