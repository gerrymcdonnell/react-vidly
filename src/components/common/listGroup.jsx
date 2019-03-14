import React from "react";

const ListGroup = props => {
  //shortcut ul.list-group>li.list-group-item

  const { items } = props;

  return (
    <ul className="list-group">
      {items.map(item => (
        <li key={item._id} className="list-group-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
