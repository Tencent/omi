import Omi from 'omi';
import OmiJQueryDatePicker from '../../omi-jquery-date-picker.js';

OmiJQueryDatePicker.init();

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    applyHandle(evt, obj){
        console.log('apply', obj);
        console.log(this.datePicker);
    }

    render() {
        return  `
        <div>
            <input omi-jquery-date-picker language="cn" instanceRef="datePicker" size="40" value="" onApply="applyHandle" >
        </div>
        `;
    }
}

Omi.render(new App(),"#container");