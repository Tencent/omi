import './style';
import { Component } from 'preact';
//import '../../../src/index.js'
import '@omiu/checkbox'

export default class App extends Component {
  onChange = (evt) => {
    console.log(evt.detail)
  }

  render() {
    return (
      <div>
        <o-checkbox label="Label"></o-checkbox>
        <br />
        <br />

        <o-checkbox checked label="checked"></o-checkbox>
        <br />
        <br />

        <o-checkbox onChange={this.onChange} indeterminate label="indeterminate"></o-checkbox>
        <br />
        <br />

        <o-checkbox disabled label="disabled"></o-checkbox>
        <br /> <br />

        <o-checkbox disabled checked label="disabled checked"></o-checkbox>
      </div>
    );
  }
}
