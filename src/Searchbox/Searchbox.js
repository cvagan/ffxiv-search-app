import React from "react";

const Searchbox = ({ changeInput }) => {
	return (
		<div className="searchbar">
			<h1>FFXIV search</h1>
			<input type="text" onChange={changeInput} />
		</div>
	);
}

export default Searchbox;