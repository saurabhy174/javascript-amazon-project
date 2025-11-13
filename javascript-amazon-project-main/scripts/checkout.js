import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js';                // only run all code without impoerting anything
// import '../data/backend-practice.js'
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
 
async function loadPage(){
          try{
               //throw 'error1';
                await loadProductsFetch();

              const value =  await new Promise((resolve, reject)=>{                                                
              // throw 'error2';
              loadCart(()=>{                       
              // reject ('error3');
               resolve();
         }); 

         });    // we simply wait for the cart to load (promise to finish) without any then statement
   
      } catch(error) {
         console.log('unexpected error. try again later');
      }
     
      renderOrderSummary();
      renderPaymentSummary();  
      
   }
      loadPage();


      
/*
Promise.all([
    loadProductsFetch(),

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
