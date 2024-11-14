// Dropdown list
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show-menu");
}

 // Close the mobile menu when clicking outside of it
 document.addEventListener("click", function(event) {
    const menu = document.getElementById("mobileMenu");
    const hamburger = document.querySelector(".hamburger");

    // Check if the click is outside the mobile menu and hamburger icon
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("show-menu");
    }
});

// Close the mobile menu when clicking on a menu option
document.querySelectorAll(".mobile-menu a, .mobile-menu .btn-book").forEach(item => {
    item.addEventListener("click", function() {
        document.getElementById("mobileMenu").classList.remove("show-menu");
    });
});


// Brand slider
var copy = document.querySelector(".brand-slide").cloneNode(true);
document.querySelector(".sec1b-down-b").appendChild(copy);

// Video animation start
// Select the video element and the section that triggers the zoom effect
const video = document.querySelector('.sec1c-video');
const triggerSection = document.querySelector('.sec1b-down-b');

// Function to scale the video based on scroll position
function scaleVideoOnScroll() {
    const rect = triggerSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate the scale factor as triggerSection comes into the viewport
    if (rect.top < windowHeight && rect.bottom > 0) {
        // Normalize scale between 0.6 (smallest) and 1 (full size)
        const scaleFactor = Math.min(1, 0.6 + (1 - (rect.top / windowHeight)) * 0.4);
        video.style.transform = `scale(${scaleFactor})`;
    } else if (rect.top > windowHeight) {
        // Keep video small if the trigger section is fully out of view
        video.style.transform = 'scale(0.6)';
    }
}

// Run `scaleVideoOnScroll` using requestAnimationFrame on scroll for smoothness
function onScroll() {
    requestAnimationFrame(scaleVideoOnScroll);
}

// Initial setup on page load to ensure correct scaling position
window.addEventListener('load', scaleVideoOnScroll);
window.addEventListener('scroll', onScroll);

// Video animation end

// Select all FAQ items
document.querySelectorAll(".faqs").forEach((question) => {
    question.addEventListener("click", function () {
        const parentDiv = this.closest(".faq-item");
        const answer = parentDiv.querySelector(".answer");

        // Toggle answer visibility
        answer.style.display = answer.style.display === "block" ? "none" : "block";

        // Toggle active class for styling and hr width
        parentDiv.classList.toggle("active");
    });
});