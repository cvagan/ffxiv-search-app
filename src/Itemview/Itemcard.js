import React from "react";

const Itemcard = ({ itemId, itemName, hoverData }) => {
	return (
		<div className="itemcard" data-id={itemId}>
			{itemName}
		</div>
	);
}

export default Itemcard;