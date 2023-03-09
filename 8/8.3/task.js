// Добавить функциям метод "f.defer(ms)"
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}

function f() {
    console.log("Hello");
}

f.defer(1000);

// Добавить функциям декорирующий метод "defer()"
Function.prototype.deferWrapper = function(ms) {
    let func = this;
    return function (...args) {
        setTimeout(() => func.apply(this, args), ms);
    }
}

function func(a,b) {
    console.log(a + b);
}

func.deferWrapper(1000)(1,2);
