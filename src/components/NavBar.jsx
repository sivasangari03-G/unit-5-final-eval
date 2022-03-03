import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { authLogoutAction } from '../redux/AuthRedux/auth.action';

export const NavBar = () => {
    const dispatch = useDispatch();
	const isUserLoggedIn = useSelector(
		(state) => state.auth.auth.isUserLoggedIn
	);
  return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/userpage">userpage</Link>
			{isUserLoggedIn && (
				<button
					onClick={() => {
						dispatch(authLogoutAction());
					}}
				>
					LOGOUT
				</button>
			)}
		</div>
  );
}
