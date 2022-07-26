// Tasks
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//     Поле "автори" - масив. Кожен автор має поля name,age
//
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. ' +
// 'Вивести в консоль пароль кожного користувача



// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let element_kek = 'kek';

let aray1 = ['father', 10, "octen", 666, 'simpson', 4.1, true, 88, element_kek, 'finish'];

console.log(aray1[0]);
console.log(aray1[1]);
console.log(aray1[2]);
console.log(aray1[3]);
console.log(aray1[4]);
console.log(aray1[5]);
console.log(aray1[6]);
console.log(aray1[7]);
console.log(aray1[8]);
console.log(aray1[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'The adventures of Tom Sawyer',
    pageCount: 310,
    genre: 'Novel'
};

let book2 = {
    title: 'The Little Prince',
    pageCount: 110,
    genre: "Children's literature"
};

let book3 = {
    title: 'Robinson Crusoe',
    pageCount: 500,
    genre: 'survival'
};


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//     Поле "автори" - масив. Кожен автор має поля name,age


let book4 = {
    title: 'The adventures of Tom Sawyer',
    pageCount: 310,
    genre: 'Novel',
    authors: [{name: 'Mark Twain', age: 1835}]
};
console.log(book4.authors[0]);  // Додаткво попробував виведення елементу масива в юзері (цілком)
console.log(book4.authors[0].name); // виведення елементу масива в юзері (Тільки ім'я автора)
console.log(book4['authors'][0]); // Інший спосіб
console.log(book4['authors'][0]['name']); // Інший спосіб
console.log(book4['authors'][0].name);// Міксований спосіб


let book5 = {
    title: 'The Little Prince',
    pageCount: 110,
    genre: "Children's literature",
    authors: [{name: "Antoine de Saint-Exupéry", age: 1900}]
};

let book6 = {
    title: 'Robinson Crusoe',
    pageCount: 500,
    genre: 'survival',
    authors: [{name: "Daniel Defoe", age: 1660}]
};



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. ' +
// 'Вивести в консоль пароль кожного користувача


let array = [
    {
        name: 'Andrey',
        username: '@ndry4ka=)',
        password: "001100110"
    },
    {
        name: 'Ivan',
        username: 'Vani4ka',
        password: "ivanKo_pass"
    },
    {
        name: 'Mustafa',
        username: 'bulo4ka',
        password: "Letuchiy_mish2022"
    },
    {
        name: 'Petro',
        username: 'Presedent2014',
        password: "Roshen"
    },
    {
        name: 'Kiril',
        username: 'dev04ka',
        password: "xxxbigpickxxx"
    },
    {
        name: 'Vitalik',
        username: '@ngelo4ek',
        password: "Mer&box"
    },
    {
        name: 'Kate',
        username: 'Snezzink@',
        password: "1111"
    },
    {
        name: 'Andrey',
        username: 'Milafffk@',
        password: "Samopomich2022"
    },
    {
        name: 'Inokentiy',
        username: 'the_Beest',
        password: 'faYnaUkr'
    },
    {
        name: 'Ira',
        username: 'Milfo4ka=)',
        password: '123123'
    },

];

// Виведення "забігая на перед"
let viv = 0;

while (viv < 10) {
    console.log(array[viv].password);
    viv++
}

// Класичне по таску

console.log(array[0].password);
console.log(array[1].password);
console.log(array[2].password);
console.log(array[3].password);
console.log(array[4].password);
console.log(array[5].password);
console.log(array[6].password);
console.log(array[7].password);
console.log(array[8].password);
console.log(array[9].password);


// Дякую що переглянули домашку :)