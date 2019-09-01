import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  TOGGLE_ERROR,
  CREATE_USER_SUCESS,
  CREATE_USER
 } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: false,
  loading: false
 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EMAIL_CHANGED:
        return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case LOGIN_USER_SUCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload };
      case LOGIN_USER_FAIL:
        return { ...state, error: true, password: '', loading: false };
      case LOGIN_USER:
        return { ...state, loading: true, error: false };
      case TOGGLE_ERROR:
        return { ...state, error: false };
      case CREATE_USER:
        return { ...state, loading: true, error: false };
      default:
        return state;
    }
};
