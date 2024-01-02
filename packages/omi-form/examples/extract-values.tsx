import { define, WeElement, render } from 'omi'
import '../src/index.tsx'

const config = {
  components: [
    {
      name: 'username',
      type: 'text',
      value: '',
      validate: {
        type: 'string',
        rules: [
          'alphanum',
          { name: 'min', args: [3] },
          { name: 'max', args: [30] },
          'required',
        ],
        messages: {
          'string.empty': 'Username is required',
          'string.min': 'Username should be longer than 3 characters',
          'string.max': 'Username should be shorter than 30 characters',
        },
      },
    },
    {
      name: 'birth_year',
      type: 'text',
      validate: {
        type: 'number',
        rules: ['integer', { name: 'min', args: [1900] }, { name: 'max', args: [2013] }],
        messages: {
          'number.base': 'Birth year must be a number',
          'number.integer': 'Birth year must be an integer',
          'number.min': 'Birth year must be greater than or equal to 1900',
          'number.max': 'Birth year must be less than or equal to 2013',
        },
      },
    },
    {
      type: 'text',
      name: 'password',
      validate: {
        type: 'string',
        rules: [{ name: 'pattern', args: ['^[a-zA-Z0-9]{3,30}$'] }],
        messages: {
          'string.pattern.base':
            'Password must contain only alphanumeric characters and be 3 to 30 characters long',
        },
      },
    },
    {
      type: 'password',
      name: 'repeat_password',
      validate: {
        type: 'ref',
        ref: 'password',
      },
    },
    {
      type: 'text',
      name: 'access_token',
      validate: {
        type: 'oneOf',
        oneOf: [{ type: 'string' }, { type: 'number' }],
      },
    },
    {
      type: 'text',
      name: 'email',
      validate: {
        type: 'string',
        rules: [
          {
            name: 'email',
            args: [{ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }],
          },
        ],
      },
    },

    {
      label: '',
      tooltip: '',
      name: 'name',
      description: 'Make sure it matches your legal name',
      type: 'group',
      components: [
        { type: 'text', name: 'first', value: '', placeholder: 'First Name', column: 6 },
        { type: 'text', name: 'last', value: '', placeholder: 'Last Name', column: 6 },
      ],
    },

    {
      type: 'list',
      name: 'tags222',
      itemTemplate: {
        type: 'text',
        name: 'tag',
        value: '3',
        placeholder: 'First Name',
        column: 6,
      },
      items: [
        { type: 'text', name: 'tag', value: '4', placeholder: 'First Name', column: 6 },
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
            type: 'text',
            name: 'type',
            value: '1',
            placeholder: 'First Name',
            column: 6,
          },
          {
            type: 'text',
            name: 'number',
            value: '2',
            placeholder: 'Last Name',
            column: 6,
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
                  type: 'text',
                  name: 'tag',
                  value: '3',
                  placeholder: 'First Name',
                  column: 6,
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
                    type: 'text',
                    name: 'tag',
                    value: '3',
                    placeholder: 'First Name',
                    column: 6,
                  },
                ],
              },
            ],
          },

          {
            type: 'list',
            name: 'tags',
            itemTemplate: {
              type: 'text',
              name: 'tag',
              value: '3',
              placeholder: 'First Name',
              column: 6,
            },
            items: [
              {
                type: 'text',
                name: 'tag',
                value: '4',
                placeholder: 'First Name',
                column: 6,
              },
            ],
          },
        ],
      },
      items: [],
    },
  ],
  relations: [
    { name: 'with', args: ['username', 'birth_year'] },
    { name: 'xor', args: ['password', 'access_token'] },
    { name: 'with', args: ['password', 'repeat_password'] },
  ],
  submitButton: true,
  resetButton: true,
}

render(<o-form config={config} />, 'body')
