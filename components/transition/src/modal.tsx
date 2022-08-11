import { tag, WeElement, h } from 'omi'
import './index.tsx'

interface Props {
  show: boolean
}

@tag('o-modal')
export default class TransitionDemo extends WeElement<Props> {

  static css = `
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }
  
  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }
  
  .modal-body {
    margin: 20px 0;
  }
  
  .modal-default-button {
    float: right;
  }
  
  
  .modal-enter-from {
    opacity: 0;
  }
  
  .modal-leave-to {
    opacity: 0;
  }
  
  .modal-enter-from .modal-container,
  .modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  `
  appear: boolean = false
  disappear: boolean = false

  onClose = () => {
    this.appear = false
    this.disappear = true
    this.update()
  }

  onAfterLeave = () => {
    this.fire('close')
  }

  receiveProps() {
    if (this.props.show) {
      this.appear = true
      this.disappear = false
    } else {
      this.appear = false
      this.disappear = true
    }
  }


  render(props: Props) {
    return (
      <o-transition appear={this.appear} disappear={this.disappear} onAfterLeave={this.onAfterLeave} name="modal">
        {props.show && <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">default header</slot>
              </div>

              <div class="modal-body">
                <slot name="body">default body</slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button
                    class="modal-default-button"
                    onClick={this.onClose}
                  >OK</button>
                </slot>
              </div>
            </div>
          </div>
        </div>}
      </o-transition >
    )
  }
}

