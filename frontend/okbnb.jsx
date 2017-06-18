import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Components
import NavBar from './components/navBar';
import SplashScreen from './components/splashScreen';

import Search from './components/search';
import Detail from './components/detail';
import ProfileForm from './components/profileForm';
import ProfileEditForm from './components/profileEditForm';

// These are for testing

// var ClientActions = require('./actions/clientActions');
// window.ClientActions = ClientActions;
//
// var UserStore = require('./stores/userStore');
// window.UserStore = UserStore;
//
// var ProfileStore = require('./stores/profileStore');
// window.ProfileStore = ProfileStore;
//
// var FilterParamsStore = require('./stores/filterParams');
// window.FilterStore = FilterParamsStore;
//
// var OfferStore = require('./stores/offerStore');
// window.OfferStore = OfferStore;

// These are for testing

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={SplashScreen}/>
      <Route path='search/:loc' component={Search}/>
      <Route path='profile/new' component={ProfileForm}/>
      <Route path='profile/edit/:id' component={ProfileEditForm}/>
      <Route path='profile/:id' component={Detail}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  ReactDOM.render(router, root);
});
