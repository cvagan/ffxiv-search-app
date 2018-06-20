import React, { Component } from 'react';
import RecipeSearch from "./Recipe/RecipeSearch";
import GatheringSearch from "./Gathering/GatheringSearch";
import Navigation from "./Navigation/Navigation";
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: "home"
		}
	}

	changeInput = function(event) {
		this.setState({input: event.target.value})
	}

	//change routes
	changeRoute = (route) => {
		if (route !== this.state.route) {
			this.setState({route: route});
		}
	}

	//function for handling conditional rendering
	routeHandler = () => {
		const { route } = this.state;
		switch (route) {
			case "recipes":
				return (
					<RecipeSearch changeInput={this.changeInput} />
				);

			case "gathering":
				return (
					<GatheringSearch changeInput={this.changeInput} />
				);

			default:
				return <h1>Home route</h1>
		}
	}

	render() {
		return (
			<div>
				<Navigation changeRoute={this.changeRoute} />
				{this.routeHandler()}
				
			</div>
		);
	}
}

export default App;
