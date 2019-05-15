import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from "prop-types";
import ReactResizeDetector from 'react-resize-detector';

class CitiesMap extends PureComponent {
  constructor(props) {
    super(props);
    this.handlerHeightResize = this.handlerHeightResize.bind(this);
  }

  render() {
    return <section className="cities__map">
      <div id="map" style={{height: `100%`}} ref={(ref) => {
        this.container = ref;
        return this.container;
      }}>
        <ReactResizeDetector handleHeight onResize={this.handlerHeightResize} />
      </div>
    </section>;
  }

  componentDidMount() {
    const {city, places} = this.props;

    setTimeout(() => {
      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      const zoom = 12;

      this.map = leaflet.map(`map`, {
        center: city.coordinates,
        [`zoom`]: zoom,
        zoomControl: false,
        marker: true
      });
      this.map.setView(city.coordinates, zoom);

      leaflet.tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 
            contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }
      ).addTo(this.map);

      for (const place of places) {
        leaflet.marker(place.coordinates, {icon}).addTo(this.map);
      }
    }, 10);
  }

  componentWillUnmount() {
    this.map.remove();
    this.map = null;
  }

  handlerHeightResize() {
    this.map.invalidateSize();
  }
}

CitiesMap.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
      })
  ).isRequired,

  city: PropTypes.shape({
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  })
};

export default CitiesMap;
