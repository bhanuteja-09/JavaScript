const targetHidden = document.querySelector("p")

// console.log(targetHidden.innerText)

//Displaying result : This is result: Fail

console.log(targetHidden.textContent)

//Displaying result : This is result: Success Fail


// Note: 
// innerText takes the spaces applied by return Element

// textContent , when you get the value , if the css is applied , it will not consider the css and then return the result