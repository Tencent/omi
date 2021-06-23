(function () {
	try {
		new window.CSSStyleSheet('a{}');
		return;
	} catch (e) { }

	// TODO: this could really just by a dunderprop to keep the polyfill light.
	const INTERNAL = typeof Symbol !== 'undefined' ? Symbol('__s') : '__s';

  /**
   * Problem 1:
   * CSSStyleSheet is nonconfigurable.
   * This means we're stuck with a ponyfill and not a "perfect" polyfill.
   */
	// Object.defineProperty(window, 'CSSStyleSheet', {
	// 	configurable: true,
	// 	enumerable: true,
	// 	get: () => CSSStyleSheet
	// });

	const OriginalCSSStyleSheet = window.CSSStyleSheet;

	window.CSSStyleSheet = CSSStyleSheet;

	let DOC;

	let counter = 0;

  /**
   * Problem #2:
   * CSSStyleSheet is not instantiable.
   * We can inherit from the real CSSStyleSheet in order to
   */

	function CSSStyleSheet(options) {
		if (!DOC) {
			const frame = document.createElement('iframe');
			frame.style.cssText =
				'position:absolute;left:0;top:-9999px;width:1px;height:1px;';
			document.body.appendChild(frame);
			DOC = frame.contentWindow.document;
		}
		const style = DOC.createElement('style');
		style.$id = ++counter;
		style.childSheets = [];
		style.appendChild(DOC.createTextNode(''));
		DOC.body.appendChild(style);
		// console.log(style, sheet);
		Object.assign(style.sheet, options || {});
		this[INTERNAL] = style;
	}

	// we can be nice and ensure that this holds:
	// document.createElement('style').stylesheet instanceof CSSStyleSeetPolyfill
	CSSStyleSheet.prototype = Object.create(OriginalCSSStyleSheet);

	Object.defineProperty(CSSStyleSheet.prototype, 'cssRules', {
		get() {
			return this[INTERNAL].sheet.cssRules;
		}
	});

	CSSStyleSheet.prototype.replace = function (cssText) {
		const style = this[INTERNAL];
		return new Promise((resolve, reject) => {
			const l = DOC.createElement('link');
			l.rel = 'preload';
			l.as = 'style';
			l.onload = () => {
				// sheet.ownerNode.firstChild.textContent = cssText;
				style.firstChild.data = cssText;
				for (let i = 0; i < style.childSheets.length; i++) {
					style.childSheets[i].firstChild.data = cssText;
				}
				// if (sheet.cssRules[0]) sheet.deleteRule(0);
				// sheet.insertRule(cssText);
				l.remove();
				resolve();
			};
			l.onerror = reject;
			l.href = 'data:text/css;base64,' + btoa(cssText);
			DOC.head.appendChild(l);
		});
	};

	CSSStyleSheet.prototype.replaceSync = function (cssText) {
		const style = this[INTERNAL];
		if (
			cssText
				.replace(/\/\*[\s\S]+?\*\//g, '')
				.match(/@import\s*\(\s*(['"])[^\1]*?\1\s*\)/)
		) {
			throw Error('no');
		}
		// if (sheet.cssRules[0]) sheet.deleteRule(0);
		// sheet.insertRule(cssText);
		// sheet.ownerNode.firstChild.textContent = cssText;
		style.firstChild.data = cssText;
		for (let i = 0; i < style.childSheets.length; i++) {
			style.childSheets[i].firstChild.data = cssText;
		}
	};

	const oldInnerHTML = Object.getOwnPropertyDescriptor(
		ShadowRoot.prototype,
		'innerHTML'
	);
	const oldFirstChild = Object.getOwnPropertyDescriptor(
		Node.prototype,
		'firstChild'
	);
	const oldLastChild = Object.getOwnPropertyDescriptor(
		Node.prototype,
		'lastChild'
	);

	function getState(obj) {
		return (
			obj[INTERNAL] ||
			(obj[INTERNAL] = {
				adoptedStyleSheets: [],
				sheets: [],
				id: ++counter
			})
		);
	}

	Object.defineProperties(ShadowRoot.prototype, {
		firstChild: {
			get() {
				let child = oldFirstChild.get.call(this);
				while (child) {
					if (child[INTERNAL] == null) break;
					child = child.nextSibling;
				}
				return child;
			}
		},

		lastChild: {
			get() {
				let child = oldLastChild.get.call(this);
				while (child) {
					if (child[INTERNAL] == null) break;
					child = child.previousSibling;
				}
				return child;
			}
		},

		// @TODO
		// childNodes: {},
		// children: {},

		innerHTML: {
			get() {
				let html = '';
				let child = oldFirstChild.get.call(this);
				while (child) {
					if (!child[INTERNAL]) {
						if (child.nodeType === 3) html += child.data;
						html += child.outerHTML;
					}
					child = child.nextSibling;
				}
				return html;
				// return old.get.call(this).replace(/</);
			},
			set(html) {
				let child = oldFirstChild.get.call(this);
				let sheets = [];
				while (child) {
					if (child[INTERNAL]) sheets.push(child);
					child = child.nextSibling;
				}
				oldInnerHTML.set.call(this, html);
				child = oldFirstChild.get.call(this);
				for (let i = 0; i < sheets.length; i++) {
					this.insertBefore(sheets[i], child);
				}
				// this.insertAdjacentHTML(html, 'beforeend');
			}
		},

		adoptedStyleSheets: {
			get() {
				const state = getState(this);
				return state.adoptedStyleSheets;
			},

			// @TODO:
			// Chrome's implementation doesn't do any diffing, so the polyfill needn't either.
			// Also, we should always clone the passed Array and freeze it if available.
			set(value) {
				const state = getState(this);
				let previous = state.adoptedStyleSheets.slice();
				const indices = [];
				if (!Array.isArray(value)) {
					value = [].concat(value || []);
				}
				// this[INTERNAL] = value;
				state.adoptedStyleSheets = value;
				for (let i = 0; i < value.length; i++) {
					const v = value[i];
					const index = previous.indexOf(v);
					if (index === -1) {
						const style = v[INTERNAL];
						const clone = style.cloneNode(true);
						// clone.setAttribute('data-is-constructed', state.id);
						clone[INTERNAL] = {};
						// clone.$parent = style;
						style.childSheets.push(clone);
						// clone.textContent = style.textContent;
						// clone.$id = style.$id;
						// state.sheets.push(clone);
						this.appendChild(clone);
						// console.log(this, clone, this.childNodes);
						// console.log(`found new sheet, adding.`, clone);
					} else {
						indices[index] = true;
						// const style = v[INTERNAL];
					}
				}
				for (let i = 0; i < previous.length; i++) {
					if (indices[i] !== true) {
						const prev = previous[i][INTERNAL];
						// const style = prev.$parent;
						for (let j = 0; j < prev.childSheets.length; j++) {
							const sheet = prev.childSheets[j];
							if (sheet.parentNode === this) {
								this.removeChild(sheet);
								prev.childSheets.splice(j, 1);
								break;
							}
						}
						// for (let j = 0; j < state.sheets.length; j++) {
						// 	if (state.sheets[j].$id === prev.$id) {
						// 		state.sheets[j].remove();
						// 		break;
						// 	}
						// }
					}
				}
			}
		}
	});
}());
