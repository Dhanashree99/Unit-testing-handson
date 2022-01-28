import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

 


const el   = await fixture(html`<basic-details></basic-details>`);
describe('Basic details', () => {

   it('Accessible', async() =>{
     expect(el).to.be.accessible();
   });
  // Write test cases inside this block
  it('gets the amount', async () => {
    expect(el.basicdata.name).to.equal('home-loan');
  });
  it('gets the amount', async () => {
    expect(el.basicdata.amount).to.equal('10000');
  });

  it('gets the periodd', async () => {
    expect(el.basicdata.period).to.equal('5');
  });
  it('gets the period', async () => {
    expect(el.basicdata.period).to.be.a('string');
  });
 
});
