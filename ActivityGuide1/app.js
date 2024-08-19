const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", ()=>{
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value
    let x =`Hello! ${name}, I see that you are from ${address} and you are also pursuing your degree in ${major} and you can be contacted using ${telephone}.`
    document.getElementById("output").innerHTML=x
})