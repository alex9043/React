// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };

// console.log(JSON.parse(JSON.stringify(options)));

let inputRub = document.getElementById('rub'),
    inputUSD = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //status (код сервера 404,405...)
    //statusText (ok, not found)
    //responseText /response (Товары в магазине)
    //readyState (loading, done, opened)

    request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);

                inputUSD.value = inputRub.value / data.usd;
            } else {
                inputUSD.value = "Что-то пошло не так!";
            }
        });
});
