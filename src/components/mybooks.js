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
        <h1>{'Hello ' + this.props.user.dispName}</h1>
        {React.cloneElement(this.props.children, {user: this.props.user})}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    user: state.user
   };
}

export default connect(mapStateToProps, actions)(MyBooks);
