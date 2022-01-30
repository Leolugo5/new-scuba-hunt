const comments = [

    {
        "id": "1",
        "comment": "Our group had a great time at Scuba Hunt. If you are looking to try a new challenge underwater, they add a whole new twist to the underwater world.",
        "author": "- Bret"
    },
    {
        "id": "2",
        "comment": "If you're looking for somewhere to treat you like family, this is the place. The crew was amazing and patient. The scavenger hunt and clues were challenging but A LOT of fun!! I would dothis adventure again and again.",
        "author": "- Tiffany"
    },
    {
        "id": "3",
        "comment": "I cannot say enough great things about this adventure! Was way better than even my expectations. Highly recommend it if you like puzzles, scavenger hunts, diving lol! Such a great way to improve your buoyancy, navigation, and underwater communication.",
        "author": "- Caitlin"
    },
    {
        "id": "4",
        "comment": "Our family of four had an outstanding time competing against each other at SCUBA hunt! Also, its location at Hemingway is awesome as that is a cool spot to eat, drink, and hang out before or after.",
        "author": "- Allen"
    },
    {
        "id": "5",
        "comment": "The Scuba hunt team is super professional, safety is their priority, the equipment they are using is brand new and excellent. After the game, you can chill and watch the sunset in one of the most popular beach bars in Cozumel.",
        "author": "- Bret"
    }

]

/* comment-selector1 se-btn */

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

const autoSlider = () => {

    var sliderCounter = 0;
    var sliderLength = 4

    if (sliderLength > 4) {
        
        for (let i = 0; i < sliderLenth.length; i ++) {
            let marginValue = 100
            comCont.style.cssText = `margin-left: -${marginValue}%;`
        }
    }

}