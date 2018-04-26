import omi, { x, Component, render, instances, getInstanceId } from '../../src/index';
import { expect } from 'chai';

describe('omi', () => {
	it('should be available as a default export', () => {
		expect(omi).to.be.an('object');
		expect(omi).to.have.property('x', x);
		expect(omi).to.have.property('Component', Component);
		expect(omi).to.have.property('render', render);
		expect(omi).to.have.property('instances', instances);
		expect(omi).to.have.property('getInstanceId', getInstanceId);
	});

	it('should be available as named exports', () => {
		expect(x).to.be.a('function');
		expect(Component).to.be.a('function');
		expect(render).to.be.a('function');
		expect(instances).to.be.a('object');
		expect(getInstanceId).to.exist.and.be.an('function');
	});
});