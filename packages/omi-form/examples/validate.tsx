import { define, WeElement, render, h } from 'omi'
import '../src/index.tsx'

const config = {
  components: [
    {
      name: 'username',
      type: 'text',
    },
    {
      name: 'birth_year',
      type: 'text',
    },
    {
      type: 'password',
      name: 'password',
    },
    {
      type: 'password',
      name: 'repeat_password',
    },
    {
      type: 'text',
      name: 'access_token',
    },
    {
      type: 'text',
      name: 'email',
    },
  ],

  locale: 'zh',
  validate(Joi) {
    return Joi.object({
      username: Joi.string().alphanum().min(3).max(30).required(),

      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

      repeat_password: Joi.ref('password'),

      access_token: [Joi.string(), Joi.number()],

      birth_year: Joi.number().integer().min(1900).max(2013),

      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      }),
    })
      .with('username', ['birth_year', 'email'])
      .xor('password', 'access_token')
      .with('password', 'repeat_password')
  },

  submitButton: true,
  resetButton: true,
}

render(<o-form config={config} />, 'body')

// {
//   label: '',
//   tooltip: '',
//   name: 'name',
//   description: 'Make sure it matches your legal name',
//   type: 'group',
//   components: [
//     { type: 'text', name: 'first',  value: '', placeholder: 'First Name', column: 6 },
//     { type: 'text', name: 'last', value: '', placeholder: 'Last Name', column: 6 }
//   ]
// },

// {
//   type: 'list',
//   name: 'tags222',
//   itemTemplate: { type: 'text', name: 'tag', value: '3', placeholder: 'First Name', column: 6 },
//   items: [
//     { type: 'text', name: 'tag', value: '4', placeholder: 'First Name', column: 6 }
//   ]
// },
// {
//   type: 'list',
//   name: 'phones',
//   itemTemplate: {
//     label: '',
//     tooltip: '',
//     description: 'My Phones',
//     type: 'group',
//     components: [
//       { type: 'text', name: 'type', value: '1', placeholder: 'First Name', column: 6 },
//       { type: 'text', name: 'number', value: '2', placeholder: 'Last Name', column: 6 },

//       {
//         type: 'list',
//         name: 'tagsGroup',
//         itemTemplate: {
//           label: '',
//           tooltip: '',
//           description: 'Tags of Phone',
//           type: 'group',
//           components: [
//             { type: 'text', name: 'tag', value: '3', placeholder: 'First Name', column: 6 },
//           ]
//         },
//         items: [
//           {
//             label: '',
//             tooltip: '',
//             description: 'Tags of Phone',
//             type: 'group',
//             components: [
//               { type: 'text', name: 'tag', value: '3', placeholder: 'First Name', column: 6 },
//             ]
//           }
//         ]
//       },

//       {
//         type: 'list',
//         name: 'tags',
//         itemTemplate: { type: 'text', name: 'tag', value: '3', placeholder: 'First Name', column: 6 },
//         items: [
//           { type: 'text', name: 'tag', value: '4', placeholder: 'First Name', column: 6 }
//         ]
//       }
//     ]
//   },
//   items: [

//   ]
// },
