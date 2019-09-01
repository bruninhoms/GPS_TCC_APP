import {
  DISPOSITIVO_ATUALIZAR,
  DISPOSITIVO_SALVO_SUCESSO,
  DISPOSITIVO_CRIAR,
  DISPOSITIVO_NOCHANGE,
  DISPOSITIVO_LOCALIZACAO
} from '../actions/types';

const INITIAL_STATE = {
  Nome: '',
  DeviceID: '',
  Data: '',
  Longitude: 'ERROR',
  Latitude: 'ERROR'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPOSITIVO_ATUALIZAR: //action.payload === {prop: 'Name', value: 'Put a name here'}
      return { ...state, [action.payload.prop]: action.payload.value }; //ES6
    case DISPOSITIVO_CRIAR:
      return INITIAL_STATE;
    case DISPOSITIVO_LOCALIZACAO:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DISPOSITIVO_SALVO_SUCESSO:
      return INITIAL_STATE;
    case DISPOSITIVO_NOCHANGE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
