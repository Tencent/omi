export type Language = 'zh' | 'en'
export const languages: Language[] = ['en', 'zh']

export const t = (key: string, messages: Object) => {
  if (!key) return ''

  const keyArr = key.split('.')
  const name = keyArr.shift()
  if (!keyArr.length) {
    return messages[name]
  } else {
    return t(keyArr.join('.'), messages[name])
  }
}

export const createI18n = (options: { locale: Language; messages: Object }) => {
  let locale = options.locale || 'zh'
  const i18n = {
    locale,
    setLocale: (locale: Language) => {
      i18n.locale = locale
      i18n.t = (key: string) => t(key, messages[locale])
    },
    t: (key: string) => t(key, messages[locale]),
    messages
  }
  return i18n
}

// import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const relativePath = '../locales/'

export const messages = Object.fromEntries(
  // globEager can not use variable
  Object.entries(import.meta.globEager('../locales/*.y(a)?ml')).map(
    ([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(relativePath.length, yaml ? -5 : -4), value.default]
    }
  )
)

export const useI18n = () => {
  return {
    t
  }
}

export const install = () => {
  const i18n = createI18n({
    locale: 'zh',
    messages
  })
  return i18n
}
