// Переписать функцию используя ? или ||
// 1 вариант
function checkAge (age) {
  return age > 18 ? true : 'Родители разрешали?'
}
// 2 вариант
function checkAge1 (age) {
  return age > 18 || 'Родители разрешали?'
}
console.log(checkAge(20))
console.log(checkAge1(15))

// Функция min(a,b)

function min (a, b) {
  return a < b ? a : b
}
console.log(min(2, 5))
console.log(min(3, -1))
console.log(min(1, 1))

// Функция pow(x,n)
function pow (x, n) {
  if (n < 1) return alert('n должно быть натуральным число')
  return x ** n
}
number = prompt('Введите число')
grade = prompt('Введите степень')
alert(pow(number, grade))
