import * as css from './_dashboard.css'
import { define, WeElement, h } from 'omi'
import 'omim/row'
import 'omim/icon-button'
import 'omim/breadcrumb'
import './top-card'
import 'omim/editor'

define('my-editor', class extends WeElement {
  static css = css

  onTextChange = (evt)=>{
    console.log(evt)
  }

  render() {
    return <div class="app">

      <div class='header'>
        <h3>Editor</h3>
        <m-breadcrumb split="/" items={[
          { text: 'Home', href: 'https://tencent.github.io/omi/', icon: 'home' },
          { text: 'Helper', icon: 'help' },
          { text: 'About', icon: 'people' }
        ]}></m-breadcrumb>
        <m-icon-button icon="refresh"></m-icon-button>
      </div>

      <m-editor onTextChange={this.onTextChange}>
      <h1 class="ql-align-center">Quill Rich Text Editor</h1>
      <p><br /></p>
      <p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="https://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="https://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p>
      <p><br /></p>
      <iframe class="ql-video ql-align-center" src="https://player.vimeo.com/video/253905163" width="500" height="280" allowfullscreen></iframe>
      <p><br /></p>
      <h2 class="ql-align-center">Getting Started is Easy</h2>
    </m-editor>

    </div>
  }
})
