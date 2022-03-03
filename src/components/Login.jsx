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
		<div style={{ padding: "20px" }}>
			<form onSubmit={handleSubmit}>
				<input
					style={{ padding: "10px 20px", marginRight: "10px" }}
					type="email"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.currentTarget.value)}
				/>
				<input
					style={{ padding: "10px 20px" }}
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.currentTarget.value)}
				/>
				<div>
					<button
						style={{
							padding: "10px 30px",
							fontSize: "15px",
							marginTop: "30px",
						}}
						type="submit"
					>
						LOGIN
					</button>
				</div>
			</form>
		</div>
	);
};
