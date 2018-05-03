
import Element from './element';
import { addDoc, removeDoc } from './util';

//get document module from global bridge
const { document }  = global.bridge;

export default class Document {
	constructor(id) {
		this.id = id;
		addDoc(id, this);
		this.nodeMap = {};
		this._isMockDocument = true;
		this.keyframes = {};
	}

	createBody(type, props) {
		if (!this.body) {
			const el = new Element(type, props);
			el.didMount = true;
			el.ownerDocument = this;
			el.docId = this.id;
			el.style.alignItems = 'flex-start';
			this.body = el;
		}

		return this.body;
	}

	createElement(tagName, props) {
		let el = new Element(tagName, props);
		el.ownerDocument = this;
		el.docId = this.id;
		return el;
	}

	destroy() {
		delete this.listener;
		delete this.nodeMap;
		removeDoc(this.id);
	}

	createFinish() {
		document.createFinish(this.id, this.body.toJSON());
	}

	updateFinish() {
		document.updateFinish(this.id);
	}

	addElement(ref, element, index) {
		document.addElement(this.id, ref, element, index);
	}

	moveElement(ref, parentRef, index) {
		document.moveElement(this.id, ref, parentRef, index);
	}

	removeElement(ref) {
		document.removeElement(this.id, ref);
	}

	setStyles(ref, result) {
		document.setStyles(this.id, ref, result);
	}

	setAttr(ref, result) {
		document.setAttr(this.id, ref, result);
	}

	removeAttr(ref, key) {
		document.removeAttr(this.id, ref, key);
	}

	addEvent(ref, type) {
		document.addEvent(this.id, ref, type);
	}

	removeEvent(ref, type) {
		document.removeEvent(this.id, ref, type);
	}

	addKeyframe(frame) {
		document.addKeyframe(this.id, frame);
	}

	addKeyframeMap(frames) {
		document.addKeyframeMap(this.id, frames);
	}

	scrollTo(ref, x, y, animated) {
		document.scrollTo(this.id, ref, x, y, animated);
	}

	getComputedStyle(ref, func) {
		document.getComputedStyle(this.id, ref, func);
	}
}