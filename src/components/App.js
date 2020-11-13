import React from "react"
import SearchBar from "./SearchBar"
import VideoItem from './VideoItem'
import youtube from '../api/youtubeAPI';
class App extends React.Component {
	state = {videoList: ""}
		// Moving logic from SearchBar to App
		// I will pass the event object in the first argument 'input'.
		// // Asyn await is necessary to make GET requests to Youtube API
		onInputSubmit = async (input) => {
			const response = await youtube.get('/search', {
				params: {
					q: input
				}
			})
			// Add the response data to videoList state
			this.setState({ videoList: response.data.items })
		}
	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onInputSubmit} />
				<VideoItem/>
			</div>
		)
	}
}
export default App
