import { i18n } from '~/index'
import { genId } from '../../util/id'

export const getDocsList = () => {
  return [
    {
      label: i18n.t('Demo1'),
      icon: 'description',
      href: '#/docs/demo1',
      md: import('./demo.md?raw'),
      id: genId()
    },
    {
      label: i18n.t('Demo2'),
      icon: 'description',
      href: '#/docs/demo2',
      md: import('./demo2.md?raw'),
      id: genId()
    }
  ]
}
