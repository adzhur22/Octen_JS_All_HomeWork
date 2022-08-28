// сюди я окремо виніс все що зв'язано в з меню. щоб не дублювати код в кожній сторінці


// це функція запису в локалсторидж відвідуваних постів.
let local = function (id) {
    let localPostId = JSON.parse(localStorage.getItem('post_id'));

    if (!localPostId){
        localStorage.post_id = JSON.stringify([]);
        localPostId = JSON.parse(localStorage.getItem('post_id'));
    }


    if (!localPostId.includes(id)) {

        if (localPostId.length >= 5) {
            localPostId.pop();
            localPostId.unshift(id)

        } else {
            localPostId.unshift(id);
        }

    }


    localStorage.post_id = JSON.stringify(localPostId);
};

//нижче функціонал меню

let menu = document.getElementsByClassName('menu')[0];

let logo = document.getElementsByClassName('logo')[0];

logo.onclick = function () {
    location.href = `index.html`;
}


let pages = document.getElementsByClassName('pages')[0];


pages.onclick = function () {

    let check = document.getElementsByClassName(`boxMenu`)[0]
    if(!check){
        let boxMenu = document.createElement("div");
        boxMenu.classList.add('boxMenu');
        boxMenu.style.display = 'block';
        menu.appendChild(boxMenu);

        let mainPage = document.createElement("button");
        mainPage.classList.add('mainPage');
        boxMenu.appendChild(mainPage)
        mainPage.innerText = 'main page';
        mainPage.onclick = function () {
            location.href = `index.html`;
        }

        let randomPost = document.createElement("button");
        randomPost.classList.add('randomPost');
        randomPost.innerText = 'random post';
        boxMenu.appendChild(randomPost);

        randomPost.onclick = function () {

            fetch(`https://jsonplaceholder.typicode.com/posts`)
                .then((response) => response.json())
                .then((allPost) => {
                    function getRandomIntInclusive(min, max) {
                        min = Math.ceil(min);
                        max = Math.floor(max);
                        return Math.floor(Math.random() * (max - min + 1) + min);
                    }

                    let random = getRandomIntInclusive(1,allPost.length);
                    console.log(random);
                    location.href = `post-details.html?post-id=${random}`;
                    local(random);
                });


        };


    }

    else {
        if(check.style.display === 'block'){
            check.style.display = 'none';
        }
        else {
            check.style.display = 'block';
        }

    }


}