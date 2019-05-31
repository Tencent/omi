import Picker from '../../src/date-time-picker/index.tsx'

import { render, WeElement, define, h } from 'omi'


var dialog = new Picker({
  type: 'date'
});
var toggleButton = document.getElementById('btn')
toggleButton.addEventListener('click', function() {
  dialog.toggle();
});

define('my-app', class extends WeElement {

  
  render(props, data) {
    return(
      <div>
       
      </div>
    )
  }
})

render(<my-app />, 'body')
