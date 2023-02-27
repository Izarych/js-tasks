// Привет, object

let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
console.log(user)
delete user.name
console.log(user)

// Проверка на пустоту

function isEmpty (obj) {
  return Object.keys(obj).length == 0 ? true : false
}

let schedule = {}

console.log(isEmpty(schedule))

schedule['8:30'] = 'get up'

console.log(isEmpty(schedule))

// Сумма свойств объекта

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0
for (let key in salaries) {
  sum += salaries[key]
}
console.log(sum)

//Умножаем все числовые свойства на 2

function multiplyNumeric (obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
}
console.log(menu)
multiplyNumeric(menu)
console.log(menu)
