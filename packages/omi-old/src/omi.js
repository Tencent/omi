import { h, h as createElement } from './h';
import { cloneElement } from './clone-element';
import { Component } from './component';
import { render } from './render';
import { rerender } from './render-queue';
import options from './options';

const instances = [];
const WeElement = Component

options.root.Omi = {
	h,
	createElement,
	cloneElement,
	Component,
	render,
	rerender,
	options,
	instances,
	WeElement
};

options.root.Omi.version = '3.0.6';

export default {
	h,
	createElement,
	cloneElement,
	Component,
	render,
	rerender,
	options,
	instances,
	WeElement
};

export {
	h,
	createElement,
	cloneElement,
	Component,
	render,
	rerender,
	options,
	instances,
	WeElement
};
