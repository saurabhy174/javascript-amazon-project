export let cart = JSON.parse(localStorage.getItem('cart'));
       if(!cart){
        cart=[{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6' ,
    quantity: 2,
    deliveryOptionId:'1'
},
{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d' ,
    quantity: 1,
    deliveryOptionId:'2'
}];
       }
function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));   //whenever we update the cart, we save it to local storage
}

export function addToCart(productId){
     let matchingItem;
    cart.forEach((cartItem)=>{                         // loop through cart and check if current is present or not
        if(productId === cartItem.productId){         
            matchingItem=cartItem;
        }
    });
    if(matchingItem){
        matchingItem.quantity+=1;
    }
    else{
        cart.push({
    productId:productId,
    quantity:1,
    deliveryOptionId:'1'
   }) ;
    }
    saveToStorage();
}

export function removeFromCart(productId){   //create a new array, loop through the cart, add each product to new array,except for this productId
    const newCart = [];
    cart.forEach((cartItem)=>{
        if(cartItem.productId !==productId){
            newCart.push(cartItem);
        }
    });
    cart=newCart;
    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  const matchingItem = cart.find(cartItem => cartItem.productId === productId);
  if (matchingItem) {
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
  }
}