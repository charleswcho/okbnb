var React = require('react');
var hashHistory = require('react-router').hashHistory;

var Image = require('react').Image;

module.exports = React.createClass({

  handleClick: function (e) {
    e.preventDefault();
    hashHistory.push({pathname: 'profile/' + this.props.profile.id})
  },

  render: function () {
    var profile = this.props.profile
    return (
      <div className='index-item' onClick={this.handleClick}>
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
