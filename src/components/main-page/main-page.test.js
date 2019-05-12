import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page.jsx';

const mockPlaces = [
  {
    id: 999,
    isPremium: true,
    picture: `test-image1.jpg`,
    price: 111,
    rating: 22,
    title: `Test title 1`,
    type: `Apartment`,
  },
  {
    id: 222,
    isPremium: false,
    picture: `test-image2.jpg`,
    price: 222,
    rating: 100,
    title: `Test title 2`,
    type: `Room`,
  },
];

it(`MainPage snapshot`, () => {
  const tree = renderer.create(<MainPage places={mockPlaces} />).toJSON();
  expect(tree).toMatchSnapshot();
});
