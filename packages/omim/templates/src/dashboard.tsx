import * as css from './_dashboard.css'
import { define, WeElement, h } from 'omi'
import '@omim/core/row'
import '@omim/core/icon-button'
import '@omim/core/breadcrumb'

define('my-dashboard', class extends WeElement {
  static css = css

  
  render() {
    return <div class="app">
    
      <div class='header'>
        <h3>Dashboard</h3>
        <m-breadcrumb  split="/" items={[
          { text: 'Home', href:'https://tencent.github.io/omi/', icon:'home' },
          { text: 'Helper', icon:'help' },
          { text: 'About', icon: 'people' }
        ]}></m-breadcrumb>
        <m-icon-button icon="refresh"></m-icon-button>
      </div>
    
      <m-row type="flex" justify="space-around" align="bottom" cols={[{
          xs: 24,
          sm: 24,
          md: 8,
          lg: 7,
          xl: 6
        }, {
          xs: 24,
          sm: 12,
          md: 8,
          lg: 10,
          xl: 12
        }, {
          xs: 24,
          sm: 12,
          md: 8,
          lg: 7,
          xl: 6
        }]}
        css="
        ::slotted(div){
          background: #c2d5f5;
          width: 100%;
          display: block;
          text-align: center;
          color: #0052d9;
          height:40px;
          line-height:40px;
        }
        ::slotted(div:nth-child(2n + 1)) {
          width: 100%;
          display: block;
          text-align: center;
        background: #d9dde4;
        }">
          <div>col-a</div>
          <div>col-b</div>
          <div>col-c</div>
        </m-row>
    </div>
  }
})
