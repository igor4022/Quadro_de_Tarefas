const coluna = document.querySelectorAll('.coluna_interna')
const texto = document.querySelectorAll('.card')

let carta

const dragStart = (event) => {
    carta = event.target
}

const dragOver = (event) => {
    event.preventDefault()
}

const dragEnter = ({target}) => {
    if (target.classList.contains("coluna_interna")) {
    target.classList.add("coluna_cor")
    }
}

const dragLeave = ({target}) => {
   target.classList.remove("coluna_cor")
}

const drop = ({target}) => {
   if (target.classList.contains("coluna_cor")) 
    target.classList.remove("coluna_cor")
    target.append(carta)
}

const createCard = ({target}) => {
    const card = document.createElement("section")
    card.className = "card"
    card.draggable = "true"
    card.contentEditable = "true"
    card.addEventListener("dragstart", dragStart)
    target.append(card)
    
}

coluna.forEach((colun) => {
    colun.addEventListener("dragover", dragOver)
    colun.addEventListener("dragenter", dragEnter)
    colun.addEventListener("dragleave", dragLeave)
    colun.addEventListener("drop", drop)
    colun.addEventListener("dblclick", createCard)
})

texto.forEach((text) => {
    text.addEventListener("dragstart", dragStart)
})