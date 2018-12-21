/*
 * @Author: kinsonpeng 
 * @Date: 2018-12-14 11:49:33 
 * @Last Modified by: kinsonpeng
 * @Last Modified time: 2018-12-19 17:24:39
 */
import { define, render, WeElement } from '../../src/omi';
// import { diffLevel } from '../../src/vdom/diff';

describe('lifecycle', () => {
	let scratch;

	before( () => {
		scratch = document.createElement('div');
		(document.body || document.documentElement).appendChild(scratch);
	});

	beforeEach( () => {
		scratch.innerHTML = '';
	});

	after( () => {
		scratch.parentNode.removeChild(scratch);
		scratch = null;
	});
	
	it('should render install', () => {
		// 测试install生命周期
		class M1 extends WeElement {
			render () {
				return <div>M1</div>;
			}
			install () {
				console.log('install');
			}
		}
		define("my-render", M1)
		// let instance = new M1();
		sinon.spy(M1.prototype, 'install');
		render(<my-render />, scratch);

		expect(M1.prototype.install)
			.to.have.been.calledOnce
			.and.to.have.been.calledWithMatch()
			
		expect(scratch.innerHTML).to.equal('<div>M1</div>');
	});

	// 	测试beforeRender
	it ('should render beforeRender', () => {
		class M2 extends WeElement {
			static observe = true
			data = {
				name: 'M2'
			}
			render () {
				return <div><children name={this.data.name}></children></div>
			}
		}

		class children extends WeElement {
			static defaultProps = {
				name: 'Omi',
				age: 18
			}

			beforeRender () {
				console.log('beforeRender')
				this.data.name = this.props.name
			}

			render (props) {
				return <div>{props.name} {props.age}</div>
			}
		}

		define('children', children)

		define('my-render', M2);

		sinon.spy(children.prototype, 'beforeRender');
		render(<my-render />, scratch);

		expect(children.prototype.beforeRender)
			.to.have.been.calledOnce
			.and.to.have.been.calledWithMatch()
			
		expect(scratch.innerHTML).to.equal('<div><div>M2 18</div></div>');
	});
	
	// 测试installed
	it('should render installed', () => {
		class M3 extends WeElement {
			data = {
				name: 'M3'
			}
			render () {
				return <div>{this.data.name}</div>
			}
			installed () {
				console.log('installed')
			}
		}

		define('my-render', M3);
		sinon.spy(M3.prototype, 'installed');
		render(<my-render />, scratch);

		expect(M3.prototype.installed)
			.to.have.been.calledOnce
			.and.to.have.been.calledWithMatch()
			
		expect(scratch.innerHTML).to.equal('<div>M3</div>');
	});

	// 测试uninstall
	it ('should render uninstall', () => {
		class M4 extends WeElement {
			static observe = true
			data = {
				name: 'M4',
				isShow: true
			}
			installed () {
				this.data.isShow = false
			}
			render () {
				return <div>{
					this.data.isShow ? 
						<children name={this.data.name}></children>
					:
						<div>dl</div>
				}</div>;
			}
		}

		let uninstallable = false
		class children extends WeElement {
			static defaultProps = {
				name: 'children'
			}
			render (props) {
				return <div>{props.name}</div>;
			}
			uninstall () {
				uninstallable = true;
				console.log('uninstall');
				this.data.name = this.props.name;
			}
		}

		define('children', children);

		define('my-render', M4);
		sinon.spy(children.prototype, 'uninstall');
		render(<my-render />, scratch);
		expect(children.prototype.uninstall).to.have.been.calledOnce;
		expect(uninstallable).to.equal(true);
		expect(scratch.innerHTML).to.equal('<div><div>dl</div></div>');
	});

	it ('should render beforeUpdate', () => {
		let beforeUpdateable = false;
		class M5 extends WeElement {
			static observe = true;
			data = {
				name: 'M5'
			}
			installed () {
				this.data.name = 'dl';
			}
			render () {
				return <div><children name={this.data.name}></children></div>;
			}
		}

		class children extends WeElement {
			static defaultProps = {
				name: 'children'
			}
			beforeUpdate () {
				console.log('beforeUpdate');
				beforeUpdateable = true;
			}

			render (props) {
				return <div>{props.name}</div>;
			}
		}

		define('my-render', M5);
		define('children', children);
		sinon.spy(children.prototype, 'beforeUpdate');
		render(<my-render />, scratch);

		expect(children.prototype.beforeUpdate).to.have.been.calledOnce;

		expect(scratch.innerHTML).to.equal('<div><div>dl</div></div>');

	});

	it ('should render afterUpdate', () => {
		let afterUpdateable = false;
		class M6 extends WeElement {
			static observe = true;

			data = {
				name: 'M6'
			}

			installed () {
				this.data.name = 'dl'
			}

			render () {
				return <div><children name={this.data.name}></children></div>;
			}
		}

		class children extends WeElement {
			static defaultProps = {
				name: 'children'
			}

			afterUpdate () {
				console.log('afterUpdate');
				afterUpdateable = true;
			}

			render (props) {
				return <div>{props.name}</div>;
			}

		}

		define('children', children);
		define('my-render', M6);

		sinon.spy(children.prototype, 'afterUpdate');

		render(<my-render />, scratch);

		expect(children.prototype.afterUpdate).to.have.been.calledOnce;

		expect(scratch.innerHTML).to.equal('<div><div>dl</div></div>')

	});

	it ('should render updated', () => {
		let updatedable = false;
		class M6 extends WeElement {
			static observe = true;

			data = {
				name: 'M6'
			}

			installed() {
				this.data.name = 'dl';
			}

			render () {
				return <div><children name={this.data.name}></children></div>;
			}
		}

		class children extends WeElement {
			static defaultProps = {
				name: 'children'
			}

			updated () {
				console.log('updated');
				updatedable = true;
			}

			render (props) {
				return <div>{props.name}</div>;
			}

		}

		define('children', children);
		define('my-render', M6);

		sinon.spy(children.prototype, 'updated');

		render(<my-render />, scratch);

		expect(children.prototype.updated).to.have.been.calledOnce;

		expect(scratch.innerHTML).to.equal('<div><div>dl</div></div>');

	});

})

