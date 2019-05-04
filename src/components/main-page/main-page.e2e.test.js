import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from './main-page.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Welcome screen button click`, () => {
  const titleClickHandler = jest.fn();
  const app = shallow(<MainPage
    places={[
      {
        title: `Some title for place`
      },
      {
        title: `Some title for place`
      }
    ]}
    onTitleClick={titleClickHandler}
  />);
  const titleLinks = app.find(`.place-card__name a`);
  titleLinks.forEach((link) => link.simulate(`click`, {preventDefault() {}}));
  expect(titleClickHandler).toHaveBeenCalledTimes(titleLinks.length);
});
