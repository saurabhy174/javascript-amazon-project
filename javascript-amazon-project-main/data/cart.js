export const cart = [];


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
    quantity:1
   }) ;
    }
}