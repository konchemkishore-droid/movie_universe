// ================================
// Trailer Popup
// ================================

const modal = document.getElementById("trailerModal");
const iframe = document.getElementById("videoFrame");
const closeBtn = document.querySelector(".close");
const trailerButtons = document.querySelectorAll(".trailer-btn");

trailerButtons.forEach(button => {

    button.addEventListener("click", () => {

        const video = button.getAttribute("data-video");

        iframe.src = video + "?autoplay=1";

        modal.style.display = "flex";

    });

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

    iframe.src = "";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

        iframe.src = "";

    }

});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ================================
// Live Search
// ================================

const searchInput = document.querySelector(".search-box input");
const movieCards = document.querySelectorAll(".movie-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    movieCards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// ================================
// Scroll Animation
// ================================

const cards = document.querySelectorAll(".movie-card, .coming-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    card.style.transition = "0.8s";

    observer.observe(card);

});

// ================================
// Auto Hero Background Slider
// ================================

const hero = document.querySelector(".hero");

const backgrounds = [

    "images/banner.jpg",

    "images/banner2.jpg",

    "images/banner3.jpg",

    "images/banner4.jpg"

];

let index = 0;

setInterval(() => {

    index++;

    if (index >= backgrounds.length) {

        index = 0;

    }

    hero.style.backgroundImage = `url(${backgrounds[index]})`;

}, 5000);

// ================================
// Explore Button
// ================================

const exploreBtn = document.querySelector(".explore-btn");

exploreBtn.addEventListener("click", () => {

    document.getElementById("trending").scrollIntoView({

        behavior: "smooth"

    });

});

// ================================
// Hero Button Animation
// ================================

const watchBtn = document.querySelector(".watch-btn");

watchBtn.addEventListener("mouseenter", () => {

    watchBtn.style.transform = "scale(1.08)";

});

watchBtn.addEventListener("mouseleave", () => {

    watchBtn.style.transform = "scale(1)";

});

console.log("🎬 Movie Universe Loaded Successfully!");