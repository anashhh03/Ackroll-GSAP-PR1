function menuOpen(){
    // Select the toggle menu and menu container
const toggleMenu = document.querySelector('.toggle-menu');
const menuContainer = document.querySelector('.menu-container');
const menuContents = document.querySelector('.menu-contents');
const menuClose = document.querySelector('.menu-close');
const leftContent = document.querySelector('.menu-left-content');
const rightContent = document.querySelector('.menu-right-content');

// Open the menu when the toggle menu is clicked
toggleMenu.addEventListener('click', () => {
    menuContainer.classList.add('active'); // Make the container visible
    setTimeout(() => {
        leftContent.classList.add('active'); // Fade in left content
        rightContent.classList.add('active'); // Fade in right content
    }, 500); // Delay to sync with the width expansion
});

// Close the menu when the close button is clicked
menuClose.addEventListener('click', () => {
    leftContent.classList.remove('active'); // Fade out left content
    rightContent.classList.remove('active'); // Fade out right content
    setTimeout(() => {
        menuContainer.classList.remove('active'); // Hide the container after content fades
    }, 500); // Delay to sync with the content fade-out
});

}

menuOpen();

function scrollToTop(){
    // Select the scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Function to handle smooth scrolling to the top
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
}

// Add click event listener to the button
scrollTopBtn.addEventListener('click', smoothScrollToTop);

// Optional: Show/hide the button based on scroll position
function toggleScrollTopButton() {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
}

// Add scroll event listener to the window
window.addEventListener('scroll', toggleScrollTopButton);

// Initialize button visibility on page load
toggleScrollTopButton();

}

scrollToTop();