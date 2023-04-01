// Проверка целое ли число

function isInteger(num) {
    return (num ^ 0) === num;
}

console.log(isInteger(1));
console.log(isInteger(1.5));