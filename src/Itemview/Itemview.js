import React from "react";
import Itemcard from "./Itemcard";

const Itemview = ({ items }) => {
	return (
		<div className="flex">
			{
				items.map((item, i) => {
					return <Itemcard
						key={i}
						itemId={item.id}
						itemName={item.name}
						lodeId={item.lodestone_id}
					/>
				})
			}
		</div>
	);
}

export default Itemview;