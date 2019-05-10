import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesList from './places-list.jsx';

configure({adapter: new Adapter()});

const mockPlaces = [
  {
    id: 1,
    isPremium: true,
    picture: `test-image1.jpg`,
    price: 111,
    rating: 22,
    title: `Test title 1`,
    type: `Apartment`,
  },
  {
    id: 2,
    isPremium: false,
    picture: `test-image2.jpg`,
    price: 222,
    rating: 100,
    title: `Test title 2`,
    type: `Room`,
  },
];

it(`On place card activate set places list state`, () => {
  const app = mount(<PlacesList places={mockPlaces} />);
  const imageLinks = app.find(`.place-card__image-wrapper a`);
  imageLinks.at(0).simulate(`click`);
  app.update();
  expect(app.state(`activePlace`)).toEqual(mockPlaces[0]);
});

