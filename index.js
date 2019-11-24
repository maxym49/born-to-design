window.onload = function () {
    const loader = document.querySelector(".loader-wrapper");
    this.setTimeout(() => loader.classList.add("fade-out"), 500)
};

const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

const dots = document.querySelector(".sidebar-dots");
const dotsList = dots.querySelectorAll("span")
const dotsArr = Array.from(dotsList);

const how2Scroll = document.getElementById("how2").offsetTop - 300; // 700
const aboutScroll = document.getElementById("about").offsetTop - 300; // 900
const contactScroll = document.getElementById("contact").offsetTop - 300; //1200


const scrollToEl = (selector) => {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let sp = window.pageYOffset;
window.onscroll = function () {
    if (sp > how2Scroll) {
        dots.style.opacity = 1;
    }
    else {
        dots.style.opacity = 0;
    }

    if (sp > how2Scroll && sp < aboutScroll && sp < contactScroll) {
        dotsArr[1].style.background = "#dbdbdb";
        dotsArr[2].style.background = "#dbdbdb";
        dotsArr[0].style.background = "#000";
    }


    if (sp > aboutScroll && sp < contactScroll) {
        dotsArr[0].style.background = "#dbdbdb";
        dotsArr[2].style.background = "#dbdbdb";
        dotsArr[1].style.background = "#000";
    }

    if (sp > contactScroll) {
        dotsArr[0].style.background = "#dbdbdb";
        dotsArr[1].style.background = "#dbdbdb";
        dotsArr[2].style.background = "#000";
    }


    let currentScrollPos = window.pageYOffset;
    if (sp > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
        document.querySelector(".navbar").style.borderBottom = "1px solid rgba(0, 0, 0, 0.03)";

    } else {
        document.querySelector(".navbar").style.top = "-492px";
        document.querySelector(".navbar").style.borderBottom = "1px solid rgba(0, 0, 0, 0)";
    }
    sp = currentScrollPos;
}
