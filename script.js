const text = "Dear Jannnuu😘...";

function typeWriter(element, text, delay) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

document.getElementById('enterButton').onclick = function() {
    // Handle enter button click
    const messageElement = document.getElementById('message');
    typeWriter(messageElement, text, 100);
};

document.getElementById('yesButton').onclick = function() {
    // Handle yes button click
    const audio = new Audio('path/to/music.mp3');
    audio.play();
};

document.getElementById('noButton').onclick = function() {
    // Handle no button click with run away effect
    const element = document.getElementById('runAway');
    element.style.transition = 'transform 0.5s';
    element.style.transform = 'translateX(100vw)';
    setTimeout(function() { element.style.display = 'none'; }, 600);
};