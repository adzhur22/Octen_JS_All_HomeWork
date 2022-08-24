// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let url = new URL(location.href);
let idOfUser = url.searchParams.get('id');
let i = 0;
let divUserContent = document.getElementsByClassName('userContent')[0];


fetch(`https://jsonplaceholder.typicode.com/users/${idOfUser}`)
    .then((response) => response.json())
    .then((user) => {

        // вирішив я рекурсію тут спробувати так як там є об'єкти в середині яких інші об'єкти.
        //



        console.log(user);

        function reader (object, lastObjectKay) {
            if (typeof object === 'object'){

                let block = document.createElement("div");
                block.classList.add('block');
                block.id = 'block';
                divUserContent.appendChild(block);

                if(lastObjectKay){
                    let addHead = document.createElement('div');
                    addHead.innerHTML = `<h4>${lastObjectKay}</h4>`;
                    block.appendChild(addHead);
                    block.id = lastObjectKay;
                }


                for (const objectKey in object) {


                    let pointInformation = document.createElement("div");
                    pointInformation.classList.add('pointInformation');



                    if (typeof object[objectKey] !== 'object') {
                        console.log(objectKey, object[objectKey]);
                        pointInformation.innerHTML = `${objectKey}: ${object[objectKey]}`
                        block.appendChild(pointInformation);

                    }

                    else{
                        reader(object[objectKey], objectKey);
                    }

                }

            }
        }

        reader(user);
    });


let userContentDown = document.getElementsByClassName('userContentDown');
let but = document.createElement('button');
userContentDown.appendChild(but);




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


