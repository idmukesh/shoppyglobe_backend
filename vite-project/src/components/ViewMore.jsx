import React, { useEffect, useState } from "react";
import "../ViewMore.css";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

function ViewMore() {
  const { data, loading, error } = useFetch("http://localhost:5100/api/Products");
  const params = useParams(); // Access product ID from URL
  const [item, setItem] = useState(null); // Store the product directly as an object

  const navigate = useNavigate();

  // Function to navigate back to the previous page
  function backButton() {
    navigate(-1);
  }

  useEffect(() => {
    if (data) {
      // Find the product with the matching ID from the URL
      const product = data.products.find((product) => product.id == params.id);
      if (product) {
        setItem(product); // Set the state with the found product
      }
    }
  }, [data, params.id]);

  // If loading or error occurs, show appropriate messages
  if (loading) {
    return (
      <div className="view-more-spinner">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="view-more-container">
      {item && ( // Check if item is not null
        <div className="view-more-details" key={item.id}>
          <h2>{item.title}</h2>
          <img
            src={item.images}
            alt={item.title}
            className="view-more-image"
          />
          <p className="description">{item.description}</p>

          <div className="additional-info">
            <p>
              <strong>Price:</strong> ${item.price}
            </p>
            <p>
              <strong>Rating:</strong> {item.rating}/5
            </p>
            <p>
              <strong>Stock:</strong> {item.stock} remaining
            </p>
            <p>
              <strong>Warranty:</strong> {item.warrantyInformation}
            </p>
            <p>
              <strong>Shipping Info:</strong> {item.shippingInformation}
            </p>
            <p>
              <strong>Category:</strong> {item.category}
            </p>
            <button className="back-button" onClick={backButton}>
              &#8592; Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewMore;
