import { diff } from './vdom/diff';
import { Component } from './component';
import options from './options';
import {addScopedAttr, addScopedAttrStatic} from './style';

function isElement(obj) {
	try {
	  //Using W3 DOM2 (works for FF, Opera and Chrome)
	  return obj instanceof HTMLElement;
	}
	catch (e){
	  //Browsers not supporting W3 DOM2 don't have HTMLElement and
	  //an exception is thrown and we end up here. Testing some
	  //properties that all elements have (works on IE7)
	  return (typeof obj==="object") &&
		(obj.nodeType===1) && (typeof obj.style === "object") &&
		(typeof obj.ownerDocument ==="object");
	}
}

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
export function render(vnode, parent, merge) {
	options.staticStyleRendered = false;
	parent = typeof parent === 'string' ? document.querySelector(parent) : parent;
	if (merge === true){
		while (parent.firstChild){
			parent.removeChild(parent.firstChild);
		}
	}
	const m = isElement(merge) || merge === undefined;
	if (vnode instanceof Component) {
		if (window && window.Omi){
			window.Omi.instances.push(vnode);
		}
		if (!m){
			vnode.$store = options.$store = merge;
		}
		if (vnode.componentWillMount) vnode.componentWillMount();
		if (vnode.install) vnode.install();
		const rendered =  vnode.render(vnode.props, vnode.state, vnode.context);
		if (vnode.style){
			addScopedAttr(rendered,vnode.style(),'_style_'+vnode._id,vnode);
		}
	
		//don't rerender
		if (vnode.staticStyle){
			addScopedAttrStatic(rendered,vnode.staticStyle(),'_style_'+vnode.constructor.name, !vnode.base);
		}

		vnode.base = diff(m ? merge : undefined, rendered, {}, false, parent, false);
		
		if (vnode.componentDidMount) vnode.componentDidMount();
		if (vnode.installed) vnode.installed();
		options.staticStyleRendered = true;
		return vnode.base;
	}
	
	let result = diff(merge, vnode, {}, false, parent, false);
	options.staticStyleRendered = true;
	return result;
}
