import { define, WeElement } from 'omi'
import style from './_mainer.scss'

import '../../../src/components/button'
import '../../../src/components/article'
import '../../../src/components/dialog'
import '../../../src/components/loading'
import '../../../src/components/toptip'

define('ow-mainer', class extends WeElement {
  static observe = true

  data = {
    showDialog: false,
    showToptip: false
  }
  close = () => {
    this.data.showDialog = false
  }
  confirm = () => {
    alert('回调：入洞房！')
    this.data.showDialog = false
  }
  css() {
    return style
  }

  show = () => {
    this.data.showDialog = true
  }

  toptip = () => {
    this.data.showToptip = true
  }

  hide = () => {
    this.data.showToptip = false
  }

  render(props, data) {
    return (
      <div className="mainer">
        <section>
          <h1>button</h1>
          <p>type:primary/warn disabled size:big/small</p>
        </section>
        <ow-button type="primary">primary</ow-button>
        <ow-button type="primary" disabled>
          primary disabled
        </ow-button>
        <ow-button type="warn">warn</ow-button>
        <ow-button type="warn" disabled>
          wran disabled
        </ow-button>
        <ow-button type="secondary">secondary</ow-button>
        <ow-button type="secondary" disabled>
          secondary disabled
        </ow-button>
        <ow-button size="small">small</ow-button>
        <section>
          <h1>article</h1>
          <p>children</p>
        </section>
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
              <img src="" alt="" />
              <p />
            </p>
          </section>
        </ow-article>
        <section>
          <h1>dialog</h1>
          <p>type:alert/confirm text show</p>
          <button onClick={this.show}>dialog</button>
        </section>

        <ow-dialog
          type="confirm"
          show={data.showDialog}
          title="确定嫁给我吗？"
          content="一生一世……"
          close={this.close}
          confirm={this.confirm}
        />

        <section>
          <h1>loading</h1>
          <p>size</p>
        </section>

        <ow-loading size="40px" />

        <section>
          <h1>toptip</h1>
          <p>msg type:primary/warn</p>
          <button onClick={this.toptip}>dialog</button>
        </section>

        <ow-toptip
          msg="你答应要娶我的……"
          type="warn"
          show={data.showToptip}
          hide={this.hide}
        />
      </div>
    )
  }
})
