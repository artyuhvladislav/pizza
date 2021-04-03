import React from "react";

import { Categories, SortPopUp, PizzaBlock } from "../components/index";

const Home = ({ items }) => {

  const pizzaItems = items.map((item) => (
    <PizzaBlock key={item.id} {...item} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => {
            console.log(name);
          }}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopUp items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{pizzaItems}</div>
    </div>
  );
};

export default Home;
