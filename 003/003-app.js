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

arrayGo (animals, print1);
arrayGo(colors, print2);
arrayGo(colors, print1);