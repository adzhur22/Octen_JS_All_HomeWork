// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// перший спосіб (декларація)
function areaOfTheRactangle(a, b) {
    return a * b;
}
console.log(`Площа прямокутника перший спосіб: ${areaOfTheRactangle(10, 20)}`);

// другий спосіб (стрілочна)
let areaOfTheRactangle2 = (a, b) => a * b;

console.log(`Площа прямокутника другий спосіб: ${areaOfTheRactangle2(16, 33)}`);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// перший спосіб (декларація)
function AreaOfTheCircle(area) {
    return area * 3.14;
}
console.log(`Площа кола перший спосіб: ${AreaOfTheCircle(19)}`);

// другий спосіб (стрілочна)
let AreaOfTheCircle2 = (area) => area * 3.14;3
console.log(`Площа кола другий спосіб: ${AreaOfTheCircle2(20)}`);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function AreaOfTheCylinder(h, r) {
    return 2 * 3.14 * r * (h + r);
}
console.log(AreaOfTheCylinder(10, 13))

// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let printArrayItems = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
};
printArrayItems(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function printParagraph(text) {
    document.write(`<p>${text}</p>`)
}
printParagraph('привіт, це функція яка створює параграф з текстом.')


// - створити paragraph функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function printUlWithLi(textInLi) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${textInLi}</li>`)
    }
    document.write(`</ul>`)
}
printUlWithLi('функція яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function printUlWithLi_and_NumberOfObjects(textInLi, NumberOfObjects) {
    document.write(`<ul>`)
    for (let i = 0; i < NumberOfObjects; i++) {
        document.write(`<li>${textInLi}</li>`)
    }
    document.write(`</ul>`)
}
printUlWithLi_and_NumberOfObjects('функція яка створює ul з певною кількістю li. Текст li задати через аргумент всім однаковий', 3 )


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let ArrayOfAnything = [10, true, 'Hi', "+100500", 100000, -345123, false ]

let listWithArray = (Array) => {
    document.write(`<ul>`)
    for (const arrayElement of Array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
};

listWithArray(ArrayOfAnything);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let ArrayOfElements = [
    {id: 1113, name: 'Ivan', age: 19},
    {id: 1114, name: 'Artem', age: 29},
    {id: 1115, name: 'Bogdan', age: 51},
    {id: 1116, name: 'Iryna', age: 10},
    {id: 1117, name: 'Vasia', age: 20},
];

let PrintOfElementsToDocument = (Array_Of_Elements) => {
    for (const Element of Array_Of_Elements) {
        document.write(`<div>`)
            for (const kay in Element){
                document.write(` ${kay}: ${Element[kay]}; `)

            }
        document.write(`</div>`)
    }
};

PrintOfElementsToDocument(ArrayOfElements);

// - створити функцію яка повертає найменьше число з масиву
let ArrayOfNumbers = [10, 15, -100, 3000, 0, -3, 155];

let minNumberOfArray = (Array) => {
    let first = Array[0];

    for (const number of Array) {
        if (first > number) {
            first = number;
        }

    }
    return first;
};

console.log(`найменше число масиву: ${minNumberOfArray(ArrayOfNumbers)}`)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let SumNumberOfArray = (Array) => {
    let sum = 0;
    for (const number of Array) {
        sum = sum + number;
    }
    return sum;
};
console.log(`сума чисел масиву: ${SumNumberOfArray(ArrayOfNumbers)}`)