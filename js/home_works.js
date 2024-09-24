

let gmailInput = document.querySelector('#gmail_input')
let gmailButton = document.querySelector('#gmail_button')
let gmailResult = document.querySelector('#gmail_result')

let regExp = /^\w{5,30}@gmail.com$/gi 
 
gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "ok"
        gmailResult.style.color = "blue"
        // console.log("ok");
    }else{
        gmailResult.innerHTML = "not ok"
        gmailResult.style.color = "red"
        // console.log("not ok");
    }
}


let parentBlock = document.querySelector('.parent_block')
let childBlock = document.querySelector('.child_block')



const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight

let positionX = 0
let positionY = 0

let movingRight = true;
let movingDown = false;
let movingLeft = false;
let movingUp = false;

const moveBlock = () => {
    if (movingRight) {
        if (positionX < offsetWidth) {
            positionX++;
            childBlock.style.left = `${positionX}px`;
            requestAnimationFrame(moveBlock);
        } else {
            movingRight = false;
            movingDown = true;
            requestAnimationFrame(moveBlock);
        }
    } else if (movingDown) {
        if (positionY < offsetHeight) {
            positionY++;
            childBlock.style.top = `${positionY}px`;
            requestAnimationFrame(moveBlock);
        } else {
            movingDown = false;
            movingLeft = true;
            requestAnimationFrame(moveBlock);
        }
    } else if (movingLeft) {
        if (positionX > 0) {
            positionX--;
            childBlock.style.left = `${positionX}px`;
            requestAnimationFrame(moveBlock);
        } else {
            movingLeft = false;
            movingUp = true;
            requestAnimationFrame(moveBlock);
        }
    } else if (movingUp) {
        if (positionY > 0) {
            positionY--;
            childBlock.style.top = `${positionY}px`;
            requestAnimationFrame(moveBlock);
        } else {
            movingUp = false;
            movingRight = true;
            requestAnimationFrame(moveBlock);
        }
    }
};
moveBlock()


let interval = document.querySelector('.interval')
let startBTN = document.querySelector('#start')
let stopBTN = document.querySelector('#stop')
let resetBTN = document.querySelector('#reset')

let count = 0
let timerId;

const updateTimer = () => {
    count++
    interval.innerHTML = count
}


startBTN.onclick = () => {
   if(!timerId){
    timerId = setInterval(updateTimer, 500)
    startBTN.style.background  = "blue"
    stopBTN.style.background = "none"
    resetBTN.style.background = "none"

   }
}
stopBTN.onclick = () => {
    clearInterval(timerId)
    timerId = null
    startBTN.style.background = "none"
    stopBTN.style.background = "red"
    resetBTN.style.background = "none"
}   
resetBTN.onclick = () => {
    clearInterval(timerId)
    timerId = null
    count = 0
    interval.innerHTML = count 
    resetBTN.style.background = "white"
    startBTN.style.background = "none"
    stopBTN.style.background = "none"  
    
}