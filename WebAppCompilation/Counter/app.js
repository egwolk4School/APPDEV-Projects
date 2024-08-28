// set initaial val for counter
let count = 0

// select the val buttns
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
// console.log(btns)
btns.forEach((btn)=>{
    // console.log(btn)
    // e is event. references one element from group of btnos
    btn.addEventListener('click', (e) =>{
        // console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }
        else if (styles.contains('decrease5')){
            count-=5
        }
        else if(styles.contains('increase')){
            count++
        }
        else if(styles.contains('increase5')){
            count+=5
        }
        else if(styles.contains('random')){
            count=Math.floor(Math.random()*(100-(-100)+1)) + (-100) 
        }
        else{
            count = 0
        }
        // for queryselectors
        

        if (count>0){
            value.style.color ="green"
        }
        else if (count<0){
            value.style.color ="red"
        }
        else{
            value.style.color ="black"
        }
        value.textContent = count
    })
})