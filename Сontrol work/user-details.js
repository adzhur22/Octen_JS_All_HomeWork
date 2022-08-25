// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let url = new URL(location.href);
let idOfUser = url.searchParams.get('id');

let divUserContent = document.getElementsByClassName('userContent')[0];
 let fullContent = document.getElementsByClassName('fullContent')[0];

 let i = 0;
 let i2 = 0;



fetch(`https://jsonplaceholder.typicode.com/users/${idOfUser}`)
    .then((response) => response.json())
    .then((user) => {

        // вирішив я рекурсію тут спробувати так як там є об'єкти в середині яких інші об'єкти.
        // хоч можна було по іншому але чому б і ні)


        function reader (object, lastObjectKay) { // змінна lastObjectKay, це ім'я обєкта в середині якого є інший обєкт. Я реалізував вичавлення значення цієї змінної щоб одразу добавити її як назву новоствореному блоку з даними.
            if (typeof object === 'object'){

                let block = document.createElement("div");
                block.classList.add('block');
                block.id = 'block';
                divUserContent.appendChild(block);

                if(lastObjectKay){

                    let addHead = document.createElement('div');
                    addHead.innerHTML = `<h4>${lastObjectKay}</h4>`;
                    addHead.classList.add(lastObjectKay);
                    block.appendChild(addHead);
                    block.id = lastObjectKay;
                }


                for (const objectKey in object) {


                    if (typeof object[objectKey] !== 'object' && lastObjectKay !== 'geo') {

                        let pointInformation = document.createElement("div");
                        pointInformation.classList.add('pointInformation');

                        pointInformation.innerHTML = `${objectKey}: ${object[objectKey]}`;
                        block.appendChild(pointInformation);

                    }
                    if (typeof object[objectKey] !== 'object' && lastObjectKay === 'geo' && i2 === 0) {

                        let mapa = document.getElementById('geo');
                        console.log(mapa);

                        let divMap = document.createElement('div');
                        divMap.id = 'map';
                        mapa.appendChild(divMap);

                        let lat = parseFloat(object.lat);
                        let lng = parseFloat(object.lng);
                        console.log(lat, lng);

                        function initMap() {

                            const uluru = { lat: lat, lng: lng};

                            const map = new google.maps.Map(document.getElementById("map"), {
                                zoom: 1,
                                center: uluru,
                            });

                            const marker = new google.maps.Marker({
                                position: uluru,
                                map: map,
                            });
                        }

                        initMap();
                        i2++;
                    }

                    else{
                        reader(object[objectKey], objectKey);
                    }

                }

            }
        }

        reader(user);
    });


let userContentDown = document.getElementsByClassName('userContentDown')[0];
let but = document.createElement('button');
but.classList.add('button2');
but.innerText = 'post of current user';
userContentDown.appendChild(but);
let boxOfTitlePosts = document.createElement("div");
boxOfTitlePosts.classList.add('boxOfTitlePosts');

but.onclick = (() =>{

    if (i === 0){

        fullContent.appendChild(boxOfTitlePosts);
        userContentDown.before(boxOfTitlePosts);

        fetch(`https://jsonplaceholder.typicode.com/users/${idOfUser}/posts`)
            .then((response) => response.json())
            .then((users) => {
                for (const user of users) {

                    let titlePosts = document.createElement("div");
                    titlePosts.classList.add('titlePosts');

                    boxOfTitlePosts.appendChild(titlePosts);

                    titlePosts.innerHTML = `<h4>Post:</h4> <p><b>${user.title}</b></p>`;

                    let button = document.createElement("button");
                    button.classList.add('buttonDetails');
                    button.innerText = 'details';
                    titlePosts.appendChild(button);

                    button.onclick = () => {
                        location.href = `user-details.html?id=${user.id}`;
                    };

                }

            });

    i++;
    }
    else  if (i === 1){
        boxOfTitlePosts.style.display = 'none';
        i++;
    }
    else {
        boxOfTitlePosts.style.display = 'flex';
        i--;
    }


        });





// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)



