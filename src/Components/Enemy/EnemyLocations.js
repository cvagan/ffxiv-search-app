import React from "react";

const EnemyLocations = ({ locations }) => {
	return (
		<div>
			{
				locations.map((location, i) => {
					return <p key={i}>{location.region_name} {location.tooltip.replace(/.*(\(.*\))/g, "$1")}</p>
				})
			}
		</div>
	);
}

export default EnemyLocations;