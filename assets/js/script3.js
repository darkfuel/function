const body = document.querySelector("body")

//captura de tecla y color
document.addEventListener("keydown" , function (event) {
    if (event.key === 'a') {
        rosa = "pink"
        div5.style.backgroundColor = (`${rosa}`)         
    }
    else if (event.key === 's') {
        naranjo = "orange"
        div5.style.backgroundColor = (`${naranjo}`)         
    }
    else if (event.key === 'd') {
        celeste = "#00aae4"
        div5.style.backgroundColor = (`${celeste}`)         
    }
    else if (event.key === 'q'){
        agregarQ()
    }
    else if (event.key === 'w'){
        agregarW()
    }
    else if (event.key === 'e'){
        agregarE()
    } 
})

//Agragar div al body

function agregarQ(){    
    const newDiv = document.createElement("div")
    newDiv.className = "cuadrado"
    newDiv.style.backgroundColor = "#8c004b"
    body.appendChild(newDiv)
}


function agregarW(){
    const newDiv = document.createElement("div")
    newDiv.className = "cuadrado"
    newDiv.style.backgroundColor = "#666"
    body.appendChild(newDiv)
}


function agregarE(){
    const newDiv = document.createElement("div")
    newDiv.className = "cuadrado"
    newDiv.style.backgroundColor = "#a18262"
    body.appendChild(newDiv)
}

