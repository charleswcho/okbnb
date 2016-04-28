var React = require('react');

var IndexItem = require('./indexItem');

module.exports = React.createClass({
  render: function () {
    var profiles = this.props.profiles;

    var profileKeys = Object.keys(profiles);
    return (
      <div className='profiles-index'>
        {
          profileKeys.map(function(id) {
            return (<IndexItem key={id} profile={profiles[id]}/>);
          })
        }
      </div>
    );
  }
});
