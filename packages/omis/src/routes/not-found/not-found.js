import { WeElement, define } from 'omio'

define('not-found', class  extends WeElement {

  static css = require('./_not-found.css')

  render() {
    return (
      <div class='root'>
        <div class='container'>
          <h1>{this.props.title}</h1>
          <p>Sorry, the page you were trying to view does not exist.</p>
        </div>
      </div>
    );
  }
})
