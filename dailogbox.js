alert("This is an alert")
prompt("Please Enter your name")
confirm("Are you sure")

if(10 < 20){
    alert("10 is less than 20")
}

var women = confirm("are you women")

if(women){
    let name = prompt("Please enter your name");
    document.write("Hello Madam. " + name + "welcome to my page")
} else {
    let name = prompt("Please enter your name");
    document.write("Hello Mr. " + name  + "welcome to my page")
}