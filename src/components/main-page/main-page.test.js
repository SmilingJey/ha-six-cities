import React from 'react';
import renderer from 'react-test-renderer';
import {MainPage} from './main-page.jsx';
import mockPlaces from '../../mocks/mock-offers.js';
import mockCities from '../../mocks/mock-cities.js';

it(`MainPage snapshot`, () => {
  const tree = renderer.create(<MainPage
    places={mockPlaces}
    cities={mockCities}
    activeCity={mockCities[0]}
    activePlace={null}
    onCityClick={jest.fn()}
    onActivatePlace={jest.fn()}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
