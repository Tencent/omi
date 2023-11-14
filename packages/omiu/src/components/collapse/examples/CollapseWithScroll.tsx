import { tag, Component, bind } from 'omi'
import '../../button/button'
import '../collapse'
import { tailwind } from '@/tailwind'

@tag('collapse-with-scroll')
export class CollapseWithScroll extends Component {
  static css = [tailwind]

  @bind
  toggleShow() {
    this.show = !this.show
    this.update()
  }

  show = false

  render() {
    return (
      <div className="px-3 h-[160px]">
        <o-button onClick={this.toggleShow}>Longer content</o-button>

        <o-collapse scroll show={this.show}>
          <div className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
            probably haven't heard of them accusamus labore sustainable VHS. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
            put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
          </div>
        </o-collapse>
      </div>
    )
  }
}
