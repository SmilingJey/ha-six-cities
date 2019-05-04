import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`App correctly renders`, () => {
  const tree = renderer.create(<App
    places={[
      {
        title: `Some title for place`
      },
      {
        title: `Some title for place`
      }
    ]}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
