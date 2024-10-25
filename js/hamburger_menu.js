document.addEventListener("DOMContentLoaded", function () {
    // Select the hamburger icon and the navbar elements
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll("#navbar ul li a"); // Select all nav links

    // Track whether the menu is open or closed
    let isMenuOpen = false;

    /**
     * Function to show the menu:
     * - Displays the navbar by setting `display: block`.
     * - Adds a small delay to trigger the fade-in effect.
     * - Adds the 'active' class to the hamburger icon, which transforms it into an "X".
     */
    const showMenu = () => {
        // Make the navbar visible
        navbar.style.display = 'block';

        // Trigger the fade-in effect after a small delay
        setTimeout(() => {
            navbar.classList.add('nav-visible');
        }, 10); // The 10ms delay ensures that display is set before the opacity transition starts

        // Add 'active' class to the hamburger icon to transform it into an "X"
        hamburgerIcon.classList.add('active');

        // Set the menu state to open
        isMenuOpen = true;
    };

    /**
     * Function to hide the menu:
     * - Removes the 'nav-visible' class from the navbar to trigger the fade-out effect.
     * - Hides the navbar by setting `display: none` after the fade-out transition is completed.
     * - Removes the 'active' class from the hamburger icon, transforming it back into the hamburger icon.
     */
    const hideMenu = () => {
        // Start the fade-out effect by removing the 'nav-visible' class
        navbar.classList.remove('nav-visible');

        // After the fade-out transition (0.5s), hide the navbar completely
        setTimeout(() => {
            navbar.style.display = 'none';
        }, 500); // Wait for the fade-out transition to complete (500ms)

        // Remove the 'active' class to transform the "X" back into the hamburger icon
        hamburgerIcon.classList.remove('active');

        // Set the menu state to closed
        isMenuOpen = false;
    };

    /**
     * Event listener for the hamburger icon click:
     * - Toggles between showing and hiding the menu.
     * - If the menu is currently closed, it calls `showMenu()`.
     * - If the menu is currently open, it calls `hideMenu()`.
     */
    hamburgerIcon.addEventListener("click", function () {
        // Toggle the menu based on its current state
        if (!isMenuOpen) {
            showMenu(); // If the menu is closed, open it
        } else {
            hideMenu(); // If the menu is open, close it
        }
    });

    /**
     * Event listeners for each navigation link:
     * - When a link is clicked, close the hamburger menu.
     */
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            hideMenu(); // Close the menu after a link is clicked
        });
    });
});
