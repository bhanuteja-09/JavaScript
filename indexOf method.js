// indexOf() = ("Returns the first index at which a given element can be found in an array, or -1 if it not present")

let students = ["Anil", "Banti", "suresh", "mahesh", "Girish"]

// document.write(students.indexOf("suresh"))
// document.write("<br>")
// document.write(students.indexOf("ramesh"))

var newStudent = students.indexOf("satish")

if (newStudent == -1) {
    students.push("Satish")
}

document.write(students)
