import { define, WeElement } from 'omi'
import style from './_index.css'
import 'omi-weui/article'
import picArticle from './pic_article.png'

define('article-panel', class extends WeElement {
  css() {
    return style
  }

  render() {
    return (
      <div>
        <ow-article>
          <h1>H1 Heading</h1>
          <section>
            <h2>H2 Title</h2>
            <p>
              <h3>H3 Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute
          </p>
              <img src={picArticle} alt="" />
              <p />
            </p>
          </section>
        </ow-article>
      </div>
    )
  }
})
