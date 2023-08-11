import { tag, h, WeElement, render } from 'omi'
import '@omiu/card'
import './index.tsx'
import { DataType,  renderItemType} from "./index";

export type Props = {}

const tagName = 'my-demo'
const data: DataType[] = [
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




@tag(tagName)
export default class MyDemo extends WeElement<Props> {
  dataSource=data;
  isVisible=false;
  columnIndex : number|undefined = 0;
  cardIndex: number|undefined = 0;
  cardTitle: string|undefined='';
  onChanged = (data:DataType[]) => {
    //同步内部状态到外部
    this.dataSource = data; //Vue和React等框架可以在onChange回调函数中将dataSource同步到state或者data之中
    this.update();
  }

  renderItem:renderItemType=(card,cardIndex,columnIndex)=>(
    <div>
      <o-card className="o-kanban-column-card" hoverable="always" block="1"
              style={{cursor: "pointer",marginTop:"1rem"}}
              onclick={()=>{this.isVisible=true;this.columnIndex=columnIndex;this.cardIndex=cardIndex;this.cardTitle=card?.title;this.update()}}
      >
        <div slot="cover">
        </div>
        <p>{card?.title}</p>
        <p>Simple Card</p>
        <p>{'['+columnIndex+','+cardIndex+']'}</p>
      </o-card>
    </div>
  )

  render() {
    return (
      <div>
        <o-dialog visible={this.isVisible} title="提示" width="35rem">
        <span>{this.cardTitle}</span>
        <span slot="footer">
          <o-button size="small" style={{marginRight:"1rem"}} onClick={()=>{this.isVisible=false;this.update()}}>取 消</o-button>
          <o-button size="small" type="primary" onClick={()=>{this.isVisible=false;this.update()}}>确 定</o-button>
        </span>
      </o-dialog>

          <o-kanban
            dataSource={this.dataSource}
            title={"TODO"}
            onEnd={this.onChanged}
            renderItem={this.renderItem}
          >
          </o-kanban>
      </div>
    )
  }
}

render(<my-demo></my-demo>, 'body', {
  ignoreAttrs: true
})
