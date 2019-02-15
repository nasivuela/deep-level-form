import React, { Component } from 'react';
import RemoveItem from './RemoveItem';
import Input from './Input';
import Roles from './Roles';

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
     * Here name has one key of experience object (name or roles)
     * and value has the new vlaue for that key
     * We create a newExperience object
     */
    const newItem = {
      ...item,
      [name]: value,
    }
    /**
     * We call onUpdate which contains `handleUpdate` from Experiences component
     * and pass the index of the experience into experiences array
     * that we want to update
     * and the new experience
     */
    onUpdate(ind, newItem);
  }

  handleRemove() {
    const { onRemove, ind, name } = this.props;
    /**
     * ind has the index of the experience into experiences array
     * name is experience
     */
    onRemove(ind, name);
  }

  getStringKeys() {
    const { item } = this.props;
    /**
     * Item contains one experience
     * We build an array only with the keys that have string values
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
     * item has one experience
     * ex. {name: "bubu", roles: []}
     * -------
     * inputKeys contains an array
     * with the keys of item which values are strings
     * ex. [ 'name' ]
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
        ** We paint the collection of roles
        * of this experience (item)
        */}
        <Roles
          onUpdate={this.handleUpdate}
          collection={item.roles}
          name="roles"
        />
      </div>
    );
  }
}

export default Item;