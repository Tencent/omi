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
        <div class={tw`flex flex-col sm:flex-row md:flex-row flex-wrap gap-x-2 px-2 py-2`} >
          <o-chart-card content="9987" class={tw`flex-1 md:w-5/12`} describe="PV" color="#07c160" data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}>
            <o-icon-people width="2em" height="2em" ></o-icon-people>
          </o-chart-card>

          <o-chart-card content="9987" class={tw`flex-1 md:w-5/12`} describe="Error" color="#f56c6c" data={[12, 9, 4, 5, 2, 113]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}>
            <o-icon-error width="2em" height="2em" ></o-icon-error>
          </o-chart-card>

          <o-chart-card content="9987" class={tw`flex-1 md:w-5/12`} describe="Warning" color="#e6a23c" data={[12, 19, 131, 5, 2, 9]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}>
            <o-icon-warning width="2em" height="2em" ></o-icon-warning>
          </o-chart-card>

          <o-chart-card content="9987" class={tw`flex-1 md:w-5/12`} describe="Members online" color="#39f" chartType="bar" data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}>
            <o-icon-people width="2em" height="2em" ></o-icon-people>
          </o-chart-card>



        </div>
      </div>
    )
  }
}
