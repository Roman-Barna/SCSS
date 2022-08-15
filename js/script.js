

let menuLink = document.querySelectorAll('.menu__link')
let decor = document.querySelector('.header__content-decor')
let decorInterval 

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

function decorAnimate() {
    let couterDecor = 15
        decorInterval = setInterval(() => {
            if (couterDecor <= 40) {
                decor.style.setProperty('--topAfter', `${couterDecor++}%`)
            } else {
                couterDecor = 15
            }
        }, 30); 
}
let section = document.getElementsByTagName('section')

window.addEventListener('scroll', () => {
    let windowScroll = window.scrollY

    if (windowScroll == 0) {
        decorAnimate()
    } else {
        clearInterval(decorInterval)
    }

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

// decor

decorAnimate()

// download 

let expertiseContentItem = document.querySelectorAll('.expertise__content-item')

expertiseContentItem.forEach(element => {
    let countDownload = 0
    let downloadInterval
    downloadInterval = setInterval(() => {
        element.childNodes[1].innerHTML = `${countDownload}%`
            if (countDownload < +element.getAttribute('data-width')) {
                element.style.setProperty('--widthAfter', `${countDownload++}%`)
            } else {
                clearInterval(downloadInterval)
            }
        }, 30);
})

let static = document.querySelectorAll('.statistics__num')

static.forEach(elem => {
    let countDownloadNumbers = 0
    let downloadIntervalNumbers
    downloadIntervalNumbers = setInterval(() => {
    if (countDownloadNumbers <= +elem.getAttribute('data-count')) {
        elem.innerHTML = countDownloadNumbers++
    }
}, 30);
})

//

let video = document.querySelector('.video__content')
let playVideo = document.querySelector('.playVideo')
let intervalEndVideo
playVideo.addEventListener('click', () => {
    video.volume = 0.1
    if (video.paused) {
        video.play()
        playVideo.classList.remove('bi-google-play')
        playVideo.classList.add('bi-pause-fill')
        playVideo.style.fontSize = '70px'
        intervalEndVideo = setInterval(() => {
            if (video.ended) {
                playVideo.classList.add('bi-google-play')
                playVideo.classList.remove('bi-pause-fill')
                playVideo.style.fontSize = '50px'
            }
        }, 100);
    } else {
        video.pause()
        playVideo.classList.add('bi-google-play')
        playVideo.classList.remove('bi-pause-fill')
        playVideo.style.fontSize = '50px'
        clearInterval(intervalEndVideo)
    }
    
})







