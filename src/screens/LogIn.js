import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logIn, logOut } from '../redux/actions';

class LogIn extends Component {
  state = {
    email: '',
    password: ''
  }

  componentDidMount() {
    this.props.logOut();
  }

  addUserToLocalStorage = (e) => {
    console.log(this.props.authUser)
    localStorage.setItem(1, JSON.stringify(this.props.authUser));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = this.state;
    this.props.logIn({ password, email });
    // console.log(this.props.authUser)
  }

  componentDidUpdate() {
    if (this.props.authUser) {
      this.addUserToLocalStorage();
      this.props.history.push('/profile');
    }
  }

  render() {
    return (
      <form className="my-5" onSubmit={this.handleSubmit}>
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
        <button className="btn btn-success mx-5">Log in</button>
        <Link to="/" className="btn btn-primary mx-5">Home</Link>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  }
}
export default connect(mapStateToProps, { logIn, logOut })(LogIn);

