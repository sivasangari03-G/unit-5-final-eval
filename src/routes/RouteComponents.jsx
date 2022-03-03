import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Error } from "../components/Error";
import { Login } from "../components/Login";
import { NavBar } from "../components/NavBar";
import { User } from "../components/User";
import { UserPage } from "../components/UserPage";
export const RouteComponents = () => {
	const isUserLoggedIn = useSelector(
		(state) => state.auth.auth.isUserLoggedIn
	);
	// console.log("is", isUserLoggedIn);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	useEffect(() => {
		if (isUserLoggedIn) {
			if (pathname === "/") navigate("/userpage");
			else navigate(pathname);
		} else {
			// console.log(pathname);
			navigate("/");
		}
		// if (isUserLoggedIn) {
		// 	navigate("/userpage");
		// } else {
		// 	navigate("/");
		// }
	}, [navigate, isUserLoggedIn, pathname]);
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Login />}>
					Login
				</Route>
				<Route path="/userpage/*" element={<UserPage />}>
					userpage
				</Route>
				<Route path="/userpage/:id" element={<User />}>
					user
				</Route>
                
				<Route path="*" element={<Error />}></Route>
			</Routes>
		</div>
	);
};
