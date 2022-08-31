// Зробити свій розпорядок дня.
//
//У вас має бути більше 10 асинхронних дій з рандомними затримками.
//Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
//Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі

let wakeUpTime = '  ';
let money = 500;


function haveBreakfast1(wakeUpTime) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (wakeUpTime === 'late') {
                money -=100
                console.log(money, '1');
                reject ('все пішло не по плану!')
            } else {
                money +=100;
                console.log(money, '1');
                resolve (money);
            }
        }, 500);

    });

}

function haveBreakfast2(money) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (money > 400) {
                money -=100
                console.log(money, '2');
                resolve (money);
            } else {
                money +=100;
                console.log(money, '2');
                reject ('все пішло не по плану!')
            }
        }, 100);

    });

}

function haveBreakfast3(money) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (money > 300) {
                money -=100
                console.log(money, '3');
                resolve (money);
            } else {
                money +=100;
                console.log(money, '3');

            }
        }, 800);

    });


}

function haveBreakfast4(money) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (money > 200) {
                money -=100
                console.log(money, '4');
                resolve (money);
            } else {
                money +=100;
                console.log(money, '4');
                reject ('все пішло не по плану!')
            }
        }, 1000);

    });

}

function haveBreakfast5(money) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (money > 100) {
                money -=100
                console.log(money, '5');
                resolve (money);
            } else {
                money +=100;
                console.log(money, '5');
                reject ('все пішло не по плану!')
            }
        }, 100);

    });


}


// haveBreakfast1(wakeUpTime)
//     .then(money => {
//         return haveBreakfast2(money);
//     })
//     .then(money => {
//
//         return haveBreakfast3(money)
//     })
//     .then(money => {
//
//         return haveBreakfast4(money)
//     })
//     .then(money => {
//
//     return haveBreakfast5(money)
// }).then(result =>{
//     console.log('money = ', money);
// });



async function vacation(){

    try {

        const one = await haveBreakfast1(wakeUpTime);
        const two = await haveBreakfast2(one);
        const three = await haveBreakfast3(two);
        const four = await haveBreakfast4(three);
        const five = await haveBreakfast5(four);
        console.log(five, ' five');
        const six = await haveBreakfast2(five);
    } catch (e) {
        console.log(e);
    }

}

vacation();









