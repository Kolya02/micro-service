import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createUser, logOut } from '../redux/actions';

class SignUp extends Component {
  state = {
    fullName:'',
    email: '',
    password: '',
    repeatPassword: '',
  }

  componentDidMount() {
    this.props.logOut();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  checkPassword = () => {
    const { password, repeatPassword} = this.state;
    return password === repeatPassword;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if ( !this.checkPassword() ) {
      return;
    }

    const { password, email, fullName } = this.state;
    const newUser = { fullName, password, email };
    this.props.createUser(newUser);
    this.setState({ email: '', fullName:'' , password: '', repeatPassword: '' });

    this.props.history.push('/login');
  }
  
  render() {
    return (
      <form className="my-5" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Full name"
          name="fullName"
          value={this.state.fullName}
          className="form-control mb-2"
          onChange={this.handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={this.state.email}
          className="form-control mb-2"
          onChange={this.handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          className="form-control mb-2"
          onChange={this.handleChange}
          required
        />
        <input
          type="password"
          placeholder="Repeat password"
          name="repeatPassword"
          value={this.state.repeatPassword}
          className="form-control mb-2"
          onChange={this.handleChange}
          required
        />
        <button className="btn btn-success mx-5">Create a profile</button>
        <Link to="/" className="btn btn-primary mx-5">Home</Link>
      </form>
    );
  }
}

export default connect(null, { createUser, logOut })(SignUp);

