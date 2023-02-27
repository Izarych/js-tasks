// Сумма пользовательских чисел
let a = +prompt('Введите число')
let b = +prompt('Введите число')
alert(a + b)

//Ввод числового значения
function readNumber () {
  let number

  do {
    number = prompt('Введите число')
  } while (!isFinite(number))
  if (number === null || number === '') return null

  return +number
}

alert(readNumber())

// Случайное число от min до max

function random (min, max) {
  return Math.random() * (max - min) + min
}

alert(random(1, 5))

//Случайное целое число от min до max

function randomInteger (min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}

alert(randomInteger(1, 5))
