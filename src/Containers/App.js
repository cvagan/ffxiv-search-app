import React, { Component } from 'react';
import RecipeSearch from "./RecipeSearch";
import GatheringSearch from "./GatheringSearch";
import Navigation from "../Components/Navigation/Navigation";
import '../App.css';

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
		switch (this.state.route) {
			case "recipes":
				return (
					<RecipeSearch changeInput={this.changeInput} />
				);

			case "gathering":
				return (
					<GatheringSearch changeInput={this.changeInput} />
				);

			default:
				return (
					<div className="container">
						<div className="jumbotron">
							<h1 className="display-4">FFXIV Search App</h1>
							<p className="lead">This is a simple search app for various FFXIV resources. This app is powered by the XIVDB API.</p>
						</div>
					</div>
				);
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
