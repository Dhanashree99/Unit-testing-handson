import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const basicDetails={
  name:'home-loan',
  amount:'10000',
  period:'5',
 
};

const el=await fixture(html`<basic-details .basicdata=${basicDetails}></basic-details>`);

describe('Basic details', () => {
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
