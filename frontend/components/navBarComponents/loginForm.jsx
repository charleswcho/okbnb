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
    this.props.closeLoginModal()
    ClientActions.login({
      username: this.state.username,
      password: this.state.password
    });
  },

  demoLogin: function (e) {
    e.preventDefault();
    this.props.closeLoginModal()
    ClientActions.login({
      username: "Guest",
      password: "1234567"
    });
  },

  render: function() {
    var username = this.state.username;
    var password = this.state.password;

    return (
      <form className='auth-form' onSubmit={this.handleSubmit}>
        <h1 className-'signup-header'>Login</h1>
        <input className='auth-input' type='text' value={username} p
               laceholder='Username' onInput={this.usernameChanged} />

        <input className='auth-input' type='password' value={password}
               placeholder='Password' onInput={this.passwordChanged} />
        <a className='demo-link' onClick={demoLogin}>demo account</a>
        <button className='auth-submit' type='submit'>Login</button>
      </form>
    )
  }
});
