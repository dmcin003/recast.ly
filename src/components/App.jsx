import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {videos: exampleVideoData,
      currentVideo: exampleVideoData[1]};

    this.onClickHandler = this.onClickHandler.bind(this);
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
          <Search />
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
