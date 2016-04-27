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
    this.props.closeSignInModal()
    ClientActions.signIn({
      username: this.state.username,
      password: this.state.password
    });
  },

  demoSignIn: function (e) {
    e.preventDefault();
    this.props.closeSignInModal()
    ClientActions.signIn({
      username: "Guest",
      password: "1234567"
    });
  },

  render: function() {
    var username = this.state.username;
    var password = this.state.password;

    return (
      <form className='auth-form' onSubmit={this.handleSubmit}>
        <h2 className='auth-header'>Sign In</h2>
        <input className='auth-input' type='text' value={username}
               placeholder='Username' onInput={this.usernameChanged} />

        <input className='auth-input' type='password' value={password}
               placeholder='Password' onInput={this.passwordChanged} />
             <a className='demo-link' onClick={this.demoSignIn}>demo account</a>
        <button className='auth-submit' type='submit'>Sign In</button>
      </form>
    )
  }
});
