// let timerId = setTimeout(sayHell, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHell, 3000);
// clearTimeout(timerId);

// function sayHell() {
//     console.log('Hell to World!');
// }

// let timerId = setTimeout(function log(){
//     console.log('Hell');
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');
    
function myAnimation(){
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame(){
        if(pos == 300){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
};

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//     if(event.target && event.target.tagName == 'BUTTON'){
//         console.log("Hell!");
//     }
// });

// btnBlock.addEventListener('click', function(event) {
//     if(event.target && event.target.classList.contains('first')){
//         console.log("Hell!");
//     }
// });

btnBlock.addEventListener('click', function(event) {
    if(event.target && event.target.matches('button.first')){
        console.log("Hell!");
    }
});