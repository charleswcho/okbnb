var React = require('react');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({

  getInitialState: function () {
    return {
      location: '',
      placeholder: 'Where to?'
    };
  },

  locationChanged: function (e) {
    e.preventDefault();
    this.setState({
      location: e.target.value
    });
  },

  handleSearch: function (e) {
    e.preventDefault();
    if (this.state.location === '') {
      this.setState({ placeholder: 'Please enter a location' });
    } else {
      var loc = this.state.location.replace(/\W+/g, "-")
      hashHistory.push({pathname: 'search/' + loc})
    }
  },

  render: function () {
    var location = this.state.location

    return (
      <form className='search-form' onSubmit={this.handleSearch}>
        <input className='search-input' type='text' value={location}
               placeholder={this.state.placeholder} onInput={this.locationChanged} />

        <button className='search-submit' type='submit'>Search</button>
      </form>
    );
  }
});
