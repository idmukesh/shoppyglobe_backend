import React from "react";
import "../About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      {/* section for about detail */}
      <section className="about-container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to ShoppyGlobe, your one-stop destination for all your
            shopping needs. At ShoppyGlobe, we bring you a curated collection of
            high-quality products, from fashion essentials to home decor,
            electronics, beauty products, and more. We aim to offer a seamless
            shopping experience that combines convenience, affordability, and
            style.
          </p>
          <p>
            We are passionate about providing our customers with the best online
            shopping experience. Whether you're shopping for the latest trends
            or everyday essentials, we are here to offer a wide range of
            products to suit your needs. We hope you enjoy browsing our store
            and find exactly what you're looking for!
          </p>
          <Link to={"/searchPage"}>
            <button>Shop Now</button>
          </Link>
        </div>
        <div className="about-image">
          <img src="./header-img2.jpg" alt="About Us Image" />
        </div>
      </section>

      {/* "Why Choose Us?" Section */}
      <section className="why-choose-us-container">
        <div className="why-choose-us-content">
          <h2>Why Choose Us?</h2>
          <p>
            At ShoppyGlobe, we are committed to providing not only great
            products but also an exceptional shopping experience. Here's why you
            should shop with us:
          </p>
          <ul>
            <li>Top-notch products from trusted brands</li>
            <li>Competitive prices with regular discounts</li>
            <li>Fast and reliable shipping</li>
            <li>Responsive customer support</li>
            <li>Easy returns and hassle-free exchanges</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
