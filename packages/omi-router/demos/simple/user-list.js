import { WeElement, define, h } from 'omi'

define('user-list', class extends WeElement {
  render() {
    return (
      <ul>
        <li><a href="#/user/yanagao/category/js" >yanagao</a></li>
        <li><a href="#/user/vorshen/category/html" >vorshen</a></li>
        <li><a href="#/user/dntzhang/category/css" >dntzhang</a></li>
      </ul>
    )
  }
})

