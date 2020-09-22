import { h, h as createElement } from './h'
import { cloneElement } from './clone-element'
import Component from './component'
import { render, merge } from './render'
import { rerender } from './render-queue'
import options from './options'
import { define } from './define'
import { rpx } from './rpx'
import { tag } from './tag'
import { classNames, extractClass } from './class'
import { getHost } from './get-host'
import { renderToString } from './render-to-string'
import obaa from './obaa'
import { Fragment } from './util'

h.f = Fragment


const WeElement = Component
const defineElement = define
function createRef() {
	return {}
}

options.root.Omi = {
	h,
	createElement,
	cloneElement,
	createRef,
	Component,
	render,
	rerender,
	options,
	WeElement,
	define,
	rpx,
	defineElement,
	classNames,
	extractClass,
	getHost,
	renderToString,
	tag,
	merge,
	obaa
}
options.root.omi = options.root.Omi
options.root.Omi.version = 'omio-2.8.3'

export default {
	h,
	createElement,
	cloneElement,
	createRef,
	Component,
	render,
	rerender,
	options,
	WeElement,
	define,
	rpx,
	defineElement,
	classNames,
	extractClass,
	getHost,
	renderToString,
	tag,
	merge,
	obaa
}

export {
	h,
	createElement,
	cloneElement,
	createRef,
	Component,
	render,
	rerender,
	options,
	WeElement,
	define,
	rpx,
	defineElement,
	classNames,
	extractClass,
	getHost,
	renderToString,
	tag,
	merge,
	obaa
}
