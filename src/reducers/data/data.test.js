import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import mockOffers from "../../mocks/mock-offers.json";

import {
  ActionType,
  loadOffers,
  getCitiesFromOffers,
  parseOffers,
  reducer
} from "./data";

import {
  ActionType as ActiveCityActionType
} from "../active-city/active-city";

describe(`Reducer works correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const parsedOffres = parseOffers(mockOffers);
    const cities = getCitiesFromOffers(parsedOffres);
    apiMock
      .onGet(`/hotels`)
      .reply(200, mockOffers);

    return loadOffers(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);

        expect(dispatch.mock.calls[0][0]).toEqual({
          type: ActionType.SET_CITIES,
          payload: cities,
        });

        expect(dispatch.mock.calls[1][0]).toEqual({
          type: ActiveCityActionType.SET_ACTIVE_CITY,
          payload: cities[0],
        });

        expect(dispatch.mock.calls[2][0]).toEqual({
          type: ActionType.SET_OFFERS,
          payload: parsedOffres,
        });

        expect(dispatch.mock.calls[3][0]).toEqual({
          type: ActionType.OFFERS_LOADED,
          payload: true,
        });
      });
  });

  it(`Data reducer without additional parameters should return initial state`, function () {
    expect(reducer(undefined, {})).toEqual({
      offers: [],
      cities: [],
      isLoaded: false,
      loadError: null,
    });
  });

  it(`Reducer should save offers to store`, function () {
    const offers = [{id: `1`}, {id: `2`}];
    expect(reducer(undefined, {
      type: ActionType.SET_OFFERS,
      payload: offers,
    }).offers).toEqual(offers);
  });

  it(`Reducer should save cities to store`, function () {
    const cities = [{name: `1`}, {name: `2`}];
    expect(reducer(undefined, {
      type: ActionType.SET_CITIES,
      payload: cities,
    }).cities).toEqual(cities);
  });

  it(`Reducer should set isLoaded on OFFERS_LOADED action`, function () {
    expect(reducer(undefined, {
      type: ActionType.OFFERS_LOADED,
      payload: true,
    }).isLoaded).toEqual(true);

    expect(reducer(undefined, {
      type: ActionType.OFFERS_LOADED,
      payload: false,
    }).isLoaded).toEqual(false);
  });

  it(`Reducer should set loadError on LOAD_OFFERS_ERROR action`, function () {
    expect(reducer(undefined, {
      type: ActionType.LOAD_OFFERS_ERROR,
      payload: true,
    }).loadError).toEqual(true);

    expect(reducer(undefined, {
      type: ActionType.LOAD_OFFERS_ERROR,
      payload: false,
    }).loadError).toEqual(false);
  });
});

it(`Test get cities from offers`, function () {
  const parsedOffres = parseOffers(mockOffers);
  expect(getCitiesFromOffers(parsedOffres)).toEqual(
      [parsedOffres[0].city, parsedOffres[1].city]
  );
});
