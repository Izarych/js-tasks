// Создать новый объект с помощью уже существующего

// let obj2 = new obj.constructor();
// Будет работать если
function Obj(name) {
    this.name = name;
}
// Obj.prototype = {}; не будет работать если перезапишем прототип подобным образом

let obj = new Obj("Artyom");
let obj2 = new obj.constructor("John");

console.log(obj2.name);
