import React, { Component } from 'react';
import RecipeSearch from "./Recipe/RecipeSearch";
import Navigation from "./Navigation/Navigation";
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: "home"
		}
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
					<RecipeSearch itemClick={this.itemClick} changeInput={this.changeInput} />
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
