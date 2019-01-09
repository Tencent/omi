import { WeElement, define, render } from 'omi'
import '../../src/button'
import '../../src/row'

define('my-app', class extends WeElement {

  css() {
    return `
.row{
  margin:6px;
}

.col { 
  color: white;
  text-align:center;
  height:60px;
  line-height:60px;

}
.col:nth-child(odd) {
 background:#07C160;
}
.col:nth-child(even) {
 background:#F95050;
}`
  }
  render() {
    return (
      <div>
        <o-row class='row'>
          <col class='col' span={12}>col span 12</col>
          <col class='col' span={12}>col span 12</col>
        </o-row>

        <o-row class='row'>
          <col class='col' span={8}>col span 8</col>
          <col class='col' span={8}>col span 8</col>
          <col class='col' span={8}>col span 8</col>
        </o-row>

        <o-row class='row'>
          <col class='col' span={6}>col span 6</col>
          <col class='col' span={6}>col span 6</col>
          <col class='col' span={6}>col span 6</col>
          <col class='col' span={6}>col span 6</col>
        </o-row>

        <o-row class='row'>
          <col class='col' span={18}>col span 18</col>
          <col class='col' span={6}>col span 6</col>
        </o-row>

        <o-row class='row'>
          <col class='col' span={6}>col span 6</col>
          <col class='col' span={18}>col span 18</col>
        </o-row>

        <o-row class='row'>
          <col class='col' span={2}>2</col>
          <col class='col' span={2}>2</col>
          <col class='col' span={2}>2</col>
          <col class='col' span={2}>2</col>
          <col class='col' span={2}>2</col>
          <col class='col' span={2}>2</col>
          <col class='col' span={2}>2</col>
          <col class='col' span={2}>2</col>
          <col class='col' span={2}>2</col>
          <col class='col' span={2}>2</col>
          <col class='col' span={2}>2</col>
          <col class='col' span={2}>2</col>
        </o-row>

        <o-row class='row'>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
          <col class='col' span={1}>1</col>
        </o-row>
      </div>


    )
  }
})

render(<my-app />, 'body')
