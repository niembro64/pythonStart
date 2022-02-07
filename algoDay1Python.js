// reversing a string
function reverseString(str) {
    // creating an empty new string to add character to
    var newString = "";

    // going through str backwards and adding them to newString
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }

    return newString;
}

function acronymCreator(given){

    var acr = ""; 
    var splitBoy = given.split(" ");

    for (var i = 0; i < splitBoy.length; i++){
        acr += splitBoy[i][0].toUpperCase();
    }

    return acr;
}

var creature = "Eric Michael niemeyer";

console.log(reverseString(creature));
console.log("acronym: " + acronymCreator(creature))
