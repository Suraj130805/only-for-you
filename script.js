// Typewriter Effect
function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
        document.querySelector('.typewriter').innerHTML = text.substring(0, i + 1);
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback);
        }, 50);
    } else if (typeof fnCallback == 'function') {
        fnCallback();
    }
}

// Displaying a message after the typewriter effect
function displayMessage() {
    const message = 'Hello, welcome to our interactive experience!';
    typeWriter(message, 0, function() {
        document.querySelector('.message-box').style.display = 'block';
    });
}

// Button functionality
document.querySelector('.enterBtn').addEventListener('click', function() {
    displayMessage();
});

document.querySelector('.yesBtn').addEventListener('click', function() {
    // Add functionality for Yes button here
    console.log('You clicked Yes!');
});

document.querySelector('.noBtn').addEventListener('click', function() {
    // Add functionality for No button here
    console.log('You clicked No!');
});

// Choice Box functionality
function showChoice() {
    document.querySelector('.choiceBox').style.display = 'block';
}

// Music Playback
const audio = new Audio('path/to/your/audio.mp3');
audio.play();
