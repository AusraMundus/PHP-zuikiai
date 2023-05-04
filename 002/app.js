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

// ispausdina visa array i eilute
for (let i = 0; i < home.length; i++) {
    console.log(home[i]);
}