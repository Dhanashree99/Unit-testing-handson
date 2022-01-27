import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';


describe('loan-header...', () => {
  // Write test cases inside this block
  it("should be accessible", ()=>{
    expect("true").to.equal("true")
  })
});
describe('loan-header works or not', () => {
  // Write test cases inside this block
  it("workss", async()=>{
    const el=await fixture(html`<loan-header></loan-header>`);
  })
});
it('can semantically compare lightDom trees', async () => {
  const el = await fixture(`<div><!-- comment --><h1>${'Hey'}  </h1>  </div>`);
  expect(el).lightDom.to.equal('<h1>Hey</h1>');
});
