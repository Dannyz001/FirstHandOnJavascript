let green = document.getElementById('green')
let blue = document.getElementById('blue')
let red = document.getElementById('red')
let reset = document.getElementById('reset')

let greenText= document.getElementById('counterGreen')
let blueText = document.getElementById('counterBlue')
let redText = document.getElementById('counterRed')

 green.onclick = () => {
    return greenText.innerHTML++
}
blue.onclick = () => {
    return blueText.innerHTML++
}

red.onclick = () => {
    return redText.innerHTML++
}

reset.onclick = () => {
    return greenText.innerHTML= 0, 
    redText.innerHTML= 0,
     blueText.innerHTML= 0
     
}


console.log('hello');

let titlep = document.getElementById('title');
console.log(titlep.innerText)