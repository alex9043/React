'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "2000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-02-03");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", "2000");
    }
}
start();

let appData = {
    budget           : money,
    timeData         : time,
    expenses         : {},
    optionalExpenses : {},
    income           : [],
    savings          : true
};

function chooseExpenses(){
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
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for(let i = 0; i < 3; i++){
        let q = prompt("Статья необязательных расходов?", "Развлечения");
        appData.optionalExpenses[i+1] = q;
    }
}
chooseOptExpenses();

function detectDayBuget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Бюджет на день - " + appData.moneyPerDay);
}
detectDayBuget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашегодепозита: " + appData.monthIncome);
    }
}

checkSavings();


















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
