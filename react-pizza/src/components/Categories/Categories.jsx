import React, { useState } from "react";

const Categories = ({ items, onClickItem}) => {
    const [activeItem, setActiveItem] = useState(null)
    console.log(activeItem)
  const categories = items.map( (name, i) => <li className={activeItem === i ? 'active' : ''} onClick={() => setActiveItem(i)} key={`${name}_${i}`}>{name}</li>);
  return (
    <div className="categories">
      <ul>
          <li onClick={() => setActiveItem(null)} className={activeItem === null ? 'active' : ''}>Все</li>
          {categories}
      </ul>
    </div>
  );
};

export default Categories;
