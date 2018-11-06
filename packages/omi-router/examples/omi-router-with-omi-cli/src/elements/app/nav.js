import '../views/nav1/module1/page1'
import '../views/nav1/module2/page1'
import '../views/nav2/module1/page1'
import '../views/nav2/module2/page1'

export default [
  {
    label: 'nav one',
    code: 'nav1',
    selected: false,
    children: [
      {
        label: 'module one',
        code: 'module1',
        selected: false,
        children: [
          {
            label: 'page one',
            code: 'page1'
          }
        ]
      },
      {
        label: 'module two',
        code: 'module2',
        selected: false,
        children: [
          {
            label: 'page one',
            code: 'page1'
          }
        ]
      }
    ]
  },
  {
    label: 'nav two',
    code: 'nav2',
    selected: false,
    children: [
      {
        label: 'module one',
        code: 'module1',
        selected: false,
        children: [
          {
            label: 'page one',
            code: 'page1'
          }
        ]
      },
      {
        label: 'module two',
        code: 'module2',
        selected: false,
        children: [
          {
            label: 'page one',
            code: 'page1'
          }
        ]
      }
    ]
  }
]
