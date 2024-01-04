import { Component, render, tag, h } from 'omi'
import '../src/index.tsx'
import formStyle from '../src/theme.css?raw'

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
      description: 'Make sure it matches your legal name',
      type: 'group',
      components: [
        { type: 'input', name: 'first', placeholder: 'First Name', column: 6 },
        { type: 'input', name: 'last', placeholder: 'Last Name', column: 6 },
      ],
    },
    {
      type: 'input',
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
      value: '',
      placeholder: 'Country',
      options: [
        { value: 'China', label: 'China' },
        { value: 'Chile', label: 'Chile' },
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
            value: '',
            placeholder: 'Phone Type',
            column: 6,
          },
          {
            type: 'input',
            name: 'number',
            value: '',
            placeholder: 'Phone Number',
            column: 6,
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
              value: '',
              placeholder: 'Phone Type',
              column: 6,
            },
            {
              type: 'input',
              name: 'number',
              value: '',
              placeholder: 'Phone Number',
              column: 6,
            },
          ],
        },
      ],
    },
    {
      type: 'input',
      label: 'Email',
      name: 'Email',
      placeholder: 'Email',
      value: 'john.doe@example.com',
      description: 'You will receive a confirmation letter to this email.',
    },
    {
      type: 'input',
      label: 'Password',
      name: 'password',
      placeholder: 'Password',
      value: '',
    },
    {
      type: 'input',
      label: 'Password Again',
      name: 'passwordConfirmation',
      placeholder: 'Password Again',
      value: '',
    },
    // {
    //   type: 'custom',
    //   component: 'my-custom-component',
    //   props: { foo: 'bar' },
    // },
    {
      type: 'checkbox',
      name: 'terms',
      text: 'I accept the Terms & Conditions & Privacy Policy',
    },
    {
      type: 'checkbox',
      name: 'marketing',
      text: 'I want to recieve marketing emails',
    },
  ],
  submitButton: true,
  resetButton: true,
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

const formConfig = {
  components: [
    {
      type: 'h1',
      text: 'Form Options',
    },
    {
      type: 'divider',
    },
    {
      name: 'labelStyle',
      type: 'group',
      components: [
        {
          type: 'radio',
          name: 'align',
          label: 'Label Align',
          value: 'top',
          options: [
            { value: 'left', label: 'Left' },
            { value: 'right', label: 'Right' },
            { value: 'top', label: 'Top' },
          ],
          column: 6,
        },
        {
          type: 'input',
          label: 'Label Width',
          name: 'width',
          placeholder: 'Label Width',
          column: 6,
        },
      ],
    },
    {
      label: 'Buttons',
      name: 'buttons',
      type: 'group',
      components: [
        {
          type: 'checkbox',
          value: true,
          name: 'submitButton',
          text: 'Submit Button',
          column: 6,
        },
        {
          type: 'checkbox',
          value: true,
          name: 'resetButton',
          text: 'Reset Button',
          column: 6,
        },
      ],
    },
  ],
  submitButton: false,
  resetButton: false,
  labelStyle: {
    width: 125,
    align: 'top',
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

@tag('my-app')
class MyApp extends Component {
  static css = formStyle

  onConfigChange = (e) => {
    config.labelStyle = e.detail.values.labelStyle
    config.submitButton = e.detail.values.buttons.submitButton
    config.resetButton = e.detail.values.buttons.resetButton
    this.update()
  }

  render() {
    return (
      <div class="flex gap-2" style="justify-content: center;">
        <o-form config={config} style={{ width: 600 }} />
        <o-form
          config={formConfig}
          onChange={this.onConfigChange}
          style={{ width: 600 }}
        />
      </div>
    )
  }
}

render(<my-app />, 'body')
