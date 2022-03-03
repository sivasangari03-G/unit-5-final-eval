import { getValue, setValue } from "../../utils/localStorage";
import {USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./auth.actionType";

let initState = {
	auth: {
		isUserLoggedIn: getValue("userToken") ? true : false, //false
		userToken: getValue("userToken"), // ""

		isLoading: false, 
		error: false,

	},
};

export const authReducer = (state = initState, { type, payload}) => {
	switch (type) {
		case USER_LOGIN_REQUEST: {
			// console.log(payload);
			return {
				...state,
				auth: {
					...state.auth,
					isLoading: true,
					error: false
				},
			};
		}
		case USER_LOGIN_SUCCESS: {
			setValue("userToken", payload.token);
			// console.log(payload);
			return {
				...state,
				auth: {
					...state.auth,
					isUserLoggedIn: true,
					isLoading: false,
					error: false,
					...payload,
				},
			};
		}
		case USER_LOGIN_ERROR: {
			setValue("userToken", payload.token);
			// console.log(payload);
			return {
				...state,
				auth: {
					...state.auth,
					isUserLoggedIn: false,
					isLoading: false,
					error: true,
				},
			};
		}
		// case USER_LOGIN: {
		// 	setValue("userToken", payload.token);
		// 	// console.log(payload);
		// 	return {
		// 		...state,
		// 		auth: {
		// 			...state.auth,
		// 			isUserLoggedIn: true,
		// 			...payload,
		// 		},
		// 	};
		// }
		case USER_LOGOUT: {
			setValue("userToken", "");
			return {
				...state,
				auth: {
					...state.auth,
					isUserLoggedIn: false,
					userToken: "",
				},
			};
		}
		default:
			return state;
	}
};
