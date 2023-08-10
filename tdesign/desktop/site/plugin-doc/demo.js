/* eslint-disable */
import path from 'path';

export default function renderDemo(md, container) {
  md.use(container, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s+([\\/.\w-]+)(\s+(.+?))?(\s+--dev)?$/);
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const match = tokens[idx].info.trim().match(/^demo\s+([\\/.\w-]+)(\s+(.+?))?(\s+--dev)?$/);
        const [, demoPath, componentName = ''] = match;
        const demoPathOnlyLetters = demoPath.replace(/[^a-zA-Z\d]/g, '');
        const demoName = path.basename(demoPath);
        const demoDefName = `Demo${demoPathOnlyLetters}`;
        const demoCodeDefName = `Demo${demoPathOnlyLetters}Code`;
        const tpl = `
          <td-doc-demo component-name="${componentName.trim()}" :code=${demoCodeDefName} demo-name="${demoName}" language="markup">
            <div slot="action">
              <Stackblitz demo-name="${demoName}" component-name="${componentName}" :code=${demoCodeDefName} />
            </div>
            <div class="tdesign-demo-item__body">
              <${demoDefName} />
            </div>
          </td-doc-demo>
        `;

        tokens.tttpl = tpl;

        return `<div class="tdesign-demo-wrapper tdesign-demo-item--${componentName.trim()}-${demoName} tdesign-demo-item--${componentName.trim()}">`;
      }
      if (tokens.tttpl) {
        return `${tokens.tttpl || ''}</div>`;
      }
      return '';
    },
  });
}
