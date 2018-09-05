const navBar = document.querySelector('nav')
window.addEventListener('scroll', () =>{
    if(window.scrollY>0) navBar.classList.add('is-down')
    else navBar.classList.remove('is-down')
})
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel')
    var arrowright = document.querySelector('.arrowright')
    var arrowleft = document.querySelector('.arrowleft')
    var instance = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true
})
    arrowright.addEventListener('click', () => {
    var instances = M.Carousel.getInstance(elems[0])
    instances.next()
})
    arrowleft.addEventListener('click', () => {
    var instances = M.Carousel.getInstance(elems[0])
    instances.prev() 
    })
})