import { h, h as createElement } from './h';
import { cloneElement } from './clone-element';
import { Component } from './component';
import { render } from './render';
import { rerender } from './render-queue';
import { define } from './define';
import { obaa } from './obaa';
import options from './options';

function createRef() {
	return {};
}

export default {
	h,
	createElement,
	cloneElement,
	createRef,
	Component,
	render,
	rerender,
	options,
	define,
	obaa
};

export {
	h,
	createElement,
	cloneElement,
	createRef,
	Component,
	render,
	rerender,
	options,
	define,
	obaa
};

if(typeof window !== 'undefined'){
	window.Omis = {
		h,
		createElement,
		cloneElement,
		createRef,
		Component,
		render,
		rerender,
		options,
		define,
		obaa
	};
}
