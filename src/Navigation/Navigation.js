import React from "react";

const Navigation = ({ changeRoute }) => {
	return (
		<div className="navbar">
			<button className="btn btn-sm btn-primary" onClick={() => changeRoute("recipes")}>Recipes</button>
		</div>
	);
}

export default Navigation;