import { expect } from 'chai';
import * as omi from '../../dist/omi';

describe('build artifact', () => {

	// #1075 Check that the build artifact has the correct exports
	it('should have exported properties', () => {
		expect(omi).to.be.an('object');
		expect(omi).to.have.property('h');
		expect(omi).to.have.property('Component');
		expect(omi).to.have.property('render');
		expect(omi).to.have.property('rerender');
		expect(omi).to.have.property('options');
	});
});
