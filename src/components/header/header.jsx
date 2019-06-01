import React from 'react';
import PropTypes from 'prop-types';

import {getAuthorizationData, getAuthorizationStatus} from '../../reducers/user/selectors';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Header = (props) => {
  const {isAuthorazated, authorizationData} = props;
  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className="header__logo-link header__logo-link--active">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              {isAuthorazated ?
                <Link to="/" className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">{authorizationData.email}</span>
                </Link> :
                <Link to="/login" className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__login">Sign in</span>
                </Link>
              }
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

Header.propTypes = {
  isAuthorazated: PropTypes.bool.isRequired,
  authorizationData: PropTypes.shape({
    email: PropTypes.string
  })
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorazated: getAuthorizationStatus(state),
  authorizationData: getAuthorizationData(state),
});

export {Header};
export default connect(mapStateToProps)(Header);
