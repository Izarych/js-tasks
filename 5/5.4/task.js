// Операции с массивами
let arr = ['Джаз', 'Блюз']
arr.push('Рок-н-ролл')
mid = Math.floor((arr.length - 1) / 2)
arr[mid] = 'Классика'
console.log(arr.shift())
arr.unshift('Рэп', 'Регги')
console.log(arr)

// Сумма введеных чисел
function sumInput () {
  let sum = 0
  let numbers = []
  do {
    num = prompt('Введите число')
    if (num === '' || num === null) break
    numbers.push(+num)
  } while (isFinite(num))
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum += numbers[i]
  }
  return sum
}
alert(sumInput())

// Подмассив наибольшей суммы
function getMaxSubSum (arr) {
  let max_sum = 0
  let temp_sum = 0
  for (let item of arr) {
    temp_sum += item
    max_sum = Math.max(max_sum, temp_sum)
    if (temp_sum < 0) temp_sum = 0
  }
  return max_sum
}

array = [2, -1, 2, 3, -9]
console.log(getMaxSubSum(array))
