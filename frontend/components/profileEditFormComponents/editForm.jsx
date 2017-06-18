import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';


import { hashHistory } from 'react-router';

import ClientActions from '../../actions/clientActions';
import UserStore from '../../stores/userStore';
import ProfileStore from '../../stores/profileStore';
import FilterParamsStore from '../../stores/filterParams';

import GeoUtils from '../../util/geoUtils';

// Components
import SearchStatus from '../formPreferencesComponents/search_status';
import Smoker from '../formPreferencesComponents/smoker';
import Diet from '../formPreferencesComponents/diet';
import Pet from '../formPreferencesComponents/pet';

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);

    const { user } = this.props;
    const {
      profilePicURL,
      name,
      age,
      description,
      location,
      search_status,
      smoker,
      diet,
      pet,
      budget,
    } = this.props.profile;

    this.state = {
      ageFocused: false,
      budgetFocused: false,

      user_id,
      profilePicURL,
      name,
      age,
      description,
      location,
      search_status,
      smoker,
      diet,
      pet,
      budget,
    }
  }

  componentDidMount() {
    this.listener = UserStore.addListener(this.userChaged)
    ClientActions.fetchCurrentUser();
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  openUploadWidget = e => {
    e.preventDefault();

    cloudinary.openUploadWidget(
      {
        cloud_name: 'ddodpmqri',
        upload_preset: 'jeh6p6xu',
        theme: 'minimal'
      },
      (error, result) => {
        this.setState({ profilePicURL: result[0].url });
      }
    );

  }

  userChanged = () => {
    this.setState({ user_id: UserStore.currentUser().id });
  }

  nameChanged = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  ageChanged = e => {
    e.preventDefault();
    this.setState({ age: e.target.value });
  }

  descriptionChanged = e => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  locationChanged = e => {
    e.preventDefault();
    this.setState({ location: e.target.value });
  }

  updateSearchStatus = search_status => this.setState({ search_status: search_status })

  updateDiet = diet => this.setState({ diet: diet });

  updateSmoker = smoker => this.setState({ smoker: smoker });

  updatePet = pet => this.setState({ pet: pet });

  updateBudget = budget => this.setState({ budget: budget });

  budgetChanged = e => {
    e.preventDefault();
    this.setState({ budget: e.target.value });
  }

  handleSubmit = e => {
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
  }

  ageFocus = () => this.setState({ ageFocused: true });

  ageUnfocus = () => this.setState({ ageFocused: false });

  budgetFocus = () => this.setState({ budgetFocused: true });

  budgetUnfocus = () => this.setState({ budgetFocused: false });

  render() {
    var profilePicURL = 'https://res.cloudinary.com/ddodpmqri/image/upload/v1462480743/empty-profile_whfqjj.gif';
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
          <input className='profile-input-name-age' type='text' value={name}
                 placeholder='Name' onChange={this.nameChanged}/>

          <input className='profile-input-name-age' type={this.state.ageFocused ? 'number' : 'text' }
                 value={age} placeholder={this.state.ageFocused ? null : 'Age' }
                 onFocus={this.ageFocus} onBlur={this.ageUnfocus} onChange={this.ageChanged} />
        </div>
        <div className='form-row'>
          <textarea className='profile-input' value={description}
                    placeholder='Tell everyone a little bit about yourself!'
                    onChange={this.descriptionChanged} id='description-input'>
          </textarea>
        </div>

        <div className='form-row'>
          <input className='profile-input' type='text' value={location}
                 placeholder='Address' onChange={this.locationChanged} />
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
}
