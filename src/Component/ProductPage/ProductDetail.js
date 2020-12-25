const displayImg = [
  {
    img1:
      "//cdn.shopify.com/s/files/1/0156/0327/products/IMG_4571_1_1024x1024.jpg?v=1499307602",
  },
  {
    img2:
      "//cdn.shopify.com/s/files/1/0156/0327/products/fish.knife.b_1024x1024.jpg?v=1474313324",
  },
  {
    img3:
      "//cdn.shopify.com/s/files/1/0156/0327/products/fish.knife.wood_1024x1024.png?v=1474313324",
  },
  {
    img4:
      "//cdn.shopify.com/s/files/1/0156/0327/products/fish.knife_1024x1024.jpg?v=1474313324",
  },
  {
    img5:
      "//cdn.shopify.com/s/files/1/0156/0327/products/IMG_4570_1024x1024.jpg?v=1499307628",
  },
];

const onHoverChange = () => {
  const parent0 = document.getElementById("products-suggested-item0");
  const parent1 = document.getElementById("products-suggested-item1");
  const parent2 = document.getElementById("products-suggested-item2");
  const parent3 = document.getElementById("products-suggested-item3");

  const child0 = document.getElementById("product-suggest0");
  const child1 = document.getElementById("product-suggest1");
  const child2 = document.getElementById("product-suggest2");
  const child3 = document.getElementById("product-suggest3");

  const deActive0 = document.getElementById("suggest-img0");
  const deActive1 = document.getElementById("suggest-img1");
  const deActive2 = document.getElementById("suggest-img2");
  const deActive3 = document.getElementById("suggest-img3");

  parent0.onmouseenter = () => {
    child0.style.backgroundImage =
      "url(//cdn.shopify.com/s/files/1/0156/0327/products/IMG_7361_large.jpg?v=1547229074)";
    deActive0.style.opacity = "0";
  };

  parent0.onmouseleave = () => {
    deActive0.style.opacity = "1";
  };

  parent1.onmouseenter = () => {
    child1.style.backgroundImage =
      "url(//cdn.shopify.com/s/files/1/0156/0327/products/scrimshaw.mj_large.png?v=1544721143)";
    deActive1.style.opacity = "0";
  };

  parent1.onmouseleave = () => {
    deActive1.style.opacity = "1";
  };

  parent2.onmouseenter = () => {
    child2.style.backgroundImage =
      "url(//cdn.shopify.com/s/files/1/0156/0327/products/IMG_5852_large.JPG?v=1511405664)";
    deActive2.style.opacity = "0";
  };

  parent2.onmouseleave = () => {
    deActive2.style.opacity = "1";
  };

  parent3.onmouseenter = () => {
    child3.style.backgroundImage =
      "url(//cdn.shopify.com/s/files/1/0156/0327/products/7993JonesCap_large.jpg?v=1599849373)";
    deActive3.style.opacity = "0";
  };

  parent3.onmouseleave = () => {
    deActive3.style.opacity = "1";
  };
};

const onClickChange = () => {
  const knife1 = document.getElementById("knife1");
  const knife2 = document.getElementById("knife2");
  const knife3 = document.getElementById("knife3");
  const knife4 = document.getElementById("knife4");
  const knife5 = document.getElementById("knife5");

  const display = document.getElementById("img-display");
  knife1.addEventListener("click", () => {
    display.src = displayImg[0].img1;
  });
  knife2.addEventListener("click", () => {
    display.src = displayImg[1].img2;
  });
  knife3.addEventListener("click", () => {
    display.src = displayImg[2].img3;
  });
  knife4.addEventListener("click", () => {
    display.src = displayImg[3].img4;
  });
  knife5.addEventListener("click", () => {
    display.src = displayImg[4].img5;
  });
};

export { onHoverChange, onClickChange };
