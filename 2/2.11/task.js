// Проверка значения из диапазона
let age = 13
if (age >= 14 && age <= 90) {
  console.log('В диапазоне')
} else {
  console.log('Не в диапазоне')
}

// Проверка значения вне диапазона

// С использованием оператора НЕ
if (!(age >= 14 && age <= 90)) {
  console.log('Вне диапазона')
} else {
  console.log('В диапазоне')
}

// Без оператора НЕ
if (age < 14 || age > 90) {
  console.log('Вне диапазона')
} else {
  console.log('В диапазоне')
}

// Проверка логина
let login, password
login = prompt('Введите логин')
if (login == 'Админ') {
  password = prompt('Введите пароль')
  if (password == 'Я главный') {
    alert('Здравствуйте!')
  } else if (password == '' || password == null) {
    alert('Отменено')
  } else {
    alert('Неверный пароль')
  }
} else if (login == '' || login == null) {
  alert('Отменено')
} else {
  alert('Я вас не знаю')
}
