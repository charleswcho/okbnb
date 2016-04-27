var React = require('react');

var ClientActions = require('../../actions/clientActions');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },

  usernameChanged: function(e) {
    e.preventDefault();
    this.setState({
      username: e.target.value,
    });
  },

  passwordChanged: function(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    debugger;
    ClientActions.create({
      username: this.state.username,
      password: this.state.password
    });
    this.props.closeSignUpModal()
  },

  render: function() {
    var username = this.state.username;
    var password = this.state.password;

    return (
      <form className='auth-form' onSubmit={this.handleSubmit}>
        <h2 className='auth-header'>Sign Up</h2>
        <input className='auth-input' type='text' value={username}
               placeholder='Username' onInput={this.usernameChanged} />

        <input className='auth-input' type='password' value={password}
               placeholder='Password' onInput={this.passwordChanged} />

        <button className='auth-submit' type='submit'>Let's go</button>
      </form>
    )
  }
});
