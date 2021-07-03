import { html, fixture, expect } from '@open-wc/testing';

import '../src/index.esm.js';

describe('button testing', () => {
    it('Test Button innerText', async () => {
        const el = await fixture(html`
      <o-button>Default</o-button>
    `);
        console.log(el.innerText);
        expect(el.innerText).to.equal('Default');
    });

    it('Test Button Click', async () => {
        const el = await fixture(html`
      <o-button>Default</o-button>
    `);
        el.shadowRoot.querySelector('button').click();
    });
});
