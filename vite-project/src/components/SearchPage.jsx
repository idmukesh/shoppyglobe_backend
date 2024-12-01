import { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import ProductItem from "./ProductItem";
import "../SearchPage.css";
import { clearSearchTerm } from "../utils/searchSlice";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
function SearchPage() {
  // fetching data to show the data in searchPage
  const { data, error, loading } = useFetch("http://localhost:5100/api/Products");
  const [filterProduct, setFilterProduct] = useState([]);
  const searchTerm = useSelector((sotre) => sotre.search.searchTerm);

  // Add item
  const dispatch = useDispatch();
  function handleAddItem(item) {
    dispatch(addItem(item));
  }

  //filtering from items
  useEffect(() => {
    if (data) {
      setFilterProduct(data.products.filter((product) => product.rating >= 4));
      if (searchTerm.length > 0) {
        setFilterProduct(
          data.products.filter(
            (product) =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              product.category.includes(searchTerm.toLowerCase())
          )
        );
      }
    }
  }, [data, searchTerm]);

  return (
    <>
      <div
        className={` ${searchTerm.length > 0
            ? "display-none"
            : "search-page-header-container"
          }`}
      >
        <h1>
          <i className="fas fa-star"></i> Popular Products
        </h1>
        <p className="subtitle">Browse through our top-rated products</p>
      </div>
      {loading && (
        <div className="search-page-spinner">
          <Spinner />
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
      <div
        className={` ${loading ? "display-none" : "product-list-container"}`}
      >
        {filterProduct.length > 0 ? (
          filterProduct.map((product) => (
            <ProductItem
              key={product.id}  // This is the key prop
              title={product.title}
              price={product.price}
              stock={product.stock}
              image={product.images}
              id={product.id}
              category={product.category}
              handleAddItem={() => handleAddItem(product)}
            />
          ))
        ) : (
          <p> </p>
        )}
      </div>
    </>
  );
}

export default SearchPage;
