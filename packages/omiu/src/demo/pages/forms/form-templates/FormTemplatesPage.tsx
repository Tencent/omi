import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

import BasicExample from './examples/BasicExample'
import LoginForm from './examples/LoginForm'
import RegisterForm from './examples/RegisterForm'
import SubscriptionForm from './examples/SubscriptionForm'
import ContactForm from './examples/ContactForm'

import BasicExampleCode from './examples/BasicExample?raw'
import LoginFormCode from './examples/LoginForm?raw'
import RegisterFormCode from './examples/RegisterForm?raw'
import SubscriptionFormCode from './examples/SubscriptionForm?raw'
import ContactFormCode from './examples/ContactForm?raw'

@tag('form-templates-page')
export default class FormTemplatesPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Basic example
          </h2>
          <code-showcase code={BasicExampleCode}>
            <BasicExample.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Basic example --> */}

        {/* <!-- Section: Login Form --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="my-5 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Login Form
          </h2>
          <code-showcase code={LoginFormCode}>
            <LoginForm.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Login Form --> */}

        {/* <!-- Section: Register Form --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="my-5 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Register Form
          </h2>
          <code-showcase code={RegisterFormCode}>
            <RegisterForm.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Register Form --> */}

        {/* <!-- Section: Contact Form --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="my-5 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Contact Form
          </h2>
          <code-showcase code={ContactFormCode}>
            <ContactForm.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Contact Form --> */}

        {/* <!-- Section: Subscription Form --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="my-5 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Subscription Form
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-5">
            Subscription form is a form used to get user information such as name and email address. Its main purpose is
            that your customers will receive emails whenever you introduce a new product or item. Creating such a form
            is crucial because it may help you generate more leads for your website. Therefore, in order to attract the
            attention of customers as well as call to action to enter user emails, create eye-catching, interesting
            forms as well as display them in a place where users can easily find them.
          </p>
          <code-showcase code={SubscriptionFormCode}>
            <SubscriptionForm.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Subscription Form --> */}
      </div>
    )
  }
}
