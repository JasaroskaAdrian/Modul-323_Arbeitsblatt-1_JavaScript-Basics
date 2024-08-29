//Aufgabe a
const myMathA = Math.random()
if (myMathA > 0.5) {
    console.log("Grösser als 0.5")
}
if (myMathA > 0.25) {
    console.log("Grösser als 0.25")
}
else {
    console.log("Kleiner oder gleich 0.25")
}
console.log(myMathA)

//Aufgabe b
const myMathB = Math.floor(Math.random() * 5)
switch (myMathB) {
    case 1:
        console.log("Number is exactly 1")
        break;
    case 3:
        console.log("Number is exactly 3")
        break; 
    default:
        console.log("Number is neither 1 nor 3")
        break;
}
console.log(myMathB)

