import cities from '../mocks/cities.js';
import places from '../mocks/offers.js';

const initialState = {
  cities,
  places,
  activeCity: cities[0],
};

const ActionCreator = {
  setActiveCity: (city) => ({
    type: `SET_ACTIVE_CITY`,
    payload: city,
  })

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_ACTIVE_CITY`: return Object.assign({}, state, {
      activeCity: Object.assign({}, action.payload),
    });
  }
  return state;
};

export {
  ActionCreator,
  reducer,
};
