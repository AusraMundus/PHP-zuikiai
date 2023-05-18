<!-- PHP SINTAKSE
https://docs.google.com/document/d/1EXLLgqnhXTYhPcdX9bbAuP8h96pPI82GcPcHEWsvMco/edit -->


<h1>Labas</h1>

<?php // php kodo pradzios zenklas

echo 'labukas, PHP'; // php kodo eilute. echo - issiuncia i interpretatoriu ir interpretarosiu grazina stringa. Serveris surenka info ir isiuncia i narsykle. Panasu, kaip console.log. Informacijos isvedimas i isore (narsykle), PHP atidavimas i isore.

?> <!--php kodo pabaigos zenklas-->

<h1>vel HTML</h1>

<?php

echo 'labukas, vel PHP';

// php kodo pabaigos zenklo NEREIKIA, jei nera toliau HTML - tai, kaip HTML kodo pradzia

$vienasDu = 1 + 2; // kintamieji su $ zenklu. Sakiniai pasibaigia kabliataskiu

$vienasDu 
= 
+ 
2
; // isformatavimas galimas, bet nerekomenduojamas

echo $vienasDu; // echo veikia kaip spausdintuvas, tai funkcija, kuri nieko negrazina, neturi skliausteliu, kalbos konstruktas.

// <-eilutes komentaras sau. Pasalinamas narsykleje. VISADA NAUDOTI

/* dokumentinis komentaras - turime laikytis dokumentavimo taisykliu, sintakses */ 

# anotacijos - super grieztos taisykles.

$str1 = "stri $vienasDu \n\n ngas"; // "dvigubose kabutese" skaitoma kintamojo reiksme (3). New line - nuskaitoma reiksme, perkeliamos eilutes

$str2 = 'stri $vienasDu \n\n ngas'; // 'viengubose kabutes' rodomas kintamojo pavadinimas. New line - rodoma tik \n\n

// Visada naudoti 'viengubas kabutes'. Nebent isimtiniais atvejais.

echo $str1;
echo '<br>';
echo $str2;

// Stringu sudejimas vienas su kitu, ne -> +, o -> .
echo $str1 . $str2;

echo '<pre>';

echo 0b1111111 + 2; // integer

$t = null; // nereiketu kintamiesiems primityvanms priskirti null reiksmes. Jei nulas objekto viduje, viskas OK

var_dump(isset($t));

var_dump(null === $t);

// Kintamojo kintamasis
$labas = 'ate';
$ate = 'labukas';
$labukas = 'alio';
echo $$$labas;