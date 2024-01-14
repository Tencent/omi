import { tag, Component } from 'omi'
import '../index'
import { tailwind } from '@/tailwind'

import '../../../components/popover/index'
import '../../calendar/index'

@tag('input-date')
export default class InputDate extends Component {
  static css = [tailwind]

  state = {
    date: '',
  }

  render() {
    return (
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
    )
  }
}
