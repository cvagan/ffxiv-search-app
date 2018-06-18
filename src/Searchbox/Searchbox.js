import React from "react";

const Searchbox = ({ changeInput }) => {
	return (
		<div>
			<input type="text" onChange={changeInput} />
		</div>
	);
}

export default Searchbox;