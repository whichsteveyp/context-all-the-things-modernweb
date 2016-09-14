import React from 'react';
import ReactDOM from 'react-dom/server';
import LocalizedButton from './LocalizedButton';
import Localization from 'react-localize';

import Chai from 'chai';
import Sinon from 'sinon';
import SinonChai from 'sinon-chai';

const { expect } = Chai;
Chai.use(SinonChai);

it('renders with the expected localized message', () => {
  const output = ReactDOM.renderToString(<Localization messages={{ welcome: 'test: %s' }}>
    <LocalizedButton message='welcome' values={['data']} />
  </Localization>);

  expect(output.indexOf('test: data')).to.not.equal(-1);
});
