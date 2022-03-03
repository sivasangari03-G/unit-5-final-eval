import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authLogoutAction } from "../redux/AuthRedux/auth.action";

export const NavBar = () => {
	const dispatch = useDispatch();
	const isUserLoggedIn = useSelector(
		(state) => state.auth.auth.isUserLoggedIn
	);
	return (
		<div>
			<div
				style={{
					backgroundColor: "#4267B2",
					padding: "30px",
					color: "white",
				}}
			>
				<Link style={{ margin: "20px", color: "white" }} to="/">
					Home
				</Link>
				<Link style={{ margin: "20px", color: "white" }} to="/userpage">
					userpage
				</Link>
					{isUserLoggedIn && (
						<button style={{padding: "10px 20px",marginLeft: "900px"}}
							onClick={() => {
								dispatch(authLogoutAction());
							}}
						>
							LOGOUT
						</button>
					)}
			
			</div>
		</div>
	);
};
