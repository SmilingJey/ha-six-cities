import {ActionCreator as ActiveCityActionCreator} from '../active-city/active-city';

const initialState = {
  offers: [],
  cities: [],
  isLoaded: false,
  loadError: null,
};

const ActionType = {
  SET_OFFERS: `SET_OFFERS`,
  SET_CITIES: `SET_CITIES`,
  OFFERS_LOADED: `OFFERS_LOADED`,
  LOAD_OFFERS_ERROR: `LOAD_OFFERS_ERROR`,
};

const ActionCreator = {
  setOffers: (offers) => {
    return {
      type: ActionType.SET_OFFERS,
      payload: offers,
    };
  },

  setCities: (cities) => {
    return {
      type: ActionType.SET_CITIES,
      payload: cities,
    };
  },

  setIsLoaded: (isLoaded) => {
    return {
      type: ActionType.OFFERS_LOADED,
      payload: isLoaded,
    };
  },

  loadOffersError: (error) => {
    return {
      type: `LOAD_OFFERS_ERROR`,
      payload: error,
    };
  }
};

const parseOffer = (offer) => {
  return {
    city: offer.city,
    previewImage: offer.preview_image,
    images: offer.images,
    title: offer.title,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    rating: offer.rating,
    type: offer.type,
    bedrooms: offer.bedrooms,
    maxAdults: offer.max_adults,
    price: offer.price,
    goods: offer.goods,
    host: {
      id: offer.host.id,
      name: offer.host.name,
      isPro: offer.host.is_pro,
      avatarUrl: offer.host.avatar_url,
    },
    description: offer.description,
    location: offer.location,
    id: offer.id,
  };
};

const parseOffers = (data) => {
  return data.map((it) => parseOffer(it));
};

const getCitiesFromOffers = (offers) => {
  const cities = [];
  const map = new Map();
  for (const offer of offers) {
    if (!map.has(offer.city.name)) {
      map.set(offer.city.name, true);
      cities.push(offer.city);
    }
  }
  return cities.slice(0, 6);
};

const loadOffers = (dispatch, _getState, api) => {
  return api.get(`/hotels`)
    .then((response) => {
      const offers = parseOffers(response.data);
      const cities = getCitiesFromOffers(offers);
      const activeCity = cities[0];
      dispatch(ActionCreator.setCities(cities));
      dispatch(ActiveCityActionCreator.setActiveCity(activeCity));
      dispatch(ActionCreator.setOffers(offers));
      dispatch(ActionCreator.setIsLoaded(true));
    })
    .catch((error) => {
      dispatch(ActionCreator.loadOffersError(error.response));
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });

    case ActionType.SET_CITIES:
      return Object.assign({}, state, {
        cities: action.payload,
      });

    case ActionType.OFFERS_LOADED:
      return Object.assign({}, state, {
        isLoaded: action.payload,
      });

    case ActionType.LOAD_OFFERS_ERROR:
      return Object.assign({}, state, {
        loadError: action.payload,
      });
  }

  return state;
};

export {
  getCitiesFromOffers,
  parseOffers,
  ActionCreator,
  ActionType,
  loadOffers,
  reducer,
};
