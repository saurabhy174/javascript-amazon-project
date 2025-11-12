import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js';                // only run all code without impoerting anything
// import '../data/backend-practice.js'
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
 
Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{                                                
         loadProducts(()=>{                       
         resolve('value1');
      }); 
    }),
    new Promise((resolve)=>{
            loadCart(()=>{
                resolve(); 
            });
            })
]).then((values)=>{
     console.log(values);
     renderOrderSummary();
     renderPaymentSummary(); 
});

/*
new Promise((resolve)=>{                      // when we make object of promise class, it runs the function we pass imediately
                                             // resolve let us control when to go to next step 
         loadProducts(()=>{                       //some asynchrnous work here
         resolve('value1');
      }); 

      }).then((value)=>{
        console.log(value);
         return new Promise((resolve)=>{
            loadCart(()=>{
                resolve();
            });
            });

       }).then(()=>{
          renderOrderSummary();
          renderPaymentSummary(); 
       });

//multiple callbacks cause a lot of nesting
*/

   /*
loadProducts(()=>{
    loadCart(()=>{
         renderOrderSummary();
   renderPaymentSummary();   
        });
    });
*/
