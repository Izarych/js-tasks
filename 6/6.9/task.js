// Декоратор - шпион
function work(a,b) {
    console.log(a + b);
}

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }
    wrapper.calls = [];
    return wrapper;
}

work = spy(work);

work(1,2);
work(4,5);

for (let args of work.calls) {
    console.log('call:' + args.join());
}

// Задерживающий декоратор
function f(x) {
    console.log(x);
}

function delay(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");

// Декоратор debounce
let func = debounce(console.log, 1000);

function debounce(func, ms) {
    let timeout = false;
    
    return function () {
        if (timeout) return;

        func.apply(this, arguments);

        timeout = true;

        setTimeout(() => timeout = false, ms);
    };
}

func(1);
func(2);

setTimeout(() => func(3), 100);
setTimeout(() => func(4), 1100);
setTimeout(() => func(5), 1500);


// Тормозящий (throttling) декоратор

function f1(a) {
    console.log(a);
}

function throttle(f, ms) {
    let isThrottled = false;
    let savedArgs;
    let sThis;
    
    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            sThis = this;
            return;
        }
        f.apply(this, arguments);
        isThrottled = true;
        
        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(sThis, savedArgs);
                savedArgs = sThis = null;
            }
        }, ms);
    }
    return wrapper;
}

let f1_1000 = throttle(f1, 1000);

f1_1000(1);
f1_1000(2);
f1_1000(3);