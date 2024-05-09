'use strict';

const cartList = document.querySelector('#cart-list');
const totalPriceElement = document.querySelector('#total-price');
const addItemBtn = document.querySelector('#add-item-btn');
const priceInput = document.querySelector('#price-input');

// const cartList = document.querySelector('#cart-list');
// const totalPriceElement = document.querySelector('#total-price');
// const addItemBtn = document.querySelector('#add-item-btn');
// const priceInput = document.querySelector('#price-input');

addItemBtn.addEventListener('click', () => {
  const newItemPrice = parseFloat(priceInput.value);

  if(isNaN(newItemPrice) || newItemPrice <= 0) {
    alert('正しい料金を入力してください。');
    return;
  }

  const newItem = document.createElement('li');
  newItem.setAttribute('price', newItemPrice);
  newItem.textContent = `商品 - ¥${newItemPrice}`;
  cartList.appendChild(newItem);

  updateTotalPrice();

  priceInput.value = '';
});

// addItemBtn.addEventListener('click', () => {
//   const newItemPrice = parseFloat(priceInput.value);

//   if(isNaN(newItemPrice) || newItemPrice <= 0) {
//     alert('正しい料金を入力してください。');
//     return;
//   }
  
//   const newItem = document.createElement('li');
//   newItem.setAttribute('price', newItemPrice);
//   newItem.textContent = `新商品 - ¥${newItemPrice}`;

//   cartList.appendChild(newItem);

//   updateTotalPrice();

//   priceInput.value = '';
// });

function updateTotalPrice() {
  const cartItems = cartList.querySelectorAll('li');
  const totalPrice = Array.from(cartItems).reduce((sum, listItem) =>{
    const itemPrice = parseFloat(listItem.getAttribute('price'));
    return sum + itemPrice;
  },0);

  totalPriceElement.innerHTML = `<h2>¥${totalPrice}</h2>`;
}

// function updateTotalPrice() {
//   const cartItems = cartList.querySelectorAll('li');
//   const totalPrice = Array.from(cartItems).reduce((sum, listItem) => {
//     const itemPrice = parseFloat(listItem.getAttribute('price'));
//     return sum + itemPrice;
//   },0);

//   totalPriceElement.innerHTML = `<h1>¥${totalPrice}</h1>`;
// }