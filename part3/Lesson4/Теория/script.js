// localStorage.setItem("number", 1);

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("number");

// localStorage.clear();

window.addEventListener("DOMContentLoaded", function(){
    let checkbox = document.getElementById("remember"),
        change = document.getElementById("change"),
        form = document.getElementsByTagName("form")[0];

    if(localStorage.getItem("isChecked") ==="true"){
        checkbox.checked = true;
    }

    if(localStorage.getItem("bg") === "changed"){
        form.style.backgroundColor = "#FF4766";
    }

    checkbox.addEventListener("click", function(){
        localStorage.setItem("isChecked", true);
    });

    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "#FF4766";
    });

    let persone = {
        name: "Alex",
        age: 25,
        texh: ["mobile", 'notebook']
    };

    let serializedPerson = JSON.stringify(persone);
    localStorage.setItem("Alex", serializedPerson);

    console.log(JSON.parse(localStorage.getItem("Alex")));
});