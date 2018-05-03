import { h, h as createElement } from './h';
import { cloneElement } from './clone-element';
import { Component } from './component';
import { render } from './render';
import { rerender } from './render-queue';
import options from './options';

function getGlobal() {
	if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
		if (typeof self !== 'undefined') {
			return self;
		} else if (typeof window !== 'undefined') {
			return window;
		} else if (typeof global !== 'undefined') {
			return global;
		}
		return (function(){
			return this;
		})();
		
	}
	return global;
}

const instances = [];
const root = getGlobal();
root.Omi = {
	h,
	createElement,
	cloneElement,
	Component,
	render,
	rerender,
	options,
	instances
};

root.Omi.version = '3.0.0';

export default {
	h,
	createElement,
	cloneElement,
	Component,
	render,
	rerender,
	options,
	instances
};

export {
	h,
	createElement,
	cloneElement,
	Component,
	render,
	rerender,
	options,
	instances
};
