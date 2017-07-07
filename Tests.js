// var numbers = [1,2,3,4,5,6,7,8,9];
// var results = numbers.map(function (arrayCell){return arrayCell * 2;});
// console.log(results);


// Expressions Inside Arrays
// var puzzlers = [function(input){
//   return (3 * input - 8);
// },function(input){
//   return ((input + 2)*(input + 2)*(input + 2));
// },function(input){
//   return ((input*input) - 9);
// },function(input){
//   return (input % 4);
// }];

// Using an array as a "queue" for Fast Pass Delivery
// var parkRides = [["Birch Bumpers", 40],["Pines Plunge", 55],["Ceder Coaster", 20],["Ferris Wheel of Firs", 90]];
// var fastPassQueue = [["Ceder Coaster"],["Pines Plunge"],["Birch Bumpers"],["Pines Plunge"]];
// function buildTickets(allRides, passRides, pick){
//   if(passRides[0] == pick){
//     var pass = passRides.shift();
//     return function(){console.log("Quick! you've got a fast Pass to "+pass+"!")};
//   } else {
//     for(var i = 0; i < allRides.length; i++){
//       if(allRides[i][0] === pick){
//         return function() {
//           console.log("A ticket is printing for "+ pick + "! \n" + "Your wait time is about "+ allRides[i][1] + " minutes.");
//         };
//       }
//     }
//   }
// }
// var rideWant = "Ceder Coaster";
// var ticket = buildTickets(parkRides, fastPassQueue, rideWant);
// ticket();


//Choose Their Own Adventure
// function adventureSelector(userChoice) {
//   if(userChoice === 1){
//   return function() {
//     alert('You selected the Vines of Doom!');};
//   } else if(userChoice === 2){
//   return function() {
//     alert('Looks like you want the Lake of Despair!');
//   };
//   } else if(userChoice === 3){
//   return function() {
//     alert('The Caves of Catastrophe!');
//   };
//   }
// }
// var userSelection = 3;
// var forFun = adventureSelector(userSelection);
// forFun();


//Queue Builder
// var puzzlers = [
//   function(a) { return 8 * a - 10; },
//   function(a) { return (a - 3) * (a - 3) * (a - 3); },
//   function(a) { return a * a + 4; },
//   function(a) { return a % 5; }
// ];
// var start = 2;

// var applyAndEmpty = function(input, queue) {
//   var length = queue.length;
//   for (var i = 0; i < length; i++) {
//     input = queue.shift()(input);
//   }
//   return input;
// };

// alert(applyAndEmpty(start, puzzlers));


// Immediately-Invoked Puzzler
var puzzlers = [
  function (a) {
        return 8 * a - 10;
    },
  function (a) {
        return (a - 3) * (a - 3) * (a - 3);
    },
  function (a) {
        return a * a + 4;
    },
  function (a) {
        return a % 5;
    }
];
var start = 3;
var applyAndEmpty = function (input, queue) {
    var length = queue.length;
    for (var i = 0; i < length; i++) {
        input = queue.shift()(input);
        alert("“What is obtained when the result of passing " + input + " into the fourth function of the " + queue + " array is then passed into the function whose array index matches the result of passing " + input + " into the second function of the " + queue + " array?”");
    }
    return input;
};
applyAndEmpty(start, puzzlers);
