import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class UNAuthentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (this.props.authenticated) {
        this.context.router.push('/resources');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.context.router.push('/resources');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(UNAuthentication);
}
