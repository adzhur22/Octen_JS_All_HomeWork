// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(`1) довжина першої стрінги: ${str1.length}, довжина другої стрінги: ${str2.length}, довжина третьої стрінги: ${str3.length}`);



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(`2) Перевести до великого регістру: ${str1.toUpperCase()}; ${str2.toUpperCase()}; ${str3.toUpperCase()};`)


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';

console.log(`3) Перевести до нижнього регістру: ${str4.toLowerCase()}; ${str5.toLowerCase()}; ${str6.toLowerCase()};`)


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let strDirty = ' dirty string   ';

let firstWord = strDirty.substring(strDirty.indexOf('d'), strDirty.indexOf('y') + 2);
let secondWord = strDirty.substring(strDirty.indexOf('s'), strDirty.indexOf('g') + 1);
let result = firstWord.concat(secondWord);
console.log(result);

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let strRew = 'Ревуть воли як ясла повні';
let stringToArray = (str) => str.split(' ');
console.log(stringToArray(strRew));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

console.log(numbers.map(value => {
    return value + '';
}));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

let sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    }
};

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

let arraySort = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});

console.log(arraySort);



// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let arrayFilter = coursesAndDurationArray.filter(value => {
    return value.monthDuration > 5;
});

console.log(arrayFilter);



// описати колоду карт

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let card = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {value: 'joker', color: 'red'},
    {value: 'joker', color: 'black'},
];

// - знайти піковий туз
let spadeAce = card.find(value => {
    if (value.value === 'ace' && value.cardSuit === 'spade') {
        return value;
    }
});
console.log(spadeAce);

// - всі шістки

let allSix = card.filter(value => value.value === '6');
console.log(allSix);

// - всі червоні карти

let allRed = card.filter(value => value.color === 'red');
console.log(allRed);

// - всі буби
let allDiamond = card.filter(value => value.cardSuit === 'diamond');
console.log(allDiamond);

// - всі трефи від 9 та більше
//???(я так зрозумів черви*)???


    let heart = card.filter(value => value.cardSuit === "heart")
let res = [];
heart.forEach(value => {
    if (value.value !== '6' && value.value !== '7' && value.value !== '8' && value.value !== '9') {
        res.push(value)
    }
});
console.log(res); // мабуть це гавнокод :), але я голову ледь не зламав на цьому прикладі, ахахах. Це єдиний спосіб який народився і то не зразу))




// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = card.reduce(function (acumulator, cards) {

    if (cards.cardSuit === "heart") {
        acumulator.hearts.push(cards);
    }
    if (cards.cardSuit === "clubs") {
        acumulator.clubs.push(cards);
    }
    if (cards.cardSuit === "diamond") {
        acumulator.diamonds.push(cards);
    }
    if (cards.cardSuit === "spade") {
        acumulator.spades.push(cards);
    }
    return acumulator;

},{spades:[],diamonds:[],hearts:[],clubs:[]});

console.log(reduce);