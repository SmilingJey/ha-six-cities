import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';

const App = (props) => {
  const {places, cities} = props;
  return (
    <MainPage
      places={places}
      cities={cities}
    />
  );
};

App.propTypes = {
  places: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
};

export default App;
