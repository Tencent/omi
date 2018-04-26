import Omi from '../../src/index.js'


class HelloMessage extends  Omi.Component {
    render() {
      return (
        <div>
          Hello {this.data.name}
        </div>
      );
    }
  }
  
  Omi.render(
    <HelloMessage name="Taylor" />,
    'body'
  );
