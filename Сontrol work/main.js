// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

let attention = JSON.parse(localStorage.getItem('attention'));
if(!attention) {
    alert(`Важливо!!! Відкривайте цю роботу НЕ через http://localhost/. Це потрібно для коректної роботи гугл карти.`);
    localStorage.attention = JSON.stringify(true);

}

let content = document.getElementsByClassName('content')[0];

let users = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        for (const user of users) {

            let div = document.createElement("div");
            div.classList.add('user');
            div.id = user.id;

            let userId = document.createElement("div");
            userId.classList.add('userId');

            let userName = document.createElement("div");
            userName.classList.add('userName');

            let button = document.createElement("button");
            button.classList.add('button');

            userId.innerHTML = `id: ${user.id}`;
            userName.innerHTML = `<h3>${user.name}</h3>`;
            button.innerText = 'view user'
            button.onclick = (() =>{
                location.href = `user-details.html?id=${user.id}`;
            });


            content.appendChild(div);
            div.append(userId, userName, button);
        }

        // я думав над додатковим функціоналом і мабуть на подібних сайтах є пошук. тому реалізую його
        // як додаткове завдання

        let divWithUsers = document.getElementsByClassName('user');
        let divSerarch = document.getElementsByClassName('search')[0];

        let form = document.createElement('form');
        form.name = 'searchForm';
        let input = document.createElement('input');
        input.name = 'request';
        input.placeholder = 'Search by name';
        let searchButton = document.createElement('button');
        searchButton.innerHTML = 'search';


        let cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'clear filter';

        divSerarch.append(form,cancelButton);
        form.append(input, searchButton);


        let nameArray = document.querySelectorAll('.userName > h3');

        form.onsubmit = function (e) {

            e.preventDefault();
            let divWithUsers = document.getElementsByClassName('user');
            console.log(divWithUsers);
            let numberOffBlock = 0;


            for (let i = 0; i < nameArray.length; i++) {
                let text = (nameArray[i].textContent).toLowerCase();
                let searhtext = (input.value).toLowerCase();

                let res = text.search(searhtext);


                if(res === -1){
                    searchButton.setAttribute('disabled', 'false');
                    console.log(divWithUsers[i]);
                    divWithUsers[i].style.display = 'none';
                    numberOffBlock++;
                }


            }

            console.log(numberOffBlock);
            console.log(divWithUsers.length);
            if(numberOffBlock === divWithUsers.length){

                let div = document.getElementById('noResults');

                if(!div){
                    let div = document.createElement("div");
                    div.classList.add('noResults');
                    div.id = 'noResults';
                    div.innerHTML = 'not found';
                    content.appendChild(div);
                }


                if(div && div.style.display === 'none'){
                    div.style.display = 'flex';

                }
            }


        };


        cancelButton.onclick = function () {

            input.value = '';
            searchButton.removeAttribute('disabled');

            for (const user of divWithUsers) {
                let div = document.getElementById('noResults');
                user.style.display = 'flex';

                if(div){
                    div.style.display = 'none';
                }


            }

        };





    });


// Наступне додаткове  це робота з  localStorage, тут будуть виводитись останні 5
// постів які переглядав користувач
let LastViewedPost =  document.getElementsByClassName('LastViewedPost');

let localPostId = JSON.parse(localStorage.getItem('post_id'));


if(localPostId){

    for( let i = 0;  i < localPostId.length; i++){


        fetch(`https://jsonplaceholder.typicode.com/posts/${localPostId[i]}`)
            .then((response) => response.json())
            .then((post) => {

                // console.log(post);

                let title = document.createElement("div");
                title.innerHTML =  post.title;
                title.classList.add('address');

                LastViewedPost[i].appendChild(title);

                let button = document.createElement("button");
                button.innerHTML = 'view post again';
                LastViewedPost[i].appendChild(button);

                button.onclick = function () {

                    location.href = `post-details.html?post-id=${localPostId[i]}`;


                };
            });



    }

}
else {

    let title = document.createElement("div");
    title.innerHTML =  `<p>You need to view any post.<p> <p>Then you will see it here.</p>`;
    title.classList.add('address');

    LastViewedPost[2].appendChild(title);

}















// продовження на сорінці user-details.js: