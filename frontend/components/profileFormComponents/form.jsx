var React = require('react');
var hashHistory = require('react-router').hashHistory;

var ClientActions = require('../../actions/clientActions');
var UserStore = require('../../stores/userStore');
var ProfileStore = require('../../stores/profileStore');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      user_id: UserStore.currentUser().id,
      profilePicURL: '',
      name: '',
      description: '',
      location: '',
      diet: '',
      smoker: '',
      pet: '',
      budget: '',
      age: ''
    };
  },

  componentDidMount: function () {
    if (typeof this.state.user_id === 'undefined') {
      ClientActions.fetchCurrentUser();
      this.setState({ user_id: UserStore.currentUser().id });
    }
  },

  profilePicURLChanged: function(e) {
    e.preventDefault();
    this.setState({
      profilePicURL: e.target.value,
    });
  },

  nameChanged: function(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
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

  dietChanged: function(e) {
    e.preventDefault();
    this.setState({
      diet: e.target.value
    });
  },

  smokerChanged: function(e) {
    e.preventDefault();
    this.setState({
      smoker: e.target.value
    });
  },

  petChanged: function(e) {
    e.preventDefault();
    this.setState({
      pet: e.target.value
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

    console.log(this.state.profilePicURL);
    console.log(this.state.name);
    console.log(this.state.age);
    console.log(this.state.description);
    console.log(this.state.location);
    console.log(this.state.diet);
    console.log(this.state.smoker);
    console.log(this.state.pet);
    console.log(this.state.budget);
    debugger;
    ClientActions.createProfile({
      profilePicURL: this.state.profilePicURL,
      name: this.state.name,
      age: this.state.age,
      description: this.state.description,
      location: this.state.location,
      diet: this.state.diet,
      smoker: this.state.smoker,
      pet: this.state.pet,
      budget: this.state.budget
    });
  },

  render: function() {
    var profilePicURL = this.state.profilePicURL;
    var name = this.state.name;
    var age = this.state.age;
    var description = this.state.description;
    var location = this.state.location;
    var diet = this.state.diet;
    var smoker = this.state.smoker;
    var pet = this.state.pet;
    var budget = this.state.budget;

    return (
      <form className='profile-form' onSubmit={this.handleSubmit}>
        <input className='profile-input' type='text' value={profilePicURL}
               onChange={this.profilePicURLChanged} />

        <input className='profile-input' type='text' value={name}
               placeholder='Name' onChange={this.nameChanged} />

        <input className='profile-input' type='number' value={age}
               placeholder='Age' onChange={this.ageChanged} />

        <textarea className='profile-input' value={description}
                  placeholder='Tell everyone a little bit about yourself!'
                  onChange={this.descriptionChanged}>
        </textarea>

        <input className='profile-input' type='text' value={location}
               placeholder='Address' onChange={this.locationChanged} />

        <label>Preferences</label>

        <input className='profile-input' type='text' value={diet}
               placeholder='Diet' onChange={this.dietChanged} />
        <label>Smoker
          <input className='profile-input' type='checkbox' checked={smoker}
                 onChange={this.smokerChanged} />
        </label>
        <select className='profile-input' value={pet} onChange={this.petChanged} >
          <option value="">Pet?</option>
          <option value="">Dog</option>
          <option value="">Cat</option>
          <option value="">Bird</option>
          <option value="">Other</option>
        </select>

        <input className='profile-input' type='number' value={budget}
               onChange={this.budgetChanged} />
        <button className='profile-submit' type='submit'>Continue</button>
      </form>
    )
  }
});
