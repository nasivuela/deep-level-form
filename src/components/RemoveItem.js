import React from 'react';

const RemoveItem = props => (
  <button onClick={props.onClick}>
    {`Delete ${props.name}`}
  </button>
);

export default RemoveItem;
