import { tag, h, WeElement, render } from 'omi'

import './index.tsx'

export type Props = {

}

const tagName = 'my-demo'



@tag(tagName)
export default class MyDemo extends WeElement<Props> {

  count = 2

  onChanged = (evt: CustomEvent) => {
    //同步内部状态到外部，这样防止父刷新覆盖子的 count
    this.count = evt.detail
  }

  render(props: Props) {
    return (
      <div>

        <o-select
          multiple
          size="mini"
          block
          placeholder="Select A Item"
          items={[{ label: 'Item A', value: 1 }, { label: 'Item B', value: 2 }, { label: 'Item C', value: 3 }, { label: 'Item B', value: 4 }, { label: 'Item C', value: 5 }]}>
        </o-select>

        <o-select
          placeholder="Select A Item"
          value="1"
          items={[{ label: 'Item A', value: 1 }, { label: 'Item B', value: 2 }, { label: 'Item C', value: 3 }]}></o-select>


        <o-select
          size="medium"
          placeholder="Select A Item"
          items={[{ label: 'Item A', value: 1 }, { label: 'Item B', value: 2 }, { label: 'Item C', value: 2 }]}></o-select>


        <o-select
          size="small"
          placeholder="Select A Item"
          items={[{ label: 'Item A', value: 1 }, { label: 'Item B', value: 2 }, { label: 'Item B', value: 2 }, { label: 'Item B', value: 2 }, { label: 'Item B', value: 2 }, { label: 'Item B', value: 2 }, { label: 'Item B', value: 2 }, { label: 'Item B', value: 2 }, { label: 'Item C', value: 2 }]}>
        </o-select>

        <o-select
          size="mini"
          placeholder="Select A Item"
          items={[{ label: 'Item A', value: 1 }, { label: 'Item B', value: 2 }, { label: 'Item C', value: 2 }]}></o-select>


        <o-select
          multiple
          size="mini"
          placeholder="Select A Item"
          items={[{ label: 'Item A', value: 1 }, { label: 'Item B', value: 2 }, { label: 'Item C', value: 3 }, { label: 'Item B', value: 4 }, { label: 'Item C', value: 5 }]}>
        </o-select>

      </div>
    )
  }
}

render(<my-demo></my-demo>, 'body', {
  ignoreAttrs: true
})
