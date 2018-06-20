import React from "react";

const LocationList = ({ locations }) => {
	return (
		<div className="mb-4">
			{
				Object.values(locations).map((location, i) => {
					return (
						<div key={i} className="media mt-2">
							<div className="media-body">
								<h5 className="mt-0">{location.name}</h5>
							</div>
						</div>
					);
				})
			}
		</div>
	);
}

export default LocationList;