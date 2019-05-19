import React from 'react';
import renderer from 'react-test-renderer';
import CityMap from './city-map.jsx';

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
  city: {
    name: `Amsterdam`,
    coordinates: [52.38333, 4.9],
  },
};

it(`CitiesMap snapshot`, () => {
  const {places, city} = mock;
  const tree = renderer.create(<CityMap places={places} city={city} />).toJSON();
  expect(tree).toMatchSnapshot();
});
