import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';
import mockPlaces from '../../mocks/mock-offers.js';

configure({adapter: new Adapter()});

it(`When user click on image invoked onActivate`, () => {
  const onActivate = jest.fn();
  const linkPrevention = jest.fn();
  const app = mount(<PlaceCard place={mockPlaces[0]} onActivate={onActivate}/>);
  const imageLink = app.find(`.place-card__image-wrapper a`);
  imageLink.simulate(`click`, {preventDefault: linkPrevention});
  expect(onActivate).toHaveBeenCalledTimes(1);
  expect(onActivate.mock.calls[0][0]).toBe(mockPlaces[0]);
  expect(linkPrevention).toHaveBeenCalledTimes(1);
});

it(`When user click on title invoked onTitleClick`, () => {
  const onTitleClick = jest.fn();
  const linkPrevention = jest.fn();
  const app = mount(<PlaceCard place={mockPlaces[0]} onTitleClick={onTitleClick}/>);
  const imageLink = app.find(`.place-card__name a`);
  imageLink.simulate(`click`, {preventDefault: linkPrevention});
  expect(onTitleClick).toHaveBeenCalledTimes(1);
  expect(linkPrevention).toHaveBeenCalledTimes(1);
});

