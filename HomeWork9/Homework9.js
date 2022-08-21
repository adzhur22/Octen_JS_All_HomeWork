// Task 1
//
//
// - є масив

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];


// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


let task1 = document.getElementsByClassName('task1')[0];

for (const simpson of simpsons) {

    let div = document.createElement("div");
    div.classList = 'member';
    let divPicPlusH = document.createElement("div");
    divPicPlusH.classList = 'divPicPlusH';
    let divHPlusText = document.createElement("div");
    divHPlusText.classList = 'divHPlusText';
    let h1 = document.createElement("h1");
    h1.classList = 'h1';
    let h4 = document.createElement("h4");
    h1.classList = 'h4';
    let pic = document.createElement('img');
    pic.classList = 'pic';
    let text = document.createElement('p');
    text.classList = 'text';

    h1.innerText = simpson.name + ' ' + simpson.surname;
    h4.innerText = `Age: ${simpson.age}`;
    pic.src = simpson.photo;
    text.innerText = simpson.info;

    task1.appendChild(div);

    div.appendChild(divPicPlusH);
    div.appendChild(divHPlusText);
    divPicPlusH.appendChild(pic);
    divPicPlusH.appendChild(h4);
    divHPlusText.appendChild(h1);
    divHPlusText.appendChild(text);
}



let mouseWheel = document.getElementsByClassName('main')[0];
let logoText = document.getElementsByClassName('logoText')[0];
mouseWheel.onmouseover = function (e) {

    let cofY = e.pageY / 255;
    let cofX = e.pageX / 255;
    let r = e.pageX - (255 * Math.trunc(cofX));
    let g = e.pageY - (255 * Math.trunc(cofY));
    let b = e.pageX - (255 * Math.trunc(cofX));

    logoText.style.color = `rgb(${r},${g},${b})`;

}




let wind = document.getElementsByClassName('wind')[0];
let menu = document.getElementsByClassName('menu')[0];
let pictograma = document.getElementsByClassName('fa-solid')[0];
let perek = 2;
menu.onclick = function (e) {
    if (perek % 2 === 0){
    wind.style.display = 'block';
    pictograma.style.transform = 'rotate(90deg)';
    perek += 1;
} else {
    wind.style.display = 'none';
    pictograma.style.transform = 'rotate(0deg)';
    perek += 1;
    }

};




// Цикл в циклі
// - Є масив

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------

let task2 = document.getElementsByClassName('task2')[0];


for (const coursesArrayElement of coursesArray) {

    console.log(coursesArrayElement)

    let element = document.createElement('div')
    element.classList = 'element';
    task2.appendChild(element);


    let titleTask2 = document.createElement('div')
    titleTask2.classList = 'titleTask2';
    titleTask2.innerHTML = `<h1 class="titleH1Task2">${coursesArrayElement.title}</h1>`;

    element.appendChild(titleTask2);

    let duration = document.createElement('div');
    duration.classList = 'duration';
    element.appendChild(duration);

    let month = document.createElement('div');
    month.classList = 'month';
    month.innerHTML = `<b class="b1">Тирвалість курсу ${coursesArrayElement.monthDuration} місяців.</b>`;
    duration.appendChild(month);

    let hour = document.createElement('div');
    hour.classList = 'hour';
    hour.innerHTML = `<b class="b1">Понад ${coursesArrayElement.hourDuration} навчальних годин!</b>`;
    duration.appendChild(hour)


    let modules = document.createElement('div');
    modules.classList = 'modules';
    element.appendChild(modules);

    let ulInModules = document.createElement('ul');
    ulInModules.classList = 'ulInModules';
    modules.appendChild(ulInModules);

    for (const module of coursesArrayElement.modules) {
        console.log(module);

        let liInUl = document.createElement('li');
        liInUl.classList = 'liInUl';
        liInUl.innerText = module;
        ulInModules.appendChild(liInUl);

    }


}

// продовженя домашки в  Homework9.3