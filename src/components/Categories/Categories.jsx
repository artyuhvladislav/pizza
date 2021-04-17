import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(({ activeCategory, items, onClickCategory}) => {

  const categories = items.map((name, i) => (
    <li
      className={activeCategory === i ? "active" : ""}
      onClick={() => onClickCategory(i)}
      key={`${name}_${i}`}
    >
      {name}
    </li>
  ));
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory(null) }
          className={activeCategory === null ? "active" : ""}
        >
          Все
        </li>
        {categories}
      </ul>
    </div>
  );
})

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func
}

Categories.defaultProps = {
  activeCategory: null,
  items: []
};

export default Categories;
