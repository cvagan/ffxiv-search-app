import React from "react";

const IngredientList = ({ list }) => {
	return (
		<div className="mb-4">
			{
				list.map(item => {
					return (
						<div className="media mt-2">
							<img className="mr-3 ingredient-img p3" src={item.icon} alt="Ingredient icon" />
							<div className="media-body">
								<h5 className="mt-0">{item.name} x{item.quantity}</h5>
								{item.help}
							</div>
						</div>
					)
				})
			}
		</div>
	);
}

export default IngredientList;