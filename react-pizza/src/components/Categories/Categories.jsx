import React, { useState } from "react";

const Categories = React.memo(({ items, onClickItem }) => {
  
  const [activeItem, setActiveItem] = useState(null);
  
  const onSelectItem = (i) => {
    setActiveItem(i);
    onClickItem(i)

  }
  const categories = items.map((name, i) => (
    <li
      className={activeItem === i ? "active" : ""}
      onClick={() => onSelectItem(i)}
      key={`${name}_${i}`}
    >
      {name}
    </li>
  ));
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItem(null) }
          className={activeItem === null ? "active" : ""}
        >
          Все
        </li>
        {categories}
      </ul>
    </div>
  );
})

export default Categories;
