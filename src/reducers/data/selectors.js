import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';
import {getActiveCity} from '../active-city/selectors';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getCities = (state) => {
  return state[NAME_SPACE].cities;
};

export const getIsLoaded = (state) => {
  return state[NAME_SPACE].isLoaded;
};

export const getActiveCityOffers = createSelector(
    [getOffers, getActiveCity],
    (offers, activeCity) => {
      if (!activeCity || !offers) {
        return [];
      }
      return offers.filter((offer) => offer.city.name === activeCity.name);
    }
);
