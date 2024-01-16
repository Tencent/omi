import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'
import './index'

@tag('checkbox-page')
export default class CheckPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="!max-w-full mb-48">
        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Basic
          </h2>

          {/* <!-- Description --> */}

          <code-showcase
            code={`<div class="flex gap-3">
  <o-checkbox
    label="Default checkbox"
    name="example"
    value="example"
    required
  ></o-checkbox>

  <o-checkbox
    checked
    label="Checked checkbox"
    name="example"
    value="example"
    required
  ></o-checkbox>
</div>`}
          >
            <div class="flex gap-3">
              <o-checkbox
                label="Default checkbox"
                onChange={(e: CustomEvent) => console.log(e.detail)}
                name="example"
                value="example"
                required
              ></o-checkbox>

              <o-checkbox checked label="Checked checkbox" name="example" value="example" required></o-checkbox>
            </div>
          </code-showcase>
        </section>
        {/* <!-- Section: Basic example --> */}

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Indeterminate
          </h2>

          {/* <!-- Description --> */}

          <code-showcase
            code={`<o-checkbox
  indeterminate
  label="Indeterminate checkbox"
  name="example"
  value="example"
  required
></o-checkbox>`}
          >
            <o-checkbox
              indeterminate
              label="Indeterminate checkbox"
              checked
              onChange="{handleChange}"
              name="example"
              value="example"
              required
            ></o-checkbox>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
            Disabled
          </h2>

          {/* <!-- Description --> */}

          <code-showcase
            code={`<div class="flex gap-3">
  <o-checkbox
    label="Disabled checkbox"
    disabled
    name="example"
    value="example"
    required
  ></o-checkbox>
  <o-checkbox
    disabled
    checked
    label="Disabled checked checkbox"
    name="example"
    value="example"
    required
  ></o-checkbox>
</div>`}
          >
            <div class="flex gap-3">
              <o-checkbox label="Disabled checkbox" disabled name="example" value="example" required></o-checkbox>
              <o-checkbox
                disabled
                checked
                label="Disabled checked checkbox"
                name="example"
                value="example"
                required
              ></o-checkbox>
            </div>
          </code-showcase>
        </section>
      </div>
    )
  }
}
