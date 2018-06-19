import React from "react";

const Itemcard = ({ itemId, itemName }) => {
	return (
		<div className="itemcard" data-id={itemId}>
			{itemName}
		</div>
	);
}

export default Itemcard;