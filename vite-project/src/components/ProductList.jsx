import useFetch from "../utils/useFetch";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "../ProductList.css";
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Footer from "./Footer";



// ProductList component that fetches and displays a list of products
function ProductList() {
  // Using useFetch to fetch product data
  const { data, error, loading } = useFetch("http://localhost:5100/api/Products");

  // State to store all fetched products
  const [allProducts, setProducts] = useState([]);

  // Redux dispatch to add item to the cart
  const dispatch = useDispatch();

  // Function to handle adding an item to the cart
  function handleAddItem(item) {
    dispatch(addItem(item));
  }


  // UseEffect hook to update the state when data is fetched
  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  // Error handling if fetching data fails
  if (error) {
    return <p className="error-message">{error}</p>;
  }

  // Show a loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="product-list-spinner">
        <Spinner />
      </div>
    );
  }

  // Product list rendering
  return (
    <>
      <div className="product-list-container">
        {allProducts.length > 0 ? (
          allProducts.map((product) => (
            <ProductItem
              key={product.id} // This is the key prop
              id={product.id}
              title={product.title}
              price={product.price}
              stock={product.stock}
              image={product.images}
              category={product.category}
              discount={product.discountPercentage}
              handleAddItem={() => handleAddItem(product)}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      {/* Footer component */}
      <Footer />
    </>
  );
}

export default ProductList;
