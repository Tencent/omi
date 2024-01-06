import { Component, render, tag, h } from 'omi'
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
      tooltip: "I'm a tooltip!!!!!!!!!!!!!!!!!!!!",
      description: 'Make sure it matches your legal name',
      type: 'group',
      components: [
        {
          type: 'input',
          name: 'first',
          placeholder: 'First Name',
          span: 12,
          sm: 6,
        },
        {
          type: 'input',
          name: 'last',
          placeholder: 'Last Name',
          span: 12,
          sm: 6,
        },
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
            name: 'first',
            placeholder: 'First Name',
            span: 12,
            sm: 6,
          },
          {
            type: 'input',
            name: 'last',
            placeholder: 'Last Name',
            span: 12,
            sm: 6,
          },
        ],
      },
      items: [],
    },
  ],
  submitButton: true,
  resetButton: true,
  labelStyle: {
    // width: 125,
    align: 'top', // left, right, top
  },
  style: {
    margin: '0 auto',
    padding: '40px',
    background: '#fff',
    borderRadius: '5px',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  },
}

render(<o-form config={config} />, 'body')
