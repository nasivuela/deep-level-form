import React, { Component } from 'react';
import defaultData from '../constants/default-data';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(e) {
    const { onClick, name } = this.props;
    /** 
     * name has the key of the default object 
     * that we want to add
     * So we search for it on defaultData
     * and pass it to onClick function
    */
    onClick(defaultData[name]);
  }

  render() {
    const {
      name,
    } = this.props;
    return (
      <button
        onClick={this.handleAddItem}
      >
        {`Add new ${name}`}
      </button>
    );
  }
}

export default AddItem;