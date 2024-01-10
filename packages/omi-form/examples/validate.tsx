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
      password: Joi.string().empty('').pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
      repeat_password: Joi.string().empty(''),
      access_token: Joi.alternatives().try(Joi.string().empty(''), Joi.number()),
      birth_year: Joi.number().integer().min(1900).max(2013),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      }),
    }).custom((values, helpers) => {
      if (values.password !== values.repeat_password) {
        return helpers.error('custom', {
          message: 'passwords do not match, 两次密码不匹配',
        })
      }
      if (
        (values.password && values.access_token) ||
        (!values.password && !values.access_token)
      ) {
        return helpers.error('custom', {
          message: {
            en: 'Either password or access token must be provided',
            zh: '密码或访问令牌只提供一个',
          },
        })
      }
      if (
        (values.username && !values.birth_year) ||
        (!values.username && values.birth_year)
      ) {
        return helpers.error('custom', {
          message: {
            en: 'Username and birth year must be provided together',
            zh: '用户名和出生年必须一起提供',
          },
        })
      }
      return values
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
