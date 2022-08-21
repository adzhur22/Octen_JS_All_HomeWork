// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

let array = [];
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

array.push(new User(1,'Vasia','Pupkin', 'pipko1@gmail.com', '0995554445'));
array.push(new User(20,'Vika','Pupkina', 'pipko2@gmail.com', '0995554446'));
array.push(new User(32,'Maks','Pupkin', 'pipko3@gmail.com', '0995554447'));
array.push(new User(35,'Ivanko','Pupkin', 'pipko4@gmail.com', '0995554448'));
array.push(new User(554,'MAtvij','Pupkin', 'pipko5@gmail.com', '0995554449'));
array.push(new User(111,'Sergo','Pupkin', 'pipko6@gmail.com', '0995554450'));
array.push(new User(6332,'MAkaronka','Pupkina', 'pipko7@gmail.com', '0995554451'));
array.push(new User(3,'Irka','Pupkina', 'pipko8@gmail.com', '0995554452'));
array.push(new User(22,'Sveta','Pupkina', 'pipko9@gmail.com', '0995554453'));
array.push(new User(1011,'Masha','Pupkina', 'pipko10@gmail.com', '0995554454'));
console.log(array);



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredArray = array.filter(value => (value.id % 2 === 0));
console.log(filteredArray);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedArray = array.sort((a, b) => (a.id-b.id));
console.log(sortedArray);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

let arrayClient = [];

class Client {

    constructor(id,name,surname,email, phone, other) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.other = other;
    }

}

arrayClient.push(new Client(1420,'Pipko','Dipko', 'dipko_pipko@gmail,com',380996666311, ['apple','tomato']));
arrayClient.push(new Client(3534,'Adam','Motorola', 'pipko_dipko@gmail,com',380996666312, ['apple','tomato', 'cucumbers']));
arrayClient.push(new Client(1222,'Sirkan','Lubich', 'Lubich_pipko@gmail,com',380996666313, ['apple','tomato', 'pie','cucumbers']));
arrayClient.push(new Client(1286,'Matviy','Petriv', 'Petriv_dipko@gmail,com',380996666314, ['apple','tomato', 'chicken', 'potato', 'cucumbers']));
arrayClient.push(new Client(1462,'Petro','Sobko', 'Sobko_pipko@gmail,com',380996666315, ['tomato']));
arrayClient.push(new Client(1472,'Vasichka','Kisil', 'Kisil_dipko@gmail,com',380996666316, ['apple','tomato','pie']));
arrayClient.push(new Client(1276,'Robert','Andrusevich', 'Andrusevich_pipko@gmail,com',380996666317, ['ice', 'apple','tomato']));
arrayClient.push(new Client(3152,'Kapitoshka','Hlopik', 'Hlopik_pipko@gmail,com',380996666318, []));
arrayClient.push(new Client(1660,'Mykola','Oloollo', 'Mykola_pipko@gmail,com',380996666319, ['chicken', 'potato']));
arrayClient.push(new Client(1213,'Inokentii','Best', 'Inokentii_pipko@gmail,com',380996666320, ['apple','tomato', 'chicken', 'potato', 'cucumbers', 'rum']));




console.log(arrayClient);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedArrayOfClient = arrayClient.sort((a, b) => (a.other.length - b.other.length));
console.log(sortedArrayOfClient);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        // варіант 1:
        console.log(this) // По суті, це самий банальний варіант і він працює згідно умови. Але я зроблю альтернативу.
        // варіант 2:

        console.log(`model - ${this.model}`);
        console.log(`producer - ${this.producer}`);
        console.log(`year - ${this.year}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`engineCapacity - ${this.engineCapacity}`);
        if (this.driver) {
            for (const kay in this.driver) {
                console.log(`Driver: ${kay} - ${this.driver[kay]}`);
            }

        }

    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    };

    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let car1 = new Car('porse', 'asdasd', 2010, 110, 1.3);
car1.drive();
car1.info(); // Вивід до зміни властивостей і добавляння водія.
car1.increaseMaxSpeed(500);
car1.changeYear(2022);
car1.addDriver({name: 'Ivan', age: 10});
car1.info();// Вивід після зміни властивостей і добавляння водія.




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


console.log('---------------------------------------------------------');
console.log('Те саме тільки класом');
console.log('');

class Carr {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;

    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }


    info() {

        console.log(`model - ${this.model}`);
        console.log(`producer - ${this.producer}`);
        console.log(`year - ${this.year}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`engineCapacity - ${this.engineCapacity}`);
        if (this.driver) {
            for (const kay in this.driver) {
                console.log(`Driver: ${kay} - ${this.driver[kay]}`);
            }
        }


    }

    increaseMaxSpeed(newSpeed){
        this.maxSpeed = newSpeed;

    }

    changeYear(newValue){
        this.year = newValue;

    }
    addDriver(driver){
        this.driver = driver;
    }


}

let car2 = new Carr('ford', 'fdgdfg', 2015, 999, 5.0);
car2.addDriver({name: 'Petro', status: 'professional'});
car2.info();



console.log('---------------------------------------------------------');
console.log(' За допомоги циклу');




//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Popelushka {
    constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
    }

}

let arrPopel = [];

arrPopel.push(new Popelushka('Ilona', 20, 36));
arrPopel.push(new Popelushka('Katya', 21, 37));
arrPopel.push(new Popelushka('Masha', 18, 35));
arrPopel.push(new Popelushka('Vika', 25, 39));
arrPopel.push(new Popelushka('Zoya', 46, 44));
arrPopel.push(new Popelushka('Sveta', 18, 38));
arrPopel.push(new Popelushka('Anna', 19, 41));
arrPopel.push(new Popelushka('Marta', 27, 34));
arrPopel.push(new Popelushka('Adelya', 30, 42));
arrPopel.push(new Popelushka('Eva', 22, 43));


class Prince extends Popelushka {
    constructor(name, age, footSize) {
        super(name, age, footSize);
    }
}

let prince = new Prince('Ivan', 22, 36);




//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const popel of arrPopel) {
    if (popel.footSize === prince.footSize) {
        console.log(`Принц ${prince.name} знайшов попелюшку ${popel.name} `);
    }
}


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log('---------------------------------------------------------');
console.log('за допомоги функції масиву find');
let findPopel = arrPopel.find(value => (value.footSize === prince.footSize));
console.log(`Попелюшка яку шукав принц: ${findPopel.name}`);