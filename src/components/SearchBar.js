import React from "react"

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { input: ""}
	}

	// Created this function to deal with the onSubmit event handler 
	onFormSubmit = (event) => {
		event.preventDefault()
		// The value of props onSubmit is the onInputSubmit function in App.js
		this.props.onSubmit(this.state.input)
	}

	render() {	
		return (
			<div className="ui segment">
				<div className="ui form">
					<div className="field">
						<form onSubmit={this.onFormSubmit}>
							<label>Youtube Search</label>
							<input
								type="text"
								placeholder="Type here"	
								value={this.state.input}
								onChange={(event) => this.setState({input: event.target.value})}
							></input>
							<input type="submit"></input>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
