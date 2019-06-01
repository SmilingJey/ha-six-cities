import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MainPage} from './main-page.jsx';
import mockPlaces from '../../mocks/mock-offers.js';
import mockCities from '../../mocks/mock-cities.js';

configure({adapter: new Adapter()});

it(`When user click on image invoke onActivatePlace `, () => {
  const linkPrevention = jest.fn();
  const onActivatePlace = jest.fn();
  const mainPage = mount(<MainPage
    places={mockPlaces}
    cities={mockCities}
    activeCity={mockCities[0]}
    onCityClick={jest.fn()}
    activePlace={null}
    onActivatePlace={onActivatePlace}
  />);

  const cardImage = mainPage.find(`.place-card__image-wrapper a`).at(0);
  cardImage.simulate(`click`, {preventDefault: linkPrevention});
  expect(onActivatePlace).toHaveBeenCalledTimes(1);
  expect(onActivatePlace).toHaveBeenCalledWith(mockPlaces[0]);
});

it(`When user click on city invoke onCityClick and onActivatePlace with null`, () => {
  const linkPrevention = jest.fn();
  const onCityClick = jest.fn();
  const onActivatePlace = jest.fn();
  const mainPage = mount(<MainPage
    places={mockPlaces}
    cities={mockCities}
    activeCity={mockCities[0]}
    onCityClick={onCityClick}
    activePlace={null}
    onActivatePlace={onActivatePlace}
  />);

  const cityLink = mainPage.find(`.locations__item a`).at(0);
  cityLink.simulate(`click`, {preventDefault: linkPrevention});
  expect(onCityClick).toHaveBeenCalledTimes(1);
  expect(onActivatePlace).toHaveBeenCalledTimes(1);
  expect(onActivatePlace).toHaveBeenCalledWith(null);
});
