var e=`## Custom Theme 

Omiu supports dynamic theme switching at runtime.



## Import

\`\`\`js
import '@omiu/common'
\`\`\`

Or use script tag to ref it.


\`\`\`html
<script src="https://unpkg.com/@omiu/common"><\/script>
\`\`\`

## Change Theme

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

or

\`\`\`js
Omiu.setThemePrimary('green')
\`\`\`
## Dark Mode

### Import
\`\`\`js
import "@omiu/common/style"
\`\`\`
### Control light/dark display
\`\`\`js
// dark mode
document.documentElement.setAttribute('theme-mode', 'dark');
// reset to light mode
document.documentElement.removeAttribute('theme-mode');
\`\`\`

`;export{e as default};
