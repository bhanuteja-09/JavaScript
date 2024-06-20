var a = 30;

var b = 20;

document.write("result:", a+b); //addition operator
document.write("result:", a-b); // subtraction operator
document.write("result:", a*b);// multiplication operator
document.write("result:", a/b); // division operator
document.write("result:", a+b); // modulas operator

//Increment
var c = 30;
c++

var d = 20;
d++
document.write( "result1:",c);
document.write( "result2:",d);

//Decrement

var e = 30;
e--

var f = 20;
f--
document.write( "result3:",e);
document.write( "result4:",f);

//Logical Operator

var x = 100;

var y = 50;

var z = 200;

//for LOgical AND operator

// if (x == y && y < z) {
//     document.write("yes correct answer");
// } else {
//     document.write("wrong answer");
// }

//for LOgical NOT operator

// if (x !== y && y < z) {
//     document.write("yes correct answer");
// } else if((x + y)<z){
//     document.write("yellow color is printed")
// }

//for LOgical OR operator

if ((x > y) || (y < z)) {
         document.write("Z is greater than all");
     } else if ((x == y) || (z > x)) {
        document.write("true answer")
     }

//ternary operator(logical operator)

document.write(
2 + 3 == 6 ? "yes correct answer": "No wrong answer"
)

var b = 100;

var y = 50;

x < y ? document.write("color is green") : document.write("red color")
                        |                                 |
                    If the condition is true          If the condition is false 
                    prints left side statement         prints right side statement