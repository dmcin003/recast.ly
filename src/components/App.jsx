import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor props: ', props);
    this.state = {videos: exampleVideoData,
      currentVideo: exampleVideoData[1],
      searchEntry: ''};

    this.onClickHandler = this.onClickHandler.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.getYoutubeVideos = this.getYoutubeVideos.bind(this);
  }

  componentDidMount() {
    this.getYoutubeVideos('cats');

  }

  handleSearchChange(event) {
    var searchInput = event.target.value;

    this.setState({searchEntry: searchInput});

  }

  handleSearchClick(event) {
    console.log(this.state.searchEntry);
    this.getYoutubeVideos(this.state.searchEntry);
  }

  getYoutubeVideos(query) {

    this.props.searchYoutube(query, (video)=>{
      console.log(video);
      this.setState({videos: video, currentVideo: video[0]});
    });
  }

  onClickHandler(selectedVideo) {
    //we do the work to change state of current video here
    //set state of current video to new video;
    console.log('our click function is working!');
    this.setState({ currentVideo: selectedVideo });
  }



  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search change={this.handleSearchChange} click={this.handleSearchClick}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video = {
            this.state.currentVideo
          }
          />
        </div>
        <div className="col-md-5">
          <VideoList click ={this.onClickHandler} videos={this.state.videos}/>
        </div>
      </div>
    </div>);

  }


}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
