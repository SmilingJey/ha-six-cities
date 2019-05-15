import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesList from './places-list.jsx';

configure({adapter: new Adapter()});

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

it(`On place card activate set places list state`, () => {
  const {places, cities} = mock;
  const app = mount(<PlacesList places={places} cities={cities} />);
  const imageLinks = app.find(`.place-card__image-wrapper a`);
  imageLinks.at(0).simulate(`click`);
  app.update();
  expect(app.state(`activePlace`)).toEqual(places[0]);
});

