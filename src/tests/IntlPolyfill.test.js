import React from 'react';
import { shallow } from 'enzyme';
import IntlPolyfill from '../IntlPolyfill';

describe('<IntlPolyfill />', () => {
  it('IntlPolyfill should render and display content', () => {
    const renderedComponent = shallow(<IntlPolyfill locales={['en', 'fr']}>Hello World</IntlPolyfill>);
    expect(renderedComponent.length).toBe(1);
    expect(renderedComponent.text()).toBe('Hello World');
  });
});
