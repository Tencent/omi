import {tag, h, WeElement, createRef, VNode,define} from 'omi'
import Sortable from 'sortablejs';
import '@omiu/dialog'; import '@omiu/button'; import '@omiu/card'; import '@omiu/input';
import '@omiu/icon/done'; import '@omiu/icon/clear'; import '@omiu/icon/add'; import '@omiu/icon/more-horiz';
import * as css from './index.scss';

export interface CardType{
  id?:number;
  title?:string;
}

export interface DataType{
  id?:number;
  title?:string;
  cards:CardType[];
}
export type renderItemType=(card?: CardType|undefined, cardIndex?: number,columnIndex?:number) => VNode;

export interface KanbanProps<T>{
  dataSource: T[];
  title?:string;
  renderItem?:renderItemType;
  onEnd:(data:T[])=>void;

  isLimited?:boolean;//是否固定高度，改为滚动 未实装
  height?:string;
  width?:string;
}
export interface KanbanColumnProps <T>{
  dataSource:T[];
  group?:string;
  myGroup?:string;
  title?:string;
  cards?:CardType[];
  index:number;
  onEnd:(data:T[])=>void;
  renderItem?:renderItemType;
}

export interface KanbanCardProps <T>{
  dataSource:T[];
  sort?:string;
  title?:string;
  item?:CardType;
  index:number;
  columnIndex?:number;
  onEnd:(dataSource:T[])=>void;
  renderItem?:renderItemType;
}
const tagName = 'o-kanban'

define('o-kanban-card',class KanbanCard extends WeElement{
  render(props:KanbanCardProps<DataType>) {
    if(props.renderItem){
      return (
        <h.f>
          {props.renderItem(props.item,props.index,props.columnIndex)}
        </h.f>
      )
    }else return <div></div>
  }
})

define('o-kanban-column',class KanbanColumn extends WeElement<KanbanColumnProps<DataType>> {
  static css = css.default ? css.default : css
  taskContainer = createRef();
  addDivContainer = createRef();
  kanbanColumnContainer= createRef();
  isVisible = false;
  isInput = false; newTitle: string = '';
  isCreate = false; newCardTitle = '';
  installed() {
    if(this.taskContainer&&this.taskContainer.current instanceof HTMLElement){
      Sortable.create(this.taskContainer.current,{
        group:this.props.group,
        animation: 300,
        sort: true,
        onEnd:  (/**Event*/evt):void=> {
          let from=evt.from.getAttribute('index');
          let to=evt.to.getAttribute('index');
          const oldDraggableIndex=evt.oldDraggableIndex;
          const newDraggableIndex = evt.newDraggableIndex;
          if(oldDraggableIndex!==undefined&&newDraggableIndex!==undefined&&from!==null&&to!==null)
          {
            let fromInt=parseInt(from);let toInt=parseInt(to);
            if (fromInt === toInt) {
              if (oldDraggableIndex !== newDraggableIndex) {
                if (oldDraggableIndex - newDraggableIndex == 1 || oldDraggableIndex - newDraggableIndex == -1) {
                  [this.props.dataSource[fromInt].cards[oldDraggableIndex], this.props.dataSource[fromInt].cards[newDraggableIndex]] = [this.props.dataSource[fromInt].cards[newDraggableIndex], this.props.dataSource[fromInt].cards[oldDraggableIndex]];

                } else {
                  this.props.dataSource[toInt].cards.splice(newDraggableIndex, 0, this.props.dataSource[fromInt].cards.splice(oldDraggableIndex, 1)[0])
                }

                this.props.onEnd(this.props.dataSource);
              }
            } else {
              this.props.dataSource[toInt].cards.splice(newDraggableIndex, 0, this.props.dataSource[fromInt].cards[oldDraggableIndex])
              this.props.dataSource[fromInt].cards.splice(oldDraggableIndex, 1);
              this.props.onEnd(this.props.dataSource);
            }
          }else console.log(to);
        },
      })
    }

  }

  render(props:KanbanColumnProps<DataType>) {
    return (
      <h.f>
        <div>
          <o-dialog visible={this.isVisible} title="提示" width="20rem">
            <span style={{color:"#fa523a"}}>确定删除此列吗</span>
            <span slot="footer">
            <o-button size="small" onClick={()=>{this.isVisible=false;this.update()}} style={{marginRight:"0.6rem"}}>取 消</o-button>
            <o-button size="small" type="primary" onClick={()=>{
              props.dataSource.splice(props.index,1);
              props.onEnd(props.dataSource);
              this.isVisible=false;this.update();
            }}>确 定</o-button>
          </span>
          </o-dialog>
        </div>


        <div className="o-kanban-column" style={{position:"relative"}} ref={this.kanbanColumnContainer}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            {this.isInput ? (
                <div className="o-kanban-column-input">
                  <o-input clearable placeholder="请输入标题" value={this.newTitle} onChange={(e: { target: { value: string; }; }) => {
                    this.newTitle = e.target.value;
                    this.update()
                  }} style={{width: "9.6rem"}}></o-input>
                  <div className="o-kanban-column-input-svg" onClick={() => {
                    props.dataSource[props.index].title = this.newTitle;
                    props.onEnd(props.dataSource);
                    this.isInput = false;
                    this.update();
                  }}>
                    <o-icon-done></o-icon-done>
                  </div>
                  <div className="o-kanban-column-input-svg" onClick={() => {
                    this.isInput = false;
                    this.update()
                  }} style={{marginRight: "1rem"}}>
                    <o-icon-clear></o-icon-clear>
                  </div>
                </div>
              ) :
              (<div style={{display:"flex"}} className="o-kanban-column-header">
                <h3 style={{
                  textOverflow:"ellipsis",
                  overflow:"hidden",
                  whiteSpace:"nowrap",
                  maxWidth:"10.5rem",
                  height:"2rem"
                  }}>{props.title || "title"}</h3>
                <span style={{
                  fontSize: "0.5rem",

                  lineHeight: "3.8rem"
                }}>&nbsp;&nbsp;{'- ' + props.cards?.length + ' items'}
                </span>
              </div>)}

            <div className="o-kanban-column-svg" style={{verticalAlign:"bottom",paddingTop:"1.2rem"}}>
              <span style={{cursor:"pointer",fontSize:"1.3rem"}} >
                <o-icon-more-horiz></o-icon-more-horiz>
              </span>

              <div className="o-kanban-column-pop">
                <div className="o-kanban-column-text" onClick={()=>{this.isInput=true;this.update()}}>
                  重命名
                </div>
                <div className="o-kanban-column-text" onClick={()=>{this.isCreate=true;this.update()}}>
                  创建
                </div>
                <div className="o-kanban-column-text" onClick={()=>{this.isVisible=true;this.update()}}>
                  删除
                </div>
              </div>
            </div>

          </div>

          {/*index为getAttribute的标记*/}
          <div style={{minHeight:"1rem"}} className="tasksContainer" ref={this.taskContainer} index={props.index}>
            {
              props.cards==undefined||props.cards.length===0?(
                <div></div>
                ):(<h.f>
                {
                  props.cards.map((value,index)=>{
                    return(
                      <div>
                        <o-kanban-card sort={props.index+","+index} title={props.title} item={value} index={index} columnIndex={props.index} renderItem={props.renderItem} dataSource={props.dataSource} onEnd={props.onEnd}/>
                      </div>
                    )
                  })
                }
              </h.f>)
              }
          </div>
          {/*  +  */}
            {
              this.isCreate ? (
                <div style={{width: "100%",margin:"0.4rem 0 0.7rem", fontSize: "1.2rem"}} ref={this.addDivContainer}>
                  <div className="o-kanban-column-input">
                    <o-input clearable placeholder="请输入标题" value={this.newCardTitle} onChange={(e: { target: { value: string; }; }) => {
                      this.newCardTitle = e.target.value;
                      this.update();
                    }} style={{width: "11rem"}}></o-input>
                    <div className="o-kanban-column-input-svg" onClick={() => {
                      if(this.kanbanColumnContainer.current instanceof HTMLElement &&this.addDivContainer.current instanceof HTMLElement){
                        props.dataSource[props.index].cards.push({title:this.newCardTitle});
                        props.onEnd(props.dataSource);
                        this.kanbanColumnContainer.current.removeChild(this.addDivContainer.current);
                        this.isCreate = false;
                        this.update();
                      }
                    }}
                    style={{width:"1.2rem",height:"1.2rem"}}
                    >
                      <o-icon-done></o-icon-done>
                    </div>
                    <div className="o-kanban-column-input-svg" onClick={() => {
                      if(this.kanbanColumnContainer.current instanceof HTMLElement &&this.addDivContainer.current instanceof HTMLElement)
                      {
                        this.kanbanColumnContainer.current.removeChild(this.addDivContainer.current);
                        this.isCreate = false;
                        this.update();
                      }
                    }}
                         style={{width:"1.2rem",height:"1.2rem"}}
                    >
                      <o-icon-clear></o-icon-clear>
                    </div>
                  </div>
                </div>
              ) : (
                <div onClick={() => {
                  this.isCreate=true;
                  this.update();
                }} >
                  <o-card style={{width: "100%"}}>
                    <div slot="cover"></div>
                    <div style={{width: "20%", margin: "0 auto", fontSize: "1.2rem"}}>
                      <o-icon-add></o-icon-add>
                    </div>
                  </o-card>
                </div>
              )
            }
        </div>
      </h.f>
    )
  }
})

@tag(tagName)
//o-kanban
export default class Kanban extends WeElement<KanbanProps<DataType>> {
  static css = css.default ? css.default : css
  group:string=String(Math.floor(Math.random()*10000000));
  myGroup:string=String(Math.floor(Math.random()*10000000));
  Container=createRef();
  newColumn='';

  installed() {
    if(this.Container){
      Sortable.create(this.Container.current as HTMLElement,{
        group:this.myGroup,
        animation: 300,
        sort: true,
        draggable:".draggable",
        onEnd:  (/**Event*/evt)=> {
          const oldDraggableIndex=evt.oldDraggableIndex;
          const newDraggableIndex = evt.newDraggableIndex;
          if(oldDraggableIndex===undefined||newDraggableIndex===undefined)return;
          else{
            if(oldDraggableIndex!==newDraggableIndex) {
              if(oldDraggableIndex-newDraggableIndex==1||oldDraggableIndex-newDraggableIndex==-1){
                [this.props.dataSource[oldDraggableIndex], this.props.dataSource[newDraggableIndex]] = [this.props.dataSource[newDraggableIndex], this.props.dataSource[oldDraggableIndex]];
              }else{
                this.props.dataSource.splice(newDraggableIndex,0,this.props.dataSource.splice(oldDraggableIndex,1)[0])
              }

              this.props.onEnd(this.props.dataSource);
            }
          }

        },
      })
    }
  }

  render(props: KanbanProps<DataType>) {
    //看板每次onEnd都会rerender
    return (
      <h.f>
        <div className="o-kanban" ref={this.Container}>
          {props.dataSource?.map((value, index) =>
            <o-kanban-column className="draggable" onEnd={props.onEnd} cards={value.cards} index={index}
                             group={this.group}
                             myGroup={this.myGroup} title={value.title} dataSource={props.dataSource}
                             renderItem={props.renderItem}></o-kanban-column>
          )}
          {/* + */}
          <div className="o-kanban-column-last">
            <div className="o-kanban-column-input">
              <o-input clearable placeholder="请输入标题" value={this.newColumn} onChange={(e: { target: { value: string; }; })=>{this.newColumn=e.target.value;this.update()}}
                style={{width:"11rem"}}
              ></o-input>
              <div className="o-kanban-column-input-svg" onClick={()=>{
                props.dataSource?.push({
                  title:this.newColumn,
                  cards:[]
                });
                props.onEnd(props.dataSource);}}>
                <o-icon-done></o-icon-done>
              </div>
              <div className="o-kanban-column-input-svg" onClick={()=>{this.newColumn='';this.update()}}>
                <o-icon-clear></o-icon-clear>
              </div>
            </div>
          </div>
        </div>
      </h.f>
    )
  }
}