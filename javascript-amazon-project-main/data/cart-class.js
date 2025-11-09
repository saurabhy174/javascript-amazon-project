class Cart{
   cartItems ;
   localStorageKey ;

   constructor(localStorageKey){
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
   }
                                 //function 1
    loadFromStorage (){
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
      
  if(!this.cartItems){
        this.cartItems=[{
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
}
                          // function 2
saveToStorage (){
    localStorage.setItem(this.localStorageKey,JSON.stringify(this.cartItems));   //whenever we update the cart, we save it to local storage
}
                        //function 3
addToCart (productId){
     let matchingItem;
    this.cartItems.forEach((cartItem)=>{                         // loop through cart and check if current is present or not
        if(productId === cartItem.productId){         
            matchingItem=cartItem;
        }
    });
    if(matchingItem){
        matchingItem.quantity+=1;
    }
    else{
        this.cartItems.push({
    productId:productId,
    quantity:1,
    deliveryOptionId:'1'
   }) ;
    }
    this.saveToStorage();
}
                        //function 4
removeFromCart (productId){      
    const newCart = [];
    this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId !==productId){
            newCart.push(this.cartItem);
        }
    });
    this.cartItem=newCart;
    this.saveToStorage();
}
                                 //function 5

updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    this.cartItems.forEach((cartItem)=>{
        if(productId === cartItem.productId){
            matchingItem=cartItem;
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  }


}

const cart =  new Cart('cart-oop');     //cart is instance of class 
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);

