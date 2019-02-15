import React, { Component } from 'react';
import RemoveItem from './RemoveItem';
import Input from './Input';

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleUpdate(name, value) {
    const {
      onUpdate,
      item,
      ind,
    } = this.props;
    /**
     * Here name has one key of role object (role, from, until or challenges)
     * and value has the new value for that key
     * We create a newRole object 
     */
    const newItem = {
      ...item,
      [name]: value,
    }
    /**
     * We call onUpdate which contains `handleUpdate` from Roles component
     * and pass the index of the role into roles array
     * that we want to update
     * and the new role
     */
    onUpdate(ind, newItem);
  }

  handleRemove() {
    const { onRemove, ind, name } = this.props;
    /**
     * ind has the index of the role into roles array
     * name is role
     */
    onRemove(ind, name);
  }

  getStringKeys() {
    const { item } = this.props;
    /**
     * Item contains one role
     * with the keys of item which values are strings
     * and return it
     */
    return Object
      .keys(item)
      .filter(key => {
        return typeof (item[key]) === 'string';
      });
  }

  render() {
    const {
      item,
      name,
    } = this.props;
    /** 
     * item has one role
     * ex. {role: "manager", from:"2018", to:"2019" challenges: []}
     * -------
     * inputKeys contains an array
     * with the keys of item which values are strings
     * ex. [ 'role', 'from', 'to' ]
    */
    const inputKeys = this.getStringKeys();
    return (
      <div>
        <RemoveItem
          onClick={this.handleRemove}
          name={name}
        />
        {/**
          forEach input key
          we paint an input
        */}
        {inputKeys.map((name, ind) => (
          <Input
            key={ind}
            onChange={this.handleUpdate}
            value={item[name]}
            name={name}
          />
        ))}
        {/**
        ** We could paint the collection of challenges
        * of this role (item)
        */}
      </div>
    );
  }
}

export default Item;