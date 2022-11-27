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


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
// 	let message;
// 	// Change code below this line
// 	const totalPrice = pricePerDroid * orderedQuantity;
// 	if (totalPrice > customerCredits) {
// 		message = 'Insufficient funds!';
// 	} else {
//         message = `You ordered ${orderedQuantity} droids, 
//         you have ${customerCredits - totalPrice} credits left`;	
//     }
// 	// Change code above this line
// 	return message;
// }


// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);  
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
  
//   if (totalSpent >= 50000) {
//     discount === GOLD_DISCOUNT;
//   }
    
//   else if (totalSpent < 50000 && totalSpent >= 20000) {
//     discount === SILVER_DISCOUNT; 
//   }

//   else if (totalSpent < 20000 && totalSpent >= 5000) {
//       discount == BRONZE_DISCOUNT;
      
//   }

//   else {
//       discount === BASE_DISCOUNT;
      
//   }
  
//   // Change code above this line
//   return discount;
// }

// AUTOCHECK 31
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(lastElement);


// Lecture 3const clients = ["Mango", "Ajax", "Poly"];

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Poly", "Ajax", "Duma"];
// const clientNameToFind = "Duma";
// let message;

// for (const client of clients) {
//   // At each iteration, check if the array element matches
//   // client's name. If it matches, then log a message
//   // and make a break so as not to look further
//   if (client === clientNameToFind) {
//     message = "Client name exists in the database!";
//     break;
//   }

//   // If no match is found, create a message saying that there is no such a name
//   message = "Client name does not exist in the database!";
// }

// console.log(message); // "Client name exists in the database!"

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// For numbers less than the threshold value, continue is triggered, the body execution stops
// and control is passed to the next iteration.


// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Number is greater than ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


// function getExtremeElements (array) {
//   // Change code below this line
//     const firstElement = array[0];
//     const lastElementIndex = array.length - 1; 
//     const lastElement = array[lastElementIndex];

//     return [firstElement, lastElement];
//   // Change code above this line
// }
// getExtremeElements(["apple", "peach", "pear", "banana"]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements([1, 2, 3, 4, 5]);

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//     words = [message.split(), []];
 
//   // Change code above this line
//   return words;
// }

// splitMessage("Mango hurries to the train", " ");

// splitMessage("Mango", "");

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     const price = (message.length * pricePerWord);
   

// return price;
//    // Change code above this line
// }

// function slugify(title) {
//   // Change code below this line
//   const normalizedtitle = title.toLowerCase();
//     const titleToArray = normalizedtitle.split(" ");
//     console.log(titleToArray);

//   const slugTitle = titleToArray.join("-");
//     console.log(slugTitle);
//     return slugTitle;
//   // Change code above this line
// }

// slugify("Ten secrets of JavaScript")
// slugify("How to become a JUNIOR developer in TWO WEEKS")

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   concatArray = firstArray.concat(secondArray);

// if (concatArray.length > maxLength){
//   sliceArray = concatArray.slice(0, maxLength);

//   return sliceArray;
// }
  
// return concatArray
//     // Change code above this line
//   }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)

// function calculateTotal(number) {
//  // Change code below this line
// const target = number;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }
//   return sum;
  // Change code above this line
//}

// calculateTotal(7);
// calculateTotal(3);
// calculateTotal(24);

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


  // Change code above this line
//   return total;
//}


//This code worked for adding an array in AutoCheck, 
//but does not seem to be working here!
// function calculateTotalPrice(order) {
//     // Change code below this line
//   let total = 0;
  
//   for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }
//     // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);

//FIND LONGEST STRING


// function findLongestWord(string) {
//     let stringVariable = string.split(" ");
//     let longest = 0;
//     for (let i = 0; i < stringVariable.length; i+= 1) {
//         if (longest < stringVariable[i].length) {
//             longest = stringVariable[i].length;
//             word = stringVariable[i];
//         }
//     }
//     return word;
// }

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


// function createArrayOfNumbers(min, max) {
//     const numbers = [];
   
//   // Change code below this line
// for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
   
// }
//   // Change code above this line
//     return numbers;
  
// } createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);

// let cities = [
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'New York', population: 8175133},
//     {name: 'Chicago', population: 2695598},
//     {name: 'Houston', population: 2099451},
//     {name: 'Philadelphia', population: 1526006}
// ];


// let bigCities = [];
// for (let i = 0; i < cities.length; i++) {
//     if (cities[i].population > 3000000) {
//         bigCities.push(cities[i]);
//     }
// }
// console.log(bigCities);


// function filterArray(numbers, value) {
//    // Change code below this line
//   const greaterArray = []
//   for (let i = 0; i < numbers.length; i++)
//     if (numbers[i] > value) {
//         greaterArray.push(numbers[i]);
//     }
    
//     return greaterArray;
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// checkFruit("plum");
// checkFruit("Pear");
// checkFruit("apple");
// checkFruit("orange");

// function getCommonElements(array1, array2) {
//     // Change code below this line
//     let commonArray = [];
//     for (let i = 0; i < array1.length; i += 1) {
      
//       for (let j = 0; j < array2.length; j += 1) {
//           console.log(array1[i], array2[j]);
//         //   commonArray = (array1[i]).includes(array2[j]);
//         }
//     }
// }
  
// function getCommonElements(array1, array2) {
//     // Change code below this line
//     let commonArray = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         //  console.log(array1[i], array2);
//         if (array2.includes(array1[i])) {
//           commonArray.push(array1[i]); 
//             // console.log(commonArray);
//         }
//     }
//   return commonArray;
// }
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([1, 2, 3], [10, 20, 30]);


// function getEvenNumbers(start, end) {
//    // Change code below this line
//   let number = [];
//   let numbers = [];
//   let evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     number = i;
//     numbers.push(number);
//     console.log(numbers);
//   }

//   for (let number of numbers) {
//   if (number % 2 === 0) {
//       evenNumbers.push(number);
//       console.log(evenNumbers);
//   }
// }
// // return evenNumbers;
//     // Change code above this line
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);


// function includes(array, value) {
//   // Change code below this line
//   const included = [];
//   for (let element of array) {
//     if (element == value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }

////////////////
//OBJECTS//
/////////////////

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.city = "Kingston";
// apartment.location.country = "Jamaica";


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   console.log(key);
//   keys.push(key);
//   console.log(apartment[key]);
//   values.push(apartment[key]); 
// }

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   const keys = [];
 
// for (const key in object) {
//   if (object.hasOwnProperty(key)){
//     keys.push(key);   
//   }
//     propCount = keys.length;
//     console.log(propCount);
//   }
//   // Change code above this line
//   return propCount;
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

//  // // //function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

// const keys = Object.keys(object); 
//     if (keys == true)
//         console.log(keys);  {
// //   propCount.push(object[key]);  
//         propCount += 1;
//         console.log(propCount);
// }
//   return propCount;
//   // Change code above this line
// }


///////WORKED IN AUTO CHECK__ THROWING ERROR HERE/////
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object)
//    for (key of keys) {
//       propCount += 1;
//     }
  
//   return propCount;
//   // Change code above this line
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Book object
//   console.log(book);
//   // Name
//   console.log(book.title);
//   // Author
//   console.log(book.author);
//   // Rating
//   console.log(book.rating);
// }


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const allPropArr = [];
//   for (const product of products) {
//     if (propName === "name") {
//       allPropArr.push(product.name);
//       console.log(allPropArr);
//     }

//     if (propName === "quantity") {
//       allPropArr.push(product.quantity);
//     }

//     if (propName === "price") {
//       allPropArr.push(product.price);
//     }
//   }
//    return allPropArr;
// }
//   // Change code above this line

// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
// let totalPrice = 0;

//   for (const product of products) {
//     //if (productName === "Radar") {
//     totalPrice = ((product.price) * (product.quantity))
//     console.log(totalPrice);
      //
   // };
    
    // if (productName === "Droid") {
    //   totalPrice = ((product.price) * (product.quantity));
    //   console.log(totalPrice);
    // }
    
    // if (productName === "Grip") {
    //   totalPrice = ((product.price) * (product.quantity));
    //   console.log(totalPrice);
    // }
    
    // if (productName === "Scanner") {
    //   totalPrice = ((product.price) * (product.quantity));
    //   console.log(totalPrice);
    // }
  //}

  //  console.log(totalPrice);
// return totalPrice;
  // Change code above this line
//};


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//  let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = ((product.price) * (product.quantity));
//       console.log(totalPrice);
//     }
//   }
//  return totalPrice; 
//   // Change code above this line
// }

// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

/////////////// DESTRUCTURING AND SPREAD/REST/////////////

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//   today: {
//     low: todayLow,
//     high: todayHigh,
//   },
//       tomorrow: {
//     low: tomorrowLow,
//     high: tomorrowHigh,
//   },
//   } = forecast
//     // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} })


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   let text = " ";
 
//     if (data.text === "Take interest") {
//     const financeTask = {
//       text: (data.text),
//       category: (data.category),
//       priority,
//       completed,
//     };
//     return financeTask;
//   }

//   if (data.text === "Take out the trash") {
//     const trashTask = {
//       text: (data.text),
//       category: (data.category),
//       priority: (data.priority),
//       completed,
//     };
//     return trashTask;
//   }
  
//       if (data.text === "Choose shampoo") {
//     const financeTask = {
//       text: (data.text),
//       category,
//       priority: (data.priority),
//       completed,
//     };
//     return shampooTask;
//   }
  
//   const newTask = {
//    text: (data.text),
//    category,
//    priority,
//    completed,
//  };
//   return newTask;
//   // Change code above this line
// };

//Same result using SPREAD 
// function makeTask(data) {
// 	const completed = false;
// 	const category = 'General';
// 	const priority = 'Normal';
// 	// Change code below this line
// 	return {
// 		completed,
// 		category,
// 		priority,
// 		...data,
//   };
  
	// Change code above this line
//}

// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });


// // Change code below this line
// function add(...args) {
//   let total = 0;
//   for (const num of args) {
//     total += num;
//   }

//  return(total);
//   // Change code above this line
// }
// add(15, 27)

// Change code below this line
// function findMatches(matchArr, ...otherArgs) {
//   const matches = []; // Don't change this line
// for (let i = 0; i < matchArr.length; ++i){
//   for (let j=0; j < otherArgs.length; ++j){
//     if (matchArr[i] == otherArgs[j]) {
//       matches.push(matchArr[i]);
//     }
//   }
// }
//   // Change code above this line
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
 
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };


// atTheOldToad.addPotion({ name: "Power potion", price: 270 });


// MODULE 4//////////////////////////////////////////////////////////////////////

