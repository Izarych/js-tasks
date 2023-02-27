// Сумма свойств объекта
function sumSalaries(object) {
    let sum = 0;
    for (let item of Object.values(object)) {
        sum += item;
    }
    return sum;
    // arr = Object.values(object);
    // return arr.reduce((sum,item) => sum + item, 0);

}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

console.log(sumSalaries(salaries));

// Подсчет количества свойств объекта
function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30
  };

console.log(count(user));