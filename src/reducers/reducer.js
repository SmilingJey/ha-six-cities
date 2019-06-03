import {combineReducers} from "redux";
import {reducer as activeCity} from "./active-city/active-city";
import {reducer as data} from "./data/data";
import {reducer as user} from "./user/user";

import NameSpace from "./name-spaces";

export default combineReducers({
  [NameSpace.ACTIVE_CITY]: activeCity,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
