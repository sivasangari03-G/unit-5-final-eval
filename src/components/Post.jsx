import React, { useEffect, useState } from "react";

export const Post = () => {
	const [value, setValue] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:8000/posts`, {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				// console.log(json);
				setValue(json);
			})
			.catch((err) => {
				setValue("err", err);
			});
	}, []);

	// const handleAscending = () => {
	// 	const asc = value.filter((a, b) => {
	// 		return a - b;
	// 	});
	// 	console.log(asc);
	// 	setValue(asc);
	// };
	// const handleDescending = () => {
	// 	const des = value.filter((a, b) => {
	// 		return b - a;
	// 	});
	// 	console.log(des);
	// 	setValue(des);
	// };
	return (
		<div>
			<h1>post</h1>
			{/* <button onClick={handleAscending}>sort Ascending</button> */}
			{/* <button onClick={handleDescending}>sort Descending</button> */}

			{value.map((elem) => {
				return (
					<div>
						<div>{elem.post_title}</div>
					</div>
				);
			})}
		</div>
	);
};
