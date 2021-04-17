import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Categories,
  SortPopUp,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components/index";
import { addPizzasToCartAC } from "../redux/actions/cartAC";
import { setCategoriesAC, setSortItemsAC } from "../redux/actions/filtersAC";
import { fetchPizzas } from "../redux/actions/pizzasAC";

const categoryNames = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

const Home = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const cartItems = useSelector(({ cart }) => cart.items);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategoriesAC(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortItemsAC(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzasToCartAC(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopUp
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!isLoaded
          ? Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)
          : items.map((item) => (
              <PizzaBlock
                key={item.id}
                addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                onClickAddPizza={handleAddPizzaToCart}
                {...item}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
