import { h, h as createElement } from './h';
import options from './options';
import WeElement from  './we-element';
import { render } from './render';
import { define } from './define'

const instances = [];

options.root.Omi = {
	h,
	createElement,
	WeElement,
	render,
	options,
	instances,
	define
};

options.root.Omi.version = '4.0.0';

export default {
	h,
	createElement,
	WeElement,
	render,
	options,
	instances,
	define
};

export {
	h,
	createElement,
	WeElement,
	render,
	options,
	instances,
	define
};
