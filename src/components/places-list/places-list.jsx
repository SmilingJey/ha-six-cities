import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import CityMap from "../city-map/city-map.jsx";

const PlacesList = (props) => {
  const {places, city, activePlace, onActivatePlace} = props;

  if (!places.length) {
    return <div className="cities__places-wrapper">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property availbale at the moment in
              {city.name}</p>
          </div>
        </section>
        <div className="cities__right-section">
        </div>
      </div>
    </div>;
  }

  return <div className="cities__places-wrapper">
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{places.length} places to stay in {city.name}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
                Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {places.map((place, index) => <PlaceCard
            key={index}
            place={place}
            onActivate={onActivatePlace}
            onTitleClick={() => {}}
          />)}
        </div>
      </section>
      <div className="cities__right-section">
        <CityMap
          city={city}
          places={places}
          activePlace={activePlace}
        />
      </div>
    </div>
  </div>;
};

PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.array.isRequired,
  }).isRequired,
  activePlace: PropTypes.object,
  onActivatePlace: PropTypes.func.isRequired,
};

export default PlacesList;
