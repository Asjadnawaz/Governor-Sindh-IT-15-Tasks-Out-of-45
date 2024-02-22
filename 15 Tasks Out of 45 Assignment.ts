//Task 02 - Print Person Name

var personName: string = "Asjad";
console.log(`Hello ${personName}, would you like to learn some phython today?`);

//Task 03 - Name Cases

var personName: string = "Asjad Nawaz Khan";
console.log("LowerCase:", personName.toLowerCase());
console.log("UpperCase:", personName.toUpperCase());
console.log("TitleCase:", personName.replace(/\b\w/g,c => c.toUpperCase()));

//Task 04 - Famous Qoute

var author: string = "Sir Francis Bacon";
var qoute: string = "Knowledge is Power";

console.log(`${author} once said, "${qoute}"`);

//Task 05 - Repeat of Task 04

var famous_person: string = "Sir Francis Bacon";
var message: string = "Knowledge is Power";

console.log(`${famous_person} once said, "${message}"`);

//Task 06 - Whitespaces then Stripped 

var whitespaces: string = "\t\n Asjad \n\t"
console.log("'"+ whitespaces + "'");

var stripped: string = whitespaces.trim();
console.log("'" + stripped + "'");

//Task 07 - Eight Number

console.log(7 + 1);
console.log(12 - 4);
console.log(2 * 4);
console.log(32 / 4);

//Task 08 - Favourite Number

var favourite: number = 9;
console.log(`My favourite number is ${favourite}`);

//Task 11 - Store Friends in an array

let naam: string[] = ["Asjad", "Mahad", "Ajwad"];
console.log(naam[0]);
console.log(naam[1]);
console.log(naam[2]);

//Task 12 - Greetings

let names: string[] = ["Ajwad", "Asjad", "Mahad"];
console.log("Hello"+" "+ names[0] +" "+ "How are you today😀?");
console.log("Hello"+" "+ names[1] +" "+ "How are you today😀?");
console.log("Hello"+" "+ names[2] +" "+ "How are you today😀?");

//Task 13 - Own Array

let vehicles: string [] = ["Audi", "BMW", "Bugati Chiron"];

vehicles.map((items) => console.log(`I would like to own ${items}`));

//Task 14 - Guest list

let guests: string [] = ["Amaaz", "Hamza", "Ali"];
guests.map((items) => console.log(`Dear ${items}, you are invited to the dinner 🍽`));

//Task 15 - Changing Guest list

let guest: string [] = ["Amaaz", "Hamza", "Ali"];
let notAttend: string = "Amaaz";
let newguest: string = "Junaid";

console.log(`Dear ${notAttend}, you didn't attended the dinner 🍽.`);

guest [(guest.indexOf(notAttend))] = newguest;

guest.map((items) => console.log(`Dear ${items}, you are invited to the dinner 🍽`));


