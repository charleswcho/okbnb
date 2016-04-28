var React = require('react');

module.exports = React.createClass({

  render: function () {
    return (
      <div className='detail-splash'>
        <img className='detail-splash-image'
             src={this.props.img} alt="Profile Image"/>
      </div>
    );
  }
});
