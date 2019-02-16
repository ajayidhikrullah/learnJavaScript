"use strict";

// const showHeader;
const showHeader = document.querySelector('.header');
showHeader.innerHTML = '<h1>Welcome to this part of mine</h1>';
showHeader.innerSTYLE = document.querySelector('.header').style.border = '5px solid Grey';
// console.log(showHeader);

// objects = the name of whole body of a thing
//objects properties = what forms the objects,name,color,attributes
// methods = like what action is the object going to perform
// eg
// let aeroplane = {
// 	name: 'Emirates',
// 	color: 'white',
// 	takeOffTime: 1000,
// 	speed: function() {	
// 		// body...
		
// 	}

// };
// console.log('aeroplane.name');

// console.log(aeroplane.speed());
// accessing objects properties

// [[[[[[DOT NOTATION]]]]]]



// objectname.property/methodName
// console.log(this.color); //this print 'white';
// console.log(aeroplane);
// console.log(isPrototypeOf());

// console.log([this.name]);
// console.log(aeroplane.name);
//define ur boolean, numbers and string as object with the new keyword.

//new keyword
const userName = new Object();
userName.name = 'Ajayi';
userName.color = 'Blacky';
userName.height = 500;
// console.log(userName);

// Object literal
var john = {
	name: "dhikrullah",
	age:55,
	height:"6feet",

};

// dot notation is use dto read out a value in object
console.log(john.name);


// bracket notation
var x = 'name';

console.log(john['height']);
console.log(john[x]);

// data mutation
john.name = 'Ajayi'; //dot notaion to upodate data
john['age'] = '11'; // braccket notation to update data
console.log(john); 

// You can create an array and object with the 'new' keyword
var nuru = new Object();
nuru.name = 'Nurudeen';
nuru.age = 20;
nuru['job'] = 'developer';
nuru['isMarried'] = 'single';
console.log(nuru);

//bracket notation is useful when u want to access a property key but the name will b stored
//in another variable
/*
function identify(){
	return this.name.toUpperCase();
}

function speak(){
	var greeting = "hello, i'm " + identify.call (this);
	console.log(greeting);
}

var me = {
	name: "kyle"
};

var you = {
	name: "Reader"
};

console.log(identify.call(me));
console.log(identify.call(you));

console.log(speak.call(me));
console.log(speak.call(you));
*/

//w3schools
var Food = function(type, soup, cost){
	this.foodName = type,
	this.soupName = soup,
	this.foodCost = cost

this.Owner = 'Dhikr';
var me = function(){
	console.log('I want to eat,' + this.Owner + 'with confirm' + this.soup + ' and ' + this.cost); 
}

};

var myFood = new Food("Amala", 'Banga', 500);
var mySwallow = new Food('FriedRice and Chicken', 'Ata Dindin', 1500);

// console.log(myFood.soup);
// console.log(mySwallow.cost);


document.write(myFood.me);
// console.log(myFood['soup'])
console.log(mySwallow.me);
// console.log(mySwallow.cost);


// objects and methods
var aeroplane = {
	name: 'Emirates',
	color: 'white',
	takeOffTime: 1000,
	isBig: true,
	toLand: null,
	passengers: ['Ajayi', 'Adekunle', 'Nurudeen'],
	// this functions are methods
	speed: function(toLand) {	//function expression
		// body...
		return 80 - toLand;
		// return this.name + " " + this.speed;
	}
};

// console.log(aeroplane.speed(40)); //returns 40

var aeroplane = {
	name: 'Emirates',
	color: 'white',
	takeOffTime: 1000,
	isBig: true,
	toLand: 10,
	passengers: ['Ajayi', 'Adekunle', 'Nurudeen'],
	// this functions are methods
	speed: function() {	//function expression
		// body...
		return 80 - this.toLand;
		// return this.name + " " + this.speed;
	}
};

console.log(aeroplane.speed()); // print out 70
var newSpeed = aeroplane.speed(); //assign tto a new variable
aeroplane.newSpeed = newSpeed;
console.log(aeroplane); // print the whole object and add the array and function

// /LEARN how to code
// mycourse -name- price, description, author
var myJavascriptCourse = {
	courseName: "JavaScript",
	courseAuthor: 'Pittie',
	CourseDescription: 'JavScript from 0 - Hero',
	courseAmount: 5000,
}

console.log(myJavascriptCourse);
console.log(myJavascriptCourse.courseAmount);
console.log(`I am into ${myJavascriptCourse.courseName}, and I am paying ${myJavascriptCourse.courseAmount} to further it`);
//MDN
let dhikrullah = {
	height: 50,
	weight: 75,
	complexion:"dark",
	stature:"moderate",
	hair:"black",
	married: false
};
console.log(dhikrullah);
 //this print my height:50, weight:75...

 let nurudeen = {
 	userName: 'Nurudeen',
	height: 50,
	weight: 75,
	complexion: ['dark', 'black'],
	stature:"moderate",
	hair:"black",
	married: false,
	language:'JavaScript',
	bio: function(){
		// document.write(`Hi I am ${this.userName}, ${this.complexion[0]} in complexion and the language im on is ${this.language}`)
		// console.log(typeof(nurudeen.bio));
		// console.log(this)
	}
};

nurudeen.bio();
// console.log(nurudeen);
// console.log(nurudeen.userName);
// console.log(nurudeen.bio());
// console.log(`Hi I am ${this.userName} and my complexion is ${this.complexion[1]}, I am presently undergoing a program on ${this.language}`)
// console.log(typeof(bio));

//w3schools
// this
// in an object method, 'this refers to the owner of object'
// this keyword can be called in object method





// console.log(users_name.request());


//This keyword c]can be called in this alone.
// i.e.
let alone = this;
// console.log(alone);
//returns [object window]


//strict mode
//this shows error when u dont declare any varaible and u want to call them
//strict mode makes code clean, because it finds undeclared variable and shows an error
//
// f = 'k';
// console.log(f);
 // in normal js, mistyping a var name creates a global variable, whcih the strict mode will catch

// /strict mode in a local scope function
/*
x = 900; //no errors
// var y;
myFunction();

function myFunction(){
	'use strict';
	y = 111; //will cause error from here
	console.log(y, x); //print 111, 900
}
*/
/*
var person = {
	pName: 'Ade',
	sName: 'Kunle',
	eyeColor: "black/white",
}*/

//delete person.eyeColor;
//console.log(person);
//strict mode
//this shows error when u dont declare any varaible and u want to call them
//strict mode makes code clean, because it finds undeclared variable and shows an error
//
// f = 'k';
// console.log(f);
 // in normal js, mistyping a var name creates a global variable, whcih the strict mode will catch

// /strict mode in a local scope function

x = 900; //no errors
// var y;
myFunction();

function myFunction(){
	'use strict';
	// y = 111; //will cause error from here
	// console.log(y, x); //print 111, 900
}

let quranRecitation = {
	reciter: 'Sheikh Sudaiz',
	surah: 'al-Baqarah',
	surahLength: 1.5,

}
console.log(`The Quran Recitation ${quranRecitation.surah} is being recited by ${quranRecitation.reciter}, it will take about ${quranRecitation.surahLength} hours to end`);
//print The quran recitation Al-baqarah is being recited by Sheikh Sudaiz...
// 
let users_name = {
	fName: 'hayjay',
	lName: 'Abdul',
	id: 9009,
	loggedOn: false,
	requests: function(){
		//this is a method in an object
		console.log(this.fName); // prints hayjay
		console.log(this.lName);
		console.log(`I am ${this.fName} and my id is ${this.id}`) //I am hayjay and my id is 9009
	
	}

};
users_name.requests(); //calling the request method of the function


 // let result = {
// 	add: "firstNum" + "secondNum",
// 	subtract: "firstNum" - "secondNum",
// 	divide: "firstNum" / "secondNum",
// 		multiply: "firstNum" * "secondNum"
// }

// console.log(result.add());

//OBJECTS
	let name = 'Ahayja';
	let age = 100;
	let profile = {
		name, age
	};
		console.log(profile.name); //print ahayja
		

		//ES5
let ninja = {
	name, age,
	chop(x){
		console.log(`you chopped the enemy ${x} times`);
		//this print out 'You chopped the enemy 5 times'
	}
};

console.log(ninja.chop(5));//call the function with a param
console.log(ninja);

//IN OBJECT, WE CAN CALL [PROPERTIES OR METHODS IN IT]
 
let letter = new String();
letter = 'How are you doing?';
console.log(letter);
console.log(letter.toUpperCase()); //print HOW ARE YOU DOING

// NINJAS
// Object properties are data items
// ?and object methods are functions that allows object do something with the data/properties
//body is an object, properties is hand, legetc, and method is how i use this hands legs etc
// all this are a way of retrieving of getting object memebrs
// object sub-namse space
// creating object insyde an object
// WE want to use dotNotation to access this
//this is an Object literal
let myBody = {
	//another object insyd
	name: {
		firstName: 'Dhikrullah',
		lastName: 'Ebuka',
	},
	complexion: ['dark', 'chocolate', 'yellow', 'white'],
	tribalMark: true,
	height: 50,
	bestFood: 'allFood',
	games: 'Draft',
	bio: function(){
		// this print 'Ajayi is Dark in complexion'
		console.log(`${this.name.firstName} ${this.name.lastName} is ${this.complexion[0]} in complexion`)
		// this below print 'Ajayi Ogigiolu enjoys eating Iyan'
		console.log(`${this.name.lastName} enjoys eating ${this.bestFood}`)
		// this below Dhikrullah is also changing is complexion to Green
		console.log(`${myBody.name.firstName} is also changing is complexion to ${this.complexion[0]}`);
		console.log(`${this.name.firstName}'s weight is ${myBody.weight}`);
	},
}
//overwrite values with dot notation.
myBody.height = 60; //this will overwrite my height to 60
myBody.name.lastName = 'Ajayi Ogigiolu'; //this overwrite the lastName to Ajayi.
//overwrites values with BRACKET NOTATION
myBody["bestFood"] = 'Iyan', //this overwrite the bestFood Object data to Iyan
myBody["complexion"][0] = 'Green';//overwrites the complexion(dark) of complexion array to Green.
myBody.bio(); //call the method of the object(bio function) and do whats inside
//lets get some Object members
// updateing the object values
//Overwritten the Object propertiess with bracket notation
let height = 'weight';
let weightValue = 75;
// myBody[weight] = weightValue;
// console.log(myBody.weight);

// another way to declare/initiate an Object
let toDay = new Object();
toDay.day = new Date();
toDay.time = 5,
toDay.bright = true,
toDay.learn = ['Objectss', 'functions constructor']
// adding method
toDay.startDay = function(){
	console.log(`${this.day} is going to be more of learning an ${this.learn[0]}! gaskia!!!`)
//print out Wed Feb 13 2019 14:20:57 GMT+0100 (W. Central Africa Standard Time) is going to be more of learning an Objectss! gaskia!!!
};
console.log(toDay.bright); //print out true
toDay.startDay(); //this is to calll the object method to do something

//data mutation
// just a way to change values in object or mutate
//THIS OBJECT
//this object can also be used to create new properties with values inside of an object method.
let provisions = {
	indomie: ['Hungryman', 'superPack'],
	milk: ['milo', 'ovaltine'],
	availability: true,
	priceOfProvision: 25000,
	changeInPrice: function(){
		//the this.newPrice below create a property newPrice with value 27000.
		this.newPrice = 2000 + this.priceOfProvision;//
		
		document.write(`the ${this.indomie[1]} is available, and its price is now ${this.changeInPrice}`);
		//this prints 'the superPack is available, and its price is now 27000
	
	}

};
// console.log(typeof(this));
provisions.changeInPrice();
console.log(provisions);



//freeCodeCamp

var cat = {
	name: 'julia', hunter: 'sk', snoopie: 'beagle'
};
let myCat = 'hunter';
let myBreed = cat[myCat];
console.log(myBreed);

//Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

//Here is an example of using a variable to access a property:

var dogs = {
  Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
// Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
// Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.
// Use the playerNumber variable to look up player 16 in testObj using bracket notation. Then assign that name to the player variable.