// Установка и уменьшение значения счетчика
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
  }
  
let counter = makeCounter();
  
console.log( counter() ); // 0
console.log( counter() ); // 1
  
counter.set(10); // установить новое значение счётчика
  
console.log( counter() ); // 10
  
counter.decrease(); // уменьшить значение счётчика на 1

console.log( counter() ); // 10 (вместо 11)

// Сумма с произвольным количеством скобок
function sum(firstNum) {
    let currentSum = firstNum;

    function func(num) {
        currentSum += num;
        return func;
    }
    func.toString = function() {
        return currentSum;
    };
    return func;
}

console.log(JSON.parse(sum(1)(2)));
console.log(JSON.parse(sum(1)(2)(3)));
console.log(JSON.parse(sum(5)(-1)(2)));
console.log(JSON.parse(sum(6)(-1)(-2)(-3)));
console.log(JSON.parse(sum(0)(1)(2)(3)(4)(5)));