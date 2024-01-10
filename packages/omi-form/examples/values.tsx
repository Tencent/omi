import { render, h } from 'omi'
import '../src/index.tsx'

const config = {
  values: {
    userName: {
      first: 'Jack',
      last: 'Li',
    },
    age: 18,
    country: 'China',
    gender: 'male',
  },
  components: [
    {
      type: 'h1',
      text: 'Create Account',
    },
    {
      type: 'divider',
    },
    {
      label: 'Username',
      tooltip: '',
      description: 'Make sure it matches your legal name',
      type: 'group',
      name: 'userName',
      components: [
        {
          type: 'input',
          name: 'first',
          placeholder: 'First Name',
          span: 6,
        },
        {
          type: 'input',
          name: 'last',
          placeholder: 'Last Name',
          span: 6,
        },
      ],
    },
    {
      type: 'input',
      props: { type: 'number' },
      name: 'age',
      label: 'Age',
      placeholder: 'Age',
    },
    {
      type: 'select',
      name: 'country',
      label: 'Country',
      placeholder: 'Country',
      options: [
        {
          value: 'China',
          label: 'China',
        },
        {
          value: 'Chile',
          label: 'Chile',
        },
      ],
    },
    {
      type: 'radio',
      name: 'gender',
      label: 'Gender',
      placeholder: 'Gender',
      options: [
        {
          value: 'male',
          label: 'Male',
        },
        {
          value: 'female',
          label: 'female',
        },
      ],
    },
  ],
  submitButton: true,
  resetButton: true,
  labelStyle: {
    align: 'right',
    width: 105,
  },
}

render(<o-form config={config} />, 'body')
