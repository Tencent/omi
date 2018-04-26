import Omi from '../../src/index.js'

class Timer extends Omi.Component {
    constructor(data) {
      super(data);
      this.data = { seconds: 0 };
    }
  
    tick() {
      this.data.seconds += 1 
      this.update()
    }
  
    installed() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    uninstall() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Seconds: {this.data.seconds}
        </div>
      );
    }
  }
  
  Omi.render(<Timer />, 'body');