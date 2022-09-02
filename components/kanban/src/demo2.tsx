import { tag, h, WeElement, render } from 'omi'
import '@omiu/card'
import './index.tsx'

export type Props = {}

const tagName = 'my-demo'
const data = [
  {
    title: 'TODO 1',
    cards:[
      {
        title: 'TODO 1',
      },
      {
        title: 'TODO 1',
      }
    ]
  },
  {
    title: 'TODO 2',
    cards:[]
  },
  {
    title: 'TODO 3',
    cards:[
      {
        title: 'TODO 3',
      },
      {
        title: 'TODO 3',
      }
    ]

  },
  {
    title: 'TODO 4',
    cards:[
      {
        title: 'TODO 1',
      },
      {
        title: 'TODO 1',
      }
    ]
  },
];
const cardsData = [
  {
    title: 'TODO 1',
  },
  {
    title: 'TODO 2',
  },
  {
    title: 'TODO 3',
  },
  {
    title: 'TODO 4',
  },
];

@tag(tagName)
export default class MyDemo extends WeElement<Props> {
  dataSource=data;

  onChanged = (data) => {
    //同步内部状态到外部，这样防止父刷新覆盖子的 count
    this.dataSource = data;
    console.log(this.dataSource)
    this.update();
  }

  render(props: Props) {
    return (
      <div>
        <o-kanban
          dataSource={this.dataSource}
          title={"TODO"}
          onEnd={this.onChanged}
        >


        </o-kanban>


      </div>
    )
  }
}

render(<my-demo></my-demo>, 'body', {
  ignoreAttrs: true
})

/*
<div>
          <o-kanban
            dataSource={this.dataSource}
            onEnd={this.onChanged}
          >
            this.dataSource.map((column)=>{
              column.map((card)=>{

              })
            })
             <o-kanban-column>

             </o-kanban-column>

          </o-kanban>


      </div>


 */