import * as css from './_dashboard.css'
import { define, WeElement, h } from 'omi'
import '@omim/core/card'
import * as bg from './bg.png'

define('my-about', class extends WeElement {
  static css = css

  onClick = ()=>{
    location.href = 'https://github.com/Tencent/omi'
  }

  render() {
    return <div onClick={this.onClick}>
      <m-card 
        width='350px'
        css='.mdc-card{text-indent: 0;margin:40px auto;}'
        title='Omim Templates'
        subTitle='by omi team - omijs.org'
        content='版权所有2019 Tencent Omi Inc. 保留所有权利。' img={bg}>
      </m-card>
    </div>
  }
})
