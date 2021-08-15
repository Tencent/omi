import { genId } from '../../../util/id'

export const getIntroductionNode = (locale, localeMap) => {
  return {
    label: localeMap.base.Introduction,
    //icon: 'description',
    href: '#/docs/introduction',
    md: locale === 'zh' ? import(`./zh/introduction.md?raw`) : import(`./en/introduction.md?raw`),
    // vite 目前不支持
    //md: import(`./${locale}/introduction.md?raw`),
    id: genId(),
  }
}


export const getThemeNode = (locale, localeMap) => {
  return {
    label: localeMap.base.CustomTheme,
    //icon: 'description',
    href: '#/docs/theme',
    md: locale === 'zh' ? import(`./zh/theme.md?raw`) : import(`./en/theme.md?raw`),
    // vite 目前不支持
    // md: import(`./${locale}/theme.md?raw`),
    id: genId(),
  }
}

export const getContribution = (locale, localeMap) => {
  return {
    label: localeMap.base.Contribution,
    //icon: 'description',
    href: '#/docs/contribution',
    md: locale === 'zh' ? import(`./zh/Contribution.md?raw`) : import(`./en/Contribution.md?raw`),
    // vite 目前不支持
    // md: import(`./${locale}/theme.md?raw`),
    id: genId(),
  }
}

