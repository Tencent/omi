import { define, WeElement } from 'omi'
import '../../omi-weui/elements/button'
import '../../omi-weui/elements/button'


define('my-app', class extends WeElement {
  render() {
    return (
      <div class="page">
        <ow-button>Normal</ow-button>
        <ow-button disabled>Disabled</ow-button>

        <button-area>
          <ow-button type="default">Secondary Normal</ow-button>
          <ow-button type="default" disabled>
            Secondary Disabled
          </ow-button>
        </button-area>

        <button-area direction="horizontal">
          <ow-button type="warn">Warn Normal</ow-button>
          <ow-button type="warn" disabled>
            Disabled
          </ow-button>
        </button-area>

        <div className="button-sp-area">
          <ow-button type="primary" plain>
            ow-button
          </ow-button>
          <ow-button type="primary" plain disabled>
            ow-button
          </ow-button>
          <ow-button type="default" plain>
            ow-button
          </ow-button>
          <ow-button size="small">Mini</ow-button>
          <ow-button type="default" size="small">
            Mini
          </ow-button>
          <ow-button type="warn" size="small">
            Mini
          </ow-button>
        </div>

        <ow-button
          href="javascript:;"
          class="weui-btn weui-btn_primary weui-btn_loading"
        >
          <i class="weui-loading" />
          页面主操作 Loading
        </ow-button>
      </div>
    )
  }
})
