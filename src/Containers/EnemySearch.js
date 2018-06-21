import React from "react";
import Searchbox from "../Components/Searchbox/Searchbox";
import Itemview from "../Components/Itemview/Itemview";

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

	componentDidMount() {
		fetch("https://api.xivdb.com/enemy?columns=id,name")
			.then(response => response.json())
			.then(data => this.setState({data: data}))
			.catch(err => console.log(err))
	}

	render() {
		const { viewItem, data } = this.state;
		return (
			<div>
			{
				!viewItem
					? (
						<div className="App">
							<Searchbox changeInput={this.changeInput} />
							<Itemview
								items={data}
								itemClick={this.itemClick}
								route="enemy"
							/>
						</div>
					)
					: (
						null
					)
			}
				
			</div>
		);
	}
}

export default EnemySearch;