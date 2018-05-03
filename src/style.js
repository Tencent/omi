import options from './options';

// many thanks to https://github.com/thomaspark/scoper/
export function scoper(css, prefix) {
	prefix = '['+prefix.toLowerCase()+']';
	// https://www.w3.org/TR/css-syntax-3/#lexical
	css = css.replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '');
	// eslint-disable-next-line
    let re = new RegExp('([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|\s*{)', 'g')
	/**
     * Example:
     *
     * .classname::pesudo { color:red }
     *
     * g1 is normal selector `.classname`
     * g2 is pesudo class or pesudo element
     * g3 is the suffix
     */
	css = css.replace(re, (g0, g1, g2, g3) => {
		if (typeof g2 === 'undefined') {
			g2 = '';
		}

		/* eslint-ignore-next-line */
		if (g1.match(/^\s*(@media|\d+%?|@-webkit-keyframes|@keyframes|to|from|@font-face)/)) {
			return g1 + g2 + g3;
		}

		let appendClass = g1.replace(/(\s*)$/, '') + prefix + g2;
		let prependClass = prefix + ' ' + g1.trim() + g2;
		return appendClass + ',' + prependClass + g3;
	});

	return css;
}

export function addStyle(cssText, id) {
	id = id.toLowerCase();
	let ele = document.getElementById(id);
	let head = document.getElementsByTagName('head')[0];
	if (ele && ele.parentNode === head) {
		head.removeChild(ele);
	}

	let someThingStyles = document.createElement('style');
	head.appendChild(someThingStyles);
	someThingStyles.setAttribute('type', 'text/css');
	someThingStyles.setAttribute('id', id);
	if (window.ActiveXObject) {
		someThingStyles.styleSheet.cssText = cssText;
	} else {
		someThingStyles.textContent = cssText;
	}
}

export function addStyleWithoutId(cssText) {
	let head = document.getElementsByTagName('head')[0];
	let someThingStyles = document.createElement('style');
	head.appendChild(someThingStyles);
	someThingStyles.setAttribute('type', 'text/css');

	if (window.ActiveXObject) {
		someThingStyles.styleSheet.cssText = cssText;
	} else {
		someThingStyles.textContent = cssText;
	}
}


export function addScopedAttr(vdom, style, attr, component) {
	if (options.scopedStyle) {
		scopeVdom(attr, vdom);
		style = scoper(style, attr);
		if (style !== component._preStyle) {
			addStyle(style, attr);
		}
	} else if (style !== component._preStyle) {
		addStyleWithoutId(style);
	}
	component._preStyle = style;
}

export function addScopedAttrStatic(vdom, style, attr) {
	if (options.scopedStyle) {
		scopeVdom(attr, vdom);
		if (!options.staticStyleRendered) {
			addStyle(scoper(style, attr), attr);
		}
	} else if (!options.staticStyleRendered) {
		addStyleWithoutId(style);
	}
}

export function scopeVdom(attr,vdom){
	if (typeof vdom!== 'string'){
		vdom.attributes = vdom.attributes||{};
		vdom.attributes[attr] = '';
		vdom.children.forEach(child=>scopeVdom(attr,child));
	}
}