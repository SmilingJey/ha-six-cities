import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header.jsx';
import {BrowserRouter} from "react-router-dom";

it(`Header snapshot`, () => {
  const tree = renderer.create(<BrowserRouter>
    <Header isAuthorazated={false}/>
  </BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
