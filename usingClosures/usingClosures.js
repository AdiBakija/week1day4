// //Exercise 1 - Loaded die
// function makeLoadedDie() {
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//   var counter = 0;//Counter to initiate

//   return function() {

//       var value = list[counter]//update value to be the list[index]
//       counter += 1//increase counter by 1 everytime this function is executed

//     return value;//return what the list array value
//   }
// }

// var rollLoadedDie = makeLoadedDie();

// console.log(list[0]);
// console.log(list[1]);

// console.log(rollLoadedDie());  // 5
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6


//Exercise 2 - Countdown
var countdownGenerator = function (x) {
  var counter = x + 1;
  return function() {

      counter -= 1//increase counter by 1 everytime this function is executed
      if (counter > 0) {
        console.log("T-minus" + counter);
      } else if (counter === 0) {
        console.log("Blast Off!");
      } else
        console.log("Rockets already gone, bub!")
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!