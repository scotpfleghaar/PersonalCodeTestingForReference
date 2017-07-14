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

// Enumerations 
// var rockSpearguns = {
//   Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
//   Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
//   Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
//   Firefork: {barbs: 6, weight: 8, heft: "overhand"},
//   "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
// };

// // build listGuns
// function listGuns(guns){
//   for (speargun in guns){
//   	console.log(speargun);
//   }
// }

// // call listGuns and pass in rockSpearguns
// listGuns(rockSpearguns);


// Enumeration II

// var rockSpearguns = {
//   Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
//   Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
//   Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
//   Firefork: {barbs: 6, weight: 8, heft: "overhand"},
//   "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
// };

// function listGuns(guns) {
//   for (var speargun in guns) {
//     // modify the log message here
//     console.log("Behold! " + speargun + ", with " +
//                 guns[speargun]["heft"] + " heft!");
//   }
// }


// Enumeration III

// var rockSpearguns = {
//   Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
//   Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
//   Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
//   Firefork: {barbs: 6, weight: 8, heft: "overhand"},
//   "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
// };

// rockSpearguns["listGuns"] = function() {
//   for (var property in this) {
//     if (this[property]["heft"] !== undefined) {
//       console.log("Behold! " + property + ", with " +
//                   this[property]["heft"] + " heft!");
//     }
//   }
// };

// rockSpearguns["listGuns"]();


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

// var badlandsCows = [
//   {name: "Voldemort", type: "bull", hadCalf: null},
//   {name: "Maleficent", type: "cow", hadCalf: null},
//   {name: "Ursula", type: "cow", hadCalf: "Draco"},
//   {name: "Draco", type: "calf", hadCalf: null},
//   {name: "Joker", type: "bull", hadCalf: null},
//   {name: "Chucky", type: "calf", hadCalf: null},
//   {name: "Samara", type: "cow", hadCalf: "Chucky"}
// ];

// Object.prototype.noCalvesYet = function() {
//   if (this.type == "cow" && this.hadCalf == null) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Array.prototype.countForBreeding = function() {
//   var numToBreed = 0;
//   for (var i = 0; i < this.length; i++) {
//     if (this[i].noCalvesYet()) {
//       numToBreed++;
//     }
//   }
//   return numToBreed;
// };

// // set up your numPriorityCows variable
// var numPriorityCows = (canyonCows.countForBreeding() + valleyCows.countForBreeding() + forestCows.countForBreeding() + badlandsCows.countForBreeding());

// // alert the correct message with the total
// alert("Herd-merger has indicated " + numPriorityCows + " cows of top breeding priority.");



// Inheritance and Constructors:

// var shoe = {size: 6, gender: "women", constructor: "slipper"};
// var magicShoe = Object.create(shoe);
// console.log(shoe);
// console.log(magicShoe);
// Object.prototype.isPrototypeOf(shoe); // returns True
// Object.prototype.isPrototypeOf(magicShoe); // returns True
// shoe.isPrototypeOf(magicShoe); // True because shoe is the mother prototype of prototype magicShoe

// Generic Object:
//var shoe = {size: undefined, gender: undefined, constructor: undefined}; // not ideal

// It is better to use constructor
// function Shoe (shoeSize, shoeColor, forGender, constructStyle){
//   this.size = shoeSize;
//   this.color = shoeColor;
//   this.gender = forGender;
//   this.construction = constructStyle;
// }
// // Created a prototype because all shoes do the following:
// Shoe.prototype = {
//   putOn: function(){console.log("Your "+this.construction +"'s are on!")},
//   takeOff: function(){alert(console.log("Your "+this.construction +"'s are off!"))}
// };

// var beachShoe = new Shoe (10, "blue", "woman", "flipflop");
// beachShoe.straps = 2;
// beachShoe.putOn();


// Creation with Prototypes I
// var genericPost = {
//   x: 0,
//   y: 0,
//   postNum: undefined,
//   connectionsTo: undefined,
//   sendRopeTo: function(connectedPost) {
//     if (this.connectionsTo === undefined) {
//       var postArray = [];
//       postArray.push(connectedPost);
//       this.connectionsTo = postArray;
//     } else {
//       this.connectionsTo.push(connectedPost);
//     }
//   }
// };

// // create post1 and post2
// var post1 = Object.create(genericPost);
// var post2 = Object.create(genericPost);

// // modify the post properties
// post1.x = -2;
// post1.y = 4;
// post1.postNum = 1;
// post2.x = 5;
// post2.y = 1;
// post2.postNum = 2;



// // connect the posts together
// post1.sendRopeTo(post2);
// post2.sendRopeTo(post1);


//Creation with Prototypes II
// var genericPost = {
//   x: 0,
//   y: 0,
//   postNum: undefined,
//   connectionsTo: undefined,
//   sendRopeTo: function(connectedPost) {
//     if (this.connectionsTo === undefined) {
//       var postArray = [];
//       postArray.push(connectedPost);
//       this.connectionsTo = postArray;
//     } else {
//       this.connectionsTo.push(connectedPost);
//     }
//   }
// };

// // create post8, post9, and post10
// var post8 = Object.create(genericPost);
// var post9 = Object.create(genericPost);
// var post10 = Object.create(genericPost);

// // assign property values and make connections
// post8.x = 0;
// post8.y = -3;
// post8.postNum = 8;

// post9.x = 6;
// post9.y = 8;
// post9.postNum = 9;

// post10.x = -2;
// post10.y = 3;
// post10.postNum = 10;

// post8.sendRopeTo(post10);
// post10.sendRopeTo(post8);
// post9.sendRopeTo(post10);
// post10.sendRopeTo(post9);

// post9.numBirds = 0;
// post10.weathervane = "N";
// post8.lightsOn = false;
// post10.lightsOn = false;

// Constructor I

// function Fencepost(x, y, postNum) {
//   this.x = x;
//   this.y = y;
//   this.postNum = postNum;
//   this.connectionsTo = [];
//   this.sendRopeTo = function(connectedPost) {
//     this.connectionsTo.push(connectedPost);
//   };
// }

// // create post18, post19, and post20
// var post18 = new Fencepost(-3,4,18);
// var post19 = new Fencepost(5,-1,19);
// var post20 = new Fencepost(-2,10,20);

// // establish post connections

// post18.sendRopeTo(post20);
// post20.sendRopeTo(post18);
// post18.sendRopeTo(post19);
// post19.sendRopeTo(post18);

//Constructor 2;

// function Fencepost(x, y, postNum) {
//   this.x = x;
//   this.y = y;
//   this.postNum = postNum;
//   this.connectionsTo = [];
// }

// Fencepost.prototype = {
//     movePost: function(x, y) {
//     this.x = x;
//     this.y = y;
//     },
//     removeRope: function(removeTo) {
//     var temp = [];
//     for (var i = 0; i < this.connectionsTo.length; i++) {
//       if (this.connectionsTo[i].postNum != removeTo) {
//         temp.push(this.connectionsTo[i]);
//       }
//     }
//     this.connectionsTo = temp;
//     },
//     sendRopeTo: function(connectedPost) {
//     this.connectionsTo.push(connectedPost);
//   }
// //   putOn: function(){console.log("Your "+this.construction +"'s are on!")},
// //   takeOff: function(){alert(console.log("Your "+this.construction +"'s are off!"))}
// };

// Object.prototype.findOwnerOfProperty = function (propName){
//   var currentObject = this;
//   while(currentObject !== null){
//     if(currentObject.hasOwnProperty(propName)){
//       return currentObject;
//     } else {
//       currentObject = currentObject.getPrototypeOf();
//     }
//   }
// };

// Overriding Prototypal Methods I
// Fencepost.prototype.valueOf = function() {
//   return Math.sqrt(this.x * this.x + this.y * this.y);
// };

// Overriding Prototypal Methods II
// function Fencepost(x, y, postNum) {
//   this.x = x;
//   this.y = y;
//   this.postNum = postNum;
//   this.connectionsTo = [];
// }

// Fencepost.prototype = {
//   sendRopeTo: function(connectedPost) {
//     this.connectionsTo.push(connectedPost);
//   },
//   removeRope: function(removeTo) {
//     var temp = [];
//     for (var i = 0; i < this.connectionsTo.length; i++) {
//       if (this.connectionsTo[i].postNum != removeTo) {
//         temp.push(this.connectionsTo[i]);
//       }
//     }
//     this.connectionsTo = temp;
//   },
//   movePost: function(x, y) {
//     this.x = x;
//     this.y = y;
//   },
//   valueOf: function() {
//   return Math.sqrt(this.x * this.x +
//                   this.y * this.y);
//   }
// };

// // override the toString method
// Fencepost.prototype.toString = function() {
//   var list = "";
//   for (var i = 0; i < this.connectionsTo.length; i++) {
//     list += this.connectionsTo[i].postNum + "\n";
//   }
//   return "Fence post #" + this.postNum + ":\n" +
//         "Connected to posts:\n" + list +
//         "Distance from ranch: " + this.valueOf() + " yards";
// };


//Ternary Conditionals

// var isArthur = true;
// var isKing = false;
// var isArcher = true;
// var weapon;
// var helmet;

//This works however...
// var weapon;
// if (isArthur){
//   weapon = "Excalibur";
// }else{
//   weapon = "Longsword";
// }

// This is a better practice;
//var weapon = isArthur?"Excalibur":"Longsword";

//console.log("Current weapon: " + (isArthur&&isKing?"Excalibur":"Longsword"));

// Ternary Conditionals with actions:
//isArthur&&isKing?alert("Hail, King Author!"):alert("Charge on, ye knight!");

//Ternary Conditionals with functions: Note: there are paratheses behind each function in order to Immediately Invoked them.
// isArthur && isKing ? function(){
//   alert('Hail, Author, the King!');
//   console.log("Raise Excalibur!");
// }():function(){
//   alert("Charge on, ye Knight!");
//   console.log("Current Weapon: Longsword");
// }();

//Ternary Conditionals can also take multiple actions:
//isArthur && isKing?(weapon = "Excalibur", helmet="Goosewhite"):isArcher?(weapon = "Longbow", helmet = "Mail Helm"):(weapon= "Longsword", helmet="Iron Helm");

//Ternary Conditionals can also be nested:
//isArthur && isKing?(weapon = "Excalibur", helmet="Goosewhite"):isArcher?(weapon = "Longbow", helmet = "Mail Helm"):(weapon= "Longsword", helmet="Iron Helm")

// Ternary Conditionals I:
// var allPacked = true;
// var readyToGo = true;
// var adventureTime;

// adventureTime = allPacked && readyToGo ?

//   function() {
//     return 'Adventure time is now!';
//   }()
//   :
//   function() {
//     return 'Adventuring has been postponed!';
//   }();


// Ternary Conditionals II
//var isHero = true;
// var character;

// if (isHero) {
//   character = 'Dhuun';
// } else {
//   character = 'Pesky Gnat';
// }
//character = isHero ? 'Dhuun' : 'Pesky Gnat';


//Logical Assignment I
// var armory = {addSword: function(sword){
//   //this.swords = this.swords ? this.swords:[]; // If the swords exists great, if not create array.
//   this.swords = this.swords || []; // even shorter way to do the above
//   this.swords.push(sword); //Add the sword that wasnt there before.
// }
// };

// More Examples:
// var result1 = 42 || undefined;
// console.log(result1);

// var result2 = ["sweet", "array"] || 0;
// console.log(result2);

// var result3 = {type: "ring", stone:"diamond"} || "";
// console.log(result3);

// var result4 = "King" || "Arthur";
// console.log(result4);

// var result5 = null || ""; //Returns last false item;
// console.log(result5);

// var lost;
// lost = 4 || undefined;
//Reflecting on this assignment for a bit, you realize that the undefined value will never even be examined. The name for this phenomenon in logical evaluation is called SHORT-CIRCUIT.

// var lost;
// var darkness = true;
// lost = undefined || darkness;

// var pocketStuff = ['Dragon Tooth', 'Adventure Diary', 'Silver Tiger Coin'];
// var cluesToThePast = pocketStuff || [];
// getMyIdentity(cluesToThePast);

// function getMyIdentity(memories) {
//   var identity = (memories.indexOf('Adventure Diary') >= 0) ? 'The One Who Learns' : undefined;
//   return identity || "unknown";
// }

//Logical Assignment II

//The && operator takes the rightmost "true" value or the first "false" value;
// var result1 = undefined && 42;
// console.log(result1);

// var result2 = 0 && ["Sweet","Array"];
// console.log(result2);

//The AND logical operator lets us to check multiple conditions before allowing assignemnt:
// armory = {
//   swords: ["Broadsword","Katana","Claymore","Scimitar"],
// };
// armory.retriveSword = function (request){
//   return (this.swords.indexOf(request) >= 0)?this.swords.splice(this.swords.indexOf(request), 1)[0]:console.log("No "+request+" in the armory");
// };
// var armoryIsOpen = true;
// var isKnight = true;
// var weapon = armoryIsOpen && isKnight && armory.retriveSword("Claymore"); // Returns katana only if it is a knight.
// console.log(weapon);
// armory.swords.indexOf("Claymore");
// armory.swords.indexOf("Donut");

// Example of Splice:
// var soldiers = ["Knights", "Pikeman", "Archers"];
// soldiers.splice(1,2); // returns [ 'Pikeman', 'Archers' ]

// var aiedraIsConvincing = true;
// var dhuunIsCurious = true;
// var beginJourney = aiedraIsConvincing && dhuunIsCurious;

// var strength = true;
// var fear = false;
// var surviveThisTrial = strength && !fear;

// var strength = true;
// var fear = false;
// var pack = {
//   food: [ 'carrot',
//           'mystery meat',
//           'apple',
//           'crust of bread',
//           'spicy dried sausage',
//           'carrot',
//           'wedge of sharp cheese',
//           'jug of milk',
//           'mystery meat',
//           'carrot'
//   ],
//   addFood: function(foodItem) {
//     this.food = this.food || [];
//     this.food.push(foodItem);
//   },
//   enoughFood: function(amount) {
//     return(this.food.length >= amount);
//   }
// };

// var surviveThisTrial = strength && !fear && pack.enoughFood(10);

// console.log(surviveThisTrial);


// var strength = true;
// var fear = false;
// var pack = {
//   food: [ 'carrot',
//           'mystery meat',
//           'apple',
//           'crust of bread',
//           'spicy dried sausage',
//           'carrot',
//           'wedge of sharp cheese',
//           'jug of milk',
//           'mystery meat',
//           'carrot'
//   ],
//   addFood: function(foodItem) {
//     this.food = this.food || [];
//     this.food.push(foodItem);
//   },
//   enoughFood: function(amount) {
//     return(this.food.length >= amount);
//   }
// };
// // In the end, will you survive the trial at hand?
// var surviveThisTrial = strength && !fear && pack.enoughFood(10);

// The Switch Block

//When you see the following: 
// function Knight (name, regiment) {
//   this.name = name;
//   this.regiment = regiment;
//   if(regiment == 1){
//     this.weapon = "Broadsword";
//   } else if(regiment == 2){
//     this.weapon = "Claymore";
//   } else if(regiment == 3){
//     this.weapon = "Longsword";
//   } else if(regiment == 4){
//     this.weapon = "Mace";
//   } else if(regiment == 5){
//     this.weapon = "War Hammer";
//   } else if(regiment == 6){
//     this.weapon = "Battle Axe";
//   } else if(regiment == 7){
//     this.weapon = "Halberd";
//   } else if(regiment == 8){
//     this.weapon = "Morning Star";
//   }
// } 
// var soldier = new Knight("Timothy", 2);
// console.log(soldier.weapon);

//Recreate to a Switch
// function Knight (name, regiment) {
//   this.name = name;
//   this.regiment = regiment;
//   switch (regiment) {
//     case 1: this.weapon = "Broadsword";
//     break;
//     case 2: this.weapon = "Claymore";
//     break;
//     case 3: this.weapon = "Longsword";
//     break;
//     case 4: this.weapon = "Mace";
//     break;
//     case 5: this.weapon = "War Hammer";
//     break;
//     case 6: this.weapon = "Battle Axe";
//     break;
//     case 7: this.weapon = "Halberd";
//     break;
//     case 8: this.weapon = "Morning Star";
//     break;
//   } 
// }

// var soldier = new Knight("Richard", 6);
// console.log(soldier.weapon);

// uses of fallthrough:
// function Knight (name, regiment) {
//   this.name = name;
//   this.regiment = regiment;
//   switch (regiment) {
//     case 1: this.weapon = "Broadsword";
//     break;
//     case 2: this.weapon = "Claymore";
//     break;
//     case 3: this.weapon = "Longsword";
//     break;
//     case 5: this.weapon = "War Hammer";
//     break;
//     case 6: this.weapon = "Battle Axe";
//     break;
//     case 4:
//     case 7: 
//     case 8: this.weapon = "Morning Star"; // allows case 4,7,8 to all use Morning Star
//     break;
//     case "King": this.weapon = "Excalibur";
//     break;
//     default: console.log(name + " has an incorrect regiment. \nNo weapon assigned!" );
//   } 
// }

//Another example of fallthrough: each rank recieves the ranks proir amount of jewels
// function ceremonialDagger(knight, rank){
//   this.length = 8;
//   this.owner = knight;
//   switch(rank){
//     case "King": this.diamonds = 1;
//     case "High Constable": this.amethyst = 2;
//     case "Field Marshal": this.sapphires = 4;
//     case "Captain": this.emeralds = 1;
//     case "Knight": this.rubies = 6;
//   }
// }
// var knightsDagger = new ceremonialDagger("Jerome", "Knight");
// console.log(knightsDagger);
// var marshalsDagger = new ceremonialDagger("Tim", "Field Marshal");
// console.log(marshalsDagger);
// var kingsDagger = new ceremonialDagger("Arthur", "King");
// console.log(kingsDagger);

// function aiedrasMutterings(lampsLit) {
//   var aiedrasWords;
//   switch (lampsLit) {
//     case 1: aiedrasWords = 'Darkness, there is so much darkness still shrouding the land.';
//     case 2: aiedrasWords = 'A beacon of hope, these two lamps are, but two more still await.';
//     case 3: aiedrasWords = 'Nearly it is complete, twilight breaking, is that a song I hear?';
//     case 4: aiedrasWords = 'It is done, a new age has begun, a new dawn has risen.';
//   }
//   return aiedrasWords;
// }

// alert(aiedrasMutterings(0));

// function aiedrasMutterings(lampsLit) {
//   var aiedrasWords;
//   switch (lampsLit) {
//     case 1: aiedrasWords = 'Darkness, there is so much darkness still shrouding the land.';
//     case 2: aiedrasWords = 'A beacon of hope, these two lamps are, but two more still await.';
//     case 3: aiedrasWords = 'Nearly it is complete, twilight breaking, is that a song I hear?';
//     case 4: aiedrasWords = 'It is done, a new age has begun, a new dawn has risen.';
//     default: aiedrasWords = "Shall we live in Infinite Midnight always?";
//   }
//   return aiedrasWords;
// }
// alert(aiedrasMutterings(3));

// From this:
// function sansTemple(direction) {
//   var happensNext;
//     if (direction == 'right hallway') {
//       happensNext = 'You find a door, it is locked. You head back from where you came.'
//     } else if (direction == 'left hallway') {
//       happensNext = 'You find a door, it is locked. You head back from where you came.'
//     } else if (direction == 'forward hallway') {
//       happensNext = 'You find a door, it is locked. You head back from where you came.'
//     } else if (direction == 'lower tunnel') {
//       happensNext = 'You find a door, it is locked. You head back from where you came.'
//     } else if (direction == 'hidden door') {
//       happensNext = 'You go through the door into a room. A small, very dark room, that smells of dust and sulfur...'
//     } else {
//       happensNext = 'You stand there, gaping, not moving. Aiedra wonders, are you alive?'
//     }
//   return happensNext;
// }
// sansTemple();

// // To this:
// function sansTemple(direction) {
//   var happensNext;
//   switch(direction){
//     case 'right hallway': happensNext = 'You find a door, it is locked. You head back from where you came.';
//     break;
//     case 'left hallway':  happensNext = 'You find a door, it is locked. You head back from where you came.';
//     break;
//     case 'forward hallway': happensNext = 'You find a door, it is locked. You head back from where you came.';
//     break;
//     case 'lower tunnel': happensNext = 'You find a door, it is locked. You head back from where you came.';
//     break;
//     case 'hidden door': happensNext = 'You go through the door into a room. A small, very dark room, that smells of dust and sulfur...';
//     break;
//     default: happensNext = 'You stand there, gaping, not moving. Aiedra wonders, are you alive?';
//     }
//     return happensNext;
// }
// sansTemple();


//fallthrough to fix redundancy:
// function sansTemple(direction) {
//   var happensNext;
//   switch (direction) {
//     case 'right hallway': 
//     case 'left hallway':
//     case 'forward hallway':
//     case 'lower tunnel': happensNext = 'You find a door, it is locked. You head back from where you came.';
//     break;
//     case 'hidden door': happensNext = 'You go through the door into a room. A small, very dark room, that smells of dust and sulfer...';
//     break;
//     default: happensNext = 'You stand there, gaping, not moving. Aiedra wonders, are you alive?';
//   }
//   return happensNext;
// }
// sansTemple();

//Final: 
// function CaretakerMedallion(caretaker) {
//   // var bronzeBanner;
//   // var circumscribedSquare;
//   // var innerRing;
//   switch(caretaker){
//     case 'PixelPriest': this.bronzeBanner = 'Omne initium est a pixel';
//     case 'FontFriar': this.circumscribedSquare = 'Venit Comic Sans';
//     case 'StyleSensei': this.innerRing = 'Ars autem est in aeternum';
//   }
// }

// // Example uses of our CaretakerMedallion function
// // Note the properties for each example

// var medallion1 = new CaretakerMedallion('PixelPriest');
// console.log(medallion1);
// /*
//   CaretakerMedallion {
//     bronzeBanner: 'Omne initium est a pixel', 
//     circumscribedSquare: 'Venit Comic Sans', 
//     innerRing: 'Ars autem est in aeternum'
//   }
// */

// var medallion2 = new CaretakerMedallion('StyleSensei'); 
// console.log(medallion2);

// /*
//   CaretakerMedallion {
//     innerRing: 'Ars autem est in aeternum'
//   }
// */


///////// Loop Optimizations //////////

// // A common for-loop scenario
// treasureChest = {
//   goldCois: 10000,
//   magicalItem: "Crown of Speed",
//   necklaces: ["ruby", "pearl", "sapphire", "diamond"],
//   openLid: function (){
//     console.log("Creeeeeeeeak!");
//   }
// };
// console.log("You've found the following necklaces:");
// // var x = treasureChest.necklaces.length; // This is optimizing becuse it no longer needs to go find length in each iteration of the loop
// // for(var i = 0, x = treasureChest.necklaces.length ; i< x ;i++){ //Note the location of x as the controlling parameter
// //   console.log(treasureChest.necklaces[i]);
// // } // Avoid Repetitive Access At Depth by using the above syntax.

// //Here is even one step further:
// var list = treasureChest.necklaces;
// for(var i = 0, x = treasureChest.necklaces.length ; i< x ;i++){ //Note the location of x as the controlling parameter
//   console.log(list[i]); //Note: list is already accessed above, no need to go through treasureChest then to necklaces
// }

// Array.prototype.killTheInsolent = function(){};
// Array.prototype.countPopulace = function(){};
// Array.prototype.countUndeadPopulace = function(){};
// Array.prototype.insecticide = function(){};
// Array.prototype.shadowProvider = function(){};

// var bitersBog = {
//   critters: ['Nipping Global Variable', 
//             'Sneaky For-in', 
//             'Bulging Blocking Script']
// }

// populationGetter(bitersBog); 

// function populationGetter(location) {
//   var list = '';
//   // What sort of loop should go here?
//   // Answer: for loop
//   return list.trim();
// }

// var bitersBog = {
//     critters: ['Nipping Global Variable', 
//               'Sneaky For-in', 
//               'Bulging Blocking Script']
// };

// populationGetter(bitersBog); 

// function populationGetter(location) {
//   var list = '';
//   var numCritters = location.critters.length;
//   for (var i = 0; i < numCritters; i++) {
//     list += location.critters[i];
//   }
//   return list.trim();
// }

// var bitersBog = {
//   critters: ['Nipping Global Variable', 
//             'Sneaky For-in', 
//             'Bulging Blocking Script']
// };

// populationGetter(bitersBog); 

// function populationGetter(location) {
//   var list = '';
//   // var numCritters = location.critters.length;
//   for (var i = 0, numCritters = location.critters.length; i < numCritters; i++) {
//     list += location.critters[i];
//   }
//   return list.trim();
// }

// var InvertedPeninsula = function() {
//   this.inhabitants = [
//     {
//       name: 'Sir Charles',
//       race: 'Human'
//     },
//     {
//       name: 'Ealei',
//       race: 'Elf'
//     }
//   ];
//   // Adds an extra humans method property to the inhabitants array to return all Humans
//   this.inhabitants.humans = function() { /* returns all Human inhabitants */ };
// };

// // Create a new invertedPeninsula
// var invertedPeninsula = new InvertedPeninsula();

// // Log the name of each invertedPeninsula inhabitant
// for (var i in invertedPeninsula.inhabitants) {
//   console.log(invertedPeninsula.inhabitants[i].name);
// }
// // The problem with the above is how many times the for loops executes, one to many is this form.


// // The following is not ideal:
// // Create a new invertedPeninsula
// var invertedPeninsula = new InvertedPeninsula();
// // Log the name of each invertedPeninsula inhabitant
// for (var i in invertedPeninsula.inhabitants) {
//   console.log(invertedPeninsula.inhabitants[i].name);
// }

// //here is the fix to optimize:
// var invertedPeninsula = new InvertedPeninsula();
// // Log the name of each invertedPeninsula inhabitant
// for (var i = 0, x = invertedPeninsula.inhabitants.length, list = invertedPeninsula.inhabitants; i < x; i++) {
//   console.log(list[i].name);
// }


//////////// Script Execution//////////////

/// Consider async for better loadtime.
//  the best location for a <script> tag, if it is a very large script file that will take much time to load and process is at he bottom is the body.

////////////Short Performance Tips////////////


// We can improve the following using Inheritance:
//Consider building a prototype for each of the methods in the following
// function SignalFires(ID, startingLogs){
//   this.fireID = ID;
//   this.logsLeft = startingLogs;

// Take the following methods and create a prototype
// this.addLogs = function(numLogs){
//   this.logsLeft += numLogs;
// };
// this.lightsFire = function(){
// alert("Whooooosh!");
// };
// this.smokeSignal = function (message){
//   if (this.logsLeft < this.message.length / 10){
//     alert("Not enough logs for the current message!");
//   } else {
//     this.lightsFire();
//     var x = this.message.length;
//     for(var i = 0; i<x;i++){
//       alert(this.message[i]);
//       if(i % 10 === 0 && i !== 0){
//         this.logsLeft--;
//       }
//     }
//   }
// };
// }

// By creating the prototype we no longer need to load these methods for each SignalFires creation.
// SignalFires.prototype = {
//   addLogs: function(numLogs){
//     this.logsLeft += numLogs;
//   },
//   lightsFire: function(){
//   alert("Whooooosh!");
//   },
//   smokeSignal: function (message){
//     if (this.logsLeft < message.length / 10){
//       alert("Not enough logs for the current message!");
//     } else {
//       this.lightsFire();
//       var x = message.length;
//       for(var i = 0; i<x;i++){
//         alert(message[i]);
//         if(i % 10 === 0 && i !== 0){
//           this.logsLeft--;
//         }
//       }
//     }
//   }
// };

// var fireOne = new SignalFires(1, 20);
// var fireTwo = new SignalFires(2, 18);
// var fireThree = new SignalFires(3, 24);

// fireOne.addLogs(8);
// fireTwo.addLogs(10);
// fireThree.addLogs(4);

// fireThree.smokeSignal("DANGER");




// //Adding Individual Dom Elements is not always speedy
// //Each new addition to the DOM causes a document "reflow", which can really hinder user experiance
// //Use a fragment to add conjunct elements, instead of touching the DOM over and over again.
// var list = document.getElementById("exampleList");
// var example = ["one","two","three"];

// //This would be the nonoptimized way:
// for(var i = 0, x = example.length; i<x ; i++){
//   var element = document.createElement("li");
//   element.appendChild(document.createTextNode(example[i]));
//   list.appendChild(element);
// }


// //Here is how we improve
// var fragment = document.createDocumentFragment(); //Note this new addition
// for(var i = 0, x = example.length; i<x ; i++){
//   var element = document.createElement("li");
//   element.appendChild(document.createTextNode(example[i]));
//   fragment.appendChild(element); //replace list with fragment
// }
// list.appendChild(fragment);//This is also and additional line

// //Note Declare variables as few times as possible.
// var list = document.getElementById("exampleList");
// var example = ["one","two","three"];
// //Should be:
// var list = document.getElementById("exampleList"), //Note the use of a camma at the end of this line
//     example = ["one","two","three"];
//     fragment = document.createDocumentFragment(); 
//     element; //Also we can declare variables that are on the inside of loops to the outside for speed.
// for(var i = 0, x = example.length; i<x ; i++){
//   element = document.createElement("li"); //The variable was created above
//   element.appendChild(document.createTextNode(example[i]));
//   fragment.appendChild(element); 
// }
// list.appendChild(fragment);


// //Consider the Strings:
// var knight = "Jenna";
// var action = "Strikes Dragon";
// var weapon = "Helberd";

// // the += is optimized in most modern browser.
// var turn = "";
// turn += knight;
// turn += action;
// turn += weapon;

// var newPageBuild = ["<!Doctype hmtl>", "<html>", "<body>","<h1>","***a hundred or more other html elements***","</script>", "</body>","</html>"];
// var page = "";
// for(var i = 0, x = newPageBuild.length; i < x; i++){
//   //page += newPageBuild[i]; //This works, however there is a far better option for optimizing the site.
//   page = newPageBuild.join("\n"); //This is much faster
// }
// console.log(page);

// var list = document.getElementById('population'),
//     inhabitants = ['Nipping Global Variable', 'Sneaky For-in', 'Bulging Blocking Script'],
//     fragment = document.createDocumentFragment();

// for (var i = 0, x = inhabitants.length; i < x; i++) {
//   var element = document.createElement('li');
//   element.appendChild(document.createTextNode(inhabitants[i]));
//   fragment.appendChild(element);
// }

// list.appendChild(fragment);

// // What is the fastest way to merge this array into one jumbo string?
// var array = ['The', 'Inverted', 'Peninsula', 'reminds', 'you', 'of', 'something', 'just', 'at', 'the', 'fringe', ',', 'just', 'out', 'of', 'grasp', '.'];
// // Call the Array prototype's join() method in array

//Using your new knowledge of native methods, merge this array into one sentence. Do it the fastest way you know, and you should be able to accomplish this with a single line.
// var array = ['The', 'Inverted', 'Peninsula', 'reminds', 'you', 'of', 
//               'something', 'just', 'at', 'the', 'fringe', ',', 
//               'just', 'out', 'of', 'grasp', '.'];
// array.join(" ");



////////////////////////IMPORTANT!////////////////////////////
///////////////////Measureing Preformance/////////////////////

// function Knight (name, regiment) {
//   this.name = name;
//   this.regiment = regiment;
//   switch (regiment) {
//     case 1: this.weapon = "Broadsword";
//     break;
//     case 2: this.weapon = "Claymore";
//     break;
//     case 3: this.weapon = "Longsword";
//     break;
//     case 5: this.weapon = "War Hammer";
//     break;
//     case 6: this.weapon = "Battle Axe";
//     break;
//     case 4:
//     case 7: 
//     case 8: this.weapon = "Morning Star"; // allows case 4,7,8 to all use Morning Star
//     break;
//     case "King": this.weapon = "Excalibur";
//     break;
//     default: console.log(name + " has an incorrect regiment. \nNo weapon assigned!" );
//   } 
// }
// var firstRegimentNewbs = ["Grimble Horsehead", "Jark Winterborn","Bunder Ropefist"];
// var firstRegimentKnights = ["*...tons of Knight objects...*"];
// console.time("Total completion time");
// console.time("Time to add "+firstRegimentNewbs.length+" Knights"); // console.time(); Starts timer
// for(var i = 0, x = firstRegimentNewbs.length; i < x; i++){
//   //var newGuy = new Knight(firstRegimentNewbs[i], 1 no need to call this when we could simply place below
//   firstRegimentNewbs.push(new Knight(firstRegimentNewbs[i], 1));
// }
// console.timeEnd("Time to add "+firstRegimentNewbs.length+" Knights"); //console.timeEnd(); ***Needs to be exact String as above***
// console.timeEnd("Total completion time"); // NOTE: the timer itself also take processing time. It is also not averaged. it will change slightly.

// var array = ['Inverted Peninsula', ',', 'Inverted Peninsula', ', ', 'I', '—', 'P', '...', 'hmmm', '.'];
// var internalThoughts = '';
// console.time("Time");
// internalThoughts = array.join(' ');
// console.timeEnd("Time");
// console.log(internalThoughts);


// Array.prototype.killTheInsolent = function(){};
// Array.prototype.countPopulace = function(){};
// Array.prototype.countUndeadPopulace = function(){};
// Array.prototype.insecticide = function(){};
// Array.prototype.shadowProvider = function(){};

// var invertedPeninsula = {
//   inhabitants: ['Nipping Global Variable', 'Sneaky For-in', 'Bulging Blocking Script']
// };

// function populationGetter(){
//   var population = invertedPeninsula.inhabitants;
//   var list = "";

// console.time("t");
//   for(var i = 0, ff = population.length; i < ff; i++){
//     list += (population[i] + " ");
//   }
// console.timeEnd("t");

//   return list.trim();
// }

// populationGetter();



////// Measuring Performance II -- Speed Averaging

// var rightNow = new Date(); //January 1st 1970, is the start.
// console.log(rightNow);

// //Consider this:
// var startTime = +new Date(); // time in Ms
// console.log(startTime);
// var endTime = +new Date();
// var elapsedTime = endTime - startTime;
// console.log(elapsedTime);

// //Speed Test Class:
// function SpeedTest(testImplement, testParams, repetitions){
//   this.testImplement = testImplement;
//   this.testParams = testParams;
//   this.repetitions = repetitions || 10000;
//   this.average = 0;
// }
// SpeedTest.prototype = {
//   startTest: function (){
//     var beginTime, endTime, sumTimes = 0;
//     for(var i = 0, x = this.repetitions; i < x; i++){
//       beginTime += +new Date();
//       this.testImplement(this.testParams);
//       endTime += +new Date();
//       sumTimes += endTime - beginTime;
//     }
//     this.average = sumTimes / this.repetitions;
//     return console.log("Average execution across "+ this.repetitions + ": " + this.average);
//   }
// };

// /////TESTS:
// function Knight (name, regiment) {
//   this.name = name;
//   this.regiment = regiment;
//   switch (regiment) {
//     case 1: this.weapon = "Broadsword";
//     break;
//     case 2: this.weapon = "Claymore";
//     break;
//     case 3: this.weapon = "Longsword";
//     break;
//     case 4: this.weapon = "Mace";
//     break;
//     case 5: this.weapon = "War Hammer";
//     break;
//     case 6: this.weapon = "Battle Axe";
//     break;
//     case 7: this.weapon = "Halberd";
//     break;
//     case 8: this.weapon = "Morning Star";
//     break;
//   } 
// }
// var firstRegimentNewbs = ["Gwendolyn",
// "Amir",
// "Felix",
// "Ian",
// "Herman",
// "Claire",
// "Ruby",
// "Ignacia",
// "Mary",
// "Dalton",
// "Keaton",
// "Jennifer",
// "Yeo",
// "Stewart",
// "Ali",
// "Dacey",
// "Hadassah",
// "Alana",
// "Donovan",
// "Lila",
// "Cassady",
// "Cecilia",
// "Jasmine"];
// var firstRegimentKnights = ["...tons of Knight Objects..."];
// var listForTests = [firstRegimentNewbs, firstRegimentKnights];
// var noBP = function(listOfParams) {
// //Bad Array: 
// for(var i = 0; i < listForTests.length; i++){
//   var newGuy = new Knight(listForTests[0][i]);
//   listForTests[1].push(newGuy);
// }
// };


// // //Good array:
// // for(var i = 0, x = firstRegimentNewbs.length; i < x; i++){
// //   firstRegimentNewbs.push(new Knight(firstRegimentNewbs[i], 1));
// // }
// var noBPTest = new SpeedTest(noBP,listForTests);
// noBPTest.startTest();



///////Careful Comparisons

// Strict Equality
// '4' == 4; //returns true
// '4' === 4; //returns false
// true == 1; // true
// false == 0; // true
// true === 1; // false
// false === 0; // false
// "\n \n \t" == 0; // true
// "\n \n \t" === 0; // false


// Triple Equals
// function countEntries(KnightResponses, value){
//   var count = 0, x = KnightResponses.length;
//   for(var i = 0; i < x ; i++){
//     if(KnightResponses[i] == value){ // we need triple Equals here
//       count++;
//     }
//   }
//   return count;
// }
// var fields = ["Scot Pfleghaar", "1", "12", true, true, false];
// var numCompletedTasks = countEntries(fields, true);
// console.log(numCompletedTasks); // returns 3, should return 2, refer above.


function LeatherArmour(bodyStyle, numBuckles, numSpaulders) {

}
