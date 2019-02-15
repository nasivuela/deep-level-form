import React, { Component } from 'react';
import Experience from './Experience';
import AddItem from './AddItem';

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
    /** Here item has a new experience,
     * so we add it to the experiences collection
     */
    const newCollection = collection.concat(item);
    /**
     * We call onUpdate which contains `handleUpdate` from App component
     * and pass name of the property located on formData
     * and new array of experiences
     */
    onUpdate(name, newCollection);
  }

  handleRemove(indToRemove) {
    const { onUpdate, name, collection } = this.props;
    /** Here indToRemove has the index of the experience
     * that we want to remove from experiences array,
     * so we create a new array without it
     */
    const newCollection = collection.filter((i,ind) => ind !== indToRemove);
    /**
     * We call onUpdate which contains `handleUpdate` from App component
     * and pass name of the property located on formData
     * and new array of experiences
     */
    onUpdate(name, newCollection);
  }

  handleUpdate(indToModify, newItem) {
    const { onUpdate, name, collection } = this.props;
    /** Here indToRemove has the index of the experience
     * that we want to modify from experiences array,
     * and item is the new experience for that index,
     * so we create a new array with that item replaced
     */
    const newCollection = collection
      .map((item,ind) => 
        ind === indToModify
          ? newItem
          : item
      )
    /**
     * We call onUpdate which contains `handleUpdate` from App
     * and pass name of the property on formData
     * and new array of experiences
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
        {/** Here collections has the array of experiences */}
        {collection.map((item, ind) => {
          return (
            <Experience
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