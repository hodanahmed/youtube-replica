import React from "react"
import youtube from '../api/youtubeAPI';

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = { input: "" }
	}
	onInputSubmit = (input) => {
		youtube.get('/search', {
			params: {
				q: `${ this.state.input }`
	   }})
	}
    onFormSubmit = (event) => {
        event.preventDefault()

    }

	render() {

		return (
			<div className="ui segment">
				<div className="ui form">
					<div className="field">
						<form onSubmit={this.onInputSubmit}>
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
