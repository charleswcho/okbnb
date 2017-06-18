import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

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

export default class Form extends React.Component {
  state = {
    ageFocused: false,
    budgetFocused: false,

    user_id: UserStore.currentUser().id,
    profilePicURL: '',
    name: '',
    age: null,
    description: '',
    location: '',
    search_status: null,
    smoker: null,
    diet: null,
    pet: null,
    budget: null
  }

  componentDidMount() {
    this.listener = UserStore.addListener(this.userChaged)
    ClientActions.fetchCurrentUser();
  }

  componentWillUnmount() {
    this.listener.remove();
    ClientActions.clearErrors();
  }

  openUploadWidget = (e) => {
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

  userChanged = () => this.setState({ user_id: UserStore.currentUser().id });

  nameChanged = e => this.setState({ name: e.target.value });
  ageChanged = e => this.setState({ age: e.target.value });
  descriptionChanged = e => this.setState({ description: e.target.value });
  locationChanged = e => this.setState({ location: e.target.value });

  updateSearchStatus = search_status => this.setState({ search_status });
  updateSmoker = smoker => this.setState({ smoker });
  updateDiet = diet => this.setState({ diet });
  updatePet = pet => this.setState({ pet });

  budgetChanged = e => this.setState({ budget: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();

    const { profilePicURL, name, age, description, location, search_status, smoker, diet, pet, budget } = this.state

    const params = {
      user_id: UserStore.currentUser().id,
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
    };

    console.log(params)

    GeoUtils.parseAddress(params, ClientActions.createProfile, this.props.createdProfile)
  }

  ageFocus = () => this.setState({ ageFocused: true });
  ageUnfocus = () => this.setState({ ageFocused: false });
  budgetFocus = () => this.setState({ budgetFocused: true });
  budgetUnfocus = () => this.setState({ budgetFocused: false });

  render() {
    const { name, age, description, location, budget } = this.state;

    let profilePicURL = 'https://res.cloudinary.com/ddodpmqri/image/upload/v1462480743/empty-profile_whfqjj.gif';
    if (this.state.profilePicURL) {
      profilePicURL = this.state.profilePicURL;
    }

    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map(error => <div className='errors'>{error}</div>);
    }

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
                 onFocus={this.ageFocus} onBlur={this.ageUnfocus} onChange={this.ageChanged}/>
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
                        updateSearchStatus={this.updateSearchStatus}/>
          <Smoker className='profile-input' updateSmoker={this.updateSmoker}/>
        </div>

        <div className='form-row'>
          <Diet className='profile-input' updateDiet={this.updateDiet}/>
          <Pet className='profile-input' updatePet={this.updatePet}/>
        </div>

        <div className='form-row'>
          <input className='profile-input' type={this.state.budgetFocused ? 'number' : 'text' }
                 value={budget} placeholder={this.state.budgetFocused ? null : 'Budget' }
                 onFocus={this.budgetFocus} onBlur={this.ageUnfocus} onChange={this.budgetChanged} />
        </div>
        <div className='errors-list'>{errors}</div>

        <button className='profile-submit' type='submit'>Continue</button>
      </form>
    )
  }
}
