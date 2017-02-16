import Omi from 'omi';
import OmiJQueryDatePicker from '../../omi-jquery-date-picker.js';

OmiJQueryDatePicker.init();

class App extends Omi.Component {
    constructor(data) {
        super(data);
        this.data.date = '';
    }

    applyHandle(evt, obj){
        console.log('apply', obj);
        console.log(this.datePicker);
        this.data.date = this.refs.dateInput.value;
    }

    render() {
        return  `
        <div>
            <input omi-jquery-date-picker ref="dateInput" language="cn" instanceRef="datePicker" size="40" value="${this.data.date}"  onChange="applyHandle" >
        </div>
        `;
    }
}

Omi.render(new App(),"#container");