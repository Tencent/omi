import { i18n } from '~/index'
import { genId } from '../../../util/id'

export const getIntroductionNode = () => {
  return {
    label: i18n.t('Introduction'),
    //icon: 'description',
    href: '#/docs/introduction',
    md:
      i18n.locale === 'zh'
        ? import(`./zh/introduction.md?raw`)
        : import(`./en/introduction.md?raw`),
    // vite 目前不支持
    //md: import(`./${locale}/introduction.md?raw`),
    id: genId()
  }
}

export const getThemeNode = () => {
  return {
    label: i18n.t('CustomTheme'),
    //icon: 'description',
    href: '#/docs/theme',
    md:
      i18n.locale === 'zh'
        ? import(`./zh/theme.md?raw`)
        : import(`./en/theme.md?raw`),
    // vite 目前不支持
    // md: import(`./${locale}/theme.md?raw`),
    id: genId()
  }
}

export const getContribution = () => {
  return {
    label: i18n.t('Contribution'),
    //icon: 'description',
    href: '#/docs/contribution',
    md:
      i18n.locale === 'zh'
        ? import(`./zh/Contribution.md?raw`)
        : import(`./en/Contribution.md?raw`),
    // vite 目前不支持
    // md: import(`./${locale}/theme.md?raw`),
    id: genId()
  }
}
