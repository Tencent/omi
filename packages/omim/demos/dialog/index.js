import '../../src/dialog/index.tsx'
import '../../src/list/index.tsx'

import { render, WeElement, define, h } from 'omi'

define('my-app', class extends WeElement {

  alertShow = false
  simpleShow = false
  confirmationShow = false
  scrollableShow = false

  showText = ''

  onOpenClose = (e) => {
    console.log(e.detail.type)
  }

  onShowAlert = () => {
    this.alertShow = true
    this.showText = 'open alert!'
    this.update()
  }

  onShowSimple = () => {
    this.simpleShow = true
    this.showText = 'open simple!'
    this.update()
  }

  onShowConfirmation = () => {
    this.confirmationShow = true
    this.showText = 'open confirmation!'
    this.update()
  }

  onShowScrollable = () => {
    this.scrollableShow = true
    this.showText = 'open scrollable!'
    this.update()
  }
  
  onClose = () => {
    this.simpleShow = false
    this.alertShow = false
    this.confirmationShow = false
    this.scrollableShow = false
    this.showText = 'Declined... Maybe next time?'
    this.update()
  }

  onConfirm = () => {
    this.simpleShow = false
    this.alertShow = false
    this.confirmationShow = false
    this.scrollableShow = false
    this.showText = 'Accepted, thanks!'
    this.update()
  }

  onItemClick = (e) => {
    console.log(e)
    this.simpleShow = false
    this.showText = 'Accepted, thanks!'
    this.update()
  }

  radio = {
    checked1: '',
    selected1: '',
    checked2: 'true',
    selected2: 'true',
    checked3: '',
    selected3: '',
  }

  onRadio = (e) => {
    console.log(e.detail)
    switch(e.detail.index) {
      case 0:
        this.radio.checked1 = 'true';
        this.radio.selected1 = 'true';
        this.radio.checked2 = '';
        this.radio.selected2 = '';
        this.radio.checked3 = '';
        this.radio.selected3 = '';
        break;
      case 1:
        this.radio.checked1 = '';
        this.radio.selected1 = '';
        this.radio.checked2 = 'true';
        this.radio.selected2 = 'true';
        this.radio.checked3 = '';
        this.radio.selected3 = '';
        break;
      case 2:
        this.radio.checked1 = '';
        this.radio.selected1 = '';
        this.radio.checked2 = '';
        this.radio.selected2 = '';
        this.radio.checked3 = 'true';
        this.radio.selected3 = 'true';
        break;
    }
    this.update()
  }

  render() {
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
          cancel-button={{text: 'Cancel'}}
          confirm-button={{text: 'Discard'}}>
          <p style='margin:0'>Discard draft?</p>
        </m-dialog>

        <m-dialog
          onOpening={this.onOpenClose}
          onOpened={this.onOpenClose}
          onClosing={this.onOpenClose}
          onClosed={this.onOpenClose}
          onScrim={this.onClose}
          show={this.simpleShow}
          title='Select an account'>
          <m-list
            css={`
              .mdc-list {
                margin-bottom: 8px;
              }
              .mdc-list-item {
                height: 56px;
              }
              .mdc-list-item__graphic {
                background-color: rgba(0,0,0,.3);
                color: #fff;
                margin-left: 0;
                margin-right: 16px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
              }
              .mdc-list-item--selected .mdc-list-item__graphic {
                color: #fff;
              }
            `}
            singleSelection
            items={[
              {text: 'user1@example.com', icon: 'person', selected: true},
              {text: 'user2@example.com', icon: 'person'},
              {text: 'Add account', icon: 'add'}
            ]}
            onItemClick={this.onItemClick}
          />
        </m-dialog>

        <m-dialog
          css={`
            .mdc-dialog__title + .mdc-dialog__content {
              padding-bottom: 0;
            }
          `}
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
          }}>
          <m-list
            radio
            singleSelection
            css={`
              .mdc-list {
                margin-bottom: 8px;
              }
              .mdc-list-item {
                height: 56px;
              }
              .mdc-list-item__graphic {
                margin-left: 0;
                margin-right: 16px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
              }
              .mdc-list-item__text {
                margin-right: 10px;
              }
            `}
            items={[{
              text: 'I Love Omim, Me too',
              icon: 'wifi',
              checked: `${this.radio.checked1}`,
              selected: `${this.radio.selected1}`
            },
            {
              text: 'Hot Cross Buns',
              icon: 'bluetooth',
              checked: `${this.radio.checked2}`,
              selected: `${this.radio.selected2}`
            },
            {
              text: 'None',
              icon: 'data_usage',
              checked: `${this.radio.checked3}`,
              selected: `${this.radio.selected3}`
            }]}
            onItemClick={this.onRadio}
          />
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
          cancel-button={{
            text: 'Decline',
            onClick: this.onClose
          }}
          confirm-button={{
            text: 'Accept',
            onClick: this.onConfirm
          }}>
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
        </m-dialog>
        
        <p>{this.showText}</p>
      </div>
    )
  }
})

render(<my-app />, 'body')
