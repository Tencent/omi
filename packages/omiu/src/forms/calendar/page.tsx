import '@/site/code-showcase'

import { tag, Component } from 'omi'
import { tailwind } from '@/tailwind'

import './index'

import '../../components/popover/index'
import '../../forms/input/index'

@tag('calendar-page')
export class Page extends Component {
  static css = [
    tailwind,
    `
  o-button{ margin: 0.2em; }
  code-showcase{ margin-bottom: 2em; }
  `,
  ]

  state = {
    date: '',
  }

  render() {
    return (
      <div className="!max-w-full mb-48">
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            In progress
          </h2>

          <code-showcase code={`<o-calendar value="2023-11-26"></o-calendar>`}>
            <o-calendar value="2023-12-26"></o-calendar>
          </code-showcase>
        </section>

        {/* <!-- Section: Basic example --> */}
        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            Locale Chinese
          </h2>

          <code-showcase code={`<o-calendar locale="zh" value="2023-11-26"></o-calendar>`}>
            <o-calendar locale="zh" value="2023-12-26"></o-calendar>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_example" data-te-spy-item>
            hasFooter
          </h2>

          <code-showcase code={`<o-calendar locale="zh" value="2023-11-26"></o-calendar>`}>
            <o-calendar locale="zh" value="2023-12-26" hasFooter={true}></o-calendar>
          </code-showcase>
        </section>

        <section>
          {/* <!-- Title --> */}
          <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="character_counter" data-te-spy-item>
            Date Picker
          </h2>

          <code-showcase
            code={`<o-popover placement="bottom">
  <o-input type="date" value={this.state.date} label="Date input"></o-input>
  <o-calendar onSelect={e=>{
    this.state.date = e.detail.date
    this.update()
  }} slot="content"></o-calendar>
</o-popover>`}
          >
            <div className="flex justify-center">
              <div className="relative mb-3 xl:w-96 pt-5">
                <o-popover placement="bottom">
                  <o-input type="date" value={this.state.date} label="Date input"></o-input>
                  <o-calendar
                    onSelect={(e: CustomEvent) => {
                      this.state.date = e.detail.date
                      this.update()
                    }}
                    slot="content"
                  ></o-calendar>
                </o-popover>
              </div>
            </div>
          </code-showcase>
        </section>
      </div>
    )
  }
}
