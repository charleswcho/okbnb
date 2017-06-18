import React from 'react';
import { hashHistory } from 'react-router';


export default class SearchBar extends React.Component {
  state = {
    location: '',
    placeholder: 'Where to?'
  }

  componentDidMount() {
    const input = document.getElementById('searchTextField');
    window.autocomplete = new google.maps.places.Autocomplete(input, {types: ['(cities)']});

    document.getElementById('searchTextField').addEventListener(
      'keypress', (e) => {
        if (e.charCode === 13) {
          this.handleSearch();
        }
    });

    google.maps.event.addListener(
      window.autocomplete,
      'place_changed',
      () => {
        const autoLoc = window.autocomplete.getPlace().name;
        hashHistory.push({ pathname: 'search/' + autoLoc.replace(/\W+/g, "-") })
    });
  }

  locationChanged = (e) => {
    e.preventDefault();
    this.setState({ location: e.target.value });
  }

  handleSearch = (e) => {
    e.preventDefault();
    if (this.state.location === '') {
      this.setState({ placeholder: 'Please enter a location' });
    } else {
      const autoLoc = window.autocomplete.getPlace()
      let loc = this.state.location
      if (autoLoc) {
        loc = autoLoc.name
      }
      hashHistory.push({pathname: 'search/' + loc.replace(/\W+/g, "-")})
    }
  }

  render() {
    const location = this.state.location

    return (
      <form className='search-form' onSubmit={this.handleSearch}>
        <input id='searchTextField' className='search-input' type='text'
               value={location} placeholder={this.state.placeholder}
               onInput={this.locationChanged} />

        <button className='search-submit' type='submit'>Search</button>
      </form>
    )
  }
}
