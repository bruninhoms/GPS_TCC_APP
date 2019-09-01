import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DispositivosReducer from './DispositivosReducer';
import DispositivoFormReducer from './DispositivosFormReducer';


export default combineReducers({
  auth: AuthReducer,
  dispositivos: DispositivosReducer,
  dipositivoForm: DispositivoFormReducer
});
