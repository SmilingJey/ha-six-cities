import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';

const App = (props) => {
  const {places} = props;
  return (
    <MainPage places={places}/>
  );
};

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  })).isRequired
};

export default App;
