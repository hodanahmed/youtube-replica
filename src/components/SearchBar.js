import React from "react"

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = { input: "" }
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.input)
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
