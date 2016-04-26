var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var App = React.createClass({
  render: function(){
    return (
        <div>
          <header><h1>Bench BnB</h1></header>
          {this.props.children}
        </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById("content");
  ReactDOM.render(Router, root);
});
