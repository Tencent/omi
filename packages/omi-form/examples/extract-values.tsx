import { render, h } from 'omi'
import '../src/index.tsx'

const config = {
  components: [
    {
      name: 'username',
      type: 'input',
      value: '',
    },
    {
      name: 'birth_year',
      type: 'input',
    },
    {
      type: 'input',
      props: { type: 'password' },
      name: 'password',
    },
    {
      type: 'input',
      props: { type: 'password' },
      name: 'repeat_password',
    },
    {
      type: 'input',
      name: 'access_token',
    },
    {
      type: 'input',
      name: 'email',
    },

    {
      label: '',
      tooltip: '',
      name: 'name',
      description: 'Make sure it matches your legal name',
      type: 'group',
      components: [
        { type: 'input', name: 'first', value: '', placeholder: 'First Name', span: 6 },
        { type: 'input', name: 'last', value: '', placeholder: 'Last Name', span: 6 },
      ],
    },

    {
      type: 'list',
      name: 'tags222',
      itemTemplate: {
        type: 'input',
        name: 'tag',
        value: '3',
        placeholder: 'First Name',
        span: 6,
      },
      items: [
        { type: 'input', name: 'tag', value: '4', placeholder: 'First Name', span: 6 },
      ],
    },
    {
      type: 'list',
      name: 'phones',
      itemTemplate: {
        label: '',
        tooltip: '',
        description: 'My Phones',
        type: 'group',
        components: [
          {
            type: 'input',
            name: 'type',
            value: '1',
            placeholder: 'First Name',
            span: 6,
          },
          {
            type: 'input',
            name: 'number',
            value: '2',
            placeholder: 'Last Name',
            span: 6,
          },

          {
            type: 'list',
            name: 'tagsGroup',
            itemTemplate: {
              label: '',
              tooltip: '',
              description: 'Tags of Phone',
              type: 'group',
              components: [
                {
                  type: 'input',
                  name: 'tag',
                  value: '3',
                  placeholder: 'First Name',
                  span: 6,
                },
              ],
            },
            items: [
              {
                label: '',
                tooltip: '',
                description: 'Tags of Phone',
                type: 'group',
                components: [
                  {
                    type: 'input',
                    name: 'tag',
                    value: '3',
                    placeholder: 'First Name',
                    span: 6,
                  },
                ],
              },
            ],
          },

          {
            type: 'list',
            name: 'tags',
            itemTemplate: {
              type: 'input',
              name: 'tag',
              value: '3',
              placeholder: 'First Name',
              span: 6,
            },
            items: [
              {
                type: 'input',
                name: 'tag',
                value: '4',
                placeholder: 'First Name',
                span: 6,
              },
            ],
          },
        ],
      },
      items: [],
    },
  ],
  submitButton: true,
  resetButton: true,
}

render(<o-form config={config} />, 'body')
