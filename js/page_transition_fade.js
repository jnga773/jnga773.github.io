// document.addEventListener("DOMContentLoaded", function () {
//     const mainContent = document.querySelector("main"); // Select the <main> element
//     const footer = document.querySelector("footer"); // Select the <footer> element
//     const headerLink = document.querySelector(".header-link"); // Select the top-right 
//     const links = document.querySelectorAll("nav ul li a"); // Select all links within the nav

//     // Add the fade-in effect to main and footer when the page loads
//     if (mainContent && footer) {
//         // Delay the fade-in slightly to ensure visibility after loading
//         setTimeout(() => {
//             mainContent.classList.add("fade-in");
//             footer.classList.add("fade-in");
//         }, 10); // Small delay to ensure smooth effect
//     }

//     // Add click event listeners to all navigation links
//     links.forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault(); // Prevent immediate page navigation

//             // Ensure main and footer exist, then add the fade-out effect
//             if (mainContent && footer) {
//                 mainContent.classList.add("fade-out");
//                 footer.classList.add("fade-out");
//             }

//             // Wait for the transition to finish before navigating to the new page
//             setTimeout(() => {
//                 sessionStorage.setItem('fadeIn', true); // Store the fade-in trigger
//                 window.location.href = link.href; // Navigate to the new page
//             }, 500); // Match this duration with the CSS transition (0.5s)
//         });
//     });

//     // Check if we need to trigger a fade-in effect after page load
//     if (sessionStorage.getItem('fadeIn')) {
//         sessionStorage.removeItem('fadeIn'); // Remove the flag after triggering
//         mainContent.classList.add("fade-in"); // Apply fade-in effect
//         footer.classList.add("fade-in"); // Apply fade-in effect
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.querySelector("main"); // Select the <main> element
    const footer = document.querySelector("footer"); // Select the <footer> element
    const headerLink = document.querySelector(".header-link"); // Select the top-right link in the header
    const links = document.querySelectorAll("nav ul li a"); // Select all links within the nav

    // Add the fade-in effect to main and footer when the page loads
    if (mainContent && footer) {
        // Delay the fade-in slightly to ensure visibility after loading
        setTimeout(() => {
            mainContent.classList.add("fade-in");
            footer.classList.add("fade-in");
        }, 10); // Small delay to ensure smooth effect
    }

    // Add click event listeners to all navigation links
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent immediate page navigation

            // Ensure main and footer exist, then add the fade-out effect
            if (mainContent && footer) {
                mainContent.classList.add("fade-out");
                footer.classList.add("fade-out");
            }

            // Wait for the transition to finish before navigating to the new page
            setTimeout(() => {
                sessionStorage.setItem('fadeIn', true); // Store the fade-in trigger
                window.location.href = link.href; // Navigate to the new page
            }, 500); // Match this duration with the CSS transition (0.5s)
        });
    });

    // Add click event listener to the top-right header link
    if (headerLink) {
        headerLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent immediate page navigation

            // Ensure main and footer exist, then add the fade-out effect
            if (mainContent && footer) {
                mainContent.classList.add("fade-out");
                footer.classList.add("fade-out");
            }

            // Wait for the transition to finish before navigating to the new page
            setTimeout(() => {
                sessionStorage.setItem('fadeIn', true); // Store the fade-in trigger
                window.location.href = headerLink.href; // Navigate to the new page
            }, 500); // Match this duration with the CSS transition (0.5s)
        });
    }

    // Check if we need to trigger a fade-in effect after page load
    if (sessionStorage.getItem('fadeIn')) {
        sessionStorage.removeItem('fadeIn'); // Remove the flag after triggering
        mainContent.classList.add("fade-in"); // Apply fade-in effect
        footer.classList.add("fade-in"); // Apply fade-in effect
    }
});
