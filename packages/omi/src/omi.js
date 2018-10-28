import { h, h as createElement } from "./h"
import options from "./options"
import WeElement from "./we-element"
import { render } from "./render"
import { define } from "./define"
import { tag } from "./tag"
import { observe } from "./observe"

const omi = {
  tag,
  WeElement,
  render,
  h,
  createElement,
  options,
	define,
	observe
}

options.root.Omi = omi
options.root.Omi.version = "4.0.9"

export default omi

export { tag, WeElement, render, h, createElement, options, define, observe }
