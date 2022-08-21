//це блок менюшки, домашка нижче.

let mouseWheel = document.getElementsByClassName('main')[0];
let logoText = document.getElementsByClassName('logoText')[0];
document.onmouseover = function (e) {

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



// далі домашка . Таск 3



//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let blockTask3 = document.createElement("div");
blockTask3.classList.add('warp');
blockTask3.classList.add('collapse');
blockTask3.classList.add('alpha');
blockTask3.classList.add('beta');
blockTask3.innerText = 'Це блок Task 3 і його клон.'
document.body.appendChild(blockTask3);
document.body.appendChild(blockTask3.cloneNode(true));



//  Task 4 в "template1.html"




//  Task 5 - Є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let blockTask5 = document.createElement("div");
blockTask5.classList.add("blockTask5");
document.body.appendChild(blockTask5);
let titleTask5 = document.createElement('div');
titleTask5.classList.add('titleTask5');
titleTask5.innerHTML = `<h1> Task 5 </h1>`
blockTask5.appendChild(titleTask5);


for (const cours of coursesAndDurationArray) {
    let elem = document.createElement('div');
    elem.classList.add('elem');
    elem.innerHTML = `Курс <b>${cours.title}</b> буде тривати ${cours.monthDuration} міс.`
    blockTask5.appendChild(elem);

}



//  Task 6  - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let blockTask6 = document.createElement("div");
blockTask6.classList.add("blockTask6");
document.body.appendChild(blockTask6);
let titleTask6 = document.createElement('div');
titleTask6.classList.add('titleTask6');
titleTask6.innerHTML = `<h1> Task 6 </h1>`
blockTask6.appendChild(titleTask6);


for (const cours of coursesAndDurationArray) {
    let item = document.createElement('div');
    item.classList.add("item");
    blockTask6.appendChild(item);

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerHTML = cours.title;
    item.appendChild(h1);

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerHTML = `Курс триватиме ${cours.monthDuration} міс.`;
    item.appendChild(p);

}





//  Task 7  -
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let blockTask7 = document.createElement("div");
blockTask7.classList.add("blockTask7");
document.body.appendChild(blockTask7);
let titleTask7 = document.createElement('div');
titleTask7.classList.add('titleTask7');
titleTask7.innerHTML = `<h1> Task 7 </h1>`
blockTask7.appendChild(titleTask7);


let textTask7 = document.createElement('div');
textTask7.id = "text";
textTask7.innerText = 'Натисни кнопу і я зникну, давай!'
blockTask7.appendChild(textTask7);

let butt = document.createElement('button');
butt.innerText = 'сховати текст Task 7';
blockTask7.appendChild(butt);

butt.onclick = function () {

    if(textTask7.style.display === 'block'){
        textTask7.style.display = 'none';
    }
    else {
        textTask7.style.display = 'block';
    }
};

//  Task 8  -
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let blockTask8 = document.createElement("div");
blockTask8.classList.add("blockTask8");
document.body.appendChild(blockTask8);
let titleTask8 = document.createElement('div');
titleTask8.classList.add('titleTask8');
titleTask8.innerHTML = `<h1> Task 8 </h1>`
blockTask8.appendChild(titleTask8);

let form = document.createElement("form");
form.name = 'f1';
blockTask8.appendChild(form);

let input = document.createElement("input");
input.name = 'age';
input.type = 'number';
input.placeholder = 'ввдіть ваш вік'
form.appendChild(input);

let buttTask8 = document.createElement('button');
buttTask8.innerText = 'Провірити вік';
form.appendChild(buttTask8);

form.onsubmit = function (e){
    e.preventDefault();
    let age = this.age.value;
    if (age >= 18){
        alert(`Вітаю! вам ${age} років, це значить ви повнолітній!`);

    }
    else {
        alert(`Вам всього ${age} років, це менше ніж 18. Не ок.`);
    }
}


//  Task 9  -
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


let blockTask9 = document.createElement("div");
blockTask9.classList.add("blockTask9");
document.body.appendChild(blockTask9);
let titleTask9 = document.createElement('div');
titleTask9.classList.add('titleTask9');
titleTask9.innerHTML = `<h1> Task 9 </h1>`
blockTask9.appendChild(titleTask9);

let form2 = document.createElement("form");
form.name = 'f2';
blockTask9.appendChild(form2);

let numberOfLines = document.createElement("input");
numberOfLines.name = 'numberOfLines';
numberOfLines.type = 'number';
numberOfLines.placeholder = 'кількість рядків';
form2.appendChild(numberOfLines);

let numberOfCells = document.createElement("input");
numberOfCells.name = 'numberOfCells';
numberOfCells.type = 'number';
numberOfCells.placeholder = 'кількість ячейок';
form2.appendChild(numberOfCells);

let inputText = document.createElement("input");
inputText.name = 'inputText';
inputText.type = 'text';
inputText.placeholder = 'текст який буде вставлений в таблицю';
form2.appendChild(inputText);

let buttTask9 = document.createElement('button');
buttTask9.innerText = 'зробити таблицю';
form2.appendChild(buttTask9);


let board = document.createElement("div");
board.classList.add("board");
blockTask9.appendChild(board);


form2.onsubmit = function (e) {
    e.preventDefault();
    let lines = numberOfLines.value;
    let cells = numberOfCells.value;
    let text = inputText.value;

    console.log(lines, cells, text);

    for (let i = 0; lines > i; i++) {
        let newLine = document.createElement('div');
        newLine.classList.add('newLine');
        board.appendChild(newLine);
        for (let i = 0; cells > i; i++) {
            let newCells = document.createElement('div');
            newCells.classList.add('newCells');
            newCells.style.width = `${100/cells}%`;
            newCells.innerText = text;
            newLine.appendChild(newCells);
        }

    }

};

