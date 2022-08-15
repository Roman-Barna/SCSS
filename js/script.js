window.onload = () => {

let menuLink = document.querySelectorAll('.menu__link')

// navbar

menuLink.forEach(element => {
    element.addEventListener('click', (elem) => {
        resetNavActive()
        elem.target.classList.add('menu__link--active')
    })
})

// scroll

function resetNavActive() {
    menuLink.forEach(element => element.classList.remove('menu__link--active'))
}

let section = document.getElementsByTagName('section')

window.addEventListener('scroll', () => {
    let windowScroll = window.scrollY

for (const item of section) {
    if (item.id == 'about' && windowScroll <= item.offsetTop) {
        resetNavActive()
        menuLink[0].classList.add('menu__link--active')
    } else if (item.id == 'about' && windowScroll >= item.offsetTop) {
        resetNavActive()
        menuLink[1].classList.add('menu__link--active')
    } else if (item.id == 'portfolio' && windowScroll >= item.offsetTop - 20) {
        resetNavActive()
        menuLink[2].classList.add('menu__link--active')
    } else if (item.id == 'team' && windowScroll >= item.offsetTop) {
        resetNavActive()
        menuLink[3].classList.add('menu__link--active')
    } else if (item.id == 'pricing' && windowScroll >= item.offsetTop) {
        resetNavActive()
        menuLink[4].classList.add('menu__link--active')
    } else if (item.id == 'contact' && windowScroll >= item.offsetTop) {
        resetNavActive()
        menuLink[5].classList.add('menu__link--active')
    } 
}
})

//





}