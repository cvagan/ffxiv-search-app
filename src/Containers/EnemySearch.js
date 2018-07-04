import React from "react";
import Searchbox from "../Components/Searchbox/Searchbox";
import Itemview from "../Components/Itemview/Itemview";
import Enemy from "../Components/Enemy/Enemy";

class EnemySearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			input: "",
			viewItem: false,
			chosenData: {}
		}

		this.changeInput = this.props.changeInput.bind(this);
		this.itemClick = this.props.itemClick.bind(this);
	}

	goBack = () => {
		this.setState({viewItem: false, input: ""});
	}

	componentDidMount() {
		fetch("https://api.xivdb.com/enemy?columns=id,name")
			.then(response => response.json())
			.then(data => this.setState({data: data}))
			.catch(err => console.log(err))
	}

	render() {
		const { viewItem, data, chosenData, input } = this.state;
		const filteredData = data.filter(enemy => {
			return enemy.name.toLowerCase().includes(input.toLowerCase())
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
								route="enemy"
							/>
						</div>
					)
					: (
						<Enemy goBack={this.goBack} enemy={chosenData} />
					)
			}
				
			</div>
		);
	}
}

export default EnemySearch;