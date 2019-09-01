import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  TOGGLE_ERROR,
  CREATE_USER
  } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => loginUserFailed(dispatch));
  };
};

const loginUserFailed = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCESS,
    payload: user
  });
  Actions.main();
};

export const createUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_USER });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFailed(dispatch));
  };
};

export const toggleError = () => {
  return {
    type: TOGGLE_ERROR,
  };
};
