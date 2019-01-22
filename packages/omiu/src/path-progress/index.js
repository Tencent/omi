import { define, WeElement, extractClass } from 'omi'
import ProgressBar from 'progressbar.js';

define('o-path-progress', class extends WeElement {
  defaultProps = {
    options: {},
    progress: 0,
    text: null,
    initialAnimate: false,
    containerStyle: {},
    containerClassName: '.o-path-progress'
  }

  install() {

    this.data = {
      shape: null
    }
  }

  render(props) {
    const { containerStyle } = this.props
    return <div {...extractClass(props)} style={containerStyle} ref={e => { this.progressBar = e }}></div>;
  }

  // receiveProps(nextProps) {
  //   if (!isEqual(this.props.options, nextProps.options)) {
  //     this._destroy();
  //     this._create(nextProps, this.props);

  //     return;
  //   }

  //   this._animateProgress(nextProps.progress);
  //   this._setText(nextProps.text);
  // }

  installed() {
    this._create(this.props);
  }

  uninstall() {
    this._destroy();
  }

  _create(props, oldProps) {
    if (this.data.shape !== null) {
      throw new Error('Progressbar is already created');
    }

    // setdata function is not used to prevent a new render cycle
    // This handling happens outside of React component's lifecycle
    const container = this.progressBar

    this.data.shape = new ProgressBar[props.type](
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
    if (this.data.shape) {
      this.data.shape.destroy();
      this.data.shape = null;
    }
  }

  _animateProgress(progress) {
    this.data.shape.animate(progress);
  }

  _setProgress(progress) {
    this.data.shape.set(progress);
  }

  _setText(text) {
    if (text) {
      this.data.shape.setText(text);
    }
  }
})

// class Path extends WeElement {
//   render() {
//     return <Shape {...this.props} ShapeClass={ProgressBar.Path} />;
//   }
// }
