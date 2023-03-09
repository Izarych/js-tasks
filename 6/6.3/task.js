// Сумма с помощью замыканий
function sum(firstNum) {
    return function (secondNum) {
        return firstNum + secondNum;
    }
}

console.log(sum(1)(2));
console.log(sum(5)(-1));

// Фильтрация с помощью функции
function inBetween(firstNum, secondNum) {
    return function (num) {
        return num >= firstNum && num <= secondNum;
    };
}

function inArray(arr) {
    return function(num) {
        return arr.includes(num);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3,6)));
console.log(arr.filter(inArray([1,2,10])));

// Сортировать по полю
function byField(key) {
    return (a,b) => a[key] > b[key] ? 1: -1;
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

// Армия функций
function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            console.log(i);
        };
        shooters.push(shooter);
    }

    return shooters;
}
let army = makeArmy();
army[0]();
army[5]();