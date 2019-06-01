import React from 'react';
import renderer from 'react-test-renderer';
import {SignInPage} from './sign-in-page.jsx';

it(`SignInPage snapshot`, () => {
  const tree = renderer.create(<SignInPage
    formData={{}}
    onInputChange={jest.fn()}
    submitAuthorization={jest.fn()}
    isAuthorazated={false}
    authorizationError={`Some text`}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});


