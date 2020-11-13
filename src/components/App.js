import React from "react"
import SearchBar from "./SearchBar"
import VideoList from './VideoList'
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
		// Must first create a variable to pass state data to prop.
		const videoList = this.state.videoList
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onInputSubmit} />
				<VideoList videoList={videoList}/>
			</div>
		)
	}
}
export default App
