/**
 * ************************************
 *
 * @module  formReducer
 * @author
 * @date
 * @description reducer for login, signup, and comment forms
 *
 * ************************************
 */

import {
  SET_NEW_USERNAME,
  SET_NEW_PASSWORD,
  SET_CURRENT_USER,
  SET_NEW_COMMENT,
  SUBMIT_COMMENT,
  ATTEMPT_LOGIN,
  ATTEMPT_SIGNUP,
 } from '../constants/actionTypes';

const initialState = {
  newUsername: '',
  newPassword: '',
  currentUser: '',
  newComment: '',
}

const formReducer = (state = initialState, action) => {
  let stuff;

  switch (action.type) {
    case SET_NEW_USERNAME:
      return;
    case SET_NEW_PASSWORD:
      return;
    case SET_CURRENT_USER:
      return;
    case SET_NEW_COMMENT:
      return;
    case SUBMIT_COMMENT:
      return;
    case ATTEMPT_LOGIN:
      return;
    case ATTEMPT_SIGNUP:
      return;
    default:
      return state;
  }
};

export default formReducer;
