import { render, h } from 'omi'
import '../src/index.tsx'

const config = {
  components: [
    {
      type: 'select',
      name: 'choice',
      defaultValue: '2',
      placeholder: 'Last Name',
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ],
    },
    {
      type: 'input',
      name: 'email',
      defaultValue: 'john.doe@example.com',
      dependsOn: {
        name: 'choice',
        value: '2',
      },
    },
    {
      type: 'select',
      name: 'choice2',
      defaultValue: '',
      placeholder: 'Last Name',
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ],
    },
    {
      type: 'input',
      name: 'email2',
      defaultValue: 'john.doe@example.com',
      dependsOn: 'values.choice2 === "2"',
    },
  ],
  values: {
    choice: '1',
    email: 'omi@qq.com',
  },
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
