import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

import InputBasicExample from './examples/InputBasicExample'
import InputSizing from './examples/InputSizing'
import InputDisabled from './examples/InputDisabled'
import InputReadOnly from './examples/InputReadOnly'
import InputText from './examples/InputText'
import InputEmail from './examples/InputEmail'
import InputPassword from './examples/InputPassword'
import InputNumber from './examples/InputNumber'
import InputPhoneNumber from './examples/InputPhoneNumber'
import InputURL from './examples/InputURL'
import InputHelperText from './examples/InputHelperText'
import InputCharacterCounter from './examples/InputCharacterCounter'
import InputTags from './examples/InputTags'
import InputDate from './examples/InputDate'

import InputBasicExampleCode from './examples/InputBasicExample?raw'
import InputSizingCode from './examples/InputSizing?raw'
import InputDisabledCode from './examples/InputDisabled?raw'
import InputReadOnlyCode from './examples/InputReadOnly?raw'
import InputTextCode from './examples/InputText?raw'
import InputEmailCode from './examples/InputEmail?raw'
import InputPasswordCode from './examples/InputPassword?raw'
import InputNumberCode from './examples/InputNumber?raw'
import InputPhoneNumberCode from './examples/InputPhoneNumber?raw'
import InputURLCode from './examples/InputURL?raw'
import InputHelperTextCode from './examples/InputHelperText?raw'
import InputCharacterCounterCode from './examples/InputCharacterCounter?raw'
import InputTagsCode from './examples/InputTags?raw'
import InputDateCode from './examples/InputDate?raw'

@tag('input-page')
export default class InputPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="!max-w-full mb-48">
        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Basic example
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            A basic example of the input field consists of the
            <code>input</code> element with specified <code>ID</code> and
            <code>label</code> element connected via this <code>ID</code> with the input.
          </p>
          <code-showcase code={InputBasicExampleCode}>
            <InputBasicExample />
          </code-showcase>
        </section>
        {/* <!-- Section: Basic example --> */}

        {/* <!-- Section: Sizing --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="size" data-te-spy-item>
            Sizing
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Set heights using props like <code>size="lg"</code>,<code>size="base"</code>, <code>size="sm"</code>.
          </p>

          <code-showcase code={InputSizingCode}>
            {' '}
            <InputSizing />
          </code-showcase>
        </section>
        {/* <!-- Section: Sizing --> */}

        {/* <!-- Section: Disabled --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="disabled" data-te-spy-item>
            Disabled
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Add the <code>disabled</code> boolean attribute on an input to give it a grayed out appearance and remove
            pointer events.
          </p>
          <code-showcase code={InputDisabledCode}>
            <InputDisabled />
          </code-showcase>
        </section>
        {/* <!-- Section: Disabled --> */}

        {/* <!-- Section: Readonly --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="readonly" data-te-spy-item>
            Readonly
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Add the <code>readOnly</code> boolean attribute on an input to prevent modification of the input’s value.
            Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.
          </p>

          <code-showcase code={InputReadOnlyCode}>
            <InputReadOnly />
          </code-showcase>
        </section>
        {/* <!-- Section: Readonly --> */}

        {/* <!-- Section: Text --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="text" data-te-spy-item>
            Text
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">Input types let you specified what data users should provide and help you validate it.</p>

          <code-showcase code={InputTextCode}>
            <InputText />
          </code-showcase>
        </section>
        {/* <!-- Section: Text --> */}

        {/* <!-- Section: Email --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="email" data-te-spy-item>
            Email
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            The <code>&lt;o-input type="email"&gt;&lt;/o-input&gt;</code> defines a field for an e-mail address. The
            input value is automatically validated to ensure it is a properly formatted e-mail address.
          </p>

          <code-showcase code={InputEmailCode}>
            <InputEmail />
          </code-showcase>
        </section>
        {/* <!-- Section: Email --> */}

        {/* <!-- Section: Password --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="password" data-te-spy-item>
            Password
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            The <code>&lt;o-input type="password"&gt;&lt;/o-input&gt;</code> defines a password field thus hiding
            characters as sensitive information.
          </p>

          <code-showcase code={InputPasswordCode}>
            <InputPassword />
          </code-showcase>
        </section>
        {/* <!-- Section: Password --> */}

        {/* <!-- Section: Number --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="number" data-te-spy-item>
            Number
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            The <code>&lt;o-input type="number"&gt;&lt;/o-input&gt;</code> defines field for entering a number.
          </p>

          <code-showcase code={InputNumberCode}>
            <InputNumber />
          </code-showcase>
        </section>
        {/* <!-- Section: Number --> */}

        {/* <!-- Section: Phone Number --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="tel" data-te-spy-item>
            Phone number
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            The <code>&lt;o-input type="tel"&gt;&lt;/o-input&gt;</code> defines a field for entering a telephone number.
          </p>

          <code-showcase code={InputPhoneNumberCode}>
            <InputPhoneNumber />
          </code-showcase>
        </section>
        {/* <!-- Section: Phone Number --> */}

        {/* <!-- Section: URL --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="url" data-te-spy-item>
            URL
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            The <code>&lt;o-input type="url"&gt;&lt;/o-input&gt;</code> defines a field for entering a URL.
          </p>

          <code-showcase code={InputURLCode}>
            <InputURL />
          </code-showcase>
        </section>
        {/* <!-- Section: URL --> */}

        {/* <!-- Section: URL --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="url" data-te-spy-item>
            Textarea
          </h2>

          <code-showcase code={InputURLCode}>
            <o-input class="w-96 mx-auto" tag="textarea" rows="4" label="Example textarea" />
          </code-showcase>
        </section>
        {/* <!-- Section: URL --> */}

        {/* <!-- Section: Helper text --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="helper_text" data-te-spy-item>
            Helper text
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Helper text conveys additional guidance about the input field, such as how it will be used.
          </p>

          <code-showcase code={InputHelperTextCode}>
            <InputHelperText />
          </code-showcase>
        </section>
        {/* <!-- Section: Helper text --> */}

        {/* <!-- Section: Character counter --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="character_counter" data-te-spy-item>
            Character counter
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Add prop
            <code>counter</code> and set the
            <code>maxLength</code> attribute to create a counter.
          </p>
          <code-showcase code={InputCharacterCounterCode}>
            <InputCharacterCounter />
          </code-showcase>
        </section>
        {/* <!-- Section: Character counter --> */}

        {/* <!-- Section: Character counter --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="character_counter" data-te-spy-item>
            Tags
          </h2>

          <code-showcase code={InputTagsCode}>
            <InputTags />
          </code-showcase>
        </section>

        {/* <!-- Section: Character counter --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="character_counter" data-te-spy-item>
            Date Picker
          </h2>

          <code-showcase code={InputDateCode}>
            <InputDate />
          </code-showcase>
        </section>
        {/* <!-- Section: Character counter --> */}
      </div>
    )
  }
}
