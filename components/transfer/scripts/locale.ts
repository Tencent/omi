export type Language = 'zh' | 'en'

export const messages = {
  en: {
    defaultProps: 'Default Props',
    importDescription: 'Or use script tag to ref it.'
  },
  zh: {
    import: '导入',
    usage: '使用',
    props: '属性',
    defaultProps: '默认属性',
    importDescription: '或者直接 script 标签引入。'
  }
}

export const t = (key: string, locale: Language) => {
  return messages[locale][key] || key.charAt(0).toUpperCase() + key.slice(1)
}

export const en = (key: string) => t(key, 'en')
export const zh = (key: string) => t(key, 'zh')
