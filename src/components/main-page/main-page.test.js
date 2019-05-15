import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page.jsx';

const mock = {
  places: [
    {
      id: 999,
      isPremium: true,
      picture: `test-image1.jpg`,
      price: 111,
      rating: 22,
      title: `Test title 1`,
      type: `Apartment`,
      coordinates: [52.3909553943508, 4.85309666406198],
    },
    {
      id: 222,
      isPremium: false,
      picture: `test-image2.jpg`,
      price: 222,
      rating: 100,
      title: `Test title 2`,
      type: `Room`,
      coordinates: [52.3909553943508, 4.85309666406198],
    },
  ],
  cities: [{
    name: `Amsterdam`,
    coordinates: [52.38333, 4.9],
  }],
};

it(`MainPage snapshot`, () => {
  const {places, cities} = mock;
  const tree = renderer.create(<MainPage places={places} cities={cities} />).toJSON();
  expect(tree).toMatchSnapshot();
});