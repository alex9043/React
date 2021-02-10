'use strict';

let money = +prompt("Ваш бюджет на месяц?", "2000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-02-03");

let appData = {
    budget           : money,
    timeData         : time,
    expenses         : {},
    optionalExpenses : {},
    income           : [],
    saving           : false
};

for(let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяц", "Еда"),
        b = prompt("Во сколько обойдется?", "1500");

    if (typeof(a) === 'string' && typeof(a) != null 
        && typeof(b) === 'string' && typeof(b) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
    }
};

appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на день - " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}


















//
// let x = 5;
// alert(x++);

//
// console.log([] + false - null + true)

//
// let y = 1;
// let x = y = 2; 
// alert(x);

//
// console.log([] + 1 + 2)

//
// alert( "1"[0] )

//
// console.log(2 && 1 && null && 0 && undefined)

//
// let a = true;
// let b = true;
 
// console.log(!!( a && b ));
// console.log(a && b);

// alert( null || 2 && 3 || 4 );

//
// let a = [1, 2, 3]; 
// let b = [1, 2, 3];
// console.log(a == b);

//
// alert( +"Infinity" );

//
// console.log("ёжик" > "яблоко");

//
// alert(0 || "" || 2 || undefined || true || falsе)
