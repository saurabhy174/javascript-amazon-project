export const orders = JSON.parse(localStorage.getItem('orders')) || []; // if noting in array, empty array use as default

export function addOrder(order){
    orders.unshift(order);   // we want the most recent order first so we use unshift, it add order at front
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('orders',JSON.stringify(orders));
}