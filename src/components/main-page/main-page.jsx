import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import PlacesList from '../places-list/places-list.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import {ActionCreator as ActiveCityActionCreator} from '../../reducers/active-city/active-city';

import withSortOpen from '../../hocs/with-sort-open/with-sort-open';
import withPlacesSort from '../../hocs/with-places-sort/with-places-sort';
import withActivePlace from '../../hocs/with-active-place/with-active-place';

import {getActiveCityOffers, getCities} from '../../reducers/data/selectors';
import {getActiveCity} from '../../reducers/active-city/selectors';

const PlacesListWrapped = withPlacesSort(withSortOpen(PlacesList));

const MainPage = (props) => {
  const {
    places,
    cities,
    activeCity,
    onCityClick,
    activePlace,
    onActivatePlace
  } = props;

  return <React.Fragment>
    <main className={`page__main page__main--index
    ${!places.length ? `page__main--index-empty` : ``}`}>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList
        cities={cities}
        activeCity={activeCity}
        onCityClick={(city) => {
          onActivatePlace(null);
          onCityClick(city);
        }}
      />
      <PlacesListWrapped
        places={places}
        city={activeCity}
        key={activeCity.name}
        activePlace={activePlace}
        onActivatePlace={onActivatePlace}
      />
    </main>
  </React.Fragment>;
};

MainPage.propTypes = {
  places: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  activeCity: PropTypes.object.isRequired,
  onCityClick: PropTypes.func.isRequired,
  activePlace: PropTypes.object,
  onActivatePlace: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCity: getActiveCity(state),
  places: getActiveCityOffers(state),
  cities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => dispatch(ActiveCityActionCreator.setActiveCity(city))
});

export {MainPage};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withActivePlace
)(MainPage);

