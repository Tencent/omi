import omi, { h, Component, render, rerender, options } from '../../src/omi';
import { expect } from 'chai';

describe('omi', () => {
	it('should be available as a default export', () => {
		expect(omi).to.be.an('object');
		expect(omi).to.have.property('h', h);
		expect(omi).to.have.property('Component', Component);
		expect(omi).to.have.property('render', render);
		expect(omi).to.have.property('rerender', rerender);
		expect(omi).to.have.property('options', options);
	});

	it('should be available as named exports', () => {
		expect(h).to.be.a('function');
		expect(Component).to.be.a('function');
		expect(render).to.be.a('function');
		expect(rerender).to.be.a('function');
		expect(options).to.exist.and.be.an('object');
	});
});
