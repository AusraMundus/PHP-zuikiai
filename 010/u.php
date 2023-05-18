<?php

echo '<pre>';

echo '__________1 uzdavinys___________<br>';

$petras = rand(10, 20);
$jonas = rand(5, 25);

if ($petras > $jonas) {
    echo "Petras: $petras, Jonas: $jonas, laimėjo Petras";
} elseif ($petras < $jonas) {
    echo "Petras: $petras, Jonas: $jonas, laimėjo Jonas";
} else {
    echo "Petras: $petras, Jonas: $jonas, niekas nelaimėjo";
}