const iconx = '<i style="color: #4d6160" class="fa-solid fa-x"></i>' 
const icony = '<i style="color: #613860" class="fa-regular fa-circle"></i>'
let cards = document.querySelectorAll('.card')
let alertwin = document.getElementById('alert')
let turn = false

let userx = []
let usery = []

alertwin.style.display = "none"

cards.forEach(card =>{
    card.addEventListener('click', ()=>{
        if(card.classList.contains('notUse')){
            if(turn == false){
                card.innerHTML = iconx
                turn = true
                userx.push((parseInt(card.classList[2])))
            }else{
                card.innerHTML = icony
                usery.push(parseInt(card.classList[2]))
                turn = false
            }
            card.classList.remove('notUse')    
        }
        winer()
    })
    
})



function winer(){
    const winCombo = [
        [1,2,3], [4,5,6],[7,8,9], //filas
        [1,4,7], [2,5,8], [3,6,9],//columnas
        [7,5,3], [1,5,9]//daigonales
    ]
    function hasWinCombo(user_points) {
        return winCombo.some(combo => combo.every(numbers => user_points.includes(numbers)));
      }
    
      if (hasWinCombo(userx)) {
        alertwin.innerHTML = ""
        alertwin.innerHTML = `Win<br>${iconx}`
        alertwin.style.display = "flex";
      } else if (hasWinCombo(usery)) {
        alertwin.innerHTML = ""
        alertwin.innerHTML = `Win<br>${icony}` 
        alertwin.style.display = "flex";
      }
    }
    


function reset(){
    location.reload()
}

