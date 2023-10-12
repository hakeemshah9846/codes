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

//We are blindly trusting createOrder api, if any bugs of if createOrder api is not written properly payment system will not work or works unappropriately causing multiple payments, or payment success without debiting any money, etc.


//Promises
let p = new Promise((resolve, reject) => {
    let a = 1+2;

    if(a == 2) {
        resolve("Success");
    }else {
        reject("Failed");
    }
});


p.then((message) => {
    console.log("Then : ", message);
})
.catch((message) => {
    console.log("Catch : ", message);
});

//Example
function gamePlayCallback(callback, errorCallback) {
    let userLeft = false
    let userNotPlaying = false
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } else if (userNotPlaying) {
      errorCallback({
        name: 'Player1',
        message: 'Message for user not playing game' 
      })
    } else {
      callback('User not left and playing...')
    }
  }

  console.log("Reached here...");
  //Calling gamePlayCallback
  gamePlayCallback(message => {
    console.log(message);
  }, error => {
    console.log("name : ", error.name);
    console.log("message : ", error.message);
  });



  function gamePlayPromise() {
    let userLeft = false
    let userNotPlaying = false
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left', 
          message: ':('
        })
      } else if (userNotPlaying) {
        reject({
          name: 'Player1',
          message: 'User not playing game' 
        })
      } else {
        resolve('User playing game and not left')
      }
    })
  }
  
  gamePlayPromise()
    .then((message) => {
        console.log("Promise message : ", message)
    })
    .catch((error)=> {
        console.log("name : " + error.name + "and" + "message : " + error.message);
    });


//   watchTutorialCallback(message => {
//     console.log(message)
//   }, error => {
//     console.log(error.name + ' ' + error.message)
//   })
  
//   watchTutorialPromise().then(message => {
//     console.log(message)
//   }).catch(error => {
//     console.log(error.name + ' ' + error.message)
//   })


  
  const gamePlayOne = new Promise((resolve, reject) => {
    reject('Playing game 1');
  })
  
  const gamePlayTwo = new Promise((resolve, reject) => {
    resolve('Playing game 2');
  });
  
  const gamePlayThree = new Promise((resolve, reject) => {
    resolve('Playing game 3');
  })
  

  //It will wait for every promise to be
  Promise.all([
    gamePlayOne,
    gamePlayTwo,
    gamePlayThree
  ]).then(messages => {
    console.log("Messages from multiple promises",messages);
  })
  
  //It will return as soon as the first one is completed instead of waiting for all to complete
  Promise.race([
    gamePlayOne,
    gamePlayTwo,
    gamePlayThree
  ]).then(messages => {
    console.log("Messages from multiple promises using race",messages);
  })