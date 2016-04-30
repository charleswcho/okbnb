var React = require('react');
var FilterActions = require('../../../actions/filterActions');

var SmokerOption = React.createClass({
  getInitialState: function () {
    return { smoker: null };
  },

  smokerChanged: function (e) {
    e.preventDefault();
    FilterActions.updateSmoker(e.target.value)

    if (this.state.smoker === true) {
      this.setState({ smoker: false });
    } else {
      this.setState({ smoker: true });
    }
  },

  render: function() {
    return (
      <div className="smoker-option">
        <div className="checkbox-container">
          <label className="checkbox-text">Smoker
            <input type="checkbox" onChange={this.smokerChanged} checked={this.state.smoker} />
          </label>
        </div>
      </div>
    );
  }
});

module.exports = SmokerOption;
