// Создайте калькулятор
let calculator = {
  read () {
    this.a = +prompt('Введите первое число')
    this.b = +prompt('Введите второе число')
  },
  sum () {
    return this.a + this.b
  },
  mul () {
    return this.a * this.b
  }
}
calculator.read()
alert(calculator.sum())
alert(calculator.mul())

// Цепь вызовов
let ladder = {
  step: 0,
  up () {
    this.step++
    return this
  },
  down () {
    this.step--
    return this
  },
  showStep: function () {
    alert(this.step)
    return this
  }
}
ladder.up().up().down().showStep().down().showStep()
