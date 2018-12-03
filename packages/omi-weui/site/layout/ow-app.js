import '../common/css/reset.css'
import '../common/css/index.css'

import { define, WeElement } from 'omi'
import './header/header'
import './mainer/mainer'

define('ow-app', class extends WeElement {
  css(){
    return `
    .page{
      max-width:375px;
      margin:0 auto;
    }
    
.ow {
  font-family:"ow" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
    `
  }
  render() {
    return (
      <div className="page">
        <ow-header />
        <ow-mainer />
      </div>
    )
  }
})
