/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;
let cartContainer = document.querySelectorAll('cart');
// let myContainer = document.querySelector('copy');

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  table.removeChild(table.lastChild);
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tbody = table.children[1]; 
  let items = cart.items;
  console.log(cart);
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  // let tr = document.createElement('tr');
  // let td = document.createElement('td');
  // td.textContent = 'delete';
  // td.textContent = 'quantity';
  // td.textContent = 'item';
  // tr.appendChild(td);
  
  for (let i = 0; i < items.length; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = 'X';
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = items[i].quantity;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = items[i].product;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  function handleClick(event) {
    let itemClicked = event.target.title;

    if (event.target === table) {

    }
  }
  // TODO: Save the cart back to local storage
  let stringifiedItems = JSON.stringify(cart);
  localStorage.setItem('items', stringifiedItems);
  // TODO: Re-draw the cart table
  rendershowCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
