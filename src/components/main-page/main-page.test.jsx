import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page.jsx';

it(`MainPage correctly renders`, () => {
  const tree = renderer.create(<MainPage
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
