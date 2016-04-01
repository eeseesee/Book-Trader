import React, { Component } from 'react';

class AddButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Add Book',
      disabled: false
    }
  }

  handleClick(event) {
    this.props.addBook(this.props.book, this.props.token);
    this.setState({
      text: 'Added',
      disabled: true
    });
  }

  render() {
    const disabled = this.state.disabled ? "disabled" : "";
    return (
      <div className="add-button">
        <button onClick={this.handleClick.bind(this)} className={"btn btn-primary"+disabled} disabled={this.state.disabled}>{this.state.text}</button>
      </div>
    )
  }
}

export default AddButton;
