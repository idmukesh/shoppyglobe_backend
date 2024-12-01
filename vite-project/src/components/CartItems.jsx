import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { decreaseQuantity } from "../utils/cartSlice";
import { encreaseQuantity } from "../utils/cartSlice";
import "../CartItem.css";

function CartItems(props) {
  const dispatch = useDispatch();

  // Function to handle removing an item from the cart
  function handleRemoveItem(item) {
    dispatch(removeItem(item));
  }

  // Function to decrease the quantity of an item in the cart
  function handleDecreaseQuantity(item) {
    dispatch(decreaseQuantity(item));
  }

  // Function to increase the quantity of an item in the cart
  function handleEncreaseQuantity(item) {
    dispatch(encreaseQuantity(item));
  }

  return (
    // cart item contains these details
    <div className="cartItem">
      <div className="image-container">
        <img src={props.image} alt="Product" className="product-image" />
      </div>
      <div className="product-details">
        <h1 className="product-title">{props.title}</h1>
        <p className="price">Price: ${props.price}</p>
        <div className="quantity-container">
          <button
            className="quantity-btn"
            onClick={() => handleDecreaseQuantity(props)}
          >
            <i className="fas fa-minus"></i>
          </button>
          <p className="quantity">Quantity: {props.quantity}</p>
          <button
            className="quantity-btn"
            onClick={() => handleEncreaseQuantity(props)}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <button
          className="remove-from-cart"
          onClick={() => handleRemoveItem(props)}
        >
          <i className="fas fa-trash-alt"></i> Remove
        </button>
      </div>
    </div>
  );
}

export default CartItems;
