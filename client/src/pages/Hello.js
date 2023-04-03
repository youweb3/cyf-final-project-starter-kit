import React from "react";
import { useState } from "react";

export default function Hello() {
	const [name, setName] = useState("");
	const [greeting, setGreeting] = useState();
	const displayGreeting = () => {
		fetch("/api/hello?name="+name).then(res =>{
			res.text().then(setGreeting)
		})
	};
	return (
		<div>
			<input
				type="text"
				onChange={(event) => {
					setName(event.target.value);
					event.preventDefault();
				}}
				value={name}
			/>
			<button onClick={displayGreeting}>submit</button>
			<p>{greeting}</p>
		</div>
	);
}
