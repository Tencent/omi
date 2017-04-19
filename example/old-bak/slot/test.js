import Omi from '../../src/index.js';

class Test extends Omi.Component {

    render() {
        return  `
      <div>
        <slot></slot>
        Test
      </div>
  		`;

    }
}


export default Test;
