import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../CartPage.css";
import useFetch from "../utils/useFetch";
import CartItems from "./CartItems";

// CartPage component to display the cart items
function CartPage() {
  // Fetching data from the API (products data)
  const { data, loading, error } = useFetch("http://localhost:5100/api/Products");

  // Accessing cart items from the Redux store
  const cartItems = useSelector((store) => store.cart.items);

  // State to filter and store cart items that match the products data
  const [filterCart, setFilterCart] = useState([]);

  // Using useEffect to filter products and update filterCart state when data changes
  useEffect(() => {
    if (data) {
      setFilterCart(
        data.products.filter((product) =>
          cartItems.some((cartItem) => cartItem.id === product.id)
        )
      );
    }
  }, [data, cartItems]);

  // Cart page to show cart items
  return (
    <>
      <div className="cart-page-header-container">
        <h1>
          <i className="fas fa-star"></i> Review Your Cart Items
        </h1>
        <p className="subtitle">
          You're just a step away from completing your purchase!
        </p>
      </div>
      <div className="product-list-container">
        {/* Display cart items if there are any, else show a message */}
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItems
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.images}
              quantity={item.quantity}
            />
          ))
        ) : (
          <p>No items in your cart</p>
        )}
      </div>
    </>
  );
}

export default CartPage;
