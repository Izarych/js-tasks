// Переписать используя async, await
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}
  
loadJson('no-such-user.json') 
    .catch(alert);

// Переписать используя async, await
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = "HttpError";
        this.response = response;
    }
}

async function loadJson1(url) {
    let response1 = await fetch(url);
    if (response1.status == 200) {
        return response1.json();
    }
    throw new HttpError(response1);
}

async function demoGithubUser() {
    let user;
    while(true) {
        let name = prompt("Введите логин", "iliakan");
        try {
            user = await loadJson1(`https://api.github.com/users/${name}`);
            break;
        } catch(err) {
            if (err instanceof HttpError && err.response1.status == 404) {
                alert("Такого пользователя не существует");
            } else {
                throw err;
            }
        }
    }
    alert(`Полное имя: ${user.name}.`);
    return user;
}

demoGithubUser();

// Вызовите async - функцию из "обычной"
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    wait().then(result => console.log(result));
}