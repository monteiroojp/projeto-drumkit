let container = document.querySelector("div.container")
const letras = ['A','S','D','F','G','H','J','K','L']
const sons = {
    A : 'sons/boom.wav',
    S : 'sons/clap.wav',
    D : 'sons/hihat.wav',
    F : 'sons/kick.wav',
    G : 'sons/openhat.wav',
    H : 'sons/ride.wav',
    J : 'sons/snare.wav',
    K : 'sons/tink.wav',
    L : 'sons/tom.wav',
}


const createDiv = () =>{
    letras.forEach((letter) =>{
        container.innerHTML += `<div id="${letter}"> ${letter} </div>`
    } )
}

createDiv()

const createSoundAndEffect = (key) =>{
    var audio = new Audio(`${sons[key]}`)
    audio.play()
    const div = document.getElementById(`${key}`)
    div.style.border = '10px solid red'
    div.style.transform = 'scale(1.2)'
    div.style.transition = '0.5s ease'

    setTimeout(removeEffect, 200, key)
}

const removeEffect = (key) =>{
    const div = document.getElementById(`${key}`)
    div.style.border = ''
    div.style.transform = 'scale(1.0)'
}

document.addEventListener('keydown' , (Event) =>{
    const key = Event.key.toUpperCase()
    
    if(key == 'A' || key == 'S' || key == 'S' || key == 'D' || key == 'F' || key == 'G' || key == 'H' || key == 'J' || key == 'K' || key == 'L'){
        createSoundAndEffect(key)
        console.log(`A tecla ${key} foi acionada`)
    }
})

document.addEventListener('click' ,(Event) => {
    const key = Event.target.id

    if(key == 'A' || key == 'S' || key == 'S' || key == 'D' || key == 'F' || key == 'G' || key == 'H' || key == 'J' || key == 'K' || key == 'L'){
        createSoundAndEffect(key)
        console.log(`A tecla ${key} foi clicada`)
    }
})