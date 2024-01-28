


const secCont = document.querySelector('.seconds')
const minCont = document.querySelector('.minutes')
const hoursCont = document.querySelector('.hours')

const secNumCont = document.querySelector('.seconds').querySelectorAll('.num')
const minNumCont = document.querySelector('.minutes').querySelectorAll('.num')
const hoursNumCont = document.querySelector('.hours').querySelectorAll('.num')

const deg = 360 / 60
const degHours = 360 / 12

setInterval(() => {
    let seconds = new Date().getSeconds(),
    minutes = new Date().getMinutes(),
    hours = new Date().getHours() + 3


    secCont.setAttribute('style', `transform: rotateZ(${seconds * deg}deg);`)
    minCont.setAttribute('style', `transform: rotateZ(${minutes * deg}deg);`)
    hoursCont.setAttribute('style', `transform: rotateZ(${(hours - 12) * degHours}deg);`)

    for (let i = 0; i < secNumCont.length; i++) {
        secNumCont[i].innerHTML = `${seconds}`
        secNumCont[i].setAttribute('style', `transform: rotateZ(${ - seconds * deg}deg);`)
    }

    for (let i = 0; i < minNumCont.length; i++) {
        minNumCont[i].innerHTML = `${minutes}`
        minNumCont[i].setAttribute('style', `transform: rotateZ(${ - minutes * deg}deg);`)
    }

    for (let i = 0; i < hoursNumCont.length; i++) {
        hoursNumCont[i].innerHTML = `${hours}`
        hoursNumCont[i].setAttribute('style', `transform: rotateZ(${ - hours * degHours}deg);`)
    }
    
}, 1000)