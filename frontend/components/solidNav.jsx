var React = require('react');
var NavBar = require('./navBar');

var SolidNav = React.createClass({
  render: function(){
    return (
      <div>
        <NavBar clear={false}/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = SolidNav;
