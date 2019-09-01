import {
  DISPOSITIVO_BUSCAR_SUCESSO,
  DISPOSITIVO_EXCLUIR
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPOSITIVO_BUSCAR_SUCESSO:
      return action.payload;
    case DISPOSITIVO_EXCLUIR:
      return action.payload;
    default:
      return state;
  }
};
