// Создайте дату
let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

//Покажите день недели
function getWeekDay(date) {
    let dates = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return dates[date.getDay()];
}

let d = new Date(2012, 0, 3);

console.log(getWeekDay(d));

// День недели в европейской нумерации
function getLocalDay(date) {
    let day_number = date.getDay();
    if (day_number == 0) {
        day_number = 7;
    }
    return day_number;
}

let new_date = new Date(2012, 0, 3);

console.log(getLocalDay(new_date));

// Какой день месяца был много дней назад?
function getDateAgo(date, month_day) {
    let new_date = new Date(date);
    new_date.setDate(date.getDate() - month_day);
    return new_date.getDate();
}

let date1 = new Date(2015, 0, 2);

console.log(getDateAgo(date1, 1));
console.log(getDateAgo(date1, 2));
console.log(getDateAgo(date1, 365));

//Последнее число месяца
function getLastDayOfMonth(year, month) {
    let date = new Date(year,month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012,1));

// Сколько сегодня прошло секунд
function getSecondsToday() {
    let now_date = new Date();
    return now_date.getHours() * 3600 + now_date.getMinutes() * 60 + now_date.getSeconds();
}
console.log(getSecondsToday());

// Сколько секунд осталось до завтра?
function getSecondsToTomorrow() {
    let now_date = new Date();
    let next_day = new Date(now_date.getFullYear(), now_date.getMonth(), now_date.getDate() + 1);
    let result = next_day - now_date;
    return Math.round(result / 1000);
}
console.log(getSecondsToTomorrow());

// Форматирвование относительной даты
function formatDate(date) {
    let month_day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear().toString().slice(-2);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSeconds = Math.round(diffMs / 1000);
    let diffMinutes = diffSeconds / 60;
    let diffHours = diffMinutes / 60;

    month = month < 10 ? "0" + month : month;
    month_day = month_day < 10 ? "0" + month_day : month_day;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return (diffSeconds < 1) ? "прямо сейчас" :
    (diffMinutes < 1) ? `${diffSeconds} сек. назад` :
    (diffHours < 1) ? `${diffMinutes} мин. назад` :
    `${month_day}.${month}.${year} ${hours}:${minutes}`;

}

console.log( formatDate(new Date(new Date - 1)) );
console.log( formatDate(new Date(new Date - 30 * 1000)) );
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );
console.log( formatDate(new Date(new Date - 86400 * 1000)) );