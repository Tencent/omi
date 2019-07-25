import { define } from '../../src/omis'

const HelloMessage = (props, store) => {
  return (
    <div onClick={store.clickHandler} >
      <div>Hello {props.msg}</div>
      <div>{props.user.name}</div>
      <div>{props.user.age}</div>
    </div>
  )
}

HelloMessage.css = `div{
	color: red;
}`

HelloMessage.store = _ => {
  return {
    clickHandler() {
      _.props.onMyEvent && _.props.onMyEvent(123)
    }
  }
}

HelloMessage.propTypes = {
  msg: String,
  user: Object
}

define('hello-msg', HelloMessage)