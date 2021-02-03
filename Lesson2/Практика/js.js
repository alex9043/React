'use strict';

let money = prompt("Ваш бюджет на месяц?", "2000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-02-03");

let appData = {
    budget   : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving    : false
}

let q1 = prompt("Введите обязательную статью расходов в этом месяц", "Еда"),
    q2 = prompt("Во сколько обойдется?", "1500"),
    q3 = prompt("Введите обязательную статью расходов в этом месяц", "Проезд"),
    q4 = prompt("Во сколько обойдется?", "500");

appData.expenses.q1 = q2;
appData.expenses.q3 = q4;

alert("Бюджет на день - " + money/30)
