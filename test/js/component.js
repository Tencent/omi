import { x, render, Component } from '../../src/index';
/** @jsx h */

let spyAll = obj => Object.keys(obj).forEach( key => sinon.spy(obj,key) );
const h = x
function getAttributes(node) {
	let attrs = {};
	if (node.attributes) {
		for (let i=node.attributes.length; i--; ) {
			attrs[node.attributes[i].name] = node.attributes[i].value;
		}
	}
	return attrs;
}

// hacky normalization of attribute order across browsers.
function sortAttributes(html) {
	return html.replace(/<([a-z0-9-]+)((?:\s[a-z0-9:_.-]+=".*?")+)((?:\s*\/)?>)/gi, (s, pre, attrs, after) => {
		let list = attrs.match(/\s[a-z0-9:_.-]+=".*?"/gi).sort( (a, b) => a>b ? 1 : -1 );
		if (~after.indexOf('/')) after = '></'+pre+'>';
		return '<' + pre + list.join('') + after;
	});
}

const Empty = () => null;

describe('Components', () => {
	let scratch;

	before( () => {
		scratch = document.createElement('div');
		(document.body || document.documentElement).appendChild(scratch);
	});

	beforeEach( () => {
		let c = scratch.firstElementChild;
		//if (c) render(<Empty />, scratch, c);
		if (c) {
			c.innerHTML = '';
		}
		scratch.innerHTML = '';
	});

	after( () => {
		scratch.parentNode.removeChild(scratch);
		scratch = null;
	});

	it('should render components', () => {
		class C1 extends Component {
			render() {
				return <div>C1</div>;
			}
		}
		sinon.spy(C1.prototype, 'render');
		render(<C1 />, scratch);

		expect(C1.prototype.render)
			.to.have.been.calledOnce
		 	.and.to.have.returned(sinon.match({ tagName:'div' }));

		expect(scratch.innerHTML).to.equal('<div __st_5="" __s_5="">C1</div>');
	});

	it('should render components with props', () => {
		const PROPS = { foo:'bar', onBaz:()=>{} };
		let constructorProps;

		class C2 extends Component {
			constructor(props) {
				super(props);
				constructorProps = props;
			}
			render() {
				return <div {...this.data} />;
			}
		}
		sinon.spy(C2.prototype, 'render');

		render(<C2 {...PROPS} />, scratch);

		expect(constructorProps).to.deep.equal(PROPS);


		expect(scratch.innerHTML).to.equal('<div foo="bar" __st_6="" __s_6=""></div>');
	});


});