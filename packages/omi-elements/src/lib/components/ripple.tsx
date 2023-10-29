import { tag, Component, bind, classNames } from 'omi'

@tag('o-ripple')
export class Ripple extends Component {
  static css = `
  :host {
    display: inline-block;
  }
  
  .o-ripple {
    position: relative;
    display: inline-block;
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

  ripple = false
  rippleStyle = {}

  timeoutId = null
  @bind
  onClick(event) {
    this.ripple = false
    clearTimeout(this.timeoutId)
    this.update()
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

    this.timeoutId = setTimeout(() => {
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
