import {USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./auth.actionType";


// export const authLoginAction = (payload) => ({
// 	type: USER_LOGIN,
// 	payload
// });

export const loginRequest = () => ({
	type: USER_LOGIN_REQUEST,
})

export const loginSuccess = (payload) => {
	return {
		type: USER_LOGIN_SUCCESS,
		payload
	};
};

export const loginError = (error) => {
	return {
		type: USER_LOGIN_ERROR,
		payload: error,
	};
};

export const authLogoutAction = () => {
	return {
		type: USER_LOGOUT,
	};
};
