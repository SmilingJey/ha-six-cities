import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import mockPlaces from '../../mocks/mock-offers.js';

it(`PlaceCard snapshot`, () => {
  const tree = renderer.create(<PlaceCard place={mockPlaces[0]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
