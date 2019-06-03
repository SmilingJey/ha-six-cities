import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainPage from '../main-page/main-page.jsx';
import SignInPage from '../sign-in-page/sign-in-page.jsx';
import Header from '../header/header.jsx';
import Spinner from '../spinner/spinner.jsx';
import {getIsLoaded} from "../../reducers/data/selectors";

const App = (props) => {
  const {isLoaded} = props;

  return <React.Fragment>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact render={() => isLoaded ? <MainPage /> : <Spinner />}/>
        <Route path="/login" component={SignInPage} />
      </Switch>
    </BrowserRouter>;
    {}
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


