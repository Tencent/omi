import { render, h } from 'omi'
import '../src/index.tsx'

const config = {
  components: [
    {
      name: 'username',
      type: 'input',
      label: 'Username',
    },
    {
      name: 'birth_year',
      type: 'input',
      label: 'Birth Year',
    },
    {
      type: 'input',
      props: { type: 'password' },
      name: 'password',
      label: 'Password',
    },
    {
      type: 'input',
      props: { type: 'password' },
      name: 'repeat_password',
      label: 'Repeat Password',
    },
    {
      type: 'input',
      name: 'access_token',
      label: 'Access Token',
    },
    {
      type: 'input',
      name: 'email',
      label: 'Email',
    },
  ],

  locale: 'zh',
  validate(Joi) {
    return Joi.object({
      username: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).allow('', null),
      repeat_password: Joi.ref('password'),
      access_token: Joi.alternatives().try(Joi.string().allow('', null), Joi.number()),
      birth_year: Joi.number().integer().min(1900).max(2013),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      }),
    })
      .with('username', ['birth_year', 'email'])
      .with('password', 'repeat_password')
      .when(Joi.object({ password: Joi.string().valid('', null) }).unknown(), {
        then: Joi.object({ access_token: Joi.not('', null) }),
        otherwise: Joi.when(
          Joi.object({ access_token: Joi.string().valid('', null) }).unknown(),
          {
            then: Joi.object({ password: Joi.not('', null) }),
            otherwise: Joi.object().xor('password', 'access_token'),
          }
        ),
      })
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
//     { type: 'text', name: 'first',  value: '', placeholder: 'First Name', span: 6 },
//     { type: 'text', name: 'last', value: '', placeholder: 'Last Name', span: 6 }
//   ]
// },

// {
//   type: 'list',
//   name: 'tags222',
//   itemTemplate: { type: 'text', name: 'tag', value: '3', placeholder: 'First Name', span: 6 },
//   items: [
//     { type: 'text', name: 'tag', value: '4', placeholder: 'First Name', span: 6 }
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
//       { type: 'text', name: 'type', value: '1', placeholder: 'First Name', span: 6 },
//       { type: 'text', name: 'number', value: '2', placeholder: 'Last Name', span: 6 },

//       {
//         type: 'list',
//         name: 'tagsGroup',
//         itemTemplate: {
//           label: '',
//           tooltip: '',
//           description: 'Tags of Phone',
//           type: 'group',
//           components: [
//             { type: 'text', name: 'tag', value: '3', placeholder: 'First Name', span: 6 },
//           ]
//         },
//         items: [
//           {
//             label: '',
//             tooltip: '',
//             description: 'Tags of Phone',
//             type: 'group',
//             components: [
//               { type: 'text', name: 'tag', value: '3', placeholder: 'First Name', span: 6 },
//             ]
//           }
//         ]
//       },

//       {
//         type: 'list',
//         name: 'tags',
//         itemTemplate: { type: 'text', name: 'tag', value: '3', placeholder: 'First Name', span: 6 },
//         items: [
//           { type: 'text', name: 'tag', value: '4', placeholder: 'First Name', span: 6 }
//         ]
//       }
//     ]
//   },
//   items: [

//   ]
// },
