import i18next from 'i18next'
import { genId } from '../../../util/id'

export const getIntroductionNode = () => {
  return {
    label: i18next.t('Introduction'),
    //icon: 'description',
    href: '#/docs/introduction',
    // vite3 支持
    md: import(`./${i18next.language}/introduction.md?raw`),
    id: genId()
  }
}

export const getThemeNode = () => {
  return {
    label: i18next.t('CustomTheme'),
    //icon: 'description',
    href: '#/docs/theme',
    // vite3 支持
    md: import(`./${i18next.language}/theme.md?raw`),
    id: genId()
  }
}

export const getContribution = () => {
  return {
    label: i18next.t('Contribution'),
    //icon: 'description',
    href: '#/docs/contribution',
    // vite3 支持
    md: import(`./${i18next.language}/theme.md?raw`),
    id: genId()
  }
}
