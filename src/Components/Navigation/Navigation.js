import React from "react";

const Navigation = ({ changeRoute }) => {
	return (
		<div className="navbar">
			<button className="btn btn-sm btn-primary" onClick={() => changeRoute("recipe")}>Recipes</button>
			<button className="btn btn-sm btn-primary" onClick={() => changeRoute("gathering")}>Gathering</button>
			<button className="btn btn-sm btn-primary" onClick={() => changeRoute("enemy")}>Enemies</button>
		</div>
	);
}

export default Navigation;