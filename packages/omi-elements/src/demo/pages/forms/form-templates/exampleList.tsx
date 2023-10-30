import React from 'react'
import BasicExample from './examples/BasicExample'
import LoginForm from './examples/LoginForm'
import RegisterForm from './examples/RegisterForm'
import SubscriptionForm from './examples/SubscriptionForm'
import ContactForm from './examples/ContactForm'

export default [
  {
    name: 'BasicExample',
    path: '/forms/form-templates/examples/basic-example',
    element: <BasicExample />,
  },
  {
    name: 'LoginForm',
    path: '/forms/form-templates/examples/login-form',
    element: <LoginForm />,
  },
  {
    name: 'RegisterForm',
    path: '/forms/form-templates/examples/register-form',
    element: <RegisterForm />,
  },
  {
    name: 'ContactForm',
    path: '/forms/form-templates/examples/contact-form',
    element: <ContactForm />,
  },
  {
    name: 'SubscriptionForm',
    path: '/forms/form-templates/examples/subscription-form',
    element: <SubscriptionForm />,
  },
]
