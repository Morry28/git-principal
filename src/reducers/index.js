import isLogged from './isLogged';
import searchInput from './searchInput';
import addPref from './addPref';
import currencyOptions from './currencyOptions';
import gigOptions from './gigOptions';
import { combineReducers } from 'redux';
import addGigs from './addGigs';
import entireOffers from './entireOffers';
import tasks from './tasks';
import columns from './columns';
import addProducts from './addProducts';
const allReducers = combineReducers({
    isLogged,
    searchInput,
    addPref,
    currencyOptions,
    gigOptions,
    addGigs,
    entireOffers,
    tasks,
    columns,
    addProducts
})

export default allReducers;