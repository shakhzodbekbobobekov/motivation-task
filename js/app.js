const loader = document.querySelector('.loader')
const wrapper = document.querySelector('.wrapper')
const auf = document.querySelector('.auf')
const motiv = document.querySelector('#motiv')
const btn = document.querySelector('#btn')

setTimeout(() => {
    loader.style.display = 'none'
    wrapper.style.display = 'block'    
    auf.style.opacity = 1    
}, 100)

btn.addEventListener('click', () => {
    fetch("https://api.adviceslip.com/advice")
    .then((result) => result.json())
    .then((data) => (motiv.textContent = data.slip.advice));
})