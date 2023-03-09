// Задержка на промисах
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("Выполнилось через 3 секунды"));

function someFunc() {
    console.log(arguments);
}
