const body = document.querySelector('body')
const lists = document.querySelector(".liste-nav")
const header = document.querySelector("#main-section")
const hamburger = document.querySelector('#hamburger')
const btnTop = document.querySelector("#btn-top")
const textAnim = document.querySelector("#textAnim")
const form = document.querySelector('#form-data')
const btnSubmit = document.querySelector('#btn-submit')


hamburger.addEventListener('click', ()=>{
    lists.classList.toggle('active')
    header.classList.toggle('active')
})
btnTop.addEventListener("click", ()=>{
    window.scrollTo(
        {
            top:0,
            behavior: "smooth"
        }
    ) 
 
})


new Typewriter(textAnim, {
    loop: true,
    deleteSpeed: 40
})
.changeDelay(40)
.typeString('<span style="color: #6e21e2">Dev Full stack</span>')
.pauseFor(1000)
.deleteChars(14)
.typeString('<span style="color: #10cc19">Web Designer</span>')
.pauseFor(2000)
.deleteChars(12)
.typeString('<span style="color: #ff4500">Software Engineer</span>')
.start()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    new FormData(form)
    
})

