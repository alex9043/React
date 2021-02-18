window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2021-02-18 17:30:00';

    function getTimerRemainig(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = ("0" + Math.floor((t/1000) % 60)).slice(-2),
            minutes = ("0" + Math.floor((t/1000/60) % 60)).slice(-2),
            hours = ("0" + Math.floor((t/(1000*60*60)))).slice(-2);
            // hours = Math.floor((t/1000/60/60) % 24),
            // days = Math.floor((t/(1000*60*60*24)));

            return {
                'total'   : t,
                'hours'   : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimerRemainig(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }
    }

    setClock('timer', deadline);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        btndescr = document.querySelectorAll('.description-btn');

    function showOverlay() {
        overlay.style.display = 'block';
        // this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    function closeOverlay(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    }

    more.addEventListener('click', ()=>{showOverlay();});
    btndescr.forEach(element => {
        element.addEventListener('click', ()=>{showOverlay();});
    });
    close.addEventListener('click', ()=>{closeOverlay();});

    //Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        contactForm = document.querySelector('#form'),
        input = form.getElementsByTagName('input'),
        contactInput = contactForm.getElementsByTagName('input'),
        
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

        form.addEventListener('submit', function(event){
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            let formData = new FormData(form);
            let obj = {};
            formData.forEach(function(value, key){
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
            
            // request.send(formData);
            request.send(json);

            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if(request.readyState === 4 && request.status == 200){
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < input.length; i++){
                input[i].value = '';
            }
        });

        contactForm.addEventListener('submit', function(event){
            event.preventDefault();
            contactForm.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            
            let formData = new FormData(contactForm);

            let obj = {};
            formData.forEach(function(value, key){
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            request.send(json);

            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if(request.readyState === 4 && request.status == 200){
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < contactInput.length; i++){
                contactInput[i].value = '';
            }
        });
});