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