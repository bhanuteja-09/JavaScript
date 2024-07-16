// Function Expression
var a = function apple(){
    document.write("Red in color")
}
a();

// Anonymous Function
var b = function(){
    document.write("Red in color")
}
b();

// Function with parameters and Return value

function score(a, b){
    return a+b + "<br>"
}
document.write(score(10,20));
document.write(score(125,662));
document.write(score(37,89));

function game(x,y){
    return document.write("I like " + x + " and " + y)
}
game("Cricket", "Football")

var userName = prompt("Please enter your Name:")
function guest(myFriend){
    return document.write("hello welcome" + myFriend)
}
guest(userName)