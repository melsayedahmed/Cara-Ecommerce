// creating products

const featuredProducts = document.getElementById(`featured-products`);
const newArrivals = document.getElementById(`new-arrivals`);

const products = [
  {
    id: 1,
    imgSrc: `./images/f1.jpg`,
    type: `Shirt`,
    price: 29.99,
    quantity: 1,
    section: `Featured products`,
  },
  {
    id: 2,
    imgSrc: `./images/f2.jpg`,
    type: `Shirt`,
    price: 24.99,
    quantity: 1,
    section: `Featured products`,
  },
  {
    id: 3,
    imgSrc: `./images/f3.jpg`,
    type: `Shirt`,
    price: 19.99,
    quantity: 1,
    section: `Featured products`,
  },
  {
    id: 4,
    imgSrc: `./images/f4.jpg`,
    type: `Shirt`,
    price: 25.99,
    quantity: 1,
    section: `Featured products`,
  },
  {
    id: 5,
    imgSrc: `./images/f5.jpg`,
    type: `Shirt`,
    price: 30.99,
    quantity: 1,
    section: `Featured products`,
  },
  {
    id: 6,
    imgSrc: `./images/f6.jpg`,
    type: `Shirt`,
    price: 32.99,
    quantity: 1,
    section: `Featured products`,
  },
  {
    id: 7,
    imgSrc: `./images/f7.jpg`,
    type: `Pants`,
    price: 30.99,
    quantity: 1,
    section: `Featured products`,
  },
  {
    id: 8,
    imgSrc: `./images/f8.jpg`,
    type: `Shirt`,
    price: 36.99,
    quantity: 1,
    section: `Featured products`,
  },
  {
    id: 9,
    imgSrc: `./images/n1.jpg`,
    type: `Shirt`,
    price: 19.99,
    quantity: 1,
    section: `New arrivals`,
  },
  {
    id: 10,
    imgSrc: `./images/n2.jpg`,
    type: `Shirt`,
    price: 19.99,
    quantity: 1,
    section: `New arrivals`,
  },
  {
    id: 11,
    imgSrc: `./images/n3.jpg`,
    type: `Shirt`,
    price: 15.99,
    quantity: 1,
    section: `New arrivals`,
  },
  {
    id: 12,
    imgSrc: `./images/n4.jpg`,
    type: `Shirt`,
    price: 16.99,
    quantity: 1,
    section: `New arrivals`,
  },
  {
    id: 13,
    imgSrc: `./images/n5.jpg`,
    type: `Shirt`,
    price: 10.99,
    quantity: 1,
    section: `New arrivals`,
  },
  {
    id: 14,
    imgSrc: `./images/n6.jpg`,
    type: `Short`,
    price: 20.99,
    quantity: 1,
    section: `New arrivals`,
  },
  {
    id: 15,
    imgSrc: `./images/n7.jpg`,
    type: `Shirt`,
    price: 29.99,
    quantity: 1,
    section: `New arrivals`,
  },
  {
    id: 16,
    imgSrc: `./images/n8.jpg`,
    type: `Shirt`,
    price: 29.99,
    quantity: 1,
    section: `New arrivals`,
  },
];

products.map((e) => {
  const product = `<div class="card p-2 shadow" >
  <img src=${e.imgSrc} class="card-img-top" alt="product" />
  <div class="card-body">
    <div class="d-flex justify-content-between mb-2">
    <div>
      <p>adidas</p>
      <h5 class="toggle-color">${e.type}</h5>
    </div>
    <div>
      <div>
        <img class="star" src="./images/star.png" alt="star" /><img
          class="star"
          src="./images/star.png"
          alt="star"
        /><img class="star" src="./images/star.png" alt="star" /><img
          class="star"
          src="./images/star.png"
          alt="star"
        />
      </div>
      <h5 class="price">$${e.price}</h5>
    </div>
    </div>
    <div class="d-flex justify-content-between">
      <button onclick = "addToCart(${e.id})" type="button" class="add-to-cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#088178"
          class="bi bi-cart-fill ms-1"
          viewBox="0 0 16 16"          
        >
          <path
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"            
          />
        </svg>
      </button>
      <div id="card-controls" style="font-size: larger; color: black; width:40%" class="d-flex justify-content-between align-items-end mt-2">
        <button class = "card-controls card-increment-btn toggle-color" onclick="productIncrement(${e.id})">+</button>
        <p id = ${e.id} class = "card-quantity mb-1 toggle-color">${e.quantity}</p>
        <button class = "card-controls card-decrement-btn toggle-color" onclick="productDecrement(${e.id})">-</button>
        </div>
    </div>
  </div>
  </div>`;
  const createProduct = document.createElement(`div`);
  createProduct.classList.add(
    `col-lg-3`,
    `col-md-6`,
    `mb-5`,
    `wow`,
    `animate__animated`,
    `animate__fadeInUp`
  );
  createProduct.innerHTML = product;
  e.section === `Featured products`
    ? featuredProducts.appendChild(createProduct)
    : newArrivals.appendChild(createProduct);
});

let addedProducts = [];

// setting button effect

const addToCartButtons = document.querySelectorAll(`.add-to-cart`);

addToCartButtons.forEach((button) => {
  button.addEventListener(`click`, () => {
    button.style.outline = `5px solid #cdebbc `;
    const clearButtonEffect = () => {
      button.style.outline = `none`;
    };
    setTimeout(clearButtonEffect, 200);
  });
});

const productIncrement = (productId) => {
  const clickedProduct = products.find(({ id }) => id === productId);
  const check = addedProducts.find(({ id }) => id === productId);
  if (check === undefined) {
    clickedProduct.quantity++;
    productUpdate(productId);
  } else {
    return;
  }
};

const productDecrement = (productId) => {
  const clickedProduct = products.find(({ id }) => id === productId);
  const check = addedProducts.find(({ id }) => id === productId);
  if (check === undefined) {
    clickedProduct.quantity > 1 && clickedProduct.quantity--;
    productUpdate(productId);
  } else {
    return;
  }
};

const productUpdate = (productId) => {
  const clickedProduct = products.find(({ id }) => id === productId);
  document.getElementById(productId).innerHTML = clickedProduct.quantity;
};

// adding products to cart

const offCanvas = document.getElementById(`offcanvas-body`);

const counter = document.getElementById(`counter`);
const items = document.getElementById(`items`);
const total = document.getElementById(`total`);

const addToCart = (productId) => {
  const clickedProduct = products.find(({ id }) => id === productId);

  const check = addedProducts.find(({ id }) => id === productId);

  if (check === undefined) {
    addedProducts.push(clickedProduct);
    const product = `<div class="item">
  <div>
    <img src=${clickedProduct.imgSrc} width="50px" height="50px" />
    <p>${clickedProduct.type}</p>
  </div>
</div>
<div class="unit-price">$${clickedProduct.price}</div>
<div class="units">
  <div class="d-flex">
    <button class="offcanvas-increase-btn me-1" onclick = "increment(${clickedProduct.id})">+</button>
    <button class="offcanvas-decrease-btn" onclick = "decrement(${clickedProduct.id})">-</button>
    <p id = ${clickedProduct.id} class = "my-0 mx-1">${clickedProduct.quantity}</p>
    <button class="offcanvas-remove-btn" onclick="remove(${clickedProduct.id})">x</button>
  </div>
</div>`;
    const createProduct = document.createElement(`div`);
    createProduct.classList.add(
      `container`,
      `offcanvas-product`,
      `bg-secondary`,
      `py-1`,
      `mb-2`
    );
    createProduct.innerHTML = product;
    offCanvas.appendChild(createProduct);
  } else {
    alert(`This product has been already added to your cart!`);
  }
  counter.innerHTML = addedProducts.length;
  items.innerHTML = counter.innerHTML;
  total.innerHTML = `${calcTotal()}`;
};

const increment = (productId) => {
  const clickedProduct = addedProducts.find(({ id }) => id === productId);
  clickedProduct.quantity++;
  productUpdate(productId);
  total.innerHTML = `${calcTotal()}`;
};
const decrement = (productId) => {
  const clickedProduct = addedProducts.find(({ id }) => id === productId);
  clickedProduct.quantity > 1 && clickedProduct.quantity--;
  productUpdate(productId);
  total.innerHTML = `${calcTotal()}`;
};

const update = (productId) => {
  const clickedProduct = addedProducts.find(({ id }) => id === productId);
  document.getElementById(productId).innerHTML = clickedProduct.quantity;
};

const remove = (productId) => {
  const filteredProducts = addedProducts.filter((data) => data.id != productId);
  addedProducts = filteredProducts;
  offCanvas.innerHTML = ``;

  addedProducts.map((e) => {
    const product = `<div class="item">
  <div>
    <img src=${e.imgSrc} width="50px" height="50px" />
    <p>${e.type}</p>
  </div>
</div>
<div class="unit-price">$${e.price}</div>
<div class="units">
  <div class="d-flex">
    <button class="offcanvas-increase-btn pb-1 me-1" onclick = "increment(${e.id})">+</button>
    <button class="offcanvas-decrease-btn pb-1" onclick = "decrement(${e.id})">-</button>
    <p id = ${e.id} class = "my-0 mx-1">${e.quantity}</p>
    <button class="offcanvas-remove-btn pb-1" onclick="remove(${e.id})">x</button>
  </div>
</div>`;
    const createProduct = document.createElement(`div`);
    createProduct.classList.add(
      `container`,
      `offcanvas-product`,
      `bg-secondary`,
      `py-1`,
      `mb-2`
    );
    createProduct.innerHTML = product;
    offCanvas.appendChild(createProduct);
  });
  counter.innerHTML = addedProducts.length;
  items.innerHTML = counter.innerHTML;
  total.innerHTML = `${calcTotal()}`;
};

// calculate total price

const calcTotal = () => {
  let totalPrice;
  if (addedProducts.length === 0) {
    totalPrice = 0;
  } else {
    totalPrice = addedProducts
      .map((e) => {
        return e.quantity * e.price;
      })
      .reduce((total, num2) => {
        return total + num2;
      });
  }
  return totalPrice.toFixed(2);
};

// mode setting

let isDarkModeEnabled = false;
const modeBtn = document.getElementById(`mode-btn`);
const navBar = document.getElementById(`navbar`);
const toggleColorEls = document.querySelectorAll(`.toggle-color`);
const cards = document.querySelectorAll(`.card`);
const sidebar = document.getElementById(`offcanvasExample`);
const logoImgs = document.querySelectorAll(`.logo-img`);
const modeImg = document.getElementById(`mode-img`);
const addToCartImg = document.getElementById(`addtocart-img`);
const header = document.getElementById(`header`);

modeBtn.addEventListener(`click`, () => {
  isDarkModeEnabled ? changeToLightMode() : changeToDarkMode();
});

changeToDarkMode = () => {
  isDarkModeEnabled = true;
  navBar.style.backgroundColor = `black`;
  navBar.classList.replace(`navbar-light`, `navbar-dark`);
  document.body.style.backgroundColor = `black`;
  cards.forEach((e) => {
    e.style.backgroundColor = `#18191a`;
  });
  toggleColorEls.forEach((e) => {
    e.style.color = `white`;
  });

  sidebar.classList.replace(`bg-light`, `bg-dark`);
  sidebar.style.color = `white`;

  logoImgs.forEach((img) => {
    img.src = `images/logo-dark.png`;
  });
  modeImg.src = `images/light-mode.png`;
  addToCartImg.src = `images/atc-dark.png`;
  header.parentElement.style.backgroundColor = `#515256`;
};

changeToLightMode = () => {
  isDarkModeEnabled = false;
  navBar.style.backgroundColor = `#e3e6f3`;
  navBar.classList.replace(`navbar-light`, `navbar-dark`);
  document.body.style.backgroundColor = `white`;
  cards.forEach((e) => {
    e.style.backgroundColor = `white`;
  });
  toggleColorEls.forEach((e) => {
    e.style.color = `black`;
  });
  sidebar.classList.replace(`bg-dark`, `bg-light`);
  sidebar.style.color = `black`;

  logoImgs.forEach((img) => {
    img.src = `images/logo.png`;
  });
  modeImg.src = `images/dark-mode.png`;
  addToCartImg.src = `images/atc.png`;
  header.parentElement.style.backgroundColor = `#e3e6f3`;
};
