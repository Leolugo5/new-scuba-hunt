const btn1 = document.getElementById('rev-selector1')
const btn2 = document.getElementById('rev-selector2')
const btn3 = document.getElementById('rev-selector3')
const btn4 = document.getElementById('rev-selector4')
const btn5 = document.getElementById('rev-selector5')
const comCont = document.getElementById('wt-pp-sy-comments')

btn1.addEventListener('click', () => {
    comCont.style.cssText = 'margin-left: 0;'
}
)
btn2.addEventListener('click', () => {
    comCont.style.cssText = 'margin-left: -100%;'
}
)
btn3.addEventListener('click', () => {
    comCont.style.cssText = 'margin-left: -200%;'
}
)
btn4.addEventListener('click', () => {
    comCont.style.cssText = 'margin-left: -300%;'
}
)
btn5.addEventListener('click', () => {
    comCont.style.cssText = 'margin-left: -400%;'
}
)