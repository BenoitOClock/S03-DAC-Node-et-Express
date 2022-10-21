/*************************************/
// Démonstration non terminée
/*************************************/

console.log('Présentation de la boucle While')
let compteur = 1;

while(compteur <= 10) {
    console.log(compteur)
    compteur++
}

console.log('Présentation de la boucle for')
for(let i=0;i < 10;i++) {
    console.log('i = ' + i)
}

console.log('Présentation de la boucle foreach')
let couleurs = ['vert','jaune','rouge','bleu','orange','violet']
for(let CLE in couleurs) { 
    console.log(CLE)
}

for(let VALEUR of couleurs) {
    console.log(VALEUR)
}

console.log('Bonus : String Template')

let unNumero = 47;
console.log('coucou numéro %i',unNumero)
/*
%s for a String

%d or %i for Number

%f for Floating points

%o for an Object

%j for an JSON
*/