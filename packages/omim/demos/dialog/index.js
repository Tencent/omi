import '../../src/dialog/index.tsx'

import { render, WeElement, define, h } from 'omi'

import * as css from './material.scss'

define('my-app', class extends WeElement {

  alertShow = false
  simpleShow = false
  confirmationShow = false
  scrollableShow = false

  showText = ''

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

  render(props, data) {
    return(
      <div>
        <m-button onClick={this.onShowAlert} ripple>Alert</m-button>
        <m-button onClick={this.onShowSimple} ripple>Simple</m-button>
        <m-button onClick={this.onShowConfirmation} ripple>Confirmation</m-button>
        <m-button onClick={this.onShowScrollable} ripple>Scrollable</m-button>
        <m-dialog
          onScrim={this.onClose}
          onCancel={this.onClose}
          onConfirm={this.onConfirm}
          show={this.alertShow}
          message={<p>Discard draft?</p>}
          cancel-button={{
            text: 'Cancel',
            // onClick: this.onClose
          }}
          confirm-button={{
            text: 'Discard',
            // onClick: this.onConfirm
          }}
        />
        <m-dialog
          onScrim={this.onClose}
          css={css}
          show={this.simpleShow}
          title='Select an account'
          message={
            <ul class="mdc-list mdc-list--avatar-list" style="list-style-type: none;">
              <li onClick={this.onConfirm} class="mdc-list-item" tabindex="0" data-mdc-dialog-action="user1@example.com">
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
              <li onClick={this.onConfirm} class="mdc-list-item" tabindex="0" data-mdc-dialog-action="user1@example.com">
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
              <li onClick={this.onConfirm} class="mdc-list-item" tabindex="0" data-mdc-dialog-action="user1@example.com">
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
          css={css}
          onScrim={this.onClose}
          show={this.confirmationShow}
          title='Phone ringtone'
          message={
            <ul class="mdc-list" style="list-style-type: none;">
              <li class="mdc-list-item" tabindex="0">
                <span class="mdc-list-item__graphic">
                  <div class="mdc-radio">
                    <input class="mdc-radio__native-control" type="radio" id="test-dialog-baseline-confirmation-radio-1" name="test-dialog-baseline-confirmation-radio-group" value="1" checked="" tabindex="-1" />
                    <div class="mdc-radio__background">
                      <div class="mdc-radio__outer-circle">
                      </div>
                      <div class="mdc-radio__inner-circle">
                      </div>
                    </div>
                  </div>
                </span>
                <label class="test-list-item__label" for="test-dialog-baseline-confirmation-radio-1">Never Gonna Give You Up</label>
              </li>
              <li class="mdc-list-item" tabindex="-1">
                <span class="mdc-list-item__graphic">
                  <div class="mdc-radio">
                    <input class="mdc-radio__native-control" type="radio" id="test-dialog-baseline-confirmation-radio-2" name="test-dialog-baseline-confirmation-radio-group" value="2" tabindex="-1" />
                    <div class="mdc-radio__background">
                      <div class="mdc-radio__outer-circle">
                      </div>
                      <div class="mdc-radio__inner-circle">
                      </div>
                    </div>
                  </div>
                </span>
                <label class="test-list-item__label" for="test-dialog-baseline-confirmation-radio-2">Hot Cross Buns</label>
              </li>
              <li class="mdc-list-item" tabindex="-1">
                <span class="mdc-list-item__graphic">
                  <div class="mdc-radio">
                    <input class="mdc-radio__native-control" type="radio" id="test-dialog-baseline-confirmation-radio-3" name="test-dialog-baseline-confirmation-radio-group" value="3" tabindex="-1" />
                    <div class="mdc-radio__background">
                      <div class="mdc-radio__outer-circle">
                      </div>
                      <div class="mdc-radio__inner-circle">
                      </div>
                    </div>
                  </div>
                </span>
                <label class="test-list-item__label" for="test-dialog-baseline-confirmation-radio-3">None</label>
              </li>
            </ul>
          }
          cancel-button={{
            text: 'Cancel',
            unelevated: true,
            dense: true,
            icon: {
              path: 'M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z',
              color: '#FFFFFF',
              scale: 1.3
            },
            onClick: this.onClose
          }}
          confirm-button={{
            text: 'OK',
            unelevated: true,
            dense: true,
            icon: {
              path: 'M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z',
              color: '#FFFFFF',
              scale: 1.3
            },
            onClick: this.onConfirm
          }}
        />
        <m-dialog
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
