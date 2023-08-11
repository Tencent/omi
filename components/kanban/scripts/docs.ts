import { Language, t } from './locale'

/**
 * 生成 API 文档
 * @param locale
 * @param params
 * @returns
 */
export function generateAPIDocs(
  locale: Language,
  params: {
    props: string
    defaultProps: string
    eventMap: any
  }
) {
  const { props, defaultProps, eventMap } = params

  let defaultPropsDocs = ''
  if (defaultProps) {
    defaultPropsDocs = `### ${t('defaultProps', locale)}

\`\`\`tsx
${defaultProps}
\`\`\`
`
  }

  let eventsDocs = ''
  if (eventMap) {
    eventsDocs = `### ${t('events', locale)}\n`
    Object.keys(eventMap).forEach((event) => {
      eventsDocs += `\n- ${event}`
    })
  }

  return `
## ${t('API', locale)}

### ${t('props', locale)}

\`\`\`tsx
${props}
\`\`\`

${defaultPropsDocs}
${eventsDocs}`
}

export function generateImportAndUsageDocs(
  locale: Language,
  params: {
    pkgName: string
    tagName: string
  }
) {
  const { pkgName, tagName } = params
  return `## ${t('import', locale)}

\`\`\`js
import '${pkgName}'
\`\`\`

${t('importDescription', locale)}

\`\`\`html
<script src="https://unpkg.com/${pkgName}"></script>
\`\`\`

## ${t('usage', locale)}

\`\`\`html
<${tagName}></${tagName}>
\`\`\``
}
