import React, { useEffect } from "react";
import "./ProductDetail.scss";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

import { onHoverChange, onClickChange } from "./ProductDetail";

const suggestedProduct = [
  {
    title: "Scrimshaw Knife Kit",
    price: "$48.50",
    img:
      "//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074",
  },
  {
    title: "Bear & Son Knife + Scrimshaw Kit",
    price: "$84.50",
    img:
      "//cdn.shopify.com/s/files/1/0156/0327/products/IMG_1399-web_large.jpg?v=1544721143",
  },
  {
    title: "CCC Legacy Bandana",
    price: "$14.50",
    img:
      "//cdn.shopify.com/s/files/1/0156/0327/products/IMG_8286-WEB_large.jpg?v=1511405685",
  },
  {
    title: "Woodland Jones Cap",
    price: "From $29.50",
    img:
      "//cdn.shopify.com/s/files/1/0156/0327/products/01242020_MJ_AM2570_1x1_web_large.jpg?v=1599849284",
  },
];

const ProductDetail = () => {
  useEffect(() => onClickChange());

  useEffect(() => onHoverChange());

  return (
    <div>
      <Header />
      <div className="container-detail">
        <div className="product-detail-container">
          <div className="left-content">
            <div className="product-img">
              <a href="/#" className="product-image">
                <img
                  src="//cdn.shopify.com/s/files/1/0156/0327/products/IMG_4571_1_1024x1024.jpg?v=1499307602"
                  alt="knife1"
                  className="image"
                  id="img-display"
                />
              </a>
            </div>
            <div className="product-imgs">
              <a href="/#" className="img">
                <img
                  src="//cdn.shopify.com/s/files/1/0156/0327/products/IMG_4571_1_compact.jpg?v=1499307602"
                  alt="knife1"
                  id="knife1"
                />
              </a>
              <a href="/#" className="img">
                <img
                  src="//cdn.shopify.com/s/files/1/0156/0327/products/fish.knife.b_compact.jpg?v=1474313324"
                  alt="knife2"
                  id="knife2"
                />
              </a>
              <a href="/#" className="img">
                <img
                  src="//cdn.shopify.com/s/files/1/0156/0327/products/fish.knife.wood_compact.png?v=1474313324"
                  alt="knife3"
                  id="knife3"
                />
              </a>
              <a href="/#" className="img">
                <img
                  src="//cdn.shopify.com/s/files/1/0156/0327/products/fish.knife_compact.jpg?v=1474313324"
                  alt="knife4"
                  id="knife4"
                />
              </a>
              <a href="/#" className="img knife5-img">
                <img
                  src="//cdn.shopify.com/s/files/1/0156/0327/products/IMG_4570_compact.jpg?v=1499307628"
                  alt="knife5"
                  className="knife5-img"
                  id="knife5"
                />
              </a>
            </div>
          </div>
          <div className="product-detail">
            <h2 className="product-name">FINGERLING FISH KNIFE ™</h2>
            <span className="product-price">$11.00</span>
            <button className="add-to-cart-btn">add to cart</button>
            <p className="product-description">
              Contributing to the avid search for the fighters of the fresh
              water streams are several state and federal hatcheries, as well as
              lakes maintained by such organizations as the Izaak Walton League.
              The hatcheries themselves offer a particularly interesting sight,
              whetting the angler’s appetite for this truly American sport.
            </p>
            <p className="sale-description">
              Juvenile fish, called fingerlings, are typically about the size of
              fingers. Boxed sculpted chrome handled knife - 3" closed. 2"
              stainless blade. Made by a 200 year old cutlery.
            </p>
            <button className="recomment">
              <i className="fab fa-facebook"></i>
              recomment
              <span>12</span>
            </button>
            <button className="share">
              <i className="far fa-share-square"></i>
              share<span>102</span>
            </button>
          </div>
        </div>
        <div className="products-suggested">
          <h2 className="products-suggested-title">you may also like...</h2>
          <ul>
            {suggestedProduct.map((e, i) => {
              return (
                <>
                  <li
                    id={`products-suggested-item${i}`}
                    className="products-suggested-item"
                    key={i}
                  >
                    <a href="/#" id={`product-suggest${i}`}>
                      <img
                        src={e.img}
                        alt="product-suggest"
                        className="suggest-img"
                        id={`suggest-img${i}`}
                      />
                    </a>
                    <h3 className="product-suggest-title">{e.title}</h3>
                    <span className="product-suggest-price">{e.price}</span>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
