import "../Header.css";
import Search from "./Search";
import { Link } from "react-router-dom";

// Header component that displays the website header
function Header() {
  return (
    <>
      <Search />
      <header>
        <div className="left-header">
          {/* Welcome message and the title of the website */}
          <p>
            Welcome to <span>ShoppyGlobe !</span>
          </p>
          <h1>Discover Endless Shopping</h1>
          <p>
            Explore a wide range of products, from fashion essentials to home
            decor!
          </p>
          {/* Link to the search page to explore products */}
          <Link to={"/searchPage"}>
            <button>Shop Now</button>
          </Link>
          {/* Link to the About page */}
          <Link to={"/about"}>
            <button>Know More</button>
          </Link>
        </div>
        <div className="right-header">
          {/* Image displayed on the right side of the header */}
          <img src="/header-img1.0.jpg" alt="Header Image" />
        </div>
      </header>
    </>
  );
}

export default Header;
