// Multi Dimensional array

let students = ["anil", "sunil", "banti"]

// document.write("My student is : ", students[2])

let marks = [
    [
        ["Anil","amar","anthony"],
        ["Banit", "bably", "bhanu"]
    ],
    [40,50,60,70],
    [80,90],
    [100,110,120,140, 150,160,170,180]
]

document.write("My Expected Result : ", marks[1][1] + "<br>")
document.write("My Expected Result : ", marks[3][3] + "<br>")
document.write("My Expected Result : ", marks[3][6] + "<br>")
document.write("My Expected Result : ", marks[0][0][1] + "<br>")
console.log(marks[1])