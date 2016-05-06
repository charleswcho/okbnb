var React = require('react');

var ClientActions = require('../../actions/clientActions');

var SignUpForm = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      errors: this.props.errors
    };
  },

  emailChanged: function(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value,
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
    ClientActions.create({
      email: this.state.email,
      password: this.state.password
    });
    this.props.closeSignUpModal()
  },

  render: function() {
    var email = this.state.email;
    var password = this.state.password;

    return (
      <form className='auth-form' onSubmit={this.handleSubmit}>
        <h2 className='auth-header'>Sign Up</h2>
        <input className='auth-input' type='text' value={email}
               placeholder='Email' onInput={this.emailChanged} />

        <input className='auth-input' type='password' value={password}
               placeholder='Password' onInput={this.passwordChanged} />

        <button className='auth-submit' type='submit'>Let's go</button>
      </form>
    )
  }
});

module.exports = SignUpForm;
