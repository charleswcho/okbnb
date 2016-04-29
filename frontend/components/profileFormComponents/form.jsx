var React = require('react');
var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem

var hashHistory = require('react-router').hashHistory;

var ClientActions = require('../../actions/clientActions');
var UserStore = require('../../stores/userStore');
var ProfileStore = require('../../stores/profileStore');

module.exports = React.createClass({
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
      diet: '',
      smoker: '',
      pet: '',
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
                                  upload_preset: 'jeh6p6xu'
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
    console.log(this.state.user_id);
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
    });
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

  handleSmokerSelect: function (eventKey, event) {
    switch (parseInt(eventKey)) {
      case 1:
        this.setState({ smoker: true })
        break;
      case 2:
        this.setState({ smoker: false })
        break;
    }
  },

  handlePetSelect: function (eventKey, event) {
    switch (parseInt(eventKey)) {
      case 1:
        this.setState({ pet: 'Dog' })
        break;
      case 2:
        this.setState({ pet: 'Cat' })
        break;
      case 3:
        this.setState({ pet: 'Bird' })
        break;
      case 4:
        this.setState({ pet: 'Other' })
        break;
    }
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
        <button className='profile-input' onClick={this.openUploadWidget}>
          Upload Profile Pic
        </button>

        <input className='profile-input' type='text' value={name}
               placeholder='Name' onChange={this.nameChanged} />

        <input className='profile-input' type={this.state.ageFocused ? 'number' : 'text' }
               value={age} placeholder={this.state.ageFocused ? null : 'Age' }
               onFocus={this.ageFocus} onBlur={this.ageUnfocus} onChange={this.ageChanged} />

        <textarea className='profile-input' value={description}
                  placeholder='Tell everyone a little bit about yourself!'
                  onChange={this.descriptionChanged}>
        </textarea>

        <input className='profile-input' type='text' value={location}
               placeholder='Address' onChange={this.locationChanged} />

        <label>Preferences</label>

        <input className='profile-input' type='text' value={diet}
               placeholder='Diet' onChange={this.dietChanged} />

        <DropdownButton className='profile-input' title='Smoker' onSelect={this.handleSmokerSelect}>
            <MenuItem eventKey="1" active={this.state.smoker}>Yes</MenuItem>
            <MenuItem eventKey="2" active={this.state.smoker === false}>No</MenuItem>
        </DropdownButton>

        <DropdownButton className='profile-input' title='Pet' onSelect={this.handlePetSelect}>
            <MenuItem eventKey="1" active={(this.state.pet === 'Dog')}>Dog</MenuItem>
            <MenuItem eventKey="2" active={(this.state.pet === 'Cat')}>Cat</MenuItem>
            <MenuItem eventKey="3" active={(this.state.pet === 'Bird')}>Bird</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4" active={(this.state.pet === 'Other')}>Other</MenuItem>
        </DropdownButton>

        <input className='profile-input' type={this.state.budgetFocused ? 'number' : 'text' }
               value={budget} placeholder={this.state.budgetFocused ? null : 'Budget' }
               onFocus={this.budgetFocus} onBlur={this.ageUnfocus} onChange={this.budgetChanged} />

        <button className='profile-submit' type='submit'>Continue</button>
      </form>
    )
  }
});
