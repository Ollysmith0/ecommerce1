import React from "react";
import './Content.scss';

const Content = () => {
    return(
    <>
        <form>
            <input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
            <input type="radio" name="fancy" value="hearts" id="hearts" />
            <input type="radio" name="fancy" value="spades" id="spades" />
            <input type="radio" name="fancy" value="diamonds" id="diamonds" />			
            <label className="slider-items" for="clubs"></label>
            <label className="slider-items" for="hearts"></label>
            <label className="slider-items" for="spades"></label>
            <label className="slider-items" for="diamonds"></label>
        </form>
        <div className="content">
            <div className="side__bar">
                <h4 className="side__bar__title">LINKS</h4>
                <ul className="side-bar-nav-items">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Term</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Return</a></li>
                </ul>
                <h4 className="side__bar__tag">TAGS</h4>
                <ul className="side-bar-items">
                    <li><a className="tag-item" href="#">ALL INVENTORY</a></li>
                    <li><a className="tag-item" href="#">BEST SELLER</a></li>
                    <li><a className="tag-item" href="#">CAMP</a></li>
                    <li><a className="tag-item" href="#">CLOTHING & ACCESSORIES</a></li>
                    <li><a className="tag-item" href="#">GEAR</a></li>
                </ul>
            </div>
            <div className="content__body">
                <div className="content__top">
                    <h1 className="content__title">INVENTORY</h1>
                    <div className="right-items">
                        <label className="content__label" htmlFor="featured">Sort by</label>
                        <select name="featured" id="featured">
                            <option value="bestselling">BEST SELLING</option>
                            <option value="bestselling">NAME: A - Z</option>
                            <option value="bestselling">NAME: Z - A</option>
                            <option value="bestselling">PRICE: LOW - HIGH</option>
                            <option value="bestselling">PRICE: HIGH - LOW</option>
                            <option value="bestselling">DATE: OLD - NEW</option>
                            <option value="bestselling">DATE: NEW - OLD</option>
                        </select>
                    </div>
                </div>
                <div className="product__collections">
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="box__product">
                        <figure>
                            <div className="image-table">
                                <div className="image-cell">
                                    <a className="product-image" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">
                                        <img src="//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw-knife-kit_large.jpg?v=1547229074" alt="knife"/>
                                        <span className="label-sale">On Sale</span>
                                    </a>
                                </div>
                            </div>
                            <figcaption>
                                <a className="product-title" href="https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit">Scrimshaw Knife Kit</a>
                                <span className="price">
                                    <span className="from">From</span>
                                    <span className="original-price">$48.50</span>
                                    <span className="money">$39.95</span>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="pagination-item">
                        <button className="page-item"><a href="#">1</a></button>
                        <button className="page-item"><a href="#">2</a></button>
                        <button className="page-item">
                        <a href="#"><i class="fas fa-arrow-right"></i></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
);
};

export default Content;