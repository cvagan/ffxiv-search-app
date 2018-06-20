import React from "react";

const Itemcard = ({ itemId, itemName, type }) => {
	return (
		<div className="itemcard" data-id={itemId}>
			{itemName}
			<br />
			{type}
		</div>
	);
}

export default Itemcard;