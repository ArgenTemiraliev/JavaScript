

let phoneInput = document.querySelector('#phone_input')
let clickButton = document.querySelector('#phone_button')
let phoneResult = document.querySelector('#phone_result')


let regExp = /\+996 [2579]\d\d \d\d \d\d \d\d/g

clickButton.onclick = () => {

    if(regExp.test(phoneInput.value)){
            phoneResult.innerHTML = 'OK'
            phoneResult.style.color = 'green'
     } else{
            phoneResult.innerHTML = 'NOT OK'
            phoneResult.style.color = 'red' 
            }

 }
   
 let tab_content_blocks = document.querySelectorAll('.tab_content_block')
 let tabs = document.querySelectorAll(".tab_content_item")
 let tabParents = document.querySelector(".tab_content_items")

 const hidenTapcontent = () => {  
       tab_content_blocks.forEach((item) => {
              item.style.display = "none"
       })
       tabs.forEach((itme) => {
              itme.classList.remove('tab_content_item_active')
       })
}

const showTapContent = (index = 0) =>{
 tab_content_blocks[index].style.display = "block" 
 tabs[index].classList.add('tab_content_item_active')
     
}
hidenTapcontent()
showTapContent()

tabParents.onclick = (event)  => {
       if(event.target.classList.contains('tab_content_item')){
              tabs.forEach((item , index) => {
                     if(event.target === item) {
                            hidenTapcontent()
                            showTapContent(index)
                     }
              })
       }
}


       const somInput = document.querySelector("#som")
       const usdInput = document.querySelector("#usd")
       const eurInput = document.querySelector("#eur")

       const convertor = (input, targetone, targettwo) => {
              input.oninput = () => {
                     const request = new XMLHttpRequest()
                     request.open('GET', '../data/convertor.json')
                     request.setRequestHeader('Content-type', 'application/json')
                     request.send()

                     // console.log(request);
                     
                     request.onload = () => {
                            const data = JSON.parse(request.response) 
                            // console.log(data);
                            
                            if(input.id === 'som') {
                                   targetone.value = (input.value / data.usd).toFixed(2)
                                   targettwo.value = (input.value / data.eur).toFixed(2)
                            }if(input.id === 'usd') {
                                   targetone.value = (input.value * data.usd).toFixed(2)
                                   targettwo.value = (input.value * data.eur / data.usd).toFixed(2)
                            }if(input.id === 'eur') {
                                     targetone.value = (input.value * data.eur).toFixed(2)
                                     targettwo.value = (input.value * data.usd/ data.eur).toFixed(2)
                            }if(input.value === ''      ){
                                   targetone.value = ''
                                   targettwo.value = ''
                            }if(input.value < 0) {
                                   input.value = ''
                                   targetone.value = ''
                                   targettwo.value = ''
                            }
                     }
              }
       }

       convertor(somInput, usdInput, eurInput)
       convertor(usdInput, somInput, eurInput)      
       convertor(eurInput, somInput, usdInput)

const card = document.querySelector('.card')
const nextbtn = document.querySelector('#btn-next')
const  prevbtn = document.querySelector('#btn-preЧЧv')
let count = 1
 

function cardUp() {
fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
.then((response) => response.json())
.then((datas) => {
       card.innerHTML = `
       <p>${datas.title}</p>
       <span style="color: ${datas.completed ? 'green' : 'red'}">${datas.completed}</span>
       <span>${datas.id}</span>
       `          
} )
}


nextbtn.onclick = () => {
       count++
       cardUp()
       if(count === 200){ count = 0}
}
prevbtn.onclick = () => {
       count--
       if(count === 0){count = 201}
       cardUp()
}
cardUp()



