import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MyBooks extends Component  {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.token);
  }

  render() {
    return (
      <div className="mybooks">
        {this.props.children && React.cloneElement(this.props.children, {
            user: this.props.user,
            token: this.props.token,
            message: this.props.message,
            updateUser: this.props.updateUser,
            setMessage: this.props.setMessage
          })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    user: state.user,
    message: state.message.alert
   };
}

export default connect(mapStateToProps, actions)(MyBooks);
