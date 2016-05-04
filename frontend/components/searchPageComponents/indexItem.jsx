var React = require('react');
var hashHistory = require('react-router').hashHistory;

var ServerActions = require('../../actions/serverActions');

var Image = require('react').Image;

module.exports = React.createClass({

  handleClick: function (e) {
    e.preventDefault();
    hashHistory.push({pathname: 'profile/' + this.props.profile.id})
  },

  mouseEnter: function (e) {
    e.preventDefault();
    ServerActions.updateHovered(this.props.profile.id)
  },

  mouseLeave: function (e) {
    e.preventDefault();
    ServerActions.updateHovered(this.props.profile.id)
  },

  render: function () {
    var profile = this.props.profile
    return (
      <div className='index-item' onClick={this.handleClick}
           onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <img className='profile-image'
             src={profile.profilePicURL} alt="Profile Image"/>
        <div className='index-item-info'>
          <div className='profile-name'>{profile.name}</div>
          <div>{profile.age} · {profile.location}</div>
        </div>
      </div>
    );
  }
});
