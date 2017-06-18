import React from 'react';

import ClientActions from '../../actions/clientActions';

export default class SignUpForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  emailChanged = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  }

  passwordChanged = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    ClientActions.create({ email, password });

    if (!this.props.errors) {
      this.props.closeSignUpModal()
    }
  }

  render() {
    const { email, password } = this.state;
    const [error2, error1] = this.props.errors;

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
}
