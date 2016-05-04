var React = require('react');

module.exports = React.createClass({

  render: function () {
    var profile = this.props.profile;
    return (
      <div className='detail-description'>
        <div className='description-heading'>My self summary
          <div className='description-item'>{profile.description}</div>
        </div>
        <br/>
        <div className='description-heading'>Preferences
          <div className='description-item'>Search Status icon: {profile.search_status}</div>
          <div className='description-item'>Smoker icon: {profile.smoker ? "Yes"  : "No"}</div>
          <div className='description-item'>Diet icon: {profile.diet}</div>
          <div className='description-item'>Pet icon: {profile.pet}</div>
        </div>
        <div className='description-heading'>Budget
          <div className='description-item'>Budget icon: {profile.budget}</div>
        </div>
      </div>
    );
  }
});
