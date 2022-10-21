/*************************************/
// Démonstration non terminée
/*************************************/

// > <= <= < != == !== ===

let monPrenom = 'Anthony';

console.log('Bonjour ' + monPrenom);

let drapeauDeLaMer = 'vert';

if(drapeauDeLaMer === 'vert') {
    console.log('Youuhhouuuuuu tous en maillot');
} else if(drapeauDeLaMer === 'rouge') {
    console.log('C\'est dangereux !!');
}
else {
    console.log('snif');
}

console.log('Présentation des opérateurs logiques')
console.log('OU Logique')
console.log(true||true)   //true
console.log(true||false)  //true
console.log(false||true)  //true
console.log(false||false) //false

console.log('ET Logique')
console.log(true&&true)   //true
console.log(true&&false)  //false
console.log(false&&true)  //false
console.log(false&&false) //false

console.log('NON')
console.log(!true)  //false
console.log(!false) //true
console.log(!null)  //true
console.log(!0)     //true
console.log(!'')    //true