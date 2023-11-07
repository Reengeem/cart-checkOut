const cartContainer = document.querySelector("#cart-container");
const cartTotal = document.querySelector("#cart-total");
const checkOutBtn = document.querySelector("#checkOut-Btn");
console.log(cartContainer);

let cartItems = [
  {
    productId: "product-1",
    productTitle: "Oraimo 10000mah Power-Bank",
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/7283311/1.jpg?0878",
    productPrice: 9000,
    productQuantity: 1,
    like: false,
  },
  {
    productId: "product-2",
    productTitle: "Oraimo blender",
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/2629132/1.jpg?6822",
    productPrice: 4000,
    productQuantity: 1,
    like: false,
  },
  {
    productId: "product-3",
    productTitle: "Oraimo Clipper",
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/6146232/1.jpg?7334",
    productPrice: 2000,
    productQuantity: 1,
    like: false,
  },
  {
    productId: "product-4",
    productTitle: "Oraimo Headphones",
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/8877601/1.jpg?0813",
    productPrice: 3000,
    productQuantity: 1,
    like: false,
  },
];

let totalCostOfItemsInCart;
// function to display cart items================

function displayCartItems() {
  //  Step 1, map over the product parameters
  let currencyDisplay = Intl.NumberFormat("en-US");

  cartContainer.innerHTML = cartItems
    .map((item) => {
      return `<div class="single-product">
    
    <div id="remove-div">
    <img
      src="${item.productImage}"
      alt=""
      class="product-image"
    />
    <div id="trash-icon">
    <i class="fa-solid fa-trash" style="color: #ff1100;"></i>
    <button class="remove-item" onclick=removeItemFromCart('${
      item.productId
    }')>Remove</button>
    </div>
   
    </div>
    <div class="product-information">
      <h3 class="product-title">${item.productTitle}</h3>
      
      <!-- product quantity ---------->
      <div id="amount-btn">
      <p class="product-amount">&#8358; ${currencyDisplay.format(
        item.productPrice
      )}</p>
        <button class="change-quantity" onclick=decreaseQuantity('${
          item.productId
        }')>-</button><span> <input type="text" id="quantity-input" value="${
        item.productQuantity
      }"></span><button class="change-quantity" onclick=increaseQuantity('${
        item.productId
      }')>+</button>
      </div>
      
      <button onclick=updateProductLikeness('${
        item.productId
      }') class='like-btn'>
      ${
        item.like === true
          ? `<i class="fa-solid fa-heart" style="color: #fa0505;"></i>`
          : `<i class="fa-regular fa-heart" style="color: #252323;"></i>`
      }
      </button>
      
    </div>
    </div>`;
    })
    .join(" ");
}
displayCartItems(cartItems);
calculateCartTotal();

// funtion to icrease quantity of a product
function increaseQuantity(id) {
  cartItems.forEach((item) => {
    if (item.productId === id) {
      item.productQuantity = item.productQuantity + 1;
    }
  });
  displayCartItems(cartItems);
  calculateCartTotal();
}

// funtion to decrease quantity of a product
function decreaseQuantity(id) {
  cartItems.forEach((item) => {
    if (item.productQuantity === 1) {
      return;
    }
    if (item.productId === id) {
      item.productQuantity = item.productQuantity - 1;
    }
  });
  displayCartItems(cartItems);
  calculateCartTotal();
}

function removeItemFromCart(id) {
  cartItems = cartItems.filter((item) => item.productId !== id);
  console.log(cartItems);
  displayCartItems(cartItems);
  calculateCartTotal();
  return cartItems;
}

function calculateCartTotal() {
  let totalCostOfItemsInCart = cartItems.reduce((total, value) => {
    return total + value.productQuantity * value.productPrice;
  }, 0);
  cartTotal.textContent = totalCostOfItemsInCart;
}
calculateCartTotal();

// funtion to check if customer likes item
function updateProductLikeness(id) {
  cartItems.forEach((item) => {
    if (item.productId === id && item.like === false) {
      item.like = true;
    } else if (item.productId === id && item.like === true) {
      item.like = false;
    }
  });
  displayCartItems(cartItems);
}

//   let cartProducts = products.map(
//       (item) => `<div class="single-product">
//   <img
//     src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/7283311/1.jpg?0878"
//     alt=""
//     class="product-image"
//   />
//   <div class="product-information">
//     <h3 class="product-title">Oraimo 10000mah Power-Bank OPB-P118D</h3>
//     <p class="product-amount">9000</p>
//     <!-- product quantity ---------->
//     <div>
//       <button>-</button><span>1</span>1<span><button>+</button></span>
//     </div>
//   </div>
//   </div>`
//   );
//   return (cartContainer.innerHTML = cartProducts.join(""));

// displayCartItems(cartItems);
console.log(cartItems);
