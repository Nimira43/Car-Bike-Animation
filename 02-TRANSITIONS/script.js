document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.square')
    document.addEventListener('click', (event) => {
        element.style.transform = 
            `
            translateY(${event.clientY - (element.clientHeight / 2)}px) translateX(${event.clientX - (element.clientWidth / 2)}px)
            `
    })
    element.addEventListener('transitionrun', (event) => {
        console.log(event)    
    })
    element.addEventListener('transitionstart', (event) => {
        console.log(event)
    })
    element.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'transform') {
            element.style.backgroundColor =
                `
                #${Math.floor(Math.random() * 16777215).toString(16)}
                `
        }
    })        
  
})