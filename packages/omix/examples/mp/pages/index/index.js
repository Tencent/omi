import Taro, { internal_safe_get, internal_get_original, internal_inline_style } from "@tarojs/taro";
import { render, WeElement, define } from 'omi';

define('my-counter', class extends WeElement {
  static properties = {};
  static $$events = ["sub", "add"];
  $usedState = ["count"];

  _constructor(props) {
    super._constructor(props);
  }

  count = 1;

  //You can also pass strings directly
  css = "span{\n        color: red;\n      }";

  sub = () => {
    this.count--;
    this.update();
  };

  add = () => {
    this.count++;
    this.update();
  };

  _createData() {
    this.__state = arguments[0] || this.state || {};
    this.__props = arguments[1] || this.props || {};
    const {
      count: count
    } = this;
    Object.assign(this.__state, {
      count: count
    });
    return this.__state;
  }
  $$refs = [];
});

render(<my-counter />, 'body');