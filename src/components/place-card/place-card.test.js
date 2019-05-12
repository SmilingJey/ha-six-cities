import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const mockPlace = {
  id: 999,
  isPremium: true,
  picture: `test-image.jpg`,
  price: 111,
  rating: 22,
  title: `Test title`,
  type: `Apartment`,
};

it(`PlaceCard snapshot`, () => {
  const tree = renderer.create(<PlaceCard place={mockPlace} />).toJSON();
  expect(tree).toMatchSnapshot();
});
