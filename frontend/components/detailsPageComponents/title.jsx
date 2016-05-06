var React = require('react');

module.exports = React.createClass({

  render: function () {
    var profile = this.props.profile;
    var profilePicURL = 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462480743/empty-profile_whfqjj.gif';
    if (profile.profilePicURL) {
      profilePicURL = profile.profilePicURL;
    }
    return (
      <div className='detail-title'>
        <div className='detail-title-pic'>
          <img className='detail-profile-pic' src={profilePicURL} alt='profile-pic' height='180' width='180'/>
        </div>
        <div className='detail-title-info'>
          <div className='detail-title-name'>{profile.name}</div>
          <div className='detail-title-location'>{profile.location}</div>
        </div>
        <button className='detail-contact-button'
                onClick={this.props.handleContact}>Send Booking Offer</button>
      </div>
    );
  }
});
