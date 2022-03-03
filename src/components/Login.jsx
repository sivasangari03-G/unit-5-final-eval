import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/AuthRedux/auth.api";
export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login({ email, password }));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.currentTarget.value)}
				/>
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.currentTarget.value)}
				/>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
};
