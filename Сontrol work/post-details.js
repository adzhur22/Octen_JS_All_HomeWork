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



let url = new URL(location.href);
let idOfPost = url.searchParams.get('post-id');


fetch(`https://jsonplaceholder.typicode.com/posts/${idOfPost}`)
    .then((response) => response.json())
    .then((post) => {

        let postId = document.querySelector('.postId');
        postId.innerHTML = `Post Id: ${post.id}.`;

        let userId = document.querySelector('.userIdInPageAboutPost');
        userId.innerHTML =`User Id: ${post.userId}.`;

        let postTitle = document.querySelector('.postTitle');
        postTitle.innerHTML =`<h3>${post.title}</h3>`;

        let postBody = document.querySelector('.postBody');
        postBody.innerHTML = post.body;



    });


fetch(`https://jsonplaceholder.typicode.com/posts/${idOfPost}/comments`)
    .then((response) => response.json())
    .then((postComments) => {

        for (const postComment of postComments) {

            let divComments = document.querySelector('.divComments');

            let divComment = document.createElement('div');
            divComment.classList.add('divComment');
            divComments.appendChild(divComment);

            let divTop = document.createElement('div');
            divTop.classList.add('divTop');

            let divMiddle = document.createElement('div');
            divMiddle.classList.add('divMiddle');

            let divBottom = document.createElement('div');
            divBottom.classList.add('divBottom');

            divComment.append(divTop,divMiddle,divBottom);

            let postCommentId = document.createElement('div');
            postCommentId.classList.add('postCommentId');

            postCommentId.innerHTML = `Comment Id: ${postComment.id}`;
            divTop.appendChild(postCommentId);


            let commentatorsName = document.createElement('div');
            commentatorsName.classList.add('commentatorsName');

            commentatorsName.innerHTML = `Name: <b>${postComment.name}</b>`;


            let commentatorsEmail = document.createElement('div');
            commentatorsEmail.classList.add('commentatorsEmail');

            commentatorsEmail.innerHTML = `Email: <b>${postComment.email}</b>`;
            divMiddle.append(commentatorsName, commentatorsEmail);

            divBottom.innerHTML = `Comment: <b>${postComment.body}</b>`;



        }


    });