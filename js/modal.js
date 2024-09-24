let clickGet = document.querySelector("#btn-get")
let modal = document.querySelector(".modal")
let modalclose = document.querySelector(".modal_close")

// console.log(modalclose);

const openModal = () => {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}
clickGet.onclick = () => openModal()
// setTimeout(openModal, 10000)

const closeModal = () => {
    modal.style.display = "none"
    document.body.style.overflow = ''
}
modalclose.onclick = () => closeModal()

modal.onclick = (event) => {
    if(event.target === modal){
        closeModal()
    }
}


let modalShown = false

window.onscroll = function() {
    if (!modalShown && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        modal.style.display = "block";
        modalShown = true
    }
};

const modalform = document.querySelectorAll('form')
const modalName = document.querySelector('.modal_input')
const modalnumber = document.querySelector('.modal-number')
const modalbtn = document.querySelector('.btn_dark')
// console.log(modalform);

let regExptext = /\w/gi
let regExpnum = /\+996 [2579]\d\d \d\d \d\d \d\d/

const registration = () => {
    modalbtn.onclick = () => {
        if(regExptext.test(modalName.value)) {
            if(regExpnum.test(modalnumber.value)){
                console.log("ok");
            }
        }
    }
}

registration()