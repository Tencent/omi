import { observable, autorun } from "mobx";
import { options } from "omi";

options.afterInstall = function(ele) {
	if (ele.constructor.observe) {
		oba(ele.data, ele);
	}
};

let tickId = null;

function oba(data, ele) {
	const o = observable(data);

	autorun(() => {
		JSON.stringify(o);
		if (ele._isInstalled) {
			clearTimeout(tickId);
			tickId = setTimeout(function() {
				ele.update();
			}, 0);
		}
	});

	ele.data = o;
}

function observe(target) {
	target.observe = true;
}

export { observe };

export default {
	observe
};
