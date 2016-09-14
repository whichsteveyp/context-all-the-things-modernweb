import Chai from 'chai';
import getElementWithContext from 'react-test-context-provider'
import LocalizedButton from './LocalizedButton';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Sinon from 'sinon';
import SinonChai from 'sinon-chai';

const { expect } = Chai;
Chai.use(SinonChai);

it('should attempt to localize its message and values', () => {
  const div = document.createElement('div');
  const context = { localize: Sinon.spy() };
  const element = getElementWithContext(context, <LocalizedButton message='welcome' values={['data']} />);
  const output = ReactDOM.renderToString(element);

  expect(context.localize).to.be.calledOnce;
  expect(context.localize).to.be.calledWithExactly('welcome', ['data']);
});
