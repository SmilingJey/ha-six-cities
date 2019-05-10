import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

configure({adapter: new Adapter()});

const mockPlace = {
  id: 999,
  isPremium: true,
  picture: `test-image.jpg`,
  price: 111,
  rating: 22,
  title: `Test title`,
  type: `Apartment`,
};

it(`When user click on image invoked onActivate`, () => {
  const onActivate = jest.fn();
  const linkPrevention = jest.fn();
  const app = mount(<PlaceCard place={mockPlace} onActivate={onActivate}/>);
  const imageLink = app.find(`.place-card__image-wrapper a`);
  imageLink.simulate(`click`, {preventDefault: linkPrevention});
  expect(onActivate).toHaveBeenCalledTimes(1);
  expect(onActivate.mock.calls[0][0]).toBe(mockPlace);
  expect(linkPrevention).toHaveBeenCalledTimes(1);
});

it(`When user click on title invoked onTitleClick`, () => {
  const onTitleClick = jest.fn();
  const linkPrevention = jest.fn();
  const app = mount(<PlaceCard place={mockPlace} onTitleClick={onTitleClick}/>);
  const imageLink = app.find(`.place-card__name a`);
  imageLink.simulate(`click`, {preventDefault: linkPrevention});
  expect(onTitleClick).toHaveBeenCalledTimes(1);
  expect(linkPrevention).toHaveBeenCalledTimes(1);
});

