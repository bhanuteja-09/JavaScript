// slice() =("Returns a shallow copy of a portion of an array into a new array")
let students = ["anil", "Balu", "Karthik", 10,20,30,40,50]

let myStudents = students.slice(0,4)
document.write(myStudents + "<br>")

console.log(students)

//splice() = ("changes the content of an array by removing , replacing, or adding elements ")


//splice Removing

let myNumbers = [0,1,2,3,4,5,6,7,8]

let myNewNumbers = myNumbers.splice(0,5)

document.write(myNumbers + "<br>");

document.write(myNewNumbers + "<br>");


//splice replacing
let myNumbers1 = [0,1,2,3,4,5,6,7,8]

let myNewNumbers1 = myNumbers1.splice(0, 4, "Something to see")

//I want tot replace the  4 value only for that 

// let myNewNumbers1 = myNumbers1.splice(4, 1, "Stars in Sky") //result: 0,1,2,3, Stars in Sky, 5,6,7,8

// let myNewNumbers1 = myNumbers1.splice(4, 3, "Stars in Sky") //result: 0,1,2,3,Stars in Sky,7,8

document.write(myNumbers1 + "<br>");

document.write(myNewNumbers1 + "<br>");

//splice adding

let myNumbers2 = [0,1,2,3,4,5,6,7,8]

let myNewNumbers2 = myNumbers2.splice(3, 0, "Added value")

document.write(myNumbers2 + "<br>");

document.write(myNewNumbers2 + "<br>");