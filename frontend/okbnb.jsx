var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var NavBar = require('./components/navBar');
var SplashScreen = require('./components/splashScreen');

var Search = require('./components/search');

// These are for testing

var ClientActions = require('./actions/clientActions');
window.ClientActions = ClientActions;

var UserStore = require('./stores/userStore');
window.UserStore = UserStore;

var ProfileStore = require('./stores/profileStore');
window.ProfileStore = ProfileStore;

// These are for testing

var App = React.createClass({
  render: function(){
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={SplashScreen}/>
      <Route path='/search/:loc' component={Search}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById("content");
  ReactDOM.render(Router, root);
});
