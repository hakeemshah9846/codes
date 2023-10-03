console.log("Javascript promise");

console.log("Start");


//To handle asynchronous operations we use callbacks
setTimeout(function () {
    console.log("Middle");
});

console.log("End");

//Callback hell

const cart = ["Watch","Bottle", "Laptop"];

//Consider we have these backend api's for an ecommerse application
api.createOrder();
api.proceedToPayment(); //Depends on createOrder
api.showOrderSummary(); //Depends on proceedToPayment
api.updateWallet(); //Depends on showOrderSummary

//The asynchronous behaiour of javascript executes these in different times, one way to maintain the dependency is to user callbacks;

api.createOrder(cart, function () {
    api.proceedToPayment(function() {
        api.showOrderSummary(function() {
            api.updateWallet();
        })
    })
});

//The above creats a callback hell and the code is so unreadable and unmaintainable
//Because of these structure it is also called Pyramid of Doom

//It also creates another probem called inversion of control
api.createOrder(cart, function() {
    api.proceedToPayment();
});

//We are blindly trusting createOrder api, if any bugs of if createOrder api is not written properly payment system will not work or works unappropriately causing multiple payments, or payment success wothout debiting any money, etc.