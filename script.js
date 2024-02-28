let container = document.querySelector("div.container")
const letras = ['A','S','D','F','G','H','J','K','L']

const createDiv = () =>{
    let contador = 0
    

    while(contador < 9){
        container.innerHTML += `<div id="div-item${contador + 1}"> ${letras[contador]} </div>`
        contador ++
    }
}
createDiv()

const keyA = () => {
    var audioA = document.createElement('audio')
    audioA.setAttribute('src' , 'sons/boom.wav')
    audioA.setAttribute('autoplay' , true)
}

const keyS = () => {
    var audioS = document.createElement('audio')
    audioS.setAttribute('src' , 'sons/clap.wav')
    audioS.setAttribute('autoplay' , true)  
}

const keyD = () => {
    var audioD = document.createElement('audio')
    audioD.setAttribute('src' , 'sons/hihat.wav')
    audioD.setAttribute('autoplay' , true)   
}

const keyF = () => {
    var audioF = document.createElement('audio')
    audioF.setAttribute('src' , 'sons/kick.wav')
    audioF.setAttribute('autoplay' , true)  
}

const keyG = () => {
    var audioG = document.createElement('audio')
    audioG.setAttribute('src' , 'sons/openhat.wav')
    audioG.setAttribute('autoplay' , true)   
}

const keyH = () => {
    var audioH = document.createElement('audio')
    audioH.setAttribute('src' , 'sons/ride.wav')
    audioH.setAttribute('autoplay' , true)
}

const keyJ = () => {
    var audioJ = document.createElement('audio')
    audioJ.setAttribute('src' , 'sons/snare.wav')
    audioJ.setAttribute('autoplay' , true)
}

const keyK = () => {
    var audioK = document.createElement('audio')
    audioK.setAttribute('src' , 'sons/tink.wav')
    audioK.setAttribute('autoplay' , true)
}

const keyL = () => {    
    var audioL = document.createElement('audio')
    audioL.setAttribute('src', 'sons/tom.wav')
    audioL.setAttribute('autoplay' , true)
}



document.addEventListener('keydown' , (Event) => {
    if(Event.key == 'a' || Event.key == 'A'){
        keyA()
        console.log(Event.key)
    }
    else if(Event.key == 's' || Event.key == 'S'){
        keyS()
        console.log(Event.key)
    }
    else if(Event.key == 'd' || Event.key == 'D'){
        keyD()
        console.log(Event.key)
    }
    else if(Event.key == 'f' || Event.key == 'F'){
        keyF()
        console.log(Event.key)
    }
    else if(Event.key == 'g' || Event.key == 'G'){
        keyG()
        console.log(Event.key)
    }
    else if(Event.key == 'h' || Event.key == 'H'){
        keyH()
        console.log(Event.key)
    }
    else if(Event.key == 'j' || Event.key == 'J'){
        keyJ()
        console.log(Event.key)
    }
    else if(Event.key == 'k' || Event.key == 'K'){
        keyK()
        console.log(Event.key)
    }
    else if(Event.key == 'l' || Event.key == 'L'){
        keyL()
        console.log(Event.key)
    }
})



