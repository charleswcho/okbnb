var React = require('react');
var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem

var hashHistory = require('react-router').hashHistory;

var ClientActions = require('../../actions/clientActions');
var UserStore = require('../../stores/userStore');
var ProfileStore = require('../../stores/profileStore');
var FilterParamsStore = require('../../stores/filterParams');

var GeoUtils = require('../../util/geoUtils');

// Components
var SearchStatus = require('../formPreferencesComponents/search_status');
var Smoker = require('../formPreferencesComponents/smoker');
var Diet = require('../formPreferencesComponents/diet');
var Pet = require('../formPreferencesComponents/pet');

var Form = React.createClass({
  getInitialState: function () {
    var user = this.props.user;
    var profile = this.props.profile;
    return {
      ageFocused: false,
      budgetFocused: false,

      user_id: user.id,
      profilePicURL: profile.profilePicURL,
      name: profile.name,
      age: profile.age,
      description: profile.description,
      location: profile.location,
      search_status: profile.search_status,
      smoker: profile.smoker,
      diet: profile.diet,
      pet: profile.pet,
      budget: profile.budget
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

  updateSearchStatus: function(search_status) {
    this.setState({ search_status: search_status })
  },

  updateDiet: function(diet) {
    this.setState({ diet: diet })
  },

  updateSmoker: function(smoker) {
    this.setState({ smoker: smoker })
  },

  updatePet: function(pet) {
    this.setState({ pet: pet })
  },

  updateBudget: function(budget) {
    this.setState({ budget: budget })
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
      id: this.props.profile.id,
      user_id: this.state.user_id,
      profilePicURL: this.state.profilePicURL,
      name: this.state.name,
      age: this.state.age,
      description: this.state.description,
      location: this.state.location,
      search_status: this.state.search_status,
      smoker: this.state.smoker,
      diet: this.state.diet,
      pet: this.state.pet,
      budget: this.state.budget
    };

    console.log(params)

    GeoUtils.parseAddress(params, ClientActions.updateProfile)
    this.props.updatedProfile();
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
    var profilePicURL = 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462480743/empty-profile_whfqjj.gif';
    if (this.state.profilePicURL) {
      profilePicURL = this.state.profilePicURL;
    }
    var name = this.state.name;
    var age = this.state.age;
    var description = this.state.description;
    var location = this.state.location;
    var search_status = this.state.search_status;
    var smoker = this.state.smoker;
    var diet = this.state.diet;
    var pet = this.state.pet;
    var budget = this.state.budget;

    return (
      <form className='profile-form' onSubmit={this.handleSubmit}>
        <div className='form-row'>
          <img className='profile-form-pic' src={profilePicURL}
               alt='search-status'/>
          <button className='profile-input' onClick={this.openUploadWidget}
                  id='upload'>
            Upload Profile Pic
          </button>
        </div>

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
          <SearchStatus className='profile-input'
                        searchStatus={search_status}
                        updateSearchStatus={this.updateSearchStatus}/>
          <Smoker className='profile-input' smoker={smoker}
                  updateSmoker={this.updateSmoker}/>
        </div>

        <div className='form-row'>
          <Diet className='profile-input' diet={diet} updateDiet={this.updateDiet}/>
          <Pet className='profile-input' pet={pet} updatePet={this.updatePet}/>
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
