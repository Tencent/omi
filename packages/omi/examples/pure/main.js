import { render, tag } from "../../src/omi"

//Do not use pure element in browsers that do not support Reflect, such as ie11.
tag('my-ele', function (props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
})

render((
  <my-ele
    items={[{ text: 'Omi', id: 1 }, { text: "Tencent", id: 2 }]}
  />
), "body")

