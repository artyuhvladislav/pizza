import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, SortPopUp, PizzaBlock } from "../components/index";
import { setCategoriesAC } from "../redux/actions/filtersAC";

const categoryNames = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]
const sortItems = [{name: "популярности", type: "popular"}, {name: "цене", type: "price"}, {name: "алфавиту", type: "alphabet"}]
const Home = () => {
  const dispatch = useDispatch()
  
  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategoriesAC(index))
  }, [])

  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items
    }
  })

  const pizzaItems = items.map((item) => (
    <PizzaBlock key={item.id} {...item} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={ onSelectCategory }
          items={ categoryNames }
        />
        <SortPopUp items={ sortItems } />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{pizzaItems}</div>
    </div>
  );
};

export default Home;
