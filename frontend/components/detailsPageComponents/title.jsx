var React = require('react');

module.exports = React.createClass({

  render: function () {
    var profile = this.props.profile;
    return (
      <div className='detail-title'>
        <div className='detail-title-pic'>
          <img className='detail-profile-pic' src={profile.profilePicURL} alt='profile-pic' height='180' width='180'/>
        </div>
        <div className='detail-title-info'>
          <div className='detail-title-name'>{profile.name}</div>
          <div className='detail-title-location'>{profile.location}</div>
        </div>
      </div>
    );
  }
});
