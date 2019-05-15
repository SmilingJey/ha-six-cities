import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import CitiesMap from "../cities-map/cities-map.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleActivatePlace = this._handleActivatePlace.bind(this);

    this.state = {
      activePlace: null,
    };
  }

  render() {
    const {places, cities} = this.props;
    return <div className="cities__places-wrapper">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
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
              onActivate={this._handleActivatePlace}
              onTitleClick={() => {}}
            />)}
          </div>
        </section>
        <div className="cities__right-section">
          <CitiesMap
            city={cities[0]}
            places={places}
          />
        </div>
      </div>
    </div>;
  }

  _handleActivatePlace(place) {
    this.setState({activePlace: place});
  }
}

PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
};

export default PlacesList;
