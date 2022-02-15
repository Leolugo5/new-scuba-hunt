const closer = document.getElementById("faqcloser")
const closer2 = document.getElementById("faqcloser2")
const closer3 = document.getElementById("faqcloser3")
const closer4 = document.getElementById("faqcloser4")
const closer5 = document.getElementById("faqcloser5")
const closer6 = document.getElementById("faqcloser6")
const closer7 = document.getElementById("faqcloser7")
const closer8 = document.getElementById("faqcloser8")
const answer = document.getElementById("answer")
const answer2 = document.getElementById("answer2")
const answer3 = document.getElementById("answer3")
const answer4 = document.getElementById("answer4")
const answer5 = document.getElementById("answer5")
const answer6 = document.getElementById("answer6")
const answer7 = document.getElementById("answer7")
const answer8 = document.getElementById("answer8")
const f1 = document.getElementById("faq1");
const f2 = document.getElementById("faq2");
const f3 = document.getElementById("faq3");
const f4 = document.getElementById("faq4");
const f5 = document.getElementById("faq5");
const f6 = document.getElementById("faq6");
const f7 = document.getElementById("faq7");
const f8 = document.getElementById("faq8");


let yoyo = false
let yoyo2 = false
let yoyo3 = false
let yoyo4 = false
let yoyo5 = false
let yoyo6 = false
let yoyo7 = false
let yoyo8 = false

f1.addEventListener("click", () => {
    if (yoyo === false) {
        answer.classList.add("answer")
        answer.classList.remove("answer-off")
        closer.classList.add("rotate45")
        closer.classList.remove("rotate-45")
        f1.style.backgroundColor = "#cfcfcf81"
        yoyo = true
    } else {
        answer.classList.add("answer-off")
        answer.classList.remove("answer")
        closer.classList.remove("rotate45")
        closer.classList.add("rotate-45")
        f1.style.backgroundColor = "#fcba00"
        yoyo = false
    }
})
f2.addEventListener("click", () => {
    if (yoyo2 === false) {
        answer2.classList.add("answer")
        answer2.classList.remove("answer-off")
        closer2.classList.add("rotate45")
        closer2.classList.remove("rotate-45")
        f2.style.backgroundColor = "#cfcfcf81"
        yoyo2 = true
    } else {
        answer2.classList.add("answer-off")
        answer2.classList.remove("answer")
        closer2.classList.remove("rotate45")
        closer2.classList.add("rotate-45")
        f2.style.backgroundColor = "#fcba00"
        yoyo2 = false
    }
})
f3.addEventListener("click", () => {
    if (yoyo3 === false) {
        answer3.classList.add("answer")
        answer3.classList.remove("answer-off")
        closer3.classList.add("rotate45")
        closer3.classList.remove("rotate-45")
        f3.style.backgroundColor = "#cfcfcf81"
        yoyo3 = true
    } else {
        answer3.classList.add("answer-off")
        answer3.classList.remove("answer")
        closer3.classList.remove("rotate45")
        closer3.classList.add("rotate-45")
        f3.style.backgroundColor = "#fcba00"
        yoyo3 = false
    }
})
f4.addEventListener("click", () => {
    if (yoyo4 === false) {
        answer4.classList.add("answer")
        answer4.classList.remove("answer-off")
        closer4.classList.add("rotate45")
        closer4.classList.remove("rotate-45")
        f4.style.backgroundColor = "#cfcfcf81"
        yoyo4 = true
    } else {
        answer4.classList.add("answer-off")
        answer4.classList.remove("answer")
        closer4.classList.remove("rotate45")
        closer4.classList.add("rotate-45")
        f4.style.backgroundColor = "#fcba00"
        yoyo4 = false
    }
})
f5.addEventListener("click", () => {
    if (yoyo5 === false) {
        answer5.classList.add("answer")
        answer5.classList.remove("answer-off")
        closer5.classList.add("rotate45")
        closer5.classList.remove("rotate-45")
        f5.style.backgroundColor = "#cfcfcf81"
        yoyo5 = true
    } else {
        answer5.classList.add("answer-off")
        answer5.classList.remove("answer")
        closer5.classList.remove("rotate45")
        closer5.classList.add("rotate-45")
        f5.style.backgroundColor = "#fcba00"
        yoyo5 = false
    }
})
f6.addEventListener("click", () => {
    if (yoyo6 === false) {
        answer6.classList.add("answer")
        answer6.classList.remove("answer-off")
        closer6.classList.add("rotate45")
        closer6.classList.remove("rotate-45")
        f6.style.backgroundColor = "#cfcfcf81"
        yoyo6 = true
    } else {
        answer6.classList.add("answer-off")
        answer6.classList.remove("answer")
        closer6.classList.remove("rotate45")
        closer6.classList.add("rotate-45")
        f6.style.backgroundColor = "#fcba00"
        yoyo6 = false
    }
})
f7.addEventListener("click", () => {
    if (yoyo7 === false) {
        answer7.classList.add("answer")
        answer7.classList.remove("answer-off")
        closer7.classList.add("rotate45")
        closer7.classList.remove("rotate-45")
        f7.style.backgroundColor = "#cfcfcf81"
        yoyo7 = true
    } else {
        answer7.classList.add("answer-off")
        answer7.classList.remove("answer")
        closer7.classList.remove("rotate45")
        closer7.classList.add("rotate-45")
        f7.style.backgroundColor = "#fcba00"
        yoyo7 = false
    }
})
f8.addEventListener("click", () => {
    if (yoyo8 === false) {
        answer8.classList.add("answer")
        answer8.classList.remove("answer-off")
        closer8.classList.add("rotate45")
        closer8.classList.remove("rotate-45")
        f8.style.backgroundColor = "#cfcfcf81"
        yoyo8 = true
    } else {
        answer8.classList.add("answer-off")
        answer8.classList.remove("answer")
        closer8.classList.remove("rotate45")
        closer8.classList.add("rotate-45")
        f8.style.backgroundColor = "#fcba00"
        yoyo8 = false
    }
})