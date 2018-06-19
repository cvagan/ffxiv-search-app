import React from "react";
import IngredientList from "./IngredientList/IngredientList";

class Recipe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipe: {}
		};
	}

	componentDidMount() {
		fetch(`https://api.xivdb.com/recipe/${this.props.choice}`)
			.then(response => response.json())
			.then(recipe => this.setState({recipe: recipe}))
			.catch(err => console.log(err))
	}

	render() {
		const { recipe } = this.state;
		console.log(this.state);
		return (
			<div className="container">
				{
					recipe.name 
						? (
							<div className="itembox">
								<div className="media mt-3 subview">
									<div className="media-body">
										<h5 className="mt-0 mb-1">{recipe.name} ({recipe.class_name})</h5>
										{
											recipe.item.help ? recipe.item.help : "(No description)"
										}
									</div>
									<img className="m1-3" src={recipe.icon} alt="Item icon" />
								</div>
								<div className="subview">
									<h5>Ingredients:</h5>
									<IngredientList list={recipe.tree} />
								</div>
								<button className="btn btn-primary btn-sm" onClick={() => this.props.changeRoute("search")}>Go back</button>
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
}

export default Recipe;