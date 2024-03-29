import { render, h } from 'omi'
import '../src/index.tsx'

const config = {
  components: [
    {
      type: 'h1',
      text: 'List',
    },
    {
      type: 'divider',
    },

    {
      type: 'list',
      name: 'myList',
      itemTemplate: {
        label: '',
        tooltip: '',
        description: 'Make sure it matches your legal name',
        type: 'group',
        components: [
          { type: 'input', name: 'first', placeholder: 'First Name', span: 6 },
          { type: 'input', name: 'last', placeholder: 'Last Name', span: 6 },
        ],
      },
      items: [],
    },
  ],
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
