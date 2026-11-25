
// ===================================
// PRAVIN RAJA - PORTFOLIO JAVASCRIPT
// ===================================

// 1. TYPING ANIMATION

const typingElement = document.getElementById("typing");

const words = [
    "Software Engineer",    
    "Data Analyst",
    "AI & ML Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    typingElement.textContent = currentWord.substring(0, charIndex);

    if (!deleting) {
        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 55 : 100);
}

typeEffect();


// 2. MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    });

});


// 3. SCROLL REVEAL ANIMATION

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.10
});

sections.forEach(section => {
    observer.observe(section);
});


// 4. ACTIVE NAVIGATION

const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    document.querySelectorAll("section[id]").forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active-link");
        }

    });

});

/* ======================================
   CERTIFICATE PDF PREVIEW
====================================== */

function previewCertificate(filePath) {

    const modal = document.getElementById("certificate-modal");
    const frame = document.getElementById("certificate-frame");

    frame.src = filePath;
    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}

function closeCertificate() {

    const modal = document.getElementById("certificate-modal");
    const frame = document.getElementById("certificate-frame");

    modal.classList.remove("show");
    frame.src = "";

    document.body.style.overflow = "";
}


/* ======================================
   PROJECT DEMO VIDEO PLAYER
====================================== */

function playProjectVideo(videoURL) {

    const modal = document.getElementById("video-modal");
    const videoFrame = document.getElementById("project-video");

    if (!videoURL || videoURL === "YOUR_YOUTUBE_EMBED_URL") {
        alert("Please add your actual YouTube video embed URL.");
        return;
    }

    // Only accept YouTube embed URLs
    try {
        const url = new URL(videoURL);

        if (
            url.protocol !== "https:" ||
            url.hostname !== "www.youtube.com" ||
            !url.pathname.startsWith("/embed/")
        ) {
            alert("Please provide a valid YouTube embed URL.");
            return;
        }

    } catch {
        alert("Invalid video URL.");
        return;
    }

    videoFrame.src = videoURL + "?autoplay=1";

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}

function closeProjectVideo() {

    const modal = document.getElementById("video-modal");
    const videoFrame = document.getElementById("project-video");

    modal.classList.remove("show");

    // Stop video playback
    videoFrame.src = "";

    document.body.style.overflow = "";
}


/* ======================================
   CLOSE MODALS
====================================== */

document.querySelectorAll(".preview-modal").forEach(modal => {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            if (modal.id === "certificate-modal") {
                closeCertificate();
            }

            if (modal.id === "video-modal") {
                closeProjectVideo();
            }
        }

    });

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeCertificate();
        closeProjectVideo();
    }

});

/* =====================================
   CERTIFICATE PDF PREVIEW
===================================== */

function previewCertificate(filePath) {

    const modal = document.getElementById("certificate-modal");
    const frame = document.getElementById("certificate-frame");

    frame.src = filePath;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}

function closeCertificate() {

    const modal = document.getElementById("certificate-modal");
    const frame = document.getElementById("certificate-frame");

    modal.classList.remove("show");

    frame.src = "";

    document.body.style.overflow = "";
}


/* =====================================
   LOCAL PROJECT VIDEO
===================================== */

function playProjectVideo() {

    const modal = document.getElementById("video-modal");
    const video = document.getElementById("project-video");

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

    video.currentTime = 0;

    const playback = video.play();

    if (playback) {
        playback.catch(() => {
            console.log("Press play to start the video.");
        });
    }
}

function closeProjectVideo() {

    const modal = document.getElementById("video-modal");
    const video = document.getElementById("project-video");

    video.pause();
    video.currentTime = 0;

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


/* =====================================
   MODAL CLOSE ON BACKGROUND CLICK
===================================== */

document.querySelectorAll(".preview-modal").forEach(modal => {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            if (modal.id === "certificate-modal") {
                closeCertificate();
            }

            if (modal.id === "video-modal") {
                closeProjectVideo();
            }

        }

    });

});


/* =====================================
   ESCAPE KEY
===================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeCertificate();
        closeProjectVideo();

    }

});
