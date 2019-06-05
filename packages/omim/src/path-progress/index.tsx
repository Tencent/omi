import { define, WeElement, extractClass, h } from 'omi'
import * as ProgressBar from 'progressbar.js';

interface Props {
  containerStyle: Object
}

interface Data {

}

define('m-path-progress', class extends WeElement<Props, Data> {
  static defaultProps = {
    options: {},
    progress: 0,
    text: null,
    initialAnimate: false,
    containerStyle: {}
  }

  static propTypes = {
    type: String,
    options: Object,
    progress: Number,
    text: String,
    initialAnimate: Boolean,
    containerStyle: Object
  }


  shape: any
  progressBar: HTMLElement

  render(props) {
    const { containerStyle } = this.props
    return <div {...extractClass(props)} style={containerStyle} ref={e => { this.progressBar = e }}></div>;
  }


  installed() {
    this._create(this.props, null);
  }

  uninstall() {
    this._destroy();
  }

  _create(props, oldProps) {
  
    console.log(this.props)
    console.log(props.type)
    // setdata function is not used to prevent a new render cycle
    // This handling happens outside of React component's lifecycle
    const container = this.progressBar

    this.shape = new ProgressBar[props.type](
      container,
      props.options
    );


    if (props.initialAnimate) {
      if (oldProps) {
        this._setProgress(oldProps.progress);
      }

      this._animateProgress(props.progress);
    } else {
      this._setProgress(props.progress);
    }

    this._setText(props.text);
  }

  _destroy() {
    if (this.shape) {
      this.shape.destroy();
      this.shape = null;
    }
  }

  _animateProgress(progress) {
    this.shape.animate(progress);
  }

  _setProgress(progress) {
    this.shape.set(progress);
  }

  _setText(text) {
    if (text) {
      this.shape.setText(text);
    }
  }
})