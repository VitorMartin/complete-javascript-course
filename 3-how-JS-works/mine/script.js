///////////////////////////////////////
// Lecture: Hoisting

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/




///////////////////////////////////////
// Lecture: The this keyword




var approversNames = 'a. bouchez, vitor martin';
console.log(approversNames);


approversNames = approversNames.split(', ');
var fullName, firstName, lastName, character;
var lista = [];
for (var i=0; i<approversNames.length; i++){
    fullName = approversNames[i];
    if (fullName.indexOf(' ') != -1){
        fullName = fullName.split(' ');
        
        character = fullName[0][0];
        if (character.charCodeAt() >= 97 && character.charCodeAt() <= 122){
            character = String.fromCharCode(character.charCodeAt() - 32);
        }
        firstName = character + '.';
        
        lastName = fullName[fullName.length-1];
        character = lastName[0];
        if (character.charCodeAt() >= 97 && character.charCodeAt() <= 122){
            character = String.fromCharCode(character.charCodeAt() - 32);
        }
        lastName = character + lastName.slice(1);
        
        lista[i] = firstName + ' ' + lastName;
    }
    else{
        lista[i] = fullName;
    }
}
approversNames = lista;


console.log(approversNames);
