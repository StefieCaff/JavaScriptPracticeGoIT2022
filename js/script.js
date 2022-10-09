"use strict";

// DO NOT REMOVE CODE ABOVE THIS LINE !

// let message = "hello Sam and Jandy ! You are rad !"

// console.log(message);

// const message = "JavaScript is awesome!";
// alert(message);

// const username = "Mango";
// console.log("Username is ", username); // Username is Mango

// const message = "JavaScript is awesome!";
// console.log(message); // JavaScript is awesome!


// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN


function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line

  const totalPrice = (pricePerDroid * orderedQuantity);

  if (totalPrice > customerCredits) {
    let message = "Insufficient funds!";
  }

  else {
    customerCredits -= totalPrice;
    
    let message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits 
    left`;
  }
  // Change code above this line
 
  
  return message;
}

makeTransaction(3000, 5, 23000);
makeTransaction(1000, 3, 15000);  
makeTransaction(5000, 10, 8000);
makeTransaction(2000, 8, 10000);
makeTransaction(500, 10, 5000);
