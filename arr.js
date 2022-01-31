// exercise 1
//  Implement following array methods:


// let arr = ["Mike", 21, "Hello", true, 5];
// let arr2 = ["John", false, 45, "Artur"];

// a. Concat

// let concat = arr.concat(arr2)
// console.log(concat);

// b. Fill

// let Fill = arr.fill("?", 3)
// console.log(Fill);

// c. Find

// let obj = [{name : "Artur", age : 28}, {name : "Sargis", age : 30}, {name : "Artur", age : 15}];

// let Find = obj.find(Findobj => {
//     return Findobj && Findobj.name === "Sargis";
// })
// console.log(Find);


// d. FindIndex

// let findInd = obj.findIndex(arr => {
//     return arr && arr.name === "Sargis"
// })
// console.log(findInd);


// e. Flat

// let array = [4,8,6,97,[56,65,7, [8,[1,2,3],89,99,156,45]],4]

// let flat = array.flat(3)
// console.log(flat);

// f. Map

// let obj4 = [{name : "Rafael", age : 21}, {name : "Ani", age : 25}, {name : "Mike", age : 33}];
//     let map = obj4.map(val => {
//         return val.name 
//     })
// console.log(map);

// g. Reduce

// let objNum = [1,5,8,9,80];

// let reduce = objNum.reduce((val, i, x, res) => {
//     return val + res[x];
// }, 0);
// console.log(reduce);


// exercise 2
// Given an array. Determine whether it consists only of unique items or not.

let arr6 = ["Ani", "Gor", "Ashot", "Gor", "Artur", "Ashot"]
console.log(arr6);

const dedup = arr6.filter((item, idx) => arr6.findIndex(x => x[1] == item[1]) == idx);
arr6 === dedup ? console.log(true) : console.log(false);;


// ecercise 3
// Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word or phrase without a repeating letter.

let str = "World";
let isogram = str.split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == str.length;
   console.log(isogram);
   





// ecercise 4


// Also please take a look at Lodash documentation and try to implement the following functions
let arr1 = [1, 2, 3, 4, 5, 6, true, "Hakob"]
let arr2 = [4, 5, 6, false, true, "Araqs"]

// a. intersection
    let intersection = _.intersection(arr1,arr2)
    console.log(intersection);

// b. pull
const arrPull = [2,5,4,5,4,5,3,4,1];

 let pull = _.pull(arrPull, 4,5);
 console.log(pull);

//  c. tail

let tail = _.tail(arr2)
console.log(tail);

// d. talk

let take = _.take(arr2, 2)
console.log(take); 