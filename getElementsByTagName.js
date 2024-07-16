const tagTest = document.getElementsByTagName("div")[0]

tagTest.textContent = "div is changed"
// tagTest.innerHTML = "<p>div is changed</p>"

console.log(tagTest)

// For applying no of elements

// const tag = document.getElementsByTagName("div")

// for(let i=0; i<tag.length; i++) {
//     tag[i].textContent = "Changed to new values"
// }