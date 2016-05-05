var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;


// Components
var SolidNav = require('./components/solidNav');
var SplashScreen = require('./components/splashScreen');

var Search = require('./components/search');
var Detail = require('./components/detail');
var ProfileForm = require('./components/profileForm');
var ProfileEditForm = require('./components/profileEditForm');
var Footer = require('./components/footer');

// These are for testing

var ClientActions = require('./actions/clientActions');
window.ClientActions = ClientActions;

var UserStore = require('./stores/userStore');
window.UserStore = UserStore;

var ProfileStore = require('./stores/profileStore');
window.ProfileStore = ProfileStore;

var FilterParamsStore = require('./stores/filterParams');
window.FilterStore = FilterParamsStore;
// These are for testing

var App = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={SplashScreen}/>
      <Route component={SolidNav}>
        <Route path='search/:loc' component={Search}/>
        <Route path='profile/new' component={ProfileForm}/>
        <Route path='profile/edit/:id' component={ProfileEditForm}/>
        <Route path='profile/:id' component={Detail}/>
      </Route>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById("content");
  ReactDOM.render(Router, root);
});
