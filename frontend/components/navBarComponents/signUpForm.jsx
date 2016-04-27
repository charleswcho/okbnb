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
      username: e.target.username,
    });
  },

  passwordChanged: function(e) {
    e.preventDefault();
    this.setState({
      password: e.target.password
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.closeSignUpModal()
    ClientActions.create({
      username: this.state.username,
      password: this.state.password
    });
  },

  render: function() {
    var username = this.state.username;
    var password = this.state.password;

    return (
      <form className='auth-form' onSubmit={this.handleSubmit}>
        <h1 className-'signup-header'>Sign Up</h1>
        <input className='auth-input' type='text' value={username} p
               laceholder='Username' onInput={this.usernameChanged} />

        <input className='auth-input' type='password' value={password}
               placeholder='Password' onInput={this.passwordChanged} />

        <button className='auth-submit' type='submit'>Sign Up</button>
      </form>
    )
  }
});
