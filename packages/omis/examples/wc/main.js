import { render, h } from '../../src/omis'
import {define} from './wc'

const HelloMessage = (props, store) => {
  console.log(props)
  return <div onClick={store.clickHandler} >
    <div>Hello {props.msg}</div>
    <div>{props.user.name}</div>
    <div>{props.user.age}</div>
    </div>
}

HelloMessage.css = `div{
	color: red;
}`

HelloMessage.store = _ => {
  return {
    clickHandler(){
      _.props.onMyEvent && _.props.onMyEvent(123)
    }
  }
}

HelloMessage.propTypes = {
  msg: String,
  user: Object
}

define('hello-msg', HelloMessage)






//render(<HelloMessage name="Omis" onMyEvent={_=>{console.log(222)}} />, 'body')
