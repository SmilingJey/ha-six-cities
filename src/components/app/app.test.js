import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import {createStore} from 'redux';
import reducer from '../../reducers/reducer';
import {Provider} from 'react-redux';

it(`App snapshot`, () => {
  const store = createStore(reducer);
  const tree = renderer.create(<Provider store={store}>
    <App isLoaded={false}/>
  </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
