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
// console.log(titlesh2)
for (let i =0; i <titlesh2.length; i++){
let eachTitle = titlesh2[i]
// console.log(eachTitle)
eachTitle.addEventListener('dblclick',event =>{
    event.target.style.color = 'blue'
})
}

// changes colors of a paragraph when you click

let wordcolor = document.querySelector('.content-section')

wordcolor.addEventListener('click', event =>{
    event.target.style.color = 'red'
    wordcolor.addEventListener('click', event =>{
        event.target.style.color = 'green'
    })
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

let bottomTitles = document.querySelectorAll('.destination h4')

for(let i =0; i<bottomTitles.length; i++){
    let eachBottomTitle = bottomTitles[i]
    // console.log(buttomTitles[i])
    eachBottomTitle.addEventListener('mousedown',event =>{
        event.target.style.color = "yellow"
    })
    eachBottomTitle.addEventListener('mouseleave',event =>{
        event.target.style.color = "purple"
    })
}