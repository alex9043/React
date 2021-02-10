let menuItems = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    prom = document.querySelector('.prompt'),
    li = document.createElement('li');
//    ans = prompt("Отношение к технике apple?", 'Нормуль');
li.classList.toggle("menu-item");
li.textContent = 'Пятый элемент';
menu.insertBefore(menuItems[2], menuItems[1]);
menu.appendChild(li);


document.body.style.backgroundImage = './img/apple_true.jpg';
title.textContent = 'Мы продаем только подлинную технику Apple';
adv.parentNode.removeChild(adv);
//prom.textContent = ans;

