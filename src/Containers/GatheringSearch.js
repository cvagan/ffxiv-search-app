import React from "react";
import Searchbox from "../Components/Searchbox/Searchbox";
import Itemview from "../Components/Itemview/Itemview";
import GatheringItem from "../Components/Gathering/GatheringItem";

const lib = {
	0: "(Mining)",
	1: "(Quarrying)",
	2: "(Logging)",
	3: "(Harvesting)"
}

class GatheringSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			data: [],
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
		fetch("https://api.xivdb.com/gathering?columns=id,name,gathering_type")
			.then(response => response.json())
			.then(data => data.map(obj => {
				return Object.assign(obj, {gathering_type: lib[obj.gathering_type]})
			}))
			.then(data => this.setState({data: data}))
			.catch(err => console.log(err));
	}

	render() {
		const { viewItem, data, input, chosenData } = this.state;
		const filteredData = data.filter(item => {
			return item.name.toLowerCase().includes(input.toLowerCase());
		});
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
									route="gathering"
								/>
							</div>
						)

						: (
							<GatheringItem item={chosenData} goBack={this.goBack} />
						)
				}
			</div>
		);
	}
}

export default GatheringSearch;