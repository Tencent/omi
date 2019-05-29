import '../../src/dialog/index.tsx'
import '../../src/radio/index.tsx'

import { render, WeElement, define, h } from 'omi'

import * as css from './material.scss'

define('my-app', class extends WeElement {

  alertShow = false
  simpleShow = false
  confirmationShow = false
  scrollableShow = false

  showText = ''

  onOpenClose = (e) => {
    console.log(e.detail.type)
  }

  onShowAlert = (e) => {
    this.alertShow = true
    this.showText = 'open alert!'
    this.update()
  }

  onShowSimple = (e) => {
    this.simpleShow = true
    this.showText = 'open simple!'
    this.update()
  }

  onShowConfirmation = (e) => {
    this.confirmationShow = true
    this.showText = 'open confirmation!'
    this.update()
  }

  onShowScrollable = (e) => {
    this.scrollableShow = true
    this.showText = 'open scrollable!'
    this.update()
  }
  
  onClose = (e) => {
    this.simpleShow = false
    this.alertShow = false
    this.confirmationShow = false
    this.scrollableShow = false
    this.showText = 'Declined... Maybe next time?'
    this.update()
  }

  onConfirm = (e) => {
    this.simpleShow = false
    this.alertShow = false
    this.confirmationShow = false
    this.scrollableShow = false
    this.showText = 'Accepted, thanks!'
    this.update()
  }

  simpleListIndex = [0, -1, -1]
  onSimple = (e) => {
    for(let i = 0; i < e.path.length; i++) {
      if(e.path[i].id && e.path[i].id.indexOf('li-simple') !== -1) {
        const num = parseInt(e.path[i].id[e.path[i].id.length-1])
        for(let i = 0; i < this.simpleListIndex.length; i++) {
          this.simpleListIndex[i] = i == num ? 0 : -1
        }
        console.log(e.path[i].id+'|'+num)
        break;
      }
    }
    this.simpleShow = false
    this.update()
  }

  listIndex1 = 0
  listIndex2 = -1
  listIndex3 = -1
  onList1 = (e) => {
    this.listIndex1 = 0
    this.listIndex2 = -1
    this.listIndex3 = -1
    this.update()
  }
  onList2 = (e) => {
    this.listIndex1 = -1
    this.listIndex2 = 0
    this.listIndex3 = -1
    this.update()
  }
  onList3 = (e) => {
    this.listIndex1 = -1
    this.listIndex2 = -1
    this.listIndex3 = 0
    this.update()
  }

  render(props, data) {
    return(
      <div>
        <m-button onClick={this.onShowAlert} ripple>Alert</m-button>
        <m-button onClick={this.onShowSimple} ripple>Simple</m-button>
        <m-button onClick={this.onShowConfirmation} ripple>Confirmation</m-button>
        <m-button onClick={this.onShowScrollable} ripple>Scrollable</m-button>
        <m-dialog
          onOpening={this.onOpenClose}
          onOpened={this.onOpenClose}
          onClosing={this.onOpenClose}
          onClosed={this.onOpenClose}
          onScrim={this.onClose}
          onCancel={this.onClose}
          onConfirm={this.onConfirm}
          show={this.alertShow}
          // message={<p>Discard draft?</p>}
          cancel-button={{
            text: 'Cancel'
          }}
          confirm-button={{
            text: 'Discard'
          }}
        >
          <p style='margin-top: 0;'>Discard draft?</p>
        </m-dialog>
        <m-dialog
          onOpening={this.onOpenClose}
          onOpened={this.onOpenClose}
          onClosing={this.onOpenClose}
          onClosed={this.onOpenClose}
          onScrim={this.onClose}
          css={css}
          show={this.simpleShow}
          title='Select an account'
          message={
            <ul class="mdc-list mdc-list--avatar-list">
              <li onClick={this.onSimple} id='li-simple-0' class="mdc-list-item" tabindex={this.simpleListIndex[0]}>
                <table>
                  <tr>
                    <td>
                    <m-icon
                      view={48}
                      color="rgba(0,0,0,.3)"
                      path='M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 20c-3.34 0-6.27-1.71-8-4.29.03-2.65 5.34-4.11 8-4.11s7.96 1.46 8 4.11C30.27 26.29 27.34 28 24 28z'>
                    </m-icon>
                    </td>
                    <td>
                      &nbsp;&nbsp;<span class="test-list-item__label">user1@example.com</span>
                    </td>
                  </tr>
                </table>
              </li>
              <li onClick={this.onSimple} id='li-simple-1' class="mdc-list-item" tabindex={this.simpleListIndex[1]}>
                <table>
                  <tr>
                    <td>
                    <m-icon
                      view={48}
                      color="rgba(0,0,0,.3)"
                      path='M42 12H26.83l6.59-6.59L32 4l-8 8-8-8-1.41 1.41L21.17 12H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm0 28H6V16h36v24zM18 20v16l14-8z'>
                    </m-icon>
                    </td>
                    <td>
                      &nbsp;&nbsp;<span class="test-list-item__label">user2@example.com</span>
                    </td>
                  </tr>
                </table>
              </li>
              <li onClick={this.onSimple} id='li-simple-2' class="mdc-list-item" tabindex={this.simpleListIndex[2]}>
                <table>
                  <tr>
                    <td>
                    <m-icon
                      view={48}
                      color="rgba(0,0,0,.3)"
                      path='M26 14h-4v8h-8v4h8v8h4v-8h8v-4h-8v-8zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z'>
                    </m-icon>
                    </td>
                    <td>
                      &nbsp;&nbsp;<span class="test-list-item__label">Add account</span>
                    </td>
                  </tr>
                </table>
              </li>
            </ul>
          }
        />
        <m-dialog
          onOpening={this.onOpenClose}
          onOpened={this.onOpenClose}
          onClosing={this.onOpenClose}
          onClosed={this.onOpenClose}
          onScrim={this.onClose}
          show={this.confirmationShow}
          title='Phone ringtone'
          cancel-button={{
            text: 'Cancel',
            unelevated: true,
            dense: true,
            icon: 'favorite_border',
            onClick: this.onClose
          }}
          confirm-button={{
            text: 'OK',
            unelevated: true,
            dense: true,
            icon: 'favorite',
            onClick: this.onConfirm
          }}
        >
          <link rel='stylesheet' type='text/css' href='./mdc.list.min.css' />
          <ul class="mdc-list">
            <li onClick={this.onList1} class="mdc-list-item m-list-radio" tabindex={this.listIndex1}>
            <m-radio
                css={`
                  .mdc-form-field {
                    padding: 0 16px;
                    line-height: 48px;
                  }
                  .mdc-radio {
                    margin-left: -7.2px;
                  }
                  .mdc-form-field > label {
                    font-size: initial;
                    cursor: pointer;
                  }
                  /*以下两个css覆盖为了防止pc端dialog内radio出现一闪一闪的黑色列表*/
                  .mdc-radio::before {
                    transition: auto;
                    z-index: 0;
                  }
                  .mdc-radio__native-control {
                    z-index: 0;
                  }
                `}
                name="abc"
                label='Never Gonna Give You Up'
              ></m-radio>
            </li>
            <li onClick={this.onList2} class="mdc-list-item m-list-radio" tabindex={this.listIndex2}>
              <m-radio
                css={`
                  .mdc-form-field {
                    padding: 0 16px;
                    line-height: 48px;
                  }
                  .mdc-radio {
                    margin-left: -7.2px;
                  }
                  .mdc-form-field > label {
                    font-size: initial;
                    padding-right: 86px;
                    cursor: pointer;
                  }
                  /*以下两个css覆盖为了防止pc端dialog内radio出现一闪一闪的黑色列表*/
                  .mdc-radio::before {
                    transition: auto;
                    z-index: 0;
                  }
                  .mdc-radio__native-control {
                    z-index: 0;
                  }
                `}
                name="abc"
                label='Hot Cross Buns'
              ></m-radio>
            </li>
            <li onClick={this.onList3} class="mdc-list-item m-list-radio" tabindex={this.listIndex3}>
              <m-radio
                css={`
                  .mdc-form-field {
                    padding: 0 16px;
                    line-height: 48px;
                  }
                  .mdc-radio {
                    margin-left: -7.2px;
                  }
                  .mdc-form-field > label {
                    font-size: initial;
                    padding-right: 163px;
                    cursor: pointer;
                  }
                  /*以下两个css覆盖为了防止pc端dialog内radio出现一闪一闪的黑色列表*/
                  .mdc-radio::before {
                    transition: auto;
                    z-index: 0;
                  }
                  .mdc-radio__native-control {
                    z-index: 0;
                  }
                `}
                name="abc"
                label='None'
              ></m-radio>
            </li>
          </ul>
        </m-dialog>
        <m-dialog
          onOpening={this.onOpenClose}
          onOpened={this.onOpenClose}
          onClosing={this.onOpenClose}
          onClosed={this.onOpenClose}
          onScrim={this.onClose}
          show={this.scrollableShow}
          scrollable
          title='The Wonderful Wizard of Oz'
          message={
            <div>
              <p style='margin-top: 0;'>
                <a href="https://github.com/Tencent/omi/blob/master/packages/omim" target="_blank" rel="noopener noreferrer">Read the full book</a>
              </p>
              <p>Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner. There was no garret at all, and no cellar--except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path. It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole.</p>
              <p>When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie on every side. Not a tree nor a house broke the broad sweep of flat country that reached to the edge of the sky in all directions. The sun had baked the plowed land into a gray mass, with little cracks running through it. Even the grass was not green, for the sun had burned the tops of the long blades until they were the same gray color to be seen everywhere. Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else.</p>
              <p>When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her, too. They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also. She was thin and gaunt, and never smiled now. When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she would scream and press her hand upon her heart whenever Dorothy's merry voice reached her ears; and she still looked at the little girl with wonder that she could find anything to laugh at.</p>
              <p>Uncle Henry never laughed. He worked hard from morning till night and did not know what joy was. He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and rarely spoke.</p>
              <p>It was Toto that made Dorothy laugh, and saved her from growing as gray as her other surroundings. Toto was not gray; he was a little black dog, with long silky hair and small black eyes that twinkled merrily on either side of his funny, wee nose. Toto played all day long, and Dorothy played with him, and loved him dearly.</p>
              <p>Today, however, they were not playing. Uncle Henry sat upon the doorstep and looked anxiously at the sky, which was even grayer than usual. Dorothy stood in the door with Toto in her arms, and looked at the sky too. Aunt Em was washing the dishes.</p>
              <p>From the far north they heard a low wail of the wind, and Uncle Henry and Dorothy could see where the long grass bowed in waves before the coming storm. There now came a sharp whistling in the air from the south, and as they turned their eyes that way they saw ripples in the grass coming from that direction also.</p>
            </div>
          }
          cancel-button={{
            text: 'Decline',
            onClick: this.onClose
          }}
          confirm-button={{
            text: 'Accept',
            onClick: this.onConfirm
          }}
        />
        <p>{this.showText}</p>
      </div>
    )
  }
})

render(<my-app />, 'body')
