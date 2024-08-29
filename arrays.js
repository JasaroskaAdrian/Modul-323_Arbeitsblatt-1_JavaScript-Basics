//Aufgabe a & b
const myArrayA = ["Adrian", "Jasaroska", 17]
console.log(myArrayA)
/*
[0] is the first Element
[1] is the second Element
[2] is the third Element
...
*/ 

//Aufgabe c
const myArrayC = ["Adrian", "Jasaroska", 17, {Car: {Brand: "Lamborghini"}}]
console.log(myArrayC[0])

//Aufgabe d
const myArrayD = ["Adrian", "Jasaroska", 17, {Car: {Brand: "Lamborghini"}}]
myArrayD.pop() //Removes Last Element
myArrayD.shift() //Removes First Element
console.log(myArrayD)
