// document.getElementById("company")
//document.getElementByClassName("nav-left")
//document.getElementByTagName("nav")

// Using querySelector

// const newCompany = document.querySelector("#company")
// const newCompany = document.querySelector(".nav-left")
// const newCompany = document.querySelector("nav")

// newCompany.textContent = "Amazon"

const newCompany = document.querySelectorAll(".customers")
console.log(newCompany)
for(let x=0; x<newCompany.length; x++){
    newCompany[x].textContent = "Employees"
}
