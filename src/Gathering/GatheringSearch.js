import React from "react";
import Searchbox from "../Searchbox/Searchbox";
import Itemview from "../Itemview/Itemview";

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
	}

	componentDidMount() {
		fetch("https://api.xivdb.com/gathering")
			.then(response => response.json())
			.then(data => this.setState({data: data}))
			.catch(err => console.log(err));
	}

	render() {
		const { viewItem, data, input } = this.state;
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
								<Itemview items={filteredData} />
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

export default GatheringSearch;