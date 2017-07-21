import Omi from '../../src/index.js';

class FormTest extends Omi.Component {
    constructor(data) {
        super(data);

    }

    handleChange(target){
        console.log(target.value)
        this.data.value = target.value;
        this.update()
    }

    handleSubmit(evt) {
        alert('Your favorite flavor is: ' + this.data.value);
        evt.preventDefault();
    }


    render () {
        return `
        <form onsubmit="handleSubmit(event)">
        <label>
          Pick your favorite La Croix flavor:
          <select value="{{value}}" onchange="handleChange(this)">
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>`;
    }
}

Omi.render(new FormTest({ value: 'mango' }),'#container');