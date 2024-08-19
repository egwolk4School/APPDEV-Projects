const colors = ["The soul becomes dyed with the colour of its thoughts.", 
"Dwell on the beauty of life. Watch the stars, and see yourself running with them.", 
"The happiness of your life depends upon the quality of your thoughts.", 
"Our life is what our thoughts make it.",
"Waste no more time arguing about what a good man should be. Be one.",
"The best revenge is to be unlike him who performed the injury."]
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