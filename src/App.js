import React, { Component } from 'react';
import Searchbox from "./Searchbox/Searchbox";
import Itemview from "./Itemview/Itemview";
import Recipe from "./Recipe/Recipe"
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			data: [],
			route: "search",
			choice: "",
			hoverdata: {}
		}
	}

	componentDidMount() {
		fetch("https://api.xivdb.com/recipe")
			.then(response => response.json())
			.then(data => this.setState({data: data}))
			.catch(err => console.log(err))

		console.log("mounted")
	}

	changeInput = (event) => {
		this.setState({input: event.target.value})
	}

	itemClick = (event) => {
		if (event.target.getAttribute("data-id")) {
			this.setState({choice: event.target.getAttribute("data-id"), route: "recipe"})
		}
	}

	changeRoute = (route) => {
		switch (route) {
			case "search":
				this.setState({route: route, input: ""})
				break;

			default:
				this.setState({route: route})
				break;
		}
	}

	render() {
		const { input, data, route, choice } = this.state;
		const filteredData = data.filter(item => {
			return item.name.toLowerCase().includes(input.toLowerCase());
		})

		return (
			<div>
				
				{
					route === "search" 
						?	<div className="App">
								<Searchbox changeInput={this.changeInput} />
								<Itemview 
									items={filteredData}
									itemClick={this.itemClick}
									trackEvent={this.trackEvent}
									hoverData={this.state.hoverdata}
								/>
							</div>
						: <Recipe choice={choice} changeRoute={this.changeRoute}/>
				}
				
			</div>
		);
	}
}

export default App;
