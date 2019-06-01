import React from 'react';
import renderer from 'react-test-renderer';
import CityMap from './city-map.jsx';
import mockPlaces from '../../mocks/mock-offers.js';
import mockCities from '../../mocks/mock-cities.js';

it(`CitiesMap snapshot`, () => {
  const tree = renderer.create(<CityMap places={mockPlaces} city={mockCities[0]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
