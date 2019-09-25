/**
 * ************************************
 *
 * @module  trailReducer
 * @author
 * @date
 * @description reducer for hike/trail data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  trailData: [],
  selectedTrail: null,
  comments: [],
  diffKey: false,
}

const trailReducer = (state = initialState, action) => {
  let stuff;

  switch (action.type) {
    default:
      return state;
  }
};

export default trailReducer;
