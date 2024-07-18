var amount = 100;
var days = 60;
var interest = 2

for(let i = 1; i<=days; i++){
    if(i % 4 === 0){
        amount += interest
    }
    document.write("Your Amount for" + i + "th day" + amount + "<br>") 
}

//Assignment

// var myNumbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]

// myAnswer = [1,2,3,4,5,6,7,8,9]