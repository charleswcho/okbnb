var React = require('react');

var IndexItem = require('./indexItem');

var Index = React.createClass({
  render: function () {
    var profiles = this.props.profiles;

    var profileKeys = Object.keys(profiles);

    if (this.props.renderMap) {
      return (
        <div className='profiles-index'>
          {
            profileKeys.map(function(id) {
              return (<IndexItem key={id} profile={profiles[id]}/>);
            })
          }
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
});

module.exports = Index;
