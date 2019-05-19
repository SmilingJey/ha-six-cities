import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CitiesList from './cities-list.jsx';

configure({adapter: new Adapter()});

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
];

it(`When user click on city invoked onCityClick`, () => {
  const onCityClick = jest.fn();
  const linkPrevention = jest.fn();
  const app = shallow(<CitiesList
    cities={mockCities}
    activeCity={mockCities[0]}
    onCityClick={onCityClick}
  />);
  const link = app.find(`.locations__item-link`).at(0);
  link.simulate(`click`, {preventDefault: linkPrevention});
  expect(onCityClick).toHaveBeenCalledTimes(1);
  expect(linkPrevention).toHaveBeenCalledTimes(1);
});
