import { h, render } from 'omi'
import './button'

render((
  <div>
    <div>
      <o-button text="Default"></o-button>
      <o-button type="primary">Primary</o-button>
      <o-button type="warning">Warning</o-button>
      <o-button type="danger">Danger</o-button>
      <o-button type="info">Info</o-button>

      <o-button type="primary">
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
      </o-button>
      <o-button type="danger"
      >Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
      </o-button>
    </div>

    <div>
      <o-button disabled>Default</o-button>
      <o-button disabled type="primary">Primary</o-button>
      <o-button disabled type="warning">Warning</o-button>
      <o-button disabled type="danger">Danger</o-button>
      <o-button disabled type="info">Info</o-button>

      <o-button disabled type="primary">
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
      </o-button>
      <o-button disabled type="danger"
      >Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
      </o-button>
    </div>

    <div>
      <o-button plain>Plain</o-button>
      <o-button plain type="primary">Primary</o-button>
      <o-button plain type="warning">Warning</o-button>
      <o-button plain type="danger">Danger</o-button>
      <o-button plain type="info">Info</o-button>

      <o-button plain type="primary">
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon
      </o-button>
      <o-button plain type="danger"
      >Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>
      </o-button>

      <o-button plain type="primary">
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
      </o-button>
      <o-button plain type="danger">
        <o-icon-accessible-rounded></o-icon-accessible-rounded>
      </o-button>
    </div>

    <div>
      <o-button plain loading>Plain</o-button>
      <o-button plain loading type="primary">Primary</o-button>
      <o-button plain loading type="warning">Warning</o-button>
      <o-button plain loading type="danger">Danger</o-button>
      <o-button plain loading type="info">Info</o-button>

      <o-button plain loading type="primary">
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
      </o-button>
      <o-button plain loading type="danger">
        <o-icon-accessible-rounded></o-icon-accessible-rounded>
      </o-button>
    </div>

    <div>
      <o-button>Default</o-button>
      <o-button size="medium">Medium</o-button>
      <o-button size="small">Small</o-button>
      <o-button size="mini">Mini</o-button>
    </div>

    <div>
      <o-button round>Default</o-button>
      <o-button round size="medium">Medium</o-button>
      <o-button round size="small">Small</o-button>
      <o-button round size="mini">Mini</o-button>
    </div>

    <div>
      <o-button circle>
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
      </o-button>
      <o-button type="primary" circle>
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
      </o-button>
      <o-button type="warning" circle>
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
      </o-button>
      <o-button type="danger" circle>
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
      </o-button>
      <o-button type="info" circle>
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
      </o-button>
      <o-button type="primary" plain circle>
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
      </o-button>
      <o-button type="warning" plain circle>
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
      </o-button>
      <o-button type="danger" plain circle>
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
      </o-button>
      <o-button type="info" plain circle>
        <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>
      </o-button>
    </div>

    <o-button block>Block button</o-button>
  </div>
), 'body')

