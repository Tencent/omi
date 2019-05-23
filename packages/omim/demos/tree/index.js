
import '../../src/tree/index.tsx'
import { render, h, define, WeElement } from 'omi'

define('my-app', class extends WeElement {
     render(){return   <div>
          <m-tree></m-tree>
      </div>
    
  }
})

render(<my-app />, 'body')
