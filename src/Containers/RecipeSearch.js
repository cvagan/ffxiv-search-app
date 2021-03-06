import React from "react";
import Searchbox from "../Components/Searchbox/Searchbox";
import Itemview from "../Components/Itemview/Itemview";
import Recipe from "../Components/Recipe/Recipe";

class RecipeSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			data: [],
			input: "",
			viewItem: false,
			chosenData: {}
		}

		this.changeInput = this.props.changeInput.bind(this);
		this.itemClick = this.props.itemClick.bind(this);
	}

	goBack = () => {
		this.setState({viewItem: false, input: ""})
	}

	componentDidMount() {
		fetch("https://api.xivdb.com/recipe")
			.then(response => response.json())
			.then(data => this.setState({data: data}))
			.catch(err => console.log(err))
	}

	render() {
		const { input, data, viewItem, chosenData } = this.state;
		const filteredData = data.filter(item => {
			return item.name.toLowerCase().includes(input.toLowerCase());
		})

		return (
			<div>
			{
				!viewItem
					? (
						<div className="App">
							<Searchbox changeInput={this.changeInput} />
							<Itemview 
								items={filteredData}
								itemClick={this.itemClick}
								route="recipe"
							/>
						</div>
					)
					: (
						<Recipe recipe={chosenData} goBack={this.goBack} />
					)
			}
			</div>
		);
	}
}

export default RecipeSearch;