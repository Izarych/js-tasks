// 2 функции - один объект
let object = {}

function A () {
  return object
}
function B () {
  return object
}
console.log(new A() == new B())

//Создайте калькулятор при помощи конструктора, new Calculator
function Calculator () {
  this.read = function () {
    this.a = +prompt('Введите первое число')
    this.b = +prompt('Введите второе число')
  }
  this.sum = function () {
    return this.a + this.b
  }
  this.mul = function () {
    return this.a * this.b
  }
}
let calculator = new Calculator()
calculator.read()
alert('Sum = ' + calculator.sum())
alert('Mul = ' + calculator.mul())

function Accumulator (startingValue) {
  this.value = startingValue
  this.read = function () {
    this.value += +prompt('Введите число')
  }
}

let accumulator = new Accumulator(1)

accumulator.read()
accumulator.read()

alert(accumulator.value)
