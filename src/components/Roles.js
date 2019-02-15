import React, { Component } from 'react';
import AddItem from './AddItem';
import Role from './Role';

const boxStyles = { 
  border: '1px solid pink', 
  padding: '14px', 
  textAlign: 'left' 
};

class Collection extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleAdd(item) {
    const { onUpdate, name, collection } = this.props;
    /** Here item has a new role,
     * so we add it to the role collection
     */
    const newCollection = collection.concat(item);
    /**
     * We call onUpdate which contains `handleChange` from Experience component
     * and pass name of the property located on an experience object
     * and new array of roles
     */
    onUpdate(name, newCollection);
  }

  handleRemove(indToRemove) {
    const { onUpdate, name, collection } = this.props;
    /** Here indToRemove has the index of the role
     * that we want to remove from roles array,
     * so we create a new array without it
     */
    const newCollection = collection.filter((i,ind) => ind !== indToRemove);
    /**
     * We call onUpdate which contains `handleChange` from Experience component
     * and pass name of the property located on an experience object
     * and new array of roles
     */
    onUpdate(name, newCollection);
  }

  handleUpdate(indToModify, newItem) {
    const { onUpdate, name, collection } = this.props;
    /** Here indToRemove has the index of the role
     * that we want to modify from roles array,
     * and item is the new role for that index,
     * so we create a new array with that item replaced
     */
    const newCollection = collection
      .map((item,ind) => 
        ind === indToModify
          ? newItem
          : item
      )
    /**
     * We call onUpdate which contains `handleChange` from Experience component
     * and pass name of the property located on an experience object
     * and new array of roles
     */
      onUpdate(name, newCollection);
  }
  render() {
    const {
      collection,
      name
    } = this.props;
    return (
      <div style={boxStyles}>
        <p>{name}</p>
        <AddItem 
          name={name} 
          onClick={this.handleAdd}
        />
        {/** Here collections has the array of roles of a single experience */}
        {collection.map((item, ind) => {
          return (
            <Role
              key={ind}
              ind={ind}
              item={item}
              name={name}
              onRemove={this.handleRemove}
              onUpdate={this.handleUpdate}
            />
          );
        })}
      </div>

    );
  }
}

export default Collection;