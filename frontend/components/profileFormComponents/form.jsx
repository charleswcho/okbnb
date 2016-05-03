var React = require('react');
var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem

var hashHistory = require('react-router').hashHistory;

var ClientActions = require('../../actions/clientActions');
var UserStore = require('../../stores/userStore');
var ProfileStore = require('../../stores/profileStore');

var GeoUtils = require('../../util/geoUtils');

// Components
var SearchStatus = require('../searchPageComponents/filterComponents/search_status');
var Smoker = require('../searchPageComponents/filterComponents/smoker');
var Diet = require('../searchPageComponents/filterComponents/diet');
var Pet = require('../searchPageComponents/filterComponents/pet');

var Form = React.createClass({
  getInitialState: function () {
    return {
      ageFocused: false,
      budgetFocused: false,

      user_id: UserStore.currentUser().id,
      profilePicURL: '',
      name: '',
      age: null,
      description: '',
      location: '',
      budget: null
    };
  },

  userChanged: function () {
    this.setState({ user_id: UserStore.currentUser().id });
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this.userChaged)
    ClientActions.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  openUploadWidget: function(e) {
    e.preventDefault();
    var self = this;

    cloudinary.openUploadWidget({ cloud_name: 'ddodpmqri',
                                  upload_preset: 'jeh6p6xu',
                                  theme: 'minimal'
                                },
      function(error, result) {
        self.setState({ profilePicURL: result[0].url });
      }
    );

  },

  nameChanged: function(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  },

  ageChanged: function(e) {
    e.preventDefault();
    this.setState({
      age: e.target.value
    });
  },

  descriptionChanged: function(e) {
    e.preventDefault();
    this.setState({
      description: e.target.value
    });
  },

  locationChanged: function(e) {
    e.preventDefault();
    this.setState({
      location: e.target.value
    });
  },

  budgetChanged: function(e) {
    e.preventDefault();
    this.setState({
      budget: e.target.value
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var params = {
      user_id: this.state.user_id,
      profilePicURL: this.state.profilePicURL,
      name: this.state.name,
      age: this.state.age,
      description: this.state.description,
      location: this.state.location,
      diet: this.state.diet,
      smoker: this.state.smoker,
      pet: this.state.pet,
      budget: this.state.budget
    };

    GeoUtils.parseAddress(params, ClientActions.createProfile)
  },

  ageFocus: function () {
    this.setState({
      ageFocused: true
    });
  },

  ageUnfocus: function () {
    this.setState({
      ageFocused: false
    });
  },

  budgetFocus: function () {
    this.setState({
      budgetFocused: true
    });
  },

  budgetUnfocus: function () {
    this.setState({
      budgetFocused: false
    });
  },

  render: function() {
    var profilePicURL = this.state.profilePicURL;
    var name = this.state.name;
    var age = this.state.age;
    var description = this.state.description;
    var location = this.state.location;
    var budget = this.state.budget;

    return (
      <form className='profile-form' onSubmit={this.handleSubmit}>
        <button className='profile-input' onClick={this.openUploadWidget}
                id='upload'>
          Upload Profile Pic
        </button>

        <div className='form-row'>
          <input className='profile-input' type='text' value={name}
                 placeholder='Name' onChange={this.nameChanged}/>

          <input className='profile-input' type={this.state.ageFocused ? 'number' : 'text' }
                 value={age} placeholder={this.state.ageFocused ? null : 'Age' }
                 onFocus={this.ageFocus} onBlur={this.ageUnfocus} onChange={this.ageChanged} />
        </div>
        <div className='form-row'>
          <textarea className='profile-input' value={description}
                    placeholder='Tell everyone a little bit about yourself!'
                    onChange={this.descriptionChanged}>
          </textarea>
        </div>

        <div className='form-row'>
          <input className='profile-input' type='text' value={location}
                 placeholder='Address' onChange={this.locationChanged} />
          <input className='profile-input' type='text'
                 placeholder='City' />
          <input className='profile-input' type='text'
                 placeholder='State' />
        </div>

        <label className='form-header'>Preferences</label>

        <div className='form-row'>
          <SearchStatus className='profile-input'/>
          <Smoker className='profile-input'/>
        </div>

        <div className='form-row'>
          <Diet className='profile-input'/>
          <Pet className='profile-input'/>
        </div>

        <div className='form-row'>
          <input className='profile-input' type={this.state.budgetFocused ? 'number' : 'text' }
                 value={budget} placeholder={this.state.budgetFocused ? null : 'Budget' }
                 onFocus={this.budgetFocus} onBlur={this.ageUnfocus} onChange={this.budgetChanged} />
        </div>

        <button className='profile-submit' type='submit'>Continue</button>
      </form>
    )
  }
});

module.exports = Form;
