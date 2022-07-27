import i18next from 'i18next'
import { genId } from '../../../util/id'

export const getIntroductionNode = () => {
  return {
    label: i18next.t('Introduction'),
    //icon: 'description',
    href: '#/docs/introduction',
    md:
      i18next.language === 'zh'
        ? import(`./zh/introduction.md?raw`)
        : import(`./en/introduction.md?raw`),
    // vite 目前不支持
    //md: import(`./${locale}/introduction.md?raw`),
    id: genId()
  }
}

export const getThemeNode = () => {
  return {
    label: i18next.t('CustomTheme'),
    //icon: 'description',
    href: '#/docs/theme',
    md:
      i18next.language === 'zh'
        ? import(`./zh/theme.md?raw`)
        : import(`./en/theme.md?raw`),
    // vite 目前不支持
    // md: import(`./${locale}/theme.md?raw`),
    id: genId()
  }
}

export const getContribution = () => {
  return {
    label: i18next.t('Contribution'),
    //icon: 'description',
    href: '#/docs/contribution',
    md:
      i18next.language === 'zh'
        ? import(`./zh/Contribution.md?raw`)
        : import(`./en/Contribution.md?raw`),
    // vite 目前不支持
    // md: import(`./${locale}/theme.md?raw`),
    id: genId()
  }
}
