


// some more functions
/*
- repeat
- startsWith
- endsWith
- Includes
*/

// repeat
// let shout = `Good Morning Sir, We are happy to see you`;
// console.log(shout.repeat(200));
/*
// startWith function
let str = "heloo Guys";
console.log(str.startsWith("Guys", 6));
console.log(str.endsWith("", 1));



let usersName = 'ajayidhikrullah';
if (usersName.startsWith('ajayidhikrullah')){
    var iSay = `Welcome to this platform ${usersName}`;
    // console.log(iSay);
} //else{
//     console.log(`your incorrect`);

// }
console.log(iSay);

//includes
//let uName = prompt('Whats your name?'); //this collect name from users
// console.log(uName.includes('ajayidhikrullah'));
//print 'true' if the user types ajayidhikrullah, else print false or undefined.


//lowercase
let letters = 'How are you doing?';
console.log(letters.toUpperCase()); //print HOW ARE YOU DOING
console.log(letters.toLowerCase(2)); //same thung
console.log(letters.length);//this returns 18
console.log(letters) //returns the same value
*/

let username = ['john', 'ade', 'nurudeen'];
//.push adds a new value at d end of an array
console.log(username.push('ajayi')); //print 4
console.log(username[3]); //ajayi
console.log(username); //(4) ["john", "ade", "nurudeen", "ajayi"]
//.unshift adds a value at d beginning of an array
username.unshift('Welcome all...');
console.log(username); //(5) ["Welcome all...", "john", "ade", "nurudeen", "ajayi"]

//.pop removes d last value
username.pop(); //this should remove the last value'ajayi';
console.log(username); //(4) ["Welcome all...", "john", "ade", "nurudeen"]
//.shift
username.shift();
console.log(username);//(3) ["john", "ade", "nurudeen"]
console.log(username.indexOf());

//sorting
let sor = [4,3,5,6,43,5,64,2,53,2,2,445,5,3,34,4,55,555,4,3,33,3,3,3,3,3];
// console.log(sor.sort(2));}
let greaterThan4 = sor.filter();
function myFunction(num=20);
return value > 4;
};

