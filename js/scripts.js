// plik scripts.js tablice

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];

var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);   

var newName = 'marian';


if (allNames.indexOf(newName) === -1) {
    var x = allNames.push(newName);
    
} else {
    console.log('to imie juz istnieje w tablicy!');
    
}



//console.log(maleNames);
//console.log(femaleNames);
console.log(allNames);