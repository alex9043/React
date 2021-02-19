let drink = 0;

function shoot(arrow){
    console.log('Вы сделали выстрел...');
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
        }, 3000);
    });
    return promise;
}

function win() {
    console.log('Вы победил!');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('Вам купили пива!');
}

function giveMoney(){
    console.log('Вам заплатили!');
}

function loose() {
    console.log('Вы проиграли!');
}

shoot({})
        .then(mark =>console.log('Вы попали в цель!'))
        .then(win)
        .catch(loose);