var React = require('react');

module.exports = React.createClass({

  render: function () {
    var profile = this.props.profile;
    return (
      <div className='detail-title'>
        <div className='detail-title-name'>{profile.name}</div>
        <div className='detail-title-location'>{profile.location}</div>
      </div>
    );
  }
});
