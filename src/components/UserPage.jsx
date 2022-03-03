import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Post } from "./Post";

export const UserPage = () => {
    const [data, setData] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:8000/users`, {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				setData(json);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<h1>Users Details</h1>
			{data.map((elem) => {
				return (
					<div>
                        <Link to={`./${elem.id}`}>{elem.username }</Link>
					</div>
				);
            })}
            
            <Post />
		</div>
	);
};
