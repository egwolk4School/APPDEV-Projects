const colors = ["It is not that I am mad, it is only that my head is different from yours.", 
"Of what use is a philosopher who doesn't hurt anybody's feelings?.", 
"In a rich man's house there is no place to spit but his face.", 
"I am a citizen of the world.",
"The foundation of every state is the education of its youth.",
"It takes a wise man to discover a wise man."]
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