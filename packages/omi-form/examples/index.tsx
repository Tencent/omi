import { render, h } from 'omi'
import '../src/index.tsx'

const config = {
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
      // 当 group 没有 name 时候，会把内部的值挂在父级的下面
      // name: 'name',
      description: 'Make sure it matches your legal name',
      type: 'group',
      components: [
        {
          type: 'input',
          name: 'first',
          defaultValue: 'o',
          placeholder: 'First Name',
          span: 6,
        },
        {
          type: 'input',
          name: 'last',
          defaultValue: 'mi',
          placeholder: 'Last Name',
          span: 6,
        },
      ],
    },
    {
      type: 'input',
      defaultValue: '',
      name: 'birthday',
      placeholder: 'Birthday',
      label: 'Birthday',
      tooltip: '',
      description: 'Your birthday is not visible others.',
    },
    {
      type: 'select',
      name: 'choice',
      label: 'Country',
      placeholder: 'Country',
      options: [
        { value: 'China', label: 'China' },
        { value: 'Chile', label: 'Chile' },
      ],
    },
    {
      type: 'radio',
      name: 'gender',
      label: 'Gender',
      placeholder: 'Gender',
      options: [
        { value: 'Male', label: 'Male' },
        { value: 'female', label: 'female' },
      ],
    },
    {
      type: 'list',
      label: 'Phones',
      name: 'phones',
      itemTemplate: {
        label: '',
        tooltip: '',
        type: 'group',
        components: [
          {
            type: 'input',
            name: 'type',
            placeholder: 'Phone Type',
            span: 6,
          },
          {
            type: 'input',
            name: 'number',
            props: { type: 'number' },
            placeholder: 'Phone Number',
            span: 6,
          },
        ],
      },
      items: [
        {
          label: '',
          tooltip: '',
          type: 'group',
          components: [
            {
              type: 'input',
              name: 'type',
              placeholder: 'Phone Type',
              span: 6,
            },
            {
              type: 'input',
              name: 'number',
              placeholder: 'Phone Number',
              span: 6,
            },
          ],
        },
      ],
    },
    {
      type: 'input',
      label: 'Email',
      placeholder: 'Email',
      defaultValue: 'john.doe@example.com',
      description: 'You will receive a confirmation letter to this email.',
    },
    {
      type: 'input',
      props: { type: 'password' },
      label: 'Password',
      name: 'password',
      placeholder: 'Password',
    },
    {
      type: 'input',
      props: { type: 'password' },
      label: 'Password Again',
      name: 'passwordConfirmation',
      placeholder: 'Password Again',
    },
    // {
    //   type: 'custom',
    //   component: 'my-custom-component',
    //   props: { foo: 'bar' },
    // },
    {
      type: 'checkbox',
      text: 'I accept the Terms & Conditions & Privacy Policy',
    },
    {
      type: 'checkbox',
      text: 'I want to recieve marketing emails',
    },
    {
      type: 'divider',
    },
  ],
  submitButton: true,
  resetButton: true,
  primaryColor: '#45a049',
  labelStyle: {
    // width: 125,
    align: 'top', // left, right, top
  },
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
