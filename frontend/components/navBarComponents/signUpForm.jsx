var React = require('react');

var ClientActions = require('../../actions/clientActions');

var SignUpForm = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: ''
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
    if (!this.props.errors) {
      this.props.closeSignUpModal()
    }
  },

  render: function() {
    var email = this.state.email;
    var password = this.state.password;
    var error1 = this.props.errors[1];
    var error2 = this.props.errors[0];

    return (
      <form className='auth-form' onSubmit={this.handleSubmit}>
        <h2 className='auth-header'>Sign Up</h2>
        <input className='auth-input' type='text' value={email}
               placeholder='Email' onInput={this.emailChanged} />

        <input className='auth-input' type='password' value={password}
               placeholder='Password' onInput={this.passwordChanged} />
        <div className='errors'>{error1}</div>
        <div className='errors'>{error2}</div>
        <button className='auth-submit' type='submit'>Let's go</button>
      </form>
    )
  }
});

module.exports = SignUpForm;
