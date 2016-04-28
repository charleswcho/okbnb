var React = require('react');

module.exports = React.createClass({
  render: function () {
    var profile = this.props.profile
    return (
      <div className='index-item'>
        <div>{profile.profilePicURL}</div>
        <div>{profile.name}</div>

        <div>{profile.age} | {profile.location}</div>
      </div>
    );
  }
});
