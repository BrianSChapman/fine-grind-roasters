import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Productlist from "./Productlist";
import Cart from "./Cart";
import Category from "./Category";
import Productpage from "./Productpage";
import Cartbutton from "./Cartbutton";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState();

  const [products, setProducts] = useState([
    {
      title: "Drip Coffee",
      price: "2.50",
      category: "coffee",
      id: uuid(),
    },
    {
      title: "Au Lait",
      price: "3.50",
      category: "coffee",
      id: uuid(),
    },
    {
      title: "Cold Brew",
      price: "4.00",
      category: "coffee",
      id: uuid(),
    },
    {
      title: "Americano",
      price: "3.00",
      category: "espresso",
      id: uuid(),
    },
    {
      title: "Espresso",
      price: "4.00",
      category: "coffee",
      id: uuid(),
    },
    {
      title: "Cortado",
      price: "3.75",
      category: "espresso",
      id: uuid(),
    },
    {
      title: "Latte",
      price: "4.25",
      category: "espresso",
      id: uuid(),
    },
    {
      title: "Cappuccino",
      price: "4.00",
      category: "espresso",
      id: uuid(),
    },
    {
      title: "Chai Tea Latte",
      price: "4.00",
      category: "non-coffee",
      id: uuid(),
    },
    {
      title: "Matcha Latte",
      price: "4.25",
      category: "non-coffee",
      id: uuid(),
    },
    {
      title: "Hot Chocolate",
      price: "4.00",
      category: "non-coffee",
      id: uuid(),
    },
    {
      title: "Assorted Teas",
      price: "2.75",
      category: "non-coffee",
      id: uuid(),
    },
    {
      title: "Croissant",
      price: "3.00",
      category: "food",
      id: uuid(),
    },
    {
      title: "Iced Lemon Cake",
      price: "3.50",
      category: "food",
      id: uuid(),
    },
    {
      title: "Muffins",
      price: "2.50",
      category: "food",
      id: uuid(),
    },
    {
      title: "Donut",
      price: "3.50",
      category: "food",
      id: uuid(),
    },
  ]);

  const addToCart = (id) => {
    setCartItems((prevState) => [
      ...prevState,
      products.find((item) => item.id === id),
    ]);
  };

  const removeFromCart = (id) => {
    setTimeout(() => {
      setCartItems(cartItems.filter((item) => item.id !== id));
    }, 0);
  };

  return (
    <div className="home">
      <header className="header">
        <div className="logo">Fine Grind Roaster</div>
      </header>
      <Router>
        <Route path="/">
          <Cartbutton />
        </Route>
        <Route exact path="/">
          <Category changeCategory={(category) => setCategory(category)} />
        </Route>
        <Route exact path="/products">
          <Productlist list={products} category={category} />
        </Route>
        <Route exact path="/products/:title">
          <Productpage list={products} addToCart={addToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart cartItems={cartItems} removeItem={removeFromCart} />
        </Route>
      </Router>
    </div>
  );
}
