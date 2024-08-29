//Aufgabe a
function myFunctionA(Number1, Number2) {
    Number1 = Math.random() * 113;
    Number2 = Math.random() * 60;
    let sum = Number1 * Number2;
    console.log(sum)
}
myFunctionA()

//Aufgabe b
function temperatureCalculator(Celsius) {
    Celsius = 44; //Benutzereingabe in Celsius
    let fahrenheitOutput = Celsius * 1.8 + 32;
    console.log(`${Celsius} C° entsprechen ${fahrenheitOutput} F°`)
}
//Aufgabe c
let multiply = (a, b) => a % b
console.log(multiply(5, 8))