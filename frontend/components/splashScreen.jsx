var React = require('react');

var SearchBar = require('./splashScreenComponents/searchBar');
var Cities = require('./splashScreenComponents/cities');

module.exports = React.createClass({
  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className='splash-page'>
        <video src="http://res.cloudinary.com/ddodpmqri/video/upload/v1462158847/splash-video.mp4" width="1280" height="720" controls loop>
        </video>
        <SearchBar/>
        <Cities/>
      </div>
    );
  }
});
