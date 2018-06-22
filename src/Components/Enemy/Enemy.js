import React from "react";
import EnemyLocations from "./EnemyLocations";

const Enemy = ({ enemy, goBack }) => {
	return (
		<div className="itembox">
			<div className="media mt-3 subview">
				<div className="media-body">
					<h4 className="mt-0 mb-1">{enemy.name}</h4>
				</div>
			</div>
			{
				enemy.map_data.stats
					? (
						<div>
							<div className="media mt-3 subview">
								<div className="media-body">
									<h4>Stats</h4>
									Level min/max: {enemy.map_data.stats.levelMin}/{enemy.map_data.stats.levelMax}<br/>
									HP min/max: {enemy.map_data.stats.hpMin}/{enemy.map_data.stats.hpMax}<br/>
									MP min/max: {enemy.map_data.stats.mpMin}/{enemy.map_data.stats.mpMax}
								</div>
							</div>
							<div className="media mt-3 subview">
								<div className="media-body">
									<h4>Locations:</h4>
									<EnemyLocations locations={enemy.map_data.maps} />
								</div>
							</div>
						</div>
					)
					: (
						<div className="media mt-3 subview">
							<div className="media-body">
								No additional data found
							</div>
						</div>
					)
			}
			
			
			<button className="btn btn-primary btn-sm" onClick={goBack}>Go back</button>
		</div>
	);
}

export default Enemy;