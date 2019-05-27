import React from 'react';

import MainPage from '../main-page/main-page.jsx';
import Header from '../header/header.jsx';

import withActivePlace from '../../hocs/with-active-place/with-active-place';

const MainPageWrapped = withActivePlace(MainPage);

const App = () => {
  return <React.Fragment>
    <Header />
    <MainPageWrapped />
  </React.Fragment>;
};

export default App;


