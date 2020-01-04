import { combineReducers } from "redux";
import { ShowNotiReducers } from './sidebarReducers';
import { IntlReducer as Intl } from 'react-redux-multilingual';

const reducers = combineReducers({
    ShowNotiReducers,
    Intl,
});
export default reducers;