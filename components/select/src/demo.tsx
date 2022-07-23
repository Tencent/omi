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
          placeholder="Select A Option"
          options={[{ label: 'Option A', value: 1 }, { label: 'Option B', value: 2 }, { label: 'Option C', value: 3 }, { label: 'Option B', value: 4 }, { label: 'Option C', value: 5 }]}>
        </o-select>

        <o-select
          placeholder="Select A Option"
          value="1"
          options={[{ label: 'Option A', value: 1 }, { label: 'Option B', value: 2 }, { label: 'Option C', value: 3 }]}></o-select>


        <o-select
          size="medium"
          placeholder="Select A Option"
          options={[{ label: 'Option A', value: 1 }, { label: 'Option B', value: 2 }, { label: 'Option C', value: 2 }]}></o-select>


        <o-select
          size="small"
          placeholder="Select A Option"
          options={[{ label: 'Option A', value: 1 }, { label: 'Option B', value: 2 }, { label: 'Option B', value: 2 }, { label: 'Option B', value: 2 }, { label: 'Option B', value: 2 }, { label: 'Option B', value: 2 }, { label: 'Option B', value: 2 }, { label: 'Option B', value: 2 }, { label: 'Option C', value: 2 }]}>
        </o-select>

        <o-select
          size="mini"
          placeholder="Select A Option"
          options={[{ label: 'Option A', value: 1 }, { label: 'Option B', value: 2 }, { label: 'Option C', value: 2 }]}></o-select>


        <o-select
          multiple
          size="mini"
          placeholder="Select A Option"
          options={[{ label: 'Option A', value: 1 }, { label: 'Option B', value: 2 }, { label: 'Option C', value: 3 }, { label: 'Option B', value: 4 }, { label: 'Option C', value: 5 }]}>
        </o-select>

      </div>
    )
  }
}

render(<my-demo></my-demo>, 'body', {
  ignoreAttrs: true
})
