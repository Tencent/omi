var e=`## \u81EA\u5B9A\u4E49\u4E3B\u9898 

Omiu \u652F\u6301\u8FD0\u884C\u65F6\u52A8\u6001\u4E3B\u9898\u5207\u6362\u3002


## \u5B89\u88C5

\`\`\`js
import '@omiu/common'
\`\`\`

\u6216\u8005\u76F4\u63A5 script \u6807\u7B7E\u5F15\u5165\u3002


\`\`\`html
<script src="https://unpkg.com/@omiu/common"><\/script>
\`\`\`

## \u66F4\u6539\u4E3B\u9898

\`\`\`js
const setTheme = Omiu.setTheme

setTheme('primary', '#07c160')
setTheme('danger', '#f5222d')
setTheme('surface', '#ffffff')
setTheme('on-primary', '#ffffff')
setTheme('on-danger', '#ffffff')
setTheme('on-surface', '#000000')
setTheme('background', '#ffffff')
setTheme('small-radius', '4px')
setTheme('medium-radius', '4px')
setTheme('large-radius', '0px')
setTheme('font-family', '-apple-system-font,"Helvetica Neue",sans-serif')
\`\`\`

\u6216\u8005

\`\`\`js
Omiu.setThemePrimary('green')
\`\`\`

## \u9ED1\u591C\u6A21\u5F0F

### \u5F15\u5165css\u53D8\u91CF
\`\`\`js
import "@omiu/common/style"
\`\`\`
### \u8BBE\u7F6E\u9ED1\u591C\u6A21\u5F0F
\`\`\`js
// \u8BBE\u7F6E\u9ED1\u591C\u6A21\u5F0F
document.documentElement.setAttribute('theme-mode', 'dark');
// \u91CD\u7F6E\u4E3A\u767D\u5929\u6A21\u5F0F
document.documentElement.removeAttribute('theme-mode');
\`\`\`
`;export{e as default};
