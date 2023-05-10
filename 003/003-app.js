const A = {}; // object
const B = []; // array

A.color = 'skyblue'; // add
B.push('crimson'); // add

const prop = 'size'; // property

A[prop] = 'BIG'; // add variable, nes array cia

const C = [...B]; // array copy
const D = [...B, 'pink']; // array copy + new element, EILISKUMAS
const F = ['pink', ...B]; // array copy + new start element

const E = {...A}; // object copy
const G = {...A, age: 33}; // object copy + new prop, EILISKUMO NERA
const K = {...G, size: 'small'} // object copy + overwrite prop

const {color, size} = K; // object destruct
const [row1, row2] = F; // array destruct

// console.log(A);
// console.log(B);
// console.log(C);
// console.log(D);
// console.log(F);
// console.log(E);
// console.log(G);
// console.log(K);
// console.log(color, size);
// console.log(row1, row2);

// FUNCKIJOS - 1.deklaruojama, 2.vykdoma
// kur deklaruojama, ten nevykdoma

console.log('%c START ', 'background: skyblue, color:white');

// function declaration (deklaracija)
// "fun" is the name of function
function fun (bg = 'orange', fs = 30) { // => bg yra parameter (kintamasis, i kuri perduodama konkreti argumento reiksme). bg = 'orange', fs = 30, - default reiksmes
    console.log('%c FUN ', `background: ${bg}; color:white; font-size:${fs}px;`);
    return 'was fun';
};

console.log('%c END ', 'background: skyblue, color:white');


const moreFun = fun;
// moreFun('pink', 5); // => 'pink', 5 yra argument, konkreti reiksme perduodama i funkcija
// moreFun('black', 50);

// const how = fun();
// how();

// console.log(moreFun, how);

// "fun2" is variable, function has no name, anonimine
const fun2 = function (bg = 'orange', fs = 30) {
    console.log('%c FUN ', `background: ${bg}; color:white; font-size:${fs}px;`);
    return 'was fun';
};

// "fun3" is variable, function has no name, anonimine, rodykline, arrow function
const fun3 = (bg = 'orange', fs = 30) => {
    console.log('%c FUN ', `background: ${bg}; color:white; font-size:${fs}px;`);
    return 'was fun';
};

// "fun4" is variable, function has no name, anonimine, vienos eilutes
const fun4 = (a) => {
    return 'was ' + a;
};

const fun5 = a => 'was ' + a;

const what = fun5('fun');

// console.log(what, fun5('cool'));


// PAVYZDYS - pasidaryk kalkuliatoriu pats
const calc = (what, a, b) => what(a, b); // what is callback, callback`ine funckija, kuria reikia paduoti, kad darytu kazka su a ir b

const sum = (a, b) => a + b; // sumos funkcija
const mult = (a, b) => a * b; // daugybos funkcija

console.log('+', calc(sum, 5, 7));
console.log('*', calc(mult, 5, 7));



// PAVYZDYS - masyvas su gyvuneliais, juos reikia isspausdinti 

const animals = [
    'racoon',
    'beaver',
    'fox',
    'wolf'
];

const colors = [
    'crimson',
    'skyblue',
    'black',
    'pink'
]

for (let i = 0; i <animals.length; i++) {
    console.log(`%c ${animals[i]}`, 'background:brown; color:white; font-size:${fs}px;');
}

for (let i = 0; i <colors.length; i++) {
    console.log('%c ', `background:${colors[i]}`);
}

const arrayGo = (array, fun) => {
    for (let i = 0; i <animals.length; i++) {
        fun(array[i]);
    }
}

const print1 = p => console.log(`%c ${p}`, 'background:brown; color:white;');
const print2 = p => console.log('%c ', `background:${p}`);

// arrayGo (animals, print1);
// arrayGo(colors, print2);
// arrayGo(colors, print1);

animals.forEach (animal => print1(animal)); // ima masyva, ima po viena elementa, dedam i funkcija ir isskvieciam ka norim padaryti
animals.forEach (a => console.log(a));
colors.forEach (c => print2(c)); // c - color
colors.forEach ((c, i) => console.log(c, i)); // keli kintamieji skliaustuose
colors.forEach ((_, i) => console.log(i)); // jei reikia visu kintamuju pagal sintakse, bet kode nenorime rodyti visu kintamuju, naudojame vietoj kintamojo -> _
//colors.forEach (c => print2(c)); // c - color


// .map vietoj .forEach

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// .forEach nesukuria ir negrazina naujo masyvo
const animals2 = [];
animals.forEach (a => {
    animals2.push(a + '***');
});

console.log(animals2);

// .map sukuria ir grazina nauja masyva. MODIFIKACIJAI. Netinka ismesti ar prideti elementus
// ima po viena elementa ir dirba su juo.
const animals3 = animals.map (a => a + '***');

console.log(animals3);

const animalColors = [
    { name:'racoon', color:'crimson', size: 12 },
    { name:'wolf', color:'pink', size: 42 },
    { name:'beaver', color:'skyblue', size: 15 },
    { name:'fox', color:'black', size: 20 }
];

const animalColorsPlus = animalColors.map (a => ({...a, name: a.name + '+++'}));
const animalColorsPlusCrimson = animalColorsPlus.map (a => a.color == 'crimson' ? {...a, name: '+++' + a.name} : {...a});

console.log(animalColorsPlus);
console.log(animalColorsPlusCrimson);

// .filter - naudojamas filtravimui (suradimui) arba trynimui elementu is masyvo
// ima po viena elementa ir tikrina pagal filtro nustatymus
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const animalsCrimson = animalColors.filter (a => a.color == 'crimson');  // filter

console.log(animalsCrimson);

const animalsWoFox = animalColors.filter (a => a.name != 'fox'); // delete

console.log(animalsWoFox);

// .filter ir .find skirtumas
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const wolfFilter = animalColors.filter (a => a.name == 'wolf'); // filter grazina viena ir daugiau, masyve
const wolfFind = animalColors.find (a => a.name == 'wolf'); // find grazina viena, pati pirmaji, be masyvo

console.log(wolfFilter);
console.log(wolfFind); 

// isfiltruoti gyvunai, surandant pagal spalva, ir pakeista spalva
const doubleAnimal = animalColors.filter(a => a.color == 'crimson').map(a => ({...a, color: 'black'}));

console.log(doubleAnimal);

// .sort - isrusiuoti masyva, nekuria naujo masyvo.
// Ima masyvo du narius ir lygina pagal kazkokia savybe
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://www.geeksforgeeks.org/sorting-algorithms/

animalColors.sort((a, b) => {
    if (a.size < b.size) return -1;
    if (a.size > b.size) return 1;
    return 0;
})
// trumpesnis .sort uzrasymas
animalColors.sort((a, b) => a - b);

// rusiavimas pagal abecele
animalColors.sort((a, b) => a.name.localeCompare(b.name));
animalColors.sort((a, b) => b.name.localeCompare(a.name));

console.log(animalColors);