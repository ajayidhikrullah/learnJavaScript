'use strict';
var sum = 0; //this get the total of the Array
var meanLength = ''; //this holds the mean array length
var meanScore = [10,20,30,40,50,30,40,60,70,100]; //fixed mean numbers.
for (var i = 0; i < meanScore.length; i++) { //loops through and pick each value
sum += meanScore[i]; //print the total 150 and store it in 'sum'
meanLength = meanScore.length; //get the length of d meanScore
var result = sum/meanLength; //divide the som of mean score by the length
// result = result + meanScore[i];
// at 0, 0 + 10[10] i++
// at 10; 10 + 20; 30;
//at 30; 30+30; 60;
//at 60; 60+40; 100;
//at 100; 100+50; 150.
// result = 0 + meanScore[i];

}
console.log(result); // finnally print the mean score of the above data is 45
// console.log([i]);
// 
console.log(`the mean score of the above data is ${result}`);
























var chec = [1,2,3,4,5,6,4,3,2,3];
console.log(chec.sort());
var c = 0;
for (let i = 0; i < chec.length; i++) {
    const element = chec[i];
    
}