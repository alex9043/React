// //callback
// function first() {
//     //do something
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log("Я учу " + lang);
//     callback();
// }

// function done() {
//     console.log("Я прошел 3й урок!");
// }

// learnJS("JavaScript", done);


//objects
// let obj = new Object();
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options){
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];

// // arr.pop();
// // arr.push("5");
// // arr.shift();
// // arr.unshift("1");

// // for(let i = 0; i < arr.length; i++){
// //     console.log(arr[i]);
// // }

// // console.log(arr);
// // arr[99] = 99;
// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + " (массив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];
// for(let key in mass){
//     console.log(key);
// }

// for(let key of mass){
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["aawe", 'zzz', 'pp', 'rqa'],
//     i = arr.join();

// console.log(i);

// let arr = ["aawe", 'zzz', 'pp', 'rqa'],
let arr = [1,15,4],
    i = arr.sort(compareNum);

function compareNum(a,b){
    return a-b;
}
console.log(arr);


let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);
