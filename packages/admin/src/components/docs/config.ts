export const getDocsList = (localeMap) => {
  return [
    {

      label: localeMap.base.Demo1,
      icon: 'description',
      href: '#/docs/demo1',
      md: import('./demo.md?raw'),
      id: 27,
    },
    {
      label: localeMap.base.Demo2,
      icon: 'description',
      href: '#/docs/demo2',
      md: import('./demo2.md?raw'),
      id: 17,
    }
  ]
}
