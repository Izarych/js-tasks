// 1 задание
// let jsName = prompt('Какое официальное название JavaScript?')
let jsName = 'ECMAScript'
if (jsName == 'ECMAScript') {
  console.log('Верно!')
} else {
  console.log('Не знаете? ECMAScript')
}

// 2 задание

let number
// number = prompt('Введите число')
number = 2
if (number > 0) {
  console.log('1')
} else if (number == 0) {
  console.log('0')
} else console.log('-1')

// 3 задание

let result
// let a = prompt("Введите первое число");
// let b = prompt("Введите второе число");
let a = 2
let b = 4
result = a + b < 4 ? 'Мало' : 'Много'
console.log(result)

// 4 задание
let message, login
// login = prompt('Введите логин')
login = 'Директор'
message =
  login == 'Сотрудник'
    ? 'Привет'
    : login == 'Директор'
    ? 'Здравствуйте'
    : (login = '')
    ? 'Нет логина'
    : ' '

console.log(message)
