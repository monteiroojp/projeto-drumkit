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

}

const keyS = () => {

}

const keyD = () => {

}

const keyF = () => {

}

const keyG = () => {

}

const keyH = () => {

}

const keyJ = () => {

}

const keyK = () => {

}

const keyL = () => {

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



