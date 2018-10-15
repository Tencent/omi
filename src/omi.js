import { h, h as createElement } from './h';
import options from './options';
import WeElement from  './we-element';
import { render } from './render';
import { define } from './define'
import { tag } from './tag'

const instances = [];

options.root.Omi = {
	tag,
	WeElement,
	render,
	h,
	createElement,
	options,
	instances,
	define
};

options.root.Omi.version = '4.0.0';

export default {
	tag,
	WeElement,
	render,
	h,
	createElement,
	options,
	instances,
	define
};

export {
	tag,
	WeElement,
	render,
	h,
	createElement,
	options,
	instances,
	define
};
