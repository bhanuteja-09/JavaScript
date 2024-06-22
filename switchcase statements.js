// Switch

switch(true){
    case 10>20:
        myAnswer = "red color"
    break;
    case 20 < 30:
        myAnswer = "green color"
    break;
    case 50 > 20 :
        myAnswer = "black color"
    break;
    case 100 == 200 :
        myAnswer = "orange color"
    break;

    default:
        myAnswer = "none of the above"
    break
    
}

document.write(myAnswer)

//switch-Case example practicals

//student results

let Name = prompt("Please Enter your Name");

let Marks = prompt("Enter your Marks");

switch(true){
    case Marks>90 && Marks<=100:
        result = "Great you are the topper"
    break;
    case Marks>65 && Marks <=90:
        result = "Congratulations you got First Class"
    break;
    case Marks>40 && Marks<65:
        result = "You got second Class"
    break;
    case Marks >=30 && Marks <= 40:
        result = "You got third Class"
    break;
    case Marks<30:
        result = "Sorry you are Failed, Better luck Next Time"
    break;
    default:
       result="Please enter your marks"
    break;
    
}

document.write("Hello" + Name + "<h2>" +result + "<h1>")
