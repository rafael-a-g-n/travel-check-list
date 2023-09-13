import React from "react";

const Item = ({ item, onRemoveItems, onToggleItem }) => {
  function handleClick() {
    onRemoveItems(item.id);
  }

  function handleToggle() {
    onToggleItem(item.id);
  }

  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={handleToggle} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleClick}>❌</button>
    </li>
  );
};

export default Item;
