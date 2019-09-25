/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes'

export const setNewUsername = username => ({
  type: types.SET_NEW_USERNAME,
  payload: username,
});

export const setNewPassword = password => ({
  type: types.SET_NEW_PASSWORD,
  payload: password,
});

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  payload: user,
});

export const setNewComment = comment => ({
  type: types.SET_NEW_COMMENT,
  payload: comment,
});

export const submitComment = trailId => ({
  type: types.SUBMIT_COMMENT,
  payload: trailId,
});

export const attemptLogin = () => ({
  type: types.ATTEMPT_LOGIN,
  payload: null,
});

export const attemptSignup = () => ({
  type: types.ATTEMPT_SIGNUP,
  payload: null,
});
