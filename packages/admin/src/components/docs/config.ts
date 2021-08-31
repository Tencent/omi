import i18next from 'i18next'
import { genId } from '../../util/id'

export const getDocsList = () => {
  return [
    {
      label: i18next.t('Demo1'),
      icon: 'description',
      href: '#/docs/demo1',
      md: import('./demo.md?raw'),
      id: genId()
    },
    {
      label: i18next.t('Demo2'),
      icon: 'description',
      href: '#/docs/demo2',
      md: import('./demo2.md?raw'),
      id: genId()
    }
  ]
}
