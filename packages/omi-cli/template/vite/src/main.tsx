import { WeElement, h, tag, render, } from 'omi'

// 组件 props 的属性
interface MyAppProps {
  name: string
}

// 依赖注入的方式设置组件名 my-app
@tag('my-app')
export default class extends WeElement<MyAppProps> {

  render(props) {
    return (
      <div>helloworld{props.name}</div>
		)
  }
}

// 渲染函数 挂载到#root 
render(<my-app name = 'Omi' > </my-app>, '#root')
