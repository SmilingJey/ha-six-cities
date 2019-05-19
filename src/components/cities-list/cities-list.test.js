import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list.jsx';

const mockCities = [
  {
    name: `City1`
  },
  {
    name: `City2`
  },
  {
    name: `City3`
  },
  {
    name: `City4`
  },
  {
    name: `City5`
  },
  {
    name: `City6`
  },
];

it(`CitiesList snapshot`, () => {
  const tree = renderer.create(<CitiesList
    cities={mockCities}
    activeCity={mockCities[0]}
    onCityClick={jest.fn()}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
