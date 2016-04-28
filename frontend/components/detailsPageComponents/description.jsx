var React = require('react');

module.exports = React.createClass({

  render: function () {
    var profile = this.props.profile;
    return (
      <div className='detail-description'>
        <div className='description-heading'>About
          <div className='description-item'>{profile.description}</div>
        </div>
        <br/>
        <div className='description-heading'>Preferences
          <div className='description-item'>{profile.diet}</div>
          <div className='description-item'>{profile.smoker}</div>
          <div className='description-item'>{profile.pet}</div>
          <div className='description-item'>{profile.budget}</div>
        </div>
      </div>
    );
  }
});
