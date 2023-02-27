// Переведите текст вида border-left-width в borderLeftWidth
function camelize (str) {
  return str
    .split('-')
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join('')
}

console.log(camelize('background-color'))
console.log(camelize('list-style-image'))
console.log(camelize('-webkit-transition'))

// Фильтрация по диапазону
function filterRange (arr, a, b) {
  return arr.filter(item => item >= a && item <= b)
}
let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4)
console.log(filtered)
console.log(arr)

// Фильтрация по диапазону на месте
function filterRangeInPlace (arr, a, b) {
  let filtered_arr = arr.filter(item => item >= a && item <= b)
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!filtered_arr.includes(arr[i])) {
      arr.splice(i, 1)
    }
  }
}
filterRangeInPlace(arr, 1, 4)
console.log(arr)

// Сортировать в порядке по убыванию

let array = [5, 2, 1, -10, 8]
array.sort((a, b) => b - a)
console.log(array)

// Скопировать и отсортировать массив
function copySorted (arr) {
  return arr.slice().sort()
}
let new_arr = ['HTML', 'JavaScript', 'CSS']
let sorted = copySorted(new_arr)
console.log(sorted)
console.log(new_arr)

// Создать расширяемый калькулятор
function Calculator () {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  }
  this.calculate = function (str) {
    str = str.split(' '), 
    a = +str[0], 
    operator = str[1], 
    b = +str[2]
    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[operator](a, b)
  }
  this.addMethod = function(name,func) {
    this.methods[name] = func;
  }
}

let calc = new Calculator;

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a,b) => a * b);
powerCalc.addMethod("/", (a,b) => a / b);
powerCalc.addMethod("**", (a,b) => a ** b);

console.log(calc.calculate('3 + 7'));

let result = powerCalc.calculate("2 ** 3");
let result1 = powerCalc.calculate("2 * 3");
let result2 = powerCalc.calculate("4 / 2");

console.log(result);
console.log(result1);
console.log(result2);

// Трансформировать в массив имен
let vasya = {
  name: "Вася",
  age: 25
};
let petya = {
  name: "Петя",
  age: 30
};
let masha = {
  name: "Маша",
  age: 28
};
let users = [vasya, petya, masha];
let names = users.map(user => user.name);
console.log(names)

// Трансформировать в объекты
let Vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let Petya = { name: "Петя", surname: "Иванов", id: 2 };
let Masha = { name: "Маша", surname: "Петрова", id: 3 };

let Users = [ Vasya, Petya, Masha ];

let usersMapped = Users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}))
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

// Отсортировать пользователей по возрасту
function sortByAge(users) {
  users.sort((a,b) => a.age > b.age ? 1 : -1)
}

sortByAge(users);
console.log(users);

// Перемешайте массив
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
let arr1 = [1,2,3];
shuffle(arr1);
console.log(arr1);


// Получить средний возраст
function getAverageAge(users) {
  age_sum = users.reduce((sum,user) => sum + user.age,0);
  return Math.round(age_sum / users.length);
}
console.log(getAverageAge(users));

// Оставить уникальные элементы массива
function unique(arr) {
  let new_arr = [];
  arr.map(item => {
    if (!new_arr.includes(item)) new_arr.push(item);
  });
  return new_arr;

}
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
console.log(unique(strings));

// Создайте объект с ключами из массива
function groupById(arr) {
  return arr.reduce((object,value) => {
    object[value.id] = value;
    return object;
  }, {})
}

let users1 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users1);
console.log(usersById);