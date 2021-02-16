// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log('Hello, ' + this.name);
//     }
// }
// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' ушел');
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// alex.exit();

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return this.a + this.b;
    }
    console.log(sum());
}
showThis(4, 5);
showThis(5, 5);