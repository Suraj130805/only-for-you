'use strict';

const textArray = ["Yes", "No"]; // Array of options
let currentIndex = 0;
let textDisplay = document.getElementById('textDisplay');

// Typewriter effect
function typeWriter(text, i) {
    if (i < text.length) {
        textDisplay.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 100);
    } else {
        setTimeout(() => deleteText(), 1000);
    }
}

// Delete text
function deleteText() {
    let text = textDisplay.innerHTML;

    if (text.length > 0) {
        textDisplay.innerHTML = text.substring(0, text.length - 1);
        setTimeout(deleteText, 100);
    } else {
        currentIndex = (currentIndex + 1) % textArray.length;
        typeWriter(textArray[currentIndex], 0);
    }
}

// Start typewriter effect
typeWriter(textArray[currentIndex], 0);
