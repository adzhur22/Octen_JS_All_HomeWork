// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

let content = document.getElementsByClassName('content')[0];

let users = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        for (const user of users) {

            let div = document.createElement("div");
            div.classList.add('user');

            let userId = document.createElement("div");
            userId.classList.add('userId');

            let userName = document.createElement("div");
            userName.classList.add('userName');

            let button = document.createElement("button");
            button.classList.add('button');

            userId.innerHTML = `id: ${user.id}`;
            userName.innerHTML = `<h3>${user.name}</h3>`;
            button.innerText = 'Детальніше'
            button.onclick = (() =>{
                location.href = `user-details.html?id=${user.id}`;
            });


            content.appendChild(div);
            div.append(userId, userName, button);
        }
    });


// продовження на сорінці user-details.js: