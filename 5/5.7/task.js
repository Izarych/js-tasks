// Фильтрация уникальных элементов массива
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values));

// Отфильтруйте анаграммы
function aclean(arr) {
    let map = new Map();
    for (let item of arr) {
        let sorted = item.toLowerCase().split("").sort().join("");
        map.set(sorted, item);
        
    }
    return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));

// Перебираемые ключи

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);