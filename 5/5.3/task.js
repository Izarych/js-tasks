// Сделать первый символ заглавным
function ucFirst (str) {
  if (!str) return str
  return str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst('Ваня'))

// Проверка на спам

function checkSpam (str) {
  strToLower = str.toLowerCase()
  return strToLower.includes('viagra') || strToLower.includes('xxx')
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxx'))
console.log(checkSpam('innocent rabbit'))

// Усечение строки

function truncate (str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '...'
  }
  return str
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20))

console.log(truncate('Всем привет!', 20))

function extractCurrencyValue (str) {
  return +str.slice(1)
}

console.log(extractCurrencyValue('$120'))
