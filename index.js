var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  const itemPrice = Math.floor(Math.random() * 100) + 1;
  cart.push ({[itemName]: itemPrice});
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (!cart.length){
    console.log ("Your shopping cart is empty.");
  }
  const l = cart.length;

  let itemsAndPrices = [];

  for (let i=0; i<l; i++){
    let itemsAndPrices = cart[i];
    let item = object.keys(itemsAndPrices)[0];
    let price = itemsAndPrices[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

  return `In your cart, you have`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log ("Sorry, we don't have a credit card on file for you.");
    return false;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
