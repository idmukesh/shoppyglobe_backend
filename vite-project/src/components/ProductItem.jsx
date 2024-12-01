import React from "react";
import "../ProductItem.css";
import { Link } from "react-router-dom";

// ProductItem component to display product details and actions
function ProductItem(props) {
  // Returning the product item containing the information from props
  return (
    <div className="product-item">
      <div className="image-container">
        <img src={props.image} alt="Product" className="product-image" />
        <div className="discount-badge">{props.discount} % Off</div>
      </div>
      <div className="product-details">
        <h1 className="product-title">{props.title}</h1>
        <p className="category">Category : {props.category}</p>
        <p className="price">Price: ${props.price}</p>
        <p className="stock">Stock: {props.stock}</p>
        <Link to={`/item/${props.id}`} className="view-more">
          <i className="fas fa-eye"></i> View More
        </Link>
        <button className="add-to-cart" onClick={props.handleAddItem}>
          <i className="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
