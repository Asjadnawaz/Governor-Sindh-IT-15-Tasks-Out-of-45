//Task 02 - Print Person Name
var personName = "Asjad";
console.log("Hello ".concat(personName, ", would you like to learn some phython today?"));
//Task 03 - Name Cases
var personName = "Asjad Nawaz Khan";
console.log("LowerCase:", personName.toLowerCase);
console.log("UpperCase:", personName.toUpperCase);
console.log("TitleCase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//Task 04 - Famous Qoute
var author = "Sir Francis Bacon";
var qoute = "Knowledge is Power";
console.log("".concat(author, " once said, \"").concat(qoute, "\""));
//Task 05 - Repeat of Task 04
var famous_person = "Sir Francis Bacon";
var message = "Knowledge is Power";
console.log("".concat(famous_person, " once said, \"").concat(message, "\""));
//Task 06 - Whitespaces then Stripped 
var whitespaces = "\t\n Asjad \n\t";
console.log("'" + whitespaces + "'");
var stripped = whitespaces.trim();
console.log("'" + stripped + "'");
//Task 07 - Eight Number
console.log(7 + 1);
console.log(12 - 4);
console.log(2 * 4);
console.log(32 / 4);
//Task 08 - Favourite Number
var favourite = 9;
console.log("My favourite number is ".concat(favourite));
//Task 11 - Store Friends in an array
var naam = ["Asjad", "Mahad", "Ajwad"];
console.log(naam[0]);
console.log(naam[1]);
console.log(naam[2]);
//Task 12 - Greetings
var names = ["Ajwad", "Asjad", "Mahad"];
console.log("Hello" + " " + names[0] + " " + "How are you today😀?");
console.log("Hello" + " " + names[1] + " " + "How are you today😀?");
console.log("Hello" + " " + names[2] + " " + "How are you today😀?");
//Task 13 - Own Array
var vehicles = ["Audi", "BMW", "Bugati Chiron"];
vehicles.map(function (items) { return console.log("I would like to own ".concat(items)); });
//Task 14 - Guest list
var guests = ["Amaaz", "Hamza", "Ali"];
guests.map(function (items) { return console.log("Dear ".concat(items, ", you are invited to the dinner \uD83C\uDF7D")); });
//Task 15 - Changing Guest list
var guest = ["Amaaz", "Hamza", "Ali"];
var notAttend = "Amaaz";
var newguest = "Junaid";
console.log("Dear ".concat(notAttend, ", you didn't attended the dinner \uD83C\uDF7D."));
guest[(guest.indexOf(notAttend))] = newguest;
guest.map(function (items) { return console.log("Dear ".concat(items, ", you are invited to the dinner \uD83C\uDF7D")); });
