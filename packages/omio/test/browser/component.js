/*
 * @Author: kinsonpeng 
 * @Date: 2018-12-14 11:49:33 
 * @Last Modified by: kinsonpeng
 * @Last Modified time: 2018-12-18 16:46:25
 */
import { define, render, WeElement } from '../../src/omi';
import { diffLevel } from '../../src/vdom/diff';

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
				console.log('install')
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
	})

	// 	测试beforeRender
	it ('should render beforeRender', () => {
		class M2 extends WeElement {
			static observe = true
			data = {
				name: 'benben'
			}
			installed() {
				this.data.name = 'dachu'
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

			install () {
				console.log(this.props.name)
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
			
		expect(scratch.innerHTML).to.equal('<div><div>dachu 18</div></div>');
	})
	
	// 测试installed
	it('should render installed', () => {
		class M3 extends WeElement {
			data = {
				name: 'benben'
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
			
		expect(scratch.innerHTML).to.equal('<div>benben</div>');
	})

	// // 测试uninstall
	// it ('should render uninstall', () => {
	// 	class M4 extends WeElement {
	// 		data = {
	// 			name: 'dachu'
	// 		}
	// 		render () {
	// 			return <div>{this.data.name}</div>
	// 		}
	// 		uninstall () {
	// 			console.log('uninstall')
	// 		}
	// 	}
	// 	define('my-render', M4);
	// 	sinon.spy(M4.prototype, 'uninstall');
	// 	render(<my-render />, scratch);

	// 	expect(M4.prototype.uninstall)
	// 		.to.have.been.calledOnce
	// 		.and.to.have.been.calledWithMatch()

	// 	exxpect(scratch.innerHTML).to.equal('<div>dachu</div>')
	// })

})

