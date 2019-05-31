import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list';
import mockPlaces from '../../mocks/mock-offers.js';
import mockCities from '../../mocks/mock-cities.js';

const mockSortings = [
  {
    name: `Popular`,
    sortFunction: null,
  },
  {
    name: `Price: low to high`,
    sortFunction: (place1, place2) => place1.price - place2.price,
  },
  {
    name: `Price: high to low`,
    sortFunction: (place1, place2) => place2.price - place1.price,
  },
  {
    name: `Top rated first`,
    sortFunction: (place1, place2) => place2.rating - place1.rating,
  },
];

it(`PlacesList snapshot`, () => {
  const tree = renderer.create(<PlacesList
    places={mockPlaces}
    city={mockCities[0]}
    activePlace={null}
    onActivatePlace={jest.fn()}
    isSortOpen={false}
    onOpenSortClick={jest.fn()}
    activeSorting={mockSortings[0]}
    sortings={mockSortings}
    onSortClick={jest.fn()}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
