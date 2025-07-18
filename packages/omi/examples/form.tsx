import { render, tag, Component, h } from '@/index'

@tag('form-demo')
class FormDemo extends Component {
  state = {
    show: true,
    value1: 'volvo',
    value2: '',
  }

  onChange = (evt) => {
    this.state.value1 = evt.target.value
    this.update()
  }

  render() {
    return (
      <div>
        {this.state.show && (
          <select
            id="cars"
            value={this.state.value1}
            onChange={this.onChange}
            name="cars"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        )}

        <select id="cars2" value={this.state.value2} name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <button
          onClick={(evt) => {
            this.state.show = !this.state.show
            this.update()
          }}
        >
          验证this.update后表单状态
        </button>
      </div>
    )
  }
}

render(<form-demo />, document.body)
