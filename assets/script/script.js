// Get the button element
const homeButton = document.getElementById('homeButton');

// Add event listener to the button
homeButton.addEventListener('click', function() {
    // Prevent form submission
    event.preventDefault();

    // Redirect to the home page
    window.location.href = './Home page.html';  // Assuming the homepage is "Home page.html"
});