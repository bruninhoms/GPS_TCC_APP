import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  DISPOSITIVO_BUSCAR_SUCESSO,
  DISPOSITIVO_CRIAR,
  DISPOSITIVO_ATUALIZAR,
  DISPOSITIVO_NOCHANGE,
  DISPOSITIVO_EXCLUIR,
  DISPOSITIVO_LOCALIZACAO
} from './types';

export const buscarDispositivos = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/Devices`)
      .on('value', snapshot => {
        dispatch({ type: DISPOSITIVO_BUSCAR_SUCESSO, payload: snapshot.val() });
      });
  };
};

export const excluirDispositivo = (dispositivoId) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/Devices/${dispositivoId}`)
      .remove()
      .then(() => {
        firebase.database().ref(`/users/${currentUser.uid}/Devices`)
          .on('value', snapshot => {
            dispatch({ type: DISPOSITIVO_EXCLUIR, payload: snapshot.val() });
          });
        });
  };
};

export const atualizarDispositivo = ({ prop, value }) => {
  return {
    type: DISPOSITIVO_ATUALIZAR,
    payload: { prop, value }
  };
};

export const dispositivoSemMudanca = () => {
  return (dispatch) => {
    dispatch({ type: DISPOSITIVO_NOCHANGE });
  };
};

export const criarDispositivo =
({ Nome, DeviceID, Date, Latitude = 'ERROR', Longitude = 'ERROR' }) => {
  const { currentUser } = firebase.auth();

return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/Devices`)
    .push({ Nome, DeviceID, Date, Latitude, Longitude })
    .then(() => {
      dispatch({ type: DISPOSITIVO_CRIAR });
      Actions.pop();
    });
  };
};

export const localizarDispositivo = (dispositivoId) => {
  const { currentUser } = firebase.auth();

return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/Devices/${dispositivoId}`)
    .on('value', snapshot => {
      dispatch({ type: DISPOSITIVO_LOCALIZACAO, payload: snapshot.val() });
    });
  };
};
