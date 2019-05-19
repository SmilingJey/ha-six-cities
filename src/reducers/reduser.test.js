import {ActionCreator, reducer} from "./reducer";
import cities from '../mocks/cities.js';
import places from '../mocks/offers.js';

describe(`Action creators work correctly`, () => {
  it(`Action creator for set active city`, () => {
    expect(ActionCreator.setActiveCity({
      name: `city 1`,
      coordinates: [48.862824, 2.341914],
    })).toEqual({
      type: `SET_ACTIVE_CITY`,
      payload: {
        name: `city 1`,
        coordinates: [48.862824, 2.341914],
      },
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      cities,
      places,
      activeCity: cities[0],
    });
  });

  it(`Reducer should set active city`, () => {
    const city = {
      name: `city 1`,
      coordinates: [48.862824, 2.341914],
    };

    expect(reducer(null, {
      type: `SET_ACTIVE_CITY`,
      payload: city,
    }).activeCity).toEqual(city);
  });
});
