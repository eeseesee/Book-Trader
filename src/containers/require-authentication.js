import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authentication.authenticated) {
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authentication.authenticated) {
        this.context.router.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authentication: state.auth };
  }

  return connect(mapStateToProps)(Authentication);
}
