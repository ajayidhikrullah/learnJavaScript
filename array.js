//const should always b used in declaring an array
const electorate = ['Buhari', 'Atiku', 2019, true];
document.write(electorate); // this print '["Buhari", "Atiku", 2019, true]
console.log(electorate[2]); //returns 2019
console.log(electorate.length); //4(started from 1,2,3,4...)
console.log(electorate[electorate.length -1]); //lets return the value and the number

// array Methods
const num = ["hay, bee", "cee"];
// num[0] = "-";
// console.log(num); //print ["-", "cee"]

//Number shift
// num.shift(); //deletes the first value of an array and returns the number
// console.log(num.shift());
// num.unshift(); //this adds sumthing to d start of an array

//splice
num.splice(1, 2, 'disaqualified');
console.log(num);