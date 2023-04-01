// Ошибка при чтении несуществующего свойства
let user = {
    name: 'John'
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(target, prop, receiver);
            } else {
                throw new ReferenceError(`Свойство ${prop} не существует`)
            }
        }
    })
}

user = wrap(user)
console.log(user.name)
console.log(user.age)

// Получение элемента массива с отрицательной позиции

let array = [1,2,3]

array = new Proxy(array, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = +prop + target.length
        }
        return Reflect.get(target, prop, receiver)
    }
})

console.log(array[-1])
console.log(array[-2]);

//Observable
let handlers = Symbol('handlers')

function makeObservable(target) {
    target[handlers] = [];

    target.observe = function(handler) {
        this[handlers].push(handler);
    }
    return new Proxy(target, {
        set(target, prop, value, receiver) {
            let success = Reflect.set(...arguments);
            if (success) {
                target[handlers].forEach(handler => handler(prop, value))
            }
            return success;
        }
    })
}

let user1 = {}
user1 = makeObservable(user1);

user1.observe((key,value) => {
    console.log(`SET ${key}=${value}`)
})

user1.name = 'John'