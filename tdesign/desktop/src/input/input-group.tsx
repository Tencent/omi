import { h, OmiProps, tag, WeElement, render, classNames, createRef,  extend, get, set} from 'omi'
import { TdClassNamePrefix } from '../../src/utils'
import inputSyle from './style'
import { TdInputGroupProps } from './type'
import { toArray } from 'lodash'
import parseTNode from '../utils/parseTNode';

const InputClassNamePrefix = (name: string) => TdClassNamePrefix('input') + name

export interface InputGroupProps extends TdInputGroupProps {

}

@tag('t-input-group')
export default class InputGruop extends WeElement<InputGroupProps>{

  static addStyle = `.t-input-group--separate t-input{
    margin-left: var(--td-comp-margin-xxxl);
  }`
  divRef = createRef()
  static css = inputSyle + InputGruop.addStyle

  install(): void {
    console.log(this.props)
  }

  render(props: InputGroupProps, store: any) {
    const { separate,children, ...wrapperProps } = props;
    // const addStyle = `
    
    // t-input{
    //   margin-left: var(--td-comp-margin-xxxl) !important;
    // }`;



    // (()=>{
    //   for(let i = 1; i < children.length; i++){
    //     if(children[i].nodeName == children[i - 1].nodeName){
    //       children[i].attributes.css = addStyle
    //       console.log(children[i])
    //     }
    //   }
    // })();
    // const groupChildren = this.children
    // function renderChildren() {
    //   return props.children.map((item, index) => {
    //     if(index>=1 && props.children[index-1].nodeName == props.children[index].nodeName){
          
    //       // if (!item.attributes.css) {
    //       //   item.attributes.css = ''
    //       // }
    //       // item.attributes.css += addStyle
    //       if(!item.attributes.style){
    //         item.attributes.style = {}
    //       }
    //       // console.log(item.attributes.style)
    //       item.attributes.style['marginLeft'] = 32
    //     }
    //     return (
    //       item
    //     )
    //   })
    // }

    return (
      <div
        ref={this.divRef}
        // style={{overflow:'hidden'}}
        style={{width:'100%'}}
        class={classNames(InputClassNamePrefix(`-group`),
        {
          [InputClassNamePrefix('-group--separate')] : !!separate
        }
        )}
        {...wrapperProps}
      >
        {children}
      </div>
    )
  }
}