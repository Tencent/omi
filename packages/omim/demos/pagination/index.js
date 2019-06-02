
import '../../src/pagination/index.tsx'
import { render, h, define, WeElement } from 'omi'

define('my-app', class extends WeElement {

  onChange = (e)=>{
    console.log(e.detail)
  }

	render() {
		return <div>
			 <m-pagination
            total={125}
            currentPage={1}
            pageSize={5}
            onChange={this.onChange}
          />
		</div>

	}
})

render(<my-app />, 'body')
