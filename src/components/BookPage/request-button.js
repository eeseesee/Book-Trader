import React, { Component } from 'react';

class RequestButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Request Book',
      disabled: false
    }
  }

  handleClick(event) {
    this.props.requestBook(this.props.bookID, this.props.token);
    this.setState({
      text: 'Requested',
      disabled: true
    });
  }

  render() {
    const disabled = this.state.disabled ? "disabled" : "";
    return (
      <div className="delete-button">
        <button onClick={this.handleClick.bind(this)} className={"btn btn-primary"+disabled} disabled={this.state.disabled}>{this.state.text}</button>
      </div>
    )
  }
}

export default RequestButton;
