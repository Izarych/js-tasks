// Вывод каждую секунду
// Через setInterval
function printNumbers(from, to) {
    let timerId = setInterval(() => {
        console.log(from);
        if (from == to) {
            clearInterval(timerId);
        }
        from++;
    },1000);
}

// Через setTimeout
function printNumbersTimeout(from, to) {
        setTimeout(function run() {
        console.log(from);
        if (from < to) {
            setTimeout(run,1000);
        }
        from++;
    }, 1000);
}

printNumbersTimeout(0,5);