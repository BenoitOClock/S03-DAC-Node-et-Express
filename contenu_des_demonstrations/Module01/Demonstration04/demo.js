/*************************************/
// Démonstration non terminée
/*************************************/

console.log('Présentation du if else')
let drapeauDeLaMer = 'vert';

if(drapeauDeLaMer === 'vert') {
    console.log('Youuhhouuuuuu tous en maillot');
} else if(drapeauDeLaMer === 'rouge') {
    console.log('C\'est dangereux !!');
}
else {
    console.log('snif');
}

console.log('Présentation du Swith')
let jour = 5

switch (jour) {
    case 1:
        console.log('Le lundi au soleil')
        break;
    case 2:
        console.log('mardi des patates')
        break;
    case 3:
        console.log('Je reviendrai jeudi')
        break;
    case 4:
        console.log('Jeudi c\'est crepe party ')
        break;
    case 5:
        console.log('C\'est le weekend yeah yeah yeah ')
        break;
    case 6:
        console.log('C\'est le marché')
        break;
    case 7:
        console.log('C\'est le jour du seigneur, Alléluia')
        break;
    default:
        break;
}
