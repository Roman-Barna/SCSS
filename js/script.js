$(() => {
    $('.header-top').hide().slideDown(500)


let menuLink = document.querySelectorAll('.menu__link')
let decor = document.querySelector('.header__content-decor')
let decorInterval 
let modalWindow = document.querySelector('.modal-window')
let windowOpasity = document.querySelector('.window__opasity')
let pricingBtn = document.querySelectorAll('.pricing__btn')
let modalBtnClose = document.querySelector('.modal__btn-close')
let modalBtnSend = document.querySelector('.modal__btn-send')
let portfolioImg =  $('.portfolio__item-img')
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
        $('.header-top').hide().slideDown(500)
        $('.header-top').css('background-color', 'transparent')
        decorAnimate()
    } else {
        clearInterval(decorInterval)
        $('.header-top').css('background-color', '#fff')
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

pricingBtn.forEach(element => {
    element.addEventListener('click', () => {
        modalWindow.style.display = 'block'
        windowOpasity.style.display = 'block'
    })
})

modalBtnClose.addEventListener('click', () => {
    modalWindow.style.display = 'none'
        windowOpasity.style.display = 'none'
})

modalBtnSend.addEventListener('click', (e) => {
    alertify.success('Send your message!!!');
})

// scrollReveal

ScrollReveal().reveal('.scrollShow', {
    interval: 100
});

ScrollReveal().reveal('.expertise__content-item', {
    afterReveal: function () {
// download 

let expertiseContentItem = document.querySelectorAll('.expertise__content-item')

expertiseContentItem.forEach(element => {
    
    let countDownload = 0
    let downloadInterval
    downloadInterval = setInterval(() => {
        if (countDownload > 25) {
            element.childNodes[1].innerHTML = `${countDownload}%`
        }
            if (countDownload < +element.getAttribute('data-width')) {
                element.style.setProperty('--widthAfter', `${countDownload++}%`)
            } else {
                clearInterval(downloadInterval)
            }
        }, 30);
})
    }
});

ScrollReveal({ distance: '160px' });

ScrollReveal().reveal('.title', {
    origin: 'left',
    delay: 200
});

ScrollReveal({ distance: '160px' });

ScrollReveal().reveal('.portfolio__btn', {
    origin: 'right',
    interval:150,
    delay: 200
});
ScrollReveal({ distance: '260px' });

ScrollReveal().reveal('.portfolio__item-img', {
    origin: 'bottom',
    interval:100,
    delay: 200
});
ScrollReveal().reveal('.statistics__item', {
    afterReveal: function () {
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
    }
});






    $('.portfolio__btn').on('click', function () {
        $('.portfolio__btn').removeClass('portfolio__btn--active')
        $(this).addClass('portfolio__btn--active')



        if ($(this).attr('data-filter') == '*') {
            portfolioImg.fadeIn(500)
        } else if ($(this).attr('data-filter') == 'BRANDING') {
            portfolioImg.fadeIn(2)
            portfolioImg.filter(function () {
                return $(this).attr('data-filter') != "BRANDING"
            }).fadeOut(500)

        } else if ($(this).attr('data-filter') == 'PHOTOGRAPHY') {
            portfolioImg.fadeIn(1)
            portfolioImg.filter(function () {
                return $(this).attr('data-filter') != "PHOTOGRAPHY"
            }).fadeOut(500)
        } else if ($(this).attr('data-filter') == 'ILLUSTRATION') {
            portfolioImg.fadeIn(1)
            portfolioImg.filter(function () {
                return $(this).attr('data-filter') != "ILLUSTRATION"
            }).fadeOut(500)
        }
    })

    // map

    let coords = { lat: 49.8368512, lng: 24.018944 }
    map = new google.maps.Map(document.getElementById("contact__map"), {
        center: coords,
        zoom: 16,
    });
})