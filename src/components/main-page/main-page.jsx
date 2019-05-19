import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import PlacesList from '../places-list/places-list.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import {ActionCreator} from "../../reducers/reducer";

class MainPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlace: null,
    };

    this._handleActivatePlace = this._handleActivatePlace.bind(this);
  }

  render() {
    const {places, cities, activeCity, onCityClick} = this.props;

    return <React.Fragment>
      <main className={`page__main page__main--index
      ${!places.length ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          cities={cities}
          activeCity={activeCity}
          onCityClick={(city) => {
            this.setState({
              activePlace: null,
            });
            onCityClick(city);
          }}
        />
        <PlacesList
          places={places}
          city={activeCity}
          activePlace={this.state.activePlace}
          onActivatePlace={this._handleActivatePlace}
        />
      </main>
    </React.Fragment>;
  }

  _handleActivatePlace(place) {
    this.setState({activePlace: place});
  }
}

MainPage.propTypes = {
  places: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  activeCity: PropTypes.object.isRequired,
  onCityClick: PropTypes.func.isRequired,
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
