const colors = ["Sometimes even to live is an act of courage.", 
"Luck is what happens when preparation meets opportunity.", 
"We suffer more often in imagination than in reality.", 
"All cruelty springs from weakness.",
"Difficulties strengthen the mind, as labor does the body.",
"It is not the man who has too little, but the man who craves more, that is poor."]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

// function to change colors of the BG
btn.addEventListener("click", () =>{
    //taget body from html
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})
getRandomNumber = () =>{
    return Math.floor(Math.random() * colors.length)
}