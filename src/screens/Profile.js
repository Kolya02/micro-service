import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateUser, getUserlocalStorage } from './../redux/actions';

class Profile extends Component {
 
  state = {
    fullName: '',
    phone: '',
    address: '',
    isAuth: false,
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, phone, address } = this.state;
    this.props.updateUser({ fullName, phone, address });
  }

  componentDidMount(){
    this.props.getUserlocalStorage();
  }

  componentDidUpdate() {
    if (this.props.authUser == null) {
      this.props.history.push('/login');
      return;
    }

    if (!this.state.isAuth) {
      this.setState({
        fullName: this.props.authUser.fullName,
        phone: this.props.authUser.phone,
        address: this.props.authUser.address,
        isAuth: true,
      });
    }

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
        />
        <input
          type="phone"
          placeholder="Phone"
          name="phone"
          value={this.state.phone}
          className="form-control mb-2"
          onChange={this.handleChange}
        />
        <input
          type="address"
          placeholder="Address"
          name="address"
          value={this.state.address}
          className="form-control mb-2"
          onChange={this.handleChange}
        />
        <button className="btn btn-success mx-5">Save</button>
        <Link to="/" className="btn btn-primary mx-5">Home</Link>
      </form>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    authUser: state.authUser
  }
}
export default connect(mapStateToProps, { updateUser, getUserlocalStorage })(Profile);