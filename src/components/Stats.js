import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to you packing list ➕</em>
      </p>
    );
  const packedItems = items.filter((item) => item.packed === true);
  const percentage = Math.round((packedItems.length / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! ready to go 🛬"
          : ` 💼 You have ${items.length} items on your list, and you already packed
        ${packedItems.length} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
