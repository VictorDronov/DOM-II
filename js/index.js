// Your code goes here
const navButtons = document.querySelector(".nav")
// console.log(navButtons)

// This changes nav color when you mouse over it
navButtons.addEventListener('mouseover', event =>{
    event.target.style.color = "white"
    navButtons.addEventListener('mouseout', event => {
        event.target.style.color = "black"
    })
})


navButtons.addEventListener('click', event =>{
    event.preventDefault()
    event.target.style.color = 'green'
})

// Changers all colors
const titlesh2 = document.querySelectorAll('h2')
titlesh2.forEach(event =>{
    event.style.color = 'red'
})


// THis makes the first title disapear when you press e
const titles = document.querySelector('h2')

document.addEventListener('keydown',event =>{
    if(event.key === "e"){
        titles.style.color = 'Purple'
    } else if (event.key === 'q'){
        titles.style.color = 'Orange'
    }
})


// Title color change

const titleChange = document.querySelector('h1')

window.addEventListener('load',() =>{
    titleChange.style.color = 'lightblue'
})

