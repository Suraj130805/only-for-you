// Typewriter effect function
function typeWriter(element, text, delay) {
    let i = 0;  
    function write() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(write, delay);
        }
    }
    write();
}

// Message display function
function displayMessage() {
    const messageElement = document.getElementById('message');
    typeWriter(messageElement, 'Hello, Jannuu!', 100);
}

// Button interactions
function setupButtons() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    yesButton.addEventListener('click', function() {
        alert('You clicked Yes!');
    });

    noButton.addEventListener('click', function() {
        alert('You clicked No!');
    });
}

// Initialize message display and button setup
window.onload = function() {
    displayMessage();
    setupButtons();
};