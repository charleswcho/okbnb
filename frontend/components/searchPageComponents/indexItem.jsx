import React from 'react';
import { hashHistory } from 'react-router';

import ServerActions from '../../actions/serverActions';

export default class IndexItem extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    hashHistory.push({pathname: 'profile/' + this.props.profile.id})
  }

  mouseEnter = (e) => {
    e.preventDefault();
    ServerActions.updateHovered(this.props.profile.id)
  }

  mouseLeave = (e) => {
    e.preventDefault();
    ServerActions.updateHovered(this.props.profile.id)
  }

  render() {
    const { profile } = this.props;

    return (
      <div
        className='index-item'
        onClick={this.handleClick}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}>

        <img
          className='profile-image'
          src={profile.profilePicURL}
          alt="Profile Image"/>

        <div className='index-item-info'>
          <div className='profile-name'>{profile.name}</div>
          <div>{profile.age} · {profile.location}</div>
        </div>
      </div>
    );
  }
}
