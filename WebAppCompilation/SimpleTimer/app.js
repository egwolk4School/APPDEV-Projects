

let time

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
let count = value.textContent
btns.forEach((btn)=>{

    btn.addEventListener('click', (e) =>{

        const styles = e.currentTarget.classList
        if(styles.contains('start')){

            time=setInterval(()=>{
                if(count>0){
                    count--
                    value.style.color ="green"
                    value.textContent=count
                }
                else{
                    clearInterval(time)
                    value.style.color ="hsl(209, 61%, 16%)"
                }
            },1000)
        }
        else if(styles.contains('stop')){
            clearInterval(time)
            value.style.color ="red"
        }
        else{
            clearInterval(time)
            count = 30;
            value.style.color ="hsl(209, 61%, 16%)"
            value.textContent = count;
        }
        

        
        
    })
})