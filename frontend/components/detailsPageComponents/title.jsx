var React = require('react');

var emptyProfile = 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462480743/empty-profile_whfqjj.gif';
module.exports = React.createClass({
  render: function () {
    var profile = this.props.profile;
    var profilePicURL = emptyProfile;
    if (profile.profilePicURL) {
      profilePicURL = profile.profilePicURL;
    }

    var offerText = 'Send Booking Offer';
    if (this.props.offered) {
      offerText = 'Sent Booking Offer';
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
                onClick={this.props.handleContact}>
                { offerText }
        </button>
      </div>
    );
  }
});
