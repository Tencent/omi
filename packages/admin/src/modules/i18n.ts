import enBase from '~/locales/en/base.yml'
import zhBase from '~/locales/zh/base.yml'

export type Language = 'zh' | 'en'
export const languages: Language[] = ['en', 'zh']

export const localeMap = {
  en: {
    base: enBase
  },
  zh: {
    base: zhBase
  }
}

// todo split .
export const t = (language: Language, key: string) => localeMap[language][key]

export const createI18n = () => {
  let locale: Language = 'zh'
  return {
    locale,
    t: (key: string) => {
      return t(locale, key)
    }
  }
}

// to do, dynamic

// import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
// ['en', 'zh', ...]
// const locales = ['en', 'zh']
// const types = ['base']

// locales.map((locale) => {
//   types.map((type) => {
//     import(`../../locales/${locale}/${type}.yml`).then(
//       (value) => (messages[locale] = value.default)
//     )
//   })
// })

// const messages = Object.fromEntries(
//   Object.entries(import.meta.globEager('../../locales/*.y(a)?ml')).map(
//     ([key, value]) => {
//       console.log(value)

//       const yaml = key.endsWith('.yaml')
//       return [key.slice(14, yaml ? -5 : -4), value.default]
//     }
//   )
// )

export const install = () => {
  const i18n = createI18n()
  return i18n
}
