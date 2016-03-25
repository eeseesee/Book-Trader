import React from 'react';
import { Component } from 'react';
import Header from './header';

/* global styles for app */
import './styles/app.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
