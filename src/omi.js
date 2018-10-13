import { h, h as createElement } from './h';
import options from './options';
import WeElement from  './we-element';
import { render } from './render';

const instances = [];

options.root.Omi = {
	h,
	createElement,
	WeElement,
	render,
	options,
	instances
};

options.root.Omi.version = '4.0.0';

export default {
	h,
	createElement,
	WeElement,
	render,
	options,
	instances
};

export {
	h,
	createElement,
	WeElement,
	render,
	options,
	instances
};
