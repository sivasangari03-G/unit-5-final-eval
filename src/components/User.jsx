import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const User = () => {
    const { id } = useParams();
    // console.log(id);
	const [value, setValue] = useState({});
	useEffect(() => {
        fetch(`http://localhost:8000/users/${id}`, {
            method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setValue(json);
        })
        .catch((err) => {
            setValue("err", err);
        });
	}, [id]);
    console.log("s", value);
  return (
		<>
			<div>
				<div>{value.username}</div>
          </div>
          
		</>
  );
}
