import { genId } from '../../../id'

export const getIntroductionNode = (lacale, localeMap) => {
  return {
    label: localeMap.base.Introduction,
    //icon: 'description',
    href: '#/docs/introduction',
    md: lacale === 'zh' ? import(`./zh/introduction.md?raw`) : import(`./en/introduction.md?raw`),
    // vite 目前不支持
    //md: import(`./${lacale}/introduction.md?raw`),
    id: genId(),
  }
}


export const getThemeNode = (lacale, localeMap) => {
  return {
    label: localeMap.base.CustomTheme,
    //icon: 'description',
    href: '#/docs/theme',
    md: lacale === 'zh' ? import(`./zh/theme.md?raw`) : import(`./en/theme.md?raw`),
    // vite 目前不支持
    // md: import(`./${lacale}/theme.md?raw`),
    id: genId(),
  }
}

