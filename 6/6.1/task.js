// Вычислить сумму чисел до данного

// С использованием цикла
function sumTo(num) {
    sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// Через рекурсию
function sumToRec(num) {
    return (num <= 1) ? num : num + sumToRec(num - 1);
}


// Арифм. прогрессия
function sumToArifm(num) {
    return num * (num + 1) / 2;
}

console.log(sumTo(100));
console.log(sumToRec(100));
console.log(sumToArifm(100));

// Вычислить факториал
function factorial(num) {
    return (num == 1) ? num : num * factorial(num - 1);
}

console.log(factorial(5));

// Числа Фибоначчи
function fib(num) {
    // return (num <= 1) ? num : fib(num - 1) + fib(num - 2); слишком долго
    let firstNum = 1;
    let secondNum = 1;
    for (let i = 3; i <= num; i++) {
        let sum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sum;
    }
    return secondNum;
}


console.log(fib(3));
console.log(fib(7));
console.log(fib(77));

// Вывод односвязного списка
// Через цикл
function printList(list) {
    let tempList = list;
    while (tempList) {
        console.log(tempList.value);
        tempList = tempList.next;
    }
}

// Через рекурсию
function printListRec(list) {
    console.log(list.value);
    if (list.next) {
        printListRec(list.next);
    }
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

printList(list);
printListRec(list);

// Вывод односвязного списка в обратном порядке

// Через цикл
function printReverseList(list) {
    let arr = [];
    let tempList = list;

    while (tempList) {
        arr.push(tempList.value);
        tempList = tempList.next;
    }
    for (let i = arr.length - 1; i > 0; i--) {
        console.log(i);
    }
}

// Через рекурсию
function printReverseListRec(list) {
    if (list.next) {
        printReverseListRec(list.next);
    }
    console.log(list.value);
}

printReverseList(list);
printReverseListRec(list);