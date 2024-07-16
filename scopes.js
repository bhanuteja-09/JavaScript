//global scope
var Apple = "red";
let Orange = "yellow";
const banana = "green";

function fruit() {
    document.write(Apple);
    document.write(Orange);
    document.write(banana);
}
fruit()

//function scope
var Apple = "red";
let Orange1 = "yellow";
const banana1 = "green";

function fruit() {
    var x = 100;
    let y = 200;
    const z = 'mahesh'
    document.write(x);
    document.write(y);
    document.write(z);
}
fruit()

//block scope

function sports(){
    if(10 < 20) {
        let cricket = "virat"

        document.write(cricket)
    }

    document.write(cricket)  // if you write variable here it will not display because only inside the block only displays
}
sports()