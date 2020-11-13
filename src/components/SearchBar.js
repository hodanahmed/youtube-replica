import React from "react"
import youtube from '../api/youtubeAPI';

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { input: "", videoList: [], video: "", videoLink: "" }
	}

		//Passing event object because it's necessary to use preventDefault function
		// Asyn await is necessary to make GET requests to Youtube API

	onInputSubmit = async (e) => {
		e.preventDefault()
		const response = await youtube.get('/search', {
			params: {
				q: `${this.state.input}`
			}
		})
		// Add the response data to videoList state
		this.setState({ videoList: response.data.items })
		const videolist = this.state.videoList
		// Map over each video item and set state for each video and video link
		videolist.map((video) => {
			const videoLink = `youtube.com/watch?v=${video.id.videoId}`
			this.setState({ video })
			this.setState({ videoLink: videoLink })
			return console.log(this.state.video + this.state.videoLink)
		})
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
