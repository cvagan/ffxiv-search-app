import React from "react";
import Itemcard from "./Itemcard";

const Itemview = ({ items, itemClick }) => {
	return (
		<div className="flex view" onClick={itemClick}>
			{
				items.map((item, i) => {
					return <Itemcard
						key={item.id}
						itemId={item.id}
						itemName={item.name}
						type={item.gathering_type}
					/>
				})
			}
		</div>
	);
}

export default Itemview;