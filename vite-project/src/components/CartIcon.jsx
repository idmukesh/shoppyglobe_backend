// CartIcon.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function CartIcon() {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
    <Link to={"/cartPage"}>
      <div className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <div className="cart-count">{cartItems.length}</div>{" "}
        {/* Cart item count */}
      </div>
    </Link>
    </>
  
  );
}

export default CartIcon;
