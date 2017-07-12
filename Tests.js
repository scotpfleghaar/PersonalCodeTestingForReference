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
// var puzzlers = [
//   function(a) { return 8 * a - 10; },
//   function(a) { return (a - 3) * (a - 3) * (a - 3); },
//   function(a) { return a * a + 4; },
//   function(a) { return a % 5; }
// ];
// var start = 3;
// var applyAndEmpty = function(input, queue) {
//   var length = queue.length;
//   for (var i = 0; i < length; i++) {
//     input = queue.shift()(input);
//     alert("“What is obtained when the result of passing "+ input +" into the fourth function of the "+ queue +" array is then passed into the function whose array index matches the result of passing "+ input +" into the second function of the "+ queue +" array?”");
//   }
//   return input;
// };
// applyAndEmpty(start, puzzlers);


// Word a10n (abbreviation)
// function abbreviate(string) {
//     var splitWord = string.split(/[, -]+/);
//     //console.log(splitWord);
//     var completeSentance = [];
//     for (var i = 0; i < splitWord.length; i++) {
//         if(splitWord[i].length > 3){
//           var numberIfInnerLetters = (splitWord[i].length - 2);
//           var firstLetter = splitWord[i].charAt(0);
//           var lastLetter = splitWord[i].charAt(splitWord[i].length - 1);
//           var message = (firstLetter + numberIfInnerLetters + lastLetter);
//         } else if (splitWord[i].length <= 3){
//           message = splitWord[i];
//         }
//         completeSentance.push(message);
//     }
//     var finalMessage = completeSentance.join(' ');
//     return(finalMessage);
// }
//abbreviate("Coding, is-the best");

// function abbreviate(string) {
//     for(var i = 0; i < string.length; i++){
//       //if there is a letter now, and a letter next
//       if(string[i] == /([A-Za-z])+/ || string[i + 1] == /([A-Za-z])+/){
//         console.log (string[i]);
//       }
//     }
// }
// abbreviate("Coding, is-the best");


// Building a Closure I

// function warningMaker(obstacle) {
//   return function() {
//     alert("Beware! There have been "+ obstacle +" sightings in the Cove today!");
//   };
// }
// var iceBergAlert = warningMaker("iceberg");
// iceBergAlert();



// Building a Closure II

// function warningMaker(obstacle) {
//   return function(number, location) {
//     alert("Beware! There have been " + obstacle +
//       " sightings in the Cove today!\n" +
//       number + " have been spotted at the " + location + "!"
//     );
//   };
// }


// Using a Closure II

// function warningMaker(obstacle) {
//   return function(number, location) {
//     alert("Beware! There have been " + obstacle +
//           " sightings in the Cove today!\n" +
//           number + " have been spotted at the " +
//           location + "!");
//   };
// }

// var killerPenguinAlert = warningMaker("killer penguin");
// var polarBearAlert     = warningMaker("polar bear");
// var icebergAlert       = warningMaker("iceberg");
// var flashBlizzardAlert = warningMaker("flash blizzard");
// var snowYetiAlert      = warningMaker("snow yeti");

// // call the two functions here
// killerPenguinAlert(6, "Ice Caves");


// function buildCoveTicketMaker(transport){
//   var passanger = 0;
//   return function(name){
//     passanger++;
//     alert("Here is your transport ticket via the "+transport+".\n" +"Welcome to the Cold Closures Cove, "+name +"!" +" \nYou are passanger #" + passanger +".");
//   };
// }
// var getSubmarineTicket = buildCoveTicketMaker("Submarine");
// getSubmarineTicket("Levi");


// Changing a Bound Value I

// function warningMaker(obstacle) {
//   var counter = 0;
//   return function(number, location) {
//     counter ++;
//     alert("Beware! There have been " + obstacle +
//           " sightings in the Cove today!\n" +
//           number + " have been spotted at the " +
//           location + "!\n" +
//           "\nThis is alert #"+counter+" today for "+obstacle+" danger."

//     );
//   };
// }
// var outerFunction = warningMaker("iceBerg");
// var innerFunction = outerFunction(16, "The bay");


// Testing with Closures
// function warningMaker(obstacle) {
//   var count = 0;
//   var zones = [];
//   return function(number, location) {
//     count++;
//     var list = "";
//     zones.push([location, number]);
//     for (var i = 0; i < zones.length; i++) {
//       list += zones[i][0] + " (" + zones[i][1] + ")" + "\n";
//     }
//     alert("Beware! There have been " + obstacle +
//           " sightings in the Cove today!\n" +
//           number + " have been spotted at the " +
//           location + "!\n" +
//           "This is alert #" + count +
//           " today for " + obstacle + " danger.\n" +
//           "Current danger zones are:\n" +
//           list);
//   };
// }

// var outerFunction = warningMaker("Falling Rocks");
// var innerFunction = outerFunction(1000, "Killer Valley");

// var outFunction = warningMaker("skiers");
// var inFunction = outerFunction(10, "Mountians");


// function assignTorpedo(name, passangerArray){
//   for(var i = 0; i < passangerArray.length; i++){
//     if(passangerArray[i] == name) {
//       return function(){
//         console.log("Ahoy "+name+"!\n"+"Man your post at torpedo #" +(i+1)+"!");
//       };
//     }
//   }
// }
// var passangers = ['Sam', 'John', 'Chris', 'Kim', 'Willy'];
// var giveAssignent = assignTorpedo('John', passangers);
// giveAssignent();


// Final Closed Values I

// function assignLaser(shark, sharkList) {
//   for (var i = 0; i < sharkList.length; i++) {
//     if (shark == sharkList[i]) {
//       return function() {
//         alert("Yo, " + shark + "!\n" +
//               "Visit underwater strapping station " +
//               (i + 1) + " for your sweet laser.");
//       };
//     }
//   }
// }


// Final Closed Values II
// function makeTargetAssigner(sharks, targets) {
// return function(shark) {
//     for (var i = 0; i < sharks.length; i++) {
//       if (sharks[i] == shark) {
//         alert("Hey, " + shark + "!\n" +
//               "There've been " + targets[i] +
//               " sightings in our area!\n" +
//               "Time to take care of business!");
//       }
//     }
//   };
// }

// var getTargetFor = makeTargetAssigner(listOfSharks,
//                                       listOfTargets);
// getTargetFor("Ice Teeth");


// var listOfSharks = ["Sea Pain", "Great Wheezy",
//                     "DJ Chewie", "Lil' Bitey",
//                     "Finmaster Flex", "Swim Khalifa",
//                     "Ice Teeth", "The Notorious J.A.W."];

// var listOfTargets = ["icicle bat", "snow yeti",
//                     "killer penguin", "frost tiger",
//                     "polar bear", "iceberg",
//                     "blue witch", "wooly mammoth"];


/////// Hoisting ////////

// function getMysteryNumber(){
//   function chooseMystery(){
//     return 12;
//   }
//   return chooseMystery();
//   function chooseMystery(){
//     return 7;
//   }
// }
// console.log(getMysteryNumber()); // returns the second function!

// Consider this:
// function getMysteryNumber(){
//   var chooseMystery = function (){
//     return 12;
//   };
//   return chooseMystery();
//   var chooseMystery = function (){
//     return 7;
//   };
// }
// console.log(getMysteryNumber()); // returns the first function!

// How about this:
// function getMysteryNumber(){
//   return chooseMystery();
//   var chooseMystery = function (){
//     return 12;
//   };
//   var chooseMystery = function (){
//     return 7;
//   };
// }
// console.log(getMysteryNumber()); // returns an error...

// Take a look at the Hoisting
// function capacityStatus(numPassangers, capacity){
//   if (numPassangers == capacity){
//     noSeats();
//   } else {
//     seatsAvail();
//   }
//   var noSeats = function(){
//     console.log("No Seats left!");
//     return false;
//   };
//   var seatsAvail = function(){
//     console.log("There are "+(capacity = numPassangers)+" seats available!");
//   };
// }
// capacityStatus(40,120); // Returns an error


// Simply follow best practices to avoid Hoisting
// function capacityStatus(numPassangers, capacity){
//   var noSeats = function(){
//     console.log("No Seats left!");
//     return false;
//   };
//   var seatsAvail = function(){
//     console.log("There are "+(capacity - numPassangers)+" seats available!");
//     return true;
//   };
//   if (numPassangers == capacity){
//     noSeats();
//   } else {
//     seatsAvail();
//   }
// }
// capacityStatus(43,120); // Returns Correctly


// Even Better Practice, declare the functions:
// function capacityStatus(numPassangers, capacity){
//   function noSeats(){
//     console.log("No Seats left!");
//     return false;
//   }
//   function seatsAvail(){
//     console.log("There are "+(capacity - numPassangers)+" seats available!");
//     return true;
//   }
//   if (numPassangers == capacity){
//     noSeats();
//   } else {
//     seatsAvail();
//   }
// }
// capacityStatus(20,120); // Returns Correctly


// Analyzing Load Order I
// function thisIsWeird() {
//   function secret() {
//     var unused3;
//   }
//   var result;
//   function secret() {
//     var unused1;
//   }
//   // The following line of code assigns a
//   // secret function to the variable result.
//   result = secret;
//   function secret() {
//     var unused2;
//   }
//   return result;
// }
// console.log(thisIsWeird()); // returns unused2


// Analyzing Load Order 2
// function theBridgeOfHoistingDoom() {
//   var ring = undefined;
//   var power = undefined;
//   function balrog() {
//     return "whip";
//   }
//   function wizard() {
//     return "white";
//   }
//   function elf() {
//     return "immortal";
//   }
//   ring = wizard;
//   wizard = balrog;
//   return wizard();
// }
// console.log(theBridgeOfHoistingDoom());


// Analyzing Load Order III
// function theBridgeOfHoistingDoom( ){
//   var sword = undefined;
//   var dwarf = undefined;
//   var fall = undefined;
//   var ring = undefined;
//   function fellowship(){
//     return "friends";
//   }
//   sword = "sting";
//   dwarf = function (){
//     return "axe";
//   };
//   fall = "Fly you fools!";
//   fellowship = function (){
//     return "broken";
//   };
//   ring();
//   return sword;
// }

// Analyzing Load Order IV
// function theBridgeOfHoistingDoom() {
//   var sword = undefined;
//   var dwarf = undefined;
//   var fall = undefined;
//   var ring = undefined;
//   function fellowship() {
//     return "friends";
//   }
//   sword = "sting";
//   dwarf = function() {
//     return "axe";
//   }
//   fall = "Fly you fools!";
//   fellowship = function() {
//     return "broken";
//   }
//   ring();
//   return sword;
// }
// console.log(theBridgeOfHoistingDoom()); // Returns Error

///////////////////// Objects //////////////////////
// var myBox = {
//   height: 6, width: 8, length: 10, volume: 480,
//   material: "cardboard",
//   contents: ["Great Expentations", "The Remains of the day", "Peter Pan"],
//   destination1: "Minneapolis",
//   destination2: "Fort Lauderdale",
//   destination3: "Las Angales",
//   "# of stops": 3,
//   "# of books": 0
// };

// // Adding to the array in the object
// //myBox.contents.push("On the road");

// // Returns all values for any given object:
// //console.log(Object.values(myBox));

// // Returns all keys for any given object:
// //console.log(Object.keys(myBox));

// // Dynamic Expressions
// // for(var i = 1; i <= myBox["# of stops"]; i++){
// //   console.log(myBox["destination" + i]);
// // }

// // Delete an Object.Property
// delete myBox.contents;

// //Function to add books to an Object:
// function addBook(box, name, writer){
//   box["# of books"]++;
//   box["book" + box["# of books"]] = {title: name, author: writer};
// }
// addBook(myBox,"Great Expectations", "Charles Dickens");
// addBook(myBox,"Peter Pan", "J. M. Barrie");
// addBook(myBox,"The Remains of the Day", "Kazuo Ishiguro");


// // Displays Key Value Pairs:
// function objectContents(object){
//   for(var i in object) { console.log (i+": "+ object[i]) }
// }
// objectContents(myBox);

// Building Objects I
// var vehicle1 = {
//   type: "Motorboat",
//   capacity: 6,
//   storedAt: "Ammunition Depot"
// };
// var vehicle2 = {
//   type: "Jet Ski",
//   capacity: 1,
//   storedAt: "Reef Dock"
// };
// var vehicle3 = {
//   type: "submarine",
//   capacity: 8,
//   storedAt: "Underwater Outpost"
// };

// console.log(vehicle1.capacity);


// Accessing Objects II
// var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
// var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
// var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// // create vehicles array
// var vehicles = [vehicle1, vehicle2, vehicle3];
// console.log(vehicles[0].type);

// // build findVehicle function expression
// function findVehicle(name, list){
//   for(var i = 0; i < list.length; i++){
//     if (name == list[i].type){
//       console.log(list[i]);
//     }
//   }
// }
// // call findVehicle
// findVehicle("Submarine", vehicles);


// Building Objects II
// var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
// var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
// var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// // add and adjust object properties here

// // The Motorboat will have 4 seats added to its capacity.
// vehicle1.capacity = 10;
// // The Jet Ski is not submersible.
// vehicle2.submersible = false;
// // The Submarine will acquire "Torpedoes".
// vehicle3.weapon = "Torpedoes";
// // The Motorboat is not submersible.
// vehicle1.submersible = false;
// // The Jet Ski will acquire "Lasers".
// vehicle2.weapon= "Lasers";
// // The Submarine will add bunk beds, doubling its capacity.
// vehicle3.capacity = 16;
// // The Motorboat will acquire a "Rear-Mounted Slingshot".
// vehicle1.weapon = "Rear-Mounted Slingshot";
// // The Submarine is submersible.
// vehicle3.submersible = true;


// Moar Power!!
// var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
// var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
// var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// vehicle1.capacity += 4;
// vehicle2.submersible = false;
// vehicle3.weapon = "Torpedoes";
// vehicle1.submersible = false;
// vehicle2.weapon = "Lasers";
// vehicle3.capacity *= 2;
// vehicle1.weapon = "Rear-Mounted Slingshot";
// vehicle3.submersible = true;

// // add properties and assign values
// vehicle1["# of weapons"] = 8;
// vehicle2["# of weapons"] = 4;
// vehicle3["# of weapons"] = 1;


/// Blinders On!
// var superBlinders = [
//   ["Firelight", 4000],
//   ["Solar Death Ray", 6000],
//   ["Supernova", 12000]
// ];

// var lighthouseRock = {
//   gateClosed: true,
//   bulbs: [200, 500, 750],
//   capacity: 30,
//   secretPassageTo: "Underwater Outpost"
// };

// // remove bulbs property from lighthouseRock
// delete lighthouseRock.bulbs;

// // add weaponBulbs property to lighthouseRock
// lighthouseRock.weaponBulbs = superBlinders;

// // log the correct weaponBulbs array value to the console
// console.log(lighthouseRock.weaponBulbs[2][0]);


// To the Lighthouse, Quick!
// var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

// var lighthouseRock = {
//   gateClosed: true,
//   weaponBulbs: superBlinders,
//   capacity: 30,
//   secretPassageTo: "Underwater Outpost",
//   numRangers: 0
// };

// function addRanger(location, name, skillz, station) {
//   location.numRangers++;
//   location["ranger" + location.numRangers] = {
//     name: name,
//     skillz: skillz,
//     station: station
//   };
// }

// addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
// addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
// addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);


//Man your Stations!
// var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

// var lighthouseRock = {
//   gateClosed: true,
//   weaponBulbs: superBlinders,
//   capacity: 30,
//   secretPassageTo: "Underwater Outpost",
//   numRangers: 3,
//   ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
//   ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
//   ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
// };

// function dontPanic(location) {
//   var list = "Avast, me hearties!\n" +
//             "There be Pirates nearby! Stations!\n";

//   // loop through the rangers and append to list
//   for (var i = 1; i <= location.numRangers; i++){
//     var rangerName = location["ranger"+i].name;
//     var weapon = location.weaponBulbs[location["ranger"+i].station-1][0]
//     list += ("\n"+rangerName + ", man the "+weapon+"!");
//   }

//   alert(list);
// }

// dontPanic(lighthouseRock);

// var aquarium = {
//   Nemo: {type: "fish", species: "clownfish", length: 3.7},
//   Marlin: {type: "fish", species: "clownfish", length: 4.1},
//   Dory: {type: "fish", species: "blue tang", length: 6.2},
//   Peach: {type: "echinoderm", species: "starfish", length: 5.3},
//   Bubbles: {type: "fish", species: "yellow tang", length: 5.6},
//   "Coral Castle": {type: "environment", material: "cpquina", moves: false},
//   "Dragon Statue": {type: "environment", material: "plastic", moves: false},
//   addCritter: function (name, type, species, length){
//     this[name] = {type: type, species: species, length: length};
//   }
// };

// aquarium.takeOut = function(name){
//   this[name].name = name;
//   var temp = this[name];
//   delete this[name];
//   return temp;
// };


//Functions as Properties I
// var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

// var lighthouseRock = {
//   gateClosed: true,
//   weaponBulbs: superBlinders,
//   capacity: 30,
//   secretPassageTo: "Underwater Outpost",
//   numRangers: 3,
//   ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
//   ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
//   ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
//   addRanger: function (name, skillz, station) {
//   this.numRangers++;
//   this["ranger" + this.numRangers] = {
//     name: name,
//     skillz: skillz,
//     station: station
//   };
// }

// };

//Calling Function Properties I
// var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

// var lighthouseRock = {
//   gateClosed: true,
//   weaponBulbs: superBlinders,
//   capacity: 30,
//   secretPassageTo: "Underwater Outpost",
//   numRangers: 3,
//   ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
//   ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
//   ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
//   addRanger: function (name, skillz, station){
//     this.numRangers++;
//     this["ranger" + this.numRangers] = {
//       name: name,
//       skillz: skillz,
//       station: station
//     };
//   }
// };
// lighthouseRock.addRanger("Jordan Wade", "dual-wield hand crossbow", 4);


// Functions as Properties II
// var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

// var lighthouseRock = {
//   gateClosed: true,
//   weaponBulbs: superBlinders,
//   capacity: 30,
//   secretPassageTo: "Underwater Outpost",
//   numRangers: 3,
//   ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
//   ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
//   ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
//   ranger4: {name: "Jordan Wade", skillz: "dual-wield hand crossbow", station: 4},
//   addRanger: function(name, skillz, station) {
//     this.numRangers++;
//     this["ranger" + this.numRangers] = {
//       name: name,
//       skillz: skillz,
//       station: station
//     };
//   }
// };

// // create addBulb function property here
// lighthouseRock.addBulb = function(name, wattage){
//   this.weaponBulbs.push([name, wattage]);
// };

// // var addTest = lighthouseRock.weaponBulbs[superBlinders.push(["Money", 50000])];
// // console.log(addTest);
// // console.log(lighthouseRock.weaponBulbs);


// Calling Function Properties II
// lighthouseRock.addBulb = function(name, wattage) {
//   this.weaponBulbs.push([name, wattage]);
// };

// // call addBulb and pass in the correct arguments
// lighthouseRock.addBulb("Blasterbright", 5000);
// lighthouseRock.addBulb("Sight Slayer", 1800);
// lighthouseRock.addBulb("Burner of Souls", 7500);

///////////////// prototypes ////////////

// String.prototype.countAll = function (letter){
//   var letterCount = 0;
//   for (var i = 0; i<this.length; i++){
//     if(this.charAt(i).toUpperCase() == letter.toUpperCase()){
//       letterCount++;
//     }
//   }
//   return letterCount;
// };
// var stringTest = "How many e's are in this sentance";
// console.log(stringTest.countAll("e"));

// Prototypes I
// var canyonCows = [
//   {name: "Bessie", type: "cow", hadCalf: "Burt"},
//   {name: "Donald", type: "bull", hadCalf: null},
//   {name: "Esther", type: "calf", hadCalf: null},
//   {name: "Burt", type: "calf", hadCalf: null},
//   {name: "Sarah", type: "cow", hadCalf: "Esther"},
//   {name: "Samson", type: "bull", hadCalf: null},
//   {name: "Delilah", type: "cow", hadCalf: null}
// ];
// console.log(canyonCows[0].type);

// Array.prototype.countCattle = function(kind){
//   var numKind = 0;
//   for(var i = 0; i<this.length; i++){
//     if(this[i].type == kind ){
//       numKind++;
//     }
//   }
//   return numKind;
// };

// console.log(canyonCows.countCattle("cow"));



// Prototypes II
// Array.prototype.countCattle = function(kind) {
//   var numKind = 0;
//   for (var i = 0; i < this.length; i++) {
//     if (this[i].type == kind) {
//       numKind++;
//     }
//   }
//   return numKind;
// };
// var canyonCows = [
//   {name: "Bessie", type: "cow", hadCalf: "Burt"},
//   {name: "Donald", type: "bull", hadCalf: null},
//   {name: "Esther", type: "calf", hadCalf: null},
//   {name: "Burt", type: "calf", hadCalf: null},
//   {name: "Sarah", type: "cow", hadCalf: "Esther"},
//   {name: "Samson", type: "bull", hadCalf: null},
//   {name: "Delilah", type: "cow", hadCalf: null}
// ];
// var valleyCows = [
//   {name: "Danielle", type: "cow", hadCalf: null},
//   {name: "Brittany", type: "cow", hadCalf: "Christina"},
//   {name: "Jordan", type: "bull", hadCalf: null},
//   {name: "Trevor", type: "bull", hadCalf: null},
//   {name: "Christina", type: "calf", hadCalf: null},
//   {name: "Lucas", type: "bull", hadCalf: null}
// ];
// var forestCows = [
//   {name: "Legolas", type: "calf", hadCalf: null},
//   {name: "Gimli", type: "bull", hadCalf: null},
//   {name: "Arwen", type: "cow", hadCalf: null},
//   {name: "Galadriel", type: "cow", hadCalf: null},
//   {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
// ];

// alert(canyonCows.countCattle("calf") + valleyCows.countCattle("bull") + forestCows.countCattle("cow"));


//Prototypes III
// var forestCows = [
//   {name: "Legolas", type: "calf", hadCalf: null},
//   {name: "Gimli", type: "bull", hadCalf: null},
//   {name: "Arwen", type: "cow", hadCalf: null},
//   {name: "Galadriel", type: "cow", hadCalf: null},
//   {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
// ];

// // Object.prototype.noCalvesYet = function(kind){
// //   for (var i = 0; i < this.length; i++) {
// //     if (this[i].type == kind && this[i].hadCalf === null) {
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   }
// // };

// Object.prototype.noCalvesYet = function(kind){
//   if (this.type == kind && this.hadCalf === null) {
//       return false;
//     } else {
//       return true;
//     }
// };

// Array.prototype.countForBreeding = function(kind){
//   var numToBreed = 0;
//   for (var i = 0; i < this.length; i++) {
//     if (this[i].noCalvesYet(kind) === true){
//       numToBreed++;
//     }
//   }
//   return numToBreed;
// };


// Prototypes IV
var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];

var valleyCows = [
  {name: "Danielle", type: "cow", hadCalf: null},
  {name: "Brittany", type: "cow", hadCalf: "Christina"},
  {name: "Jordan", type: "bull", hadCalf: null},
  {name: "Trevor", type: "bull", hadCalf: null},
  {name: "Christina", type: "calf", hadCalf: null},
  {name: "Lucas", type: "bull", hadCalf: null}
];

var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

var badlandsCows = [
  {name: "Voldemort", type: "bull", hadCalf: null},
  {name: "Maleficent", type: "cow", hadCalf: null},
  {name: "Ursula", type: "cow", hadCalf: "Draco"},
  {name: "Draco", type: "calf", hadCalf: null},
  {name: "Joker", type: "bull", hadCalf: null},
  {name: "Chucky", type: "calf", hadCalf: null},
  {name: "Samara", type: "cow", hadCalf: "Chucky"}
];

Object.prototype.noCalvesYet = function() {
  if (this.type == "cow" && this.hadCalf == null) {
    return true;
  } else {
    return false;
  }
};

Array.prototype.countForBreeding = function() {
  var numToBreed = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].noCalvesYet()) {
      numToBreed++;
    }
  }
  return numToBreed;
};

// set up your numPriorityCows variable
var numPriorityCows = (canyonCows.countForBreeding() + valleyCows.countForBreeding() + forestCows.countForBreeding() + badlandsCows.countForBreeding());

// alert the correct message with the total
alert("Herd-merger has indicated " + numPriorityCows + " cows of top breeding priority.");
