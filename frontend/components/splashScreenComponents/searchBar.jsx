var React = require('react');
var hashHistory = require('react-router').hashHistory;

var SearchBar = React.createClass({

  getInitialState: function () {
    return {
      location: '',
      placeholder: 'Where to?'
    };
  },

  componentDidMount: function() {
    var input = document.getElementById('searchTextField');
    window.autocomplete = new google.maps.places.Autocomplete(input, {types: ['(cities)']});

    var that = this;
    document.getElementById('searchTextField').addEventListener(
      'keypress', function(e) {
        if (e.charCode === 13) {
          that.handleSearch();
      }
    });
    google.maps.event.addListener(
      window.autocomplete,
      'place_changed',
      function () {
        var autoLoc = window.autocomplete.getPlace().name;
        hashHistory.push({ pathname: 'search/' + autoLoc.replace(/\W+/g, "-") })
    });
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
      var loc = this.state.location
      var autoLoc = window.autocomplete.getPlace()
      if (autoLoc) {
        loc = autoLoc.name
      }
      hashHistory.push({pathname: 'search/' + loc.replace(/\W+/g, "-")})
    }
  },

  render: function () {
    var location = this.state.location

    return (
      <form className='search-form' onSubmit={this.handleSearch}>
        <input id='searchTextField' className='search-input' type='text'
               value={location} placeholder={this.state.placeholder}
               onInput={this.locationChanged} />

        <button className='search-submit' type='submit'>Search</button>
      </form>
    );
  }
});

module.exports = SearchBar;
