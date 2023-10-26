import { tag, Component, h, bind, classNames } from 'omi'

@tag('o-ripple')
class OmiRipple extends Component {
  static css = `
  :host {
    display: var(--o-ripple-display-type, inline-block);
  }
  
  .o-ripple {
    position: relative;
    display: var(--o-ripple-display-type, inline-block);
    overflow: hidden;
  }

  span.ripple {
    position: absolute; 
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms ease-out;
    background-color: rgba(255, 255, 255, 0.7);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  `


  installed() {
    const slot = this.shadowRoot.querySelector('#slot')
    const assignedNodes = slot.assignedNodes()
    const displayType = window.getComputedStyle(assignedNodes[0]).display
    this.style.setProperty('--o-ripple-display-type', displayType)
  }

  ripple = false
  rippleStyle = {}

  @bind
  onClick(event) {
    if (this.ripple) {
      return
    }
    const diameter = Math.max(this.rootElement.clientWidth, this.rootElement.clientHeight)
    const radius = diameter / 2
    const rect = this.rootElement.getBoundingClientRect()
    const left = event.clientX - rect.left - radius
    const top = event.clientY - rect.top - radius

    this.rippleStyle = {
      top: `${top}px`,
      left: `${left}px`,
      width: `${diameter}px`,
      height: `${diameter}px`,
    }

    this.ripple = true
    this.update()

    setTimeout(() => {
      this.ripple = false
      this.update()
    }, 600)
  }

  render() {
    return (
      <div class="o-ripple" onClick={this.onClick}>
        <slot id="slot"></slot>
        <span style={this.rippleStyle} class={classNames({ ripple: this.ripple })}></span>
      </div>
    )
  }
}