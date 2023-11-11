import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal, Input } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

import RippleBasicExample from './examples/RippleBasicExample'
import RippleImage from './examples/RippleImage'
import RippleColors1 from './examples/RippleColors1'
import RippleColors2 from './examples/RippleColors2'
import RippleColors3 from './examples/RippleColors3'
import RippleDuration from './examples/RippleDuration'
import RippleCentered from './examples/RippleCentered'
import RippleUnbound from './examples/RippleUnbound'
import RippleRadius from './examples/RippleRadius'

import RippleBasicExampleCode from './examples/RippleBasicExample?raw'
import RippleImageCode from './examples/RippleImage?raw'
import RippleColors1Code from './examples/RippleColors1?raw'
import RippleColors2Code from './examples/RippleColors2?raw'
import RippleColors3Code from './examples/RippleColors3?raw'
import RippleDurationCode from './examples/RippleDuration?raw'
import RippleCenteredCode from './examples/RippleCentered?raw'
import RippleUnboundCode from './examples/RippleUnbound?raw'
import RippleRadiusCode from './examples/RippleRadius?raw'

@tag('ripple-page')
export default class RipplePage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic-example" data-te-spy-item>
            Basic example
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            The ripple effect is a way to let the user know that there has been a click interaction. You can easily add
            a ripple effect to the buttons.
          </p>
          <code-showcase code={RippleBasicExampleCode}>
            <RippleBasicExample.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Basic example --> */}

        <hr className="my-12" />

        {/* <!-- Section: Image --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="image" data-te-spy-item>
            Image
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            You can also easily add the ripple effect to images, by wrapping them between <code>TERipple</code> tags.
          </p>

          <code-showcase code={RippleImageCode}>
            <RippleImage.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Image --> */}

        <hr className="my-12" />

        {/* <!-- Section: Colors --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="colors" data-te-spy-item>
            Colors
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            You can easily manipulate the color of the ripple effect to suit your needs. By using
            <code>rippleColor</code> prop you can change its color. You can also change the color in darkmode by using{' '}
            <code>rippleColorDark</code> prop.
          </p>

          <code-showcase code={RippleColors1Code}>
            <RippleColors1.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Colors --> */}

        {/* <!-- Section: Colors 2 --> */}
        <section>
          {/* <!-- Title --> */}
          <h3 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="colors2"></h3>
          {/* <!-- Description --> */}
          <p className="mb-3"></p>

          <code-showcase code={RippleColors2Code}>
            <RippleColors2.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Colors 2 --> */}

        {/* <!-- Section: Colors 3 --> */}
        <section>
          {/* <!-- Title --> */}
          <h3 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="colors3"></h3>
          {/* <!-- Description --> */}
          <p className="mb-3"></p>

          <code-showcase code={RippleColors3Code}>
            <RippleColors3.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Colors 3 --> */}

        <hr className="my-12" />

        {/* <!-- Section: Duration --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="duration" data-te-spy-item>
            Duration
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            If you don't want the ripple effect to move on the button too quickly, use
            <code>rippleDuration</code> prop and modify the duration of the ripple.
          </p>
          <code-showcase code={RippleDurationCode}>
            <RippleDuration.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Duration --> */}

        <hr className="my-12" />

        {/* <!-- Section: Centered --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="centered" data-te-spy-item>
            Centered
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            If you add the prop <code>rippleCentered</code>, the ripple will always start at the center of the element,
            not at the affected location.
          </p>

          <code-showcase code={RippleCenteredCode}>
            <RippleCentered.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Centered --> */}

        <hr className="my-12" />

        {/* <!-- Section: Unbound --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="unbound" data-te-spy-item>
            Unbound
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            If you use the <code>rippleUnbound</code> prop, the ripple will not be bound to the element and will extend
            beyond its boundaries.
          </p>

          <code-showcase code={RippleUnboundCode}>
            {' '}
            <RippleUnbound.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Unbound --> */}

        <hr className="my-12" />

        {/* <!-- Section: Radius --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="radius" data-te-spy-item>
            Radius
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            The <code>rippleRadius</code> prop can be used to modify the ripple radius. The numeric value is expressed
            in pixels, for example:
            <code>rippleRadius={10}</code>
          </p>

          <code-showcase code={RippleRadiusCode}>
            <RippleRadius.tagName />
          </code-showcase>
        </section>
        {/* <!-- Section: Radius --> */}
      </div>
    )
  }
}
