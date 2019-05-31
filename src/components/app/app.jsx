import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import MainPage from '../main-page/main-page.jsx';
import Header from '../header/header.jsx';
import Spinner from '../spinner/spinner.jsx';
import {getIsLoaded} from "../../reducers/data/selectors";
import withActivePlace from "../../hocs/with-active-place/with-active-place";

const MainPageWrapped = withActivePlace(MainPage);

const App = (props) => {
  const {isLoaded} = props;
  return <React.Fragment>
    <Header />
    {isLoaded ? <MainPageWrapped /> : <Spinner />}
  </React.Fragment>;
};

App.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isLoaded: getIsLoaded(state),
});

export {App};
export default connect(mapStateToProps)(App);


