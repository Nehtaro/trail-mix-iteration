/**
 * ************************************
 *
 * @module  combinedReducers
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import trailReducer from './trailReducer';
import formReducer from './formReducer';


// combine reducers
const combinedReducers = combineReducers({
  form: formReducer,
  trail: trailReducer,
});

// make the combined reducers available for import
export default combinedReducers;
