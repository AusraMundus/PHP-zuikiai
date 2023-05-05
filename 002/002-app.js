const racoon1 = 'good'; // turi viena savybe, primityvas
const racoon2 = 'bad'; // turi viena savybe, primityvas

const racoon3 = { // turi kelias savybes, object
    what: 'good',
    size: 'small'
}

const racoon4 = { // turi kelias savybes, object
    what: 'good',
    size: 'big'
}


let fox1 = racoon1; // priskyrimas pagal reiksme, BY VALUE, primityvas
racoon1 = 'bad';

let fox3 = racoon3;
racoon3.what = 'evil'; // perdavimas pagal nuoroda (antro vardo sukurimas, reiksme bendra, tik vardai kiti), BY REFERENCE, objectas
fox3.size = '200px'; // perdavimas pagal nuoroda (antro vardo sukurimas, reiksme bendra, tik vardai kiti), BY REFERENCE

console.log(fox3 === racoon3); // lygus, nes perdavimas pagal reference

let fox4 = { ...racoon4 } // objecto kopijavimas ir iskleidimas, SPREAD https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
racoon4.what = 'evil';
fox4.size = '200px';

let fox4 = { ...racoon4, size: 'Super BIG' } // spreadina (isskleidzia) ir overwrightina (pakeicia) paskutine savybe

let fox4 = { ...racoon4, ...racoon3 }  // spreadina (isskleidzia) ir overwrightina (pakeicia) paskutine savybe

console.log('fox:', fox1, 'racoon:', racoon1);
console.log('fox:', fox3, 'racoon:', racoon3);
console.log('fox:', fox4, 'racoon:', racoon4);

// console.log(racoon3, racoon4);


// DESTRUCTURING object - objekto kpijavimas ir destrukturizacija, is objekto istraukiamos tam tikros savybes https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

/* paprastas istraukimas
const what = racoon3.what;
const size = racoon3.size;
*/

const { what, size } = racoon3; // destructuring, is objekto paimamos tam tikros savybes (viena ar kelios)

console.log(what, size);

// objectas - masyvas, object - array

/* object
const home = {
    first: 'Ieva',
    second: 'Simas',
    third: 'Beaver'
}
*/

// array - skaiciavimas nuo 0, indeksai
const home = [
    'Ieva', //0
    'Simas', //1
    'Beaver' //2
]

home.push('Petras'); // PUSH i masyvo pabaiga pridedama nauja verte (reiksme)

home.unshift('Marge'); // UNSHIFT i masyvo pradzia pridedama nauja verte (reiksme)

home.pop(); // POP nuo masyvo pabaigos nuimama esama reiksme (verte)

home.shift(); // SHIFT nuo masyvo pradzios nuimama esama reiksme (verte)

home[1] = 'Fox'; // su indeksu pakeicia toj vietoj esancia reiksme (verte)

home[55] = 'Simas'; // su indeksu pakeicia toj vietoj esancia reiksme (verte), jei nera tiek uzimtu reiksmiu, praleidzia visas ir prideda i masyvo gala

console.log(home, home[1], home.length); // viso namo gyventojai, namo pirmame aukste - Simas, namo aukstai(dydis, ilgis, aukstis)


// CIKLAI - LOOP

// 1. klasikinis FOR - kai aiskiai zinome, kiek kartu reikes kartoti cikla. Naudojamas masyvui, nes reikia pereiti per visas reiksmes, ir zinome ju baigtini skaiciu.
for (let i = 0; i < home.length; i++) {
    console.log(home[i]);
}

// random function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// naudojama bet kokiems sveikiems skaiciams paimti (random)
function rand(min, max) {
    min = Math.ceil(min); // suapvalina iki sveiko skaiciaus i virsu
    max = Math.floor(max); // suapvalina iki sveiko skaiciaus i apacia
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
  < ---- >=     --> du skaiciai A ir B, jei A<B, tai nebus (A>B ir A=B) arba A>=B
  > ---- <=     --> du skaiciai A ir B, jei A>B, tai nebus (A<B ir A=B) arba A<=B
  == --- !=     --> du skaiciai A ir B, jei A==B, tai nebus A!=B
  && --- ||     --> du skaiciai A ir B, jei A && B, tai nebus A || B ir atvirksciai
*/

// 2. WHILE - is anksto nezinome, kiek kartu reikes kartoti cikla. Ciklas skaiciuoja nuo 0 iki begalybes

// mociute duoda pinigu ir reikia dirbti bolt
let bolt = 0;
const grandma = rand(0, 600);
bolt = bolt + grandpa;
console.log('%c' + bolt, 'color:orange;');

while (bolt < 400) {
    const nightOut = rand(10, 60);
    bolt += nightOut;
    console.log('%c' + bolt, 'color:crimson;');
}

// 3. DO WHILE - is anksto nezinome, kiek kartu reikes kartoti cikla. Ciklas skaiciuoja nuo 1 iki begalybes

// metam moneta, H arba S
let h = 0;

do {
    const now = rand(0, 1) ? 'H' : 'S'; // ternary
    now == 'H' && h++;
    console.log('%c' + now, 'color:pink;');
}while(h < 3);


// IF - palyginimas, isprendzia ir gauna rezultata: true arba false. 

if (5 > 3) {
    console.log('%cJa ja', 'color: skyblue;') // ats. Ja Ja, true
} else {
    console.log('%cNo no', 'color: yellow;')
}

/*
if (7) // vercia i logini kintamaji TRUE
if (-8) // vercia i logini kintamaji TRUE
if (0) // vercia i logini kintamaji FALSE (0 yra false)
https://www.educative.io/answers/what-are-falsy-values-and-truthy-in-javascript
*/

let A = 2;
console.log(A++ * ++A); // 
// 2 * 4

let a = 1;

if (a-- || a) {
    console.log('%cJa ja', 'color: skyblue;') // ats. Ja Ja, true
} else {
    console.log('%cNo no', 'color: yellow;')
}

if (a-- && a) {
    console.log('%cJa ja', 'color: skyblue;') 
} else {
    console.log('%cNo no', 'color: yellow;') // ats. No no, false
}

// ternary ->> salyga ? true : false  vietoj  if(){}else{}    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

let b = 2; // 0

b ? console.log('%cJa ja', 'color: skyblue;') : console.log('%cNo no', 'color: yellow;'); // true, jei 0 -> false


// AND - &&  OR - ||

// OR grazins pirmaja true value
let C = 3;
console.log(C-- || C-- || C-- || C-- || C-- ); // ats. 3


// AND grazins pirmaja false value
let D = 3;
console.log(D-- && D-- && D-- && D-- && D-- ); // ats. 0