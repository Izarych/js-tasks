// Деструктурирующее присваивание
let user = {
    name: "John",
    years: 30
  };

let {name, years: age, isAdmin = false  } = user;
console.log(name);
console.log(age);
console.log(isAdmin);

//Максимальная зарплата
function topSalary(salaries) {
    let max = 0;
    let resultName;
    if (Object.keys(salaries).length > 0) {
        for (let [name,value] of Object.entries(salaries)) {
            if (max < value) {
                max = value;
                resultName = name;
            }
        }
    }
    else return null;
    return resultName;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

console.log(topSalary(salaries));