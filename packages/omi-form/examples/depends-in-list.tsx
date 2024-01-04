import { render, h } from 'omi'
import '../src/index.tsx'

const config = {
  components: [
    {
      type: 'list',
      name: 'myList',
      itemTemplate: {
        label: '',
        tooltip: '',
        description: 'Make sure it matches your legal name',
        type: 'group',
        components: [
          {
            type: 'select',
            name: 'choice',
            defaultValue: '1',
            placeholder: 'Last Name',
            options: [
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
            ],
          },
          {
            type: 'input',
            name: 'address',
            defaultValue: 'xxx',
            dependsOn: {
              name: 'choice',
              value: '2',
            },
          },
        ],
      },
      items: [],
    },
  ],

  // 你理解错了我的意思，每一项的 choice 和 address 有依赖关系都可以联动，互相隔离
  submitButton: true,
  resetButton: true,
  style: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '40px',
    background: '#fff',
    borderRadius: '5px',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  },
}

render(<o-form config={config} />, 'body')
