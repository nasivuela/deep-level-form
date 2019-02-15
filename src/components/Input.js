import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { onChange } = this.props;
    const { name, value } = e.currentTarget;
    onChange(name, value);
  }
  render() {
    const {
      value,
      name,
    } = this.props;
    return (
      <input
        type="text"
        onChange={this.handleChange}
        value={value}
        name={name}
      />
    );
  }
}

export default Input;