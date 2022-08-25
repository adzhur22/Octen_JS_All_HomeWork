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
        // правда зачно легше було просто виводити і не бавитись з цим. Але хотів попрактикуватись.
        //вивід на сторінці коментарів робив звичайним методомю

        // Відкривайте сторінку не через шлях а не локал хост. Щоб працювала карта!


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

                        pointInformation.innerHTML = `<p>${objectKey}: ${object[objectKey]}</p>`;
                        block.appendChild(pointInformation);

                    }
                    if (typeof object[objectKey] !== 'object' && lastObjectKay === 'geo' && i2 === 0) {

                        let mapa = document.getElementById('geo');

                        let divMap = document.createElement('div');
                        divMap.id = 'map';
                        mapa.appendChild(divMap);

                        let lat = parseFloat(object.lat);
                        let lng = parseFloat(object.lng);

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


        //на цьому етапі я вирішив добавити "фото юзеру". Тому потрібно було дістати всю інформацию і
        //запакувати в окремий дів

        let divPersonalInf = document.getElementById('block');
        console.log(divPersonalInf);

        let divInformationOfUser = document.createElement('div');
        divInformationOfUser.classList.add('divInformationOfUser');
        divPersonalInf.appendChild(divInformationOfUser);

        let inf = document.querySelectorAll('#block > .pointInformation');
        console.log(inf);

        for (const infElement of inf) {
            divInformationOfUser.appendChild(infElement);

        }

        let photoDiv = document.createElement('div');
        photoDiv.classList.add('photoDiv');
        divPersonalInf.appendChild(photoDiv);

        let photo = document.createElement('img');
        photo.classList.add('photo');
        photo.src = 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745';
        photoDiv.appendChild(photo);

        divInformationOfUser.before(photoDiv);
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
            .then((allPost) => {
                for (const post of allPost) {

                    let titlePosts = document.createElement("div");
                    titlePosts.classList.add('titlePosts');

                    boxOfTitlePosts.appendChild(titlePosts);

                    titlePosts.innerHTML = `<p class="hTitle">post</p> <p class="pTitle"><b>${post.title}</b></p>`;

                    let button = document.createElement("button");
                    button.classList.add('buttonDetails');
                    button.innerText = 'view post';
                    titlePosts.appendChild(button);

                    button.onclick = () => {
                        location.href = `post-details.html?post-id=${post.id}`;
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






