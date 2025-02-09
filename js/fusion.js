document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

const text = "Fusion Catalyst";
let index = 0;
let isDeleting = false;

function typeEffect() {
    console.log('hahkakjsdh');

    let displayText = text.substring(0, index);
    document.querySelector(".titleTyping").textContent = displayText;

    if (!isDeleting && index < text.length) {
        index++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && index > 0) {
        index--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeEffect, 1000);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

document.addEventListener("DOMContentLoaded", function () {
    let kotaks = document.querySelectorAll(".kotak");

    let observer = new IntersectionObserver(
        function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        },
        { threshold: 0.2 }
    );

    kotaks.forEach((kotak) => {
        observer.observe(kotak);
    });
});