import { combineReducers } from 'redux'
import { authReducer } from './AuthRedux/auth.reducer';


export default combineReducers({
	auth: authReducer,
});
