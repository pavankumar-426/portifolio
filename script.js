// ==============================
// Typing Animation
// ==============================

var typed = new Typed("#typing", {
    strings: [
        "Electronics & Communication Engineer",
        "Embedded Systems Enthusiast",
        "C Programmer",
        "Future Firmware Developer"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});


// ==============================
// AOS Scroll Animation
// ==============================

AOS.init({
    duration: 1000,
    once: false
});


// ==============================
// Navbar Background Change
// ==============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#0d1117";
        header.style.boxShadow = "0 0 20px rgba(0,229,255,0.2)";
    } else {
        header.style.background = "#161b22";
        header.style.boxShadow = "none";
    }

});


// ==============================
// Active Navbar Link
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});