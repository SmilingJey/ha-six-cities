import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import PlacesList from '../places-list/places-list.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import {ActionCreator} from "../../reducers/reducer";

import withSortOpen from '../../hocs/with-sort-open/with-sort-open';
import withPlacesSort from '../../hocs/with-places-sort/with-places-sort';


const PlacesListWrapped = withPlacesSort(withSortOpen(PlacesList));

const MainPage = (props) => {
  const {
    places,
    cities,
    activeCity,
    activePlace,
    onCityClick,
    onActivatePlace,
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
  activePlace: PropTypes.object,
  onCityClick: PropTypes.func.isRequired,
  onActivatePlace: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCity: state.activeCity,
  places: state.places.filter(((place) => place.city === state.activeCity.name)),
  cities: state.cities,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => dispatch(ActionCreator.setActiveCity(city))
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
