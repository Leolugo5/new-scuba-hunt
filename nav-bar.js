const navOpen = document.getElementById('nav-opener')
const closer = document.getElementById('nav-closer')
const icons = document.getElementById('nav-icons-list')
const vidCloser = document.getElementById('hm-close-icon')
const videoWrapper = document.getElementById('hm-video-wrapper')
const videoPlayer = document.getElementById('hm-player-btn')
const videoFile = document.getElementById('hm-main-video')
const polBtn = document.getElementById('policy-btn')
const polCont = document.getElementById('pol-container')
const polCloser = document.getElementById('pol-closer')


let closerControl = false
let polControl = false

navOpen.addEventListener('click', () => {
    if (closerControl === false) {
        closer.classList.add('open-on');
        closer.classList.remove('open-off');
        navOpen.classList.remove('open-on');
        navOpen.classList.add('open-off');
        icons.classList.add('nav-icons-on');
        closerControl = true
    }
})
closer.addEventListener('click', () => {
    if (closerControl === true) {
        navOpen.classList.add('open-on');
        navOpen.classList.remove('open-off');
        closer.classList.remove('open-on');
        closer.classList.add('open-off');
        icons.classList.remove('nav-icons-on');
        closerControl = false
    }
})

videoPlayer.addEventListener('click', () => {
    videoWrapper.classList.add('hm-video-card-on');
    videoWrapper.classList.remove('hm-video-card-off');
})
vidCloser.addEventListener('click', () => {
    videoWrapper.classList.add('hm-video-card-off');
    videoWrapper.classList.remove('hm-video-card-on');
    videoFile.pause();
    videoFile.currentTime = 0;
})

videoFile.addEventListener('click', () => {
    videoFile.css('background-image', ' <<');
})

polBtn.addEventListener('click', () => {
    if (polControl === false) {
        polCont.classList.add('pol-on');
        polCont.classList.remove('pol-off');
        polControl = true
    }
})
polCloser.addEventListener('click', () => {
    if (polControl === true) {
        polCont.classList.remove('pol-on');
        polCont.classList.add('pol-off');
        polControl = false
    }
})