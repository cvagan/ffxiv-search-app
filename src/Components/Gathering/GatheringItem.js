import React from "react";
import LocationList from "../LocationList/LocationList";

const GatheringItem = ({ item, goBack }) => {
	return (
		<div className="container">
			{
				item.name 
					? (
						<div className="itembox">
							<div className="media mt-3 subview">
								<div className="media-body">
									<h5 className="mt-0 mb-1">{item.name} ({item.type_name})</h5>
									{
										item.item.help ? item.item.help : "(No description)"
									}
								</div>
								<img className="m1-3" src={item.icon} alt="Item icon" />
							</div>
							<div className="subview">
								<h5>Locations:</h5>
								<LocationList locations={item.nodes} />
							</div>
							<button className="btn btn-primary btn-sm" onClick={goBack}>Go back</button>
						</div>
					)
					: (
						<div className="itembox">
							<h2>Loading...</h2>
						</div>
					)
			}
		</div>
	);
}

export default GatheringItem;