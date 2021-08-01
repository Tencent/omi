import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/chart-card'
import '@omiu/icon/people'

interface Props { }

const tagName = 'admin-dashboard'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target]


  render() {
    return (
      <div class={tw``}>
        <div class={tw`flex flex-row px-2 py-2`}>
          <o-chart-card content="9987" describe="Members online" color="#39f" data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}>
            <o-icon-people width="2em" height="2em" ></o-icon-people>
          </o-chart-card>

          <o-chart-card content="9987" describe="Members online" color="#39f" data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}>
            <o-icon-people width="2em" height="2em" ></o-icon-people>
          </o-chart-card>

          <o-chart-card content="9987" describe="Members online" color="#39f" data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}>
            <o-icon-people width="2em" height="2em" ></o-icon-people>
          </o-chart-card>


          <o-chart-card content="9987" describe="Members online" color="#39f" data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}>
            <o-icon-people width="2em" height="2em" ></o-icon-people>
          </o-chart-card>



        </div>
      </div>
    )
  }
}
