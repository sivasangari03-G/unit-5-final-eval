import axios from "axios";
import { loginError, loginRequest, loginSuccess } from "./auth.action";

export const login = (params) => (dispatch) => {
	dispatch(loginRequest());

	axios
		.post("https://reqres.in/api/login", params)
		.then((json) => {
			// console.log(json.data);
			// dispatch(authLoginAction(json.data));
			dispatch(loginSuccess(json.data));
		})
		.catch((err) => {
			dispatch(loginError(err));

			console.log(err);
		});
};
