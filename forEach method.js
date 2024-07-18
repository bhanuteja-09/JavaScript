// forEach() = ("Executes a provided function once for each array element")
let scores = [10,20,30,40,50,60];

let students = ["Suresh", "Murali", "nagaraju", "Harish"]

// document.write(students + "<br>")

students.forEach(function(item, index){
    document.write(index + 1 + "." + item + "<br>")
})

scores.forEach(function(apple){
 document.write(apple * 2 + "<br>")
})