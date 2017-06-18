import React from 'react';

import ClientActions from '../../actions/clientActions';

export default class SignInForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  emailChanged = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  }

  passwordChanged = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    ClientActions.signIn({ email, password });

    if (!this.props.errors) {
      this.props.closeSignInModal()
    }
  }

  demoSignIn = e => {
    e.preventDefault();
    this.props.closeSignInModal()
    ClientActions.signIn({ email: "Guest", password: "1234567" });
  }

  render() {
    const { email, password } = this.state;

    var errors = this.props.errors.errors;
    
    return (
      <form className='auth-form' onSubmit={this.handleSubmit}>
        <h2 className='auth-header'>Sign In</h2>
        <input className='auth-input' type='text' value={email}
               placeholder='Email' onInput={this.emailChanged} />

        <input className='auth-input' type='password' value={password}
               placeholder='Password' onInput={this.passwordChanged} />
        <div className='errors'>{errors}</div>
        <a className='demo-link' onClick={this.demoSignIn}>demo account</a>
        <button className='auth-submit' type='submit'>Sign In</button>
      </form>
    )
  }
}
