import React, { Component } from 'react';
import Searchbox from "./Searchbox/Searchbox";
import Itemview from "./Itemview/Itemview";
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			data: []
		}
	}

	componentDidMount() {
		fetch("https://api.xivdb.com/gathering")
			.then(response => response.json())
			.then(data => this.setState({data: data}))
			.catch(err => console.log(err))
	}

	changeInput = (event) => {
		this.setState({input: event.target.value})
	}

	render() {
		console.log(this.state.input)
		return (
			<div className="App">
				<h1>FFXIV search</h1>
				<Searchbox changeInput={this.changeInput} />
				<Itemview items={this.state.data} />
			</div>
		);
	}
}

export default App;
