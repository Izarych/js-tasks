// Выведите четные от 2 до 10
for (let i = 2; i <= 10; i++) {
  if (i % 2 != 0) continue
  console.log(i)
}

// Заменить for на while

let i = 0
while (i < 3) {
  console.log(`number ${i}!`)
  i++
}

// Повторять цикл, пока ввод неверен
while (i <= 100 && i) {
  i = prompt('Введите число больше 100')
}

// Вывести простые числа от 2 до n

let n = 10
let count = 0
simpleNumbers: for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= i ** 1 / 2; j++) {
    if (i % j == 0) continue simpleNumbers
  }
  console.log(i)
}
