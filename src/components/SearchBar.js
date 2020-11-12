import React from "react"
import youtube from '../api/youtubeAPI';

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = { input: "" }
	}
	//Passing event object because it's necessary to use preventDefault function
	// Asyn await is necessary to make GET requests to Youtube API
	onInputSubmit = async(e) => {
		e.preventDefault()
		try {
			const response = await youtube.get('/search', {
				params: {
					q: `${this.state.input}`
				}
			})
			console.log(response)
		} catch (e) {
			throw e
		} 
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
