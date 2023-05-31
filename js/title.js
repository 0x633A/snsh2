var titleElement = document.getElementById('title');
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Characters and numbers to choose from
var speed = 100; // Typing speed in milliseconds

function generateRandomText(length) {
    var result = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length); // Get a random index from the characters string
        var randomChar = characters.charAt(randomIndex); // Select a random character
        result += randomChar;
    }
    return result;
}

function typeWriter() {
    var randomText = generateRandomText(20); // Generate a random text of desired length
    var i = 0;
    function type() {
        if (i < randomText.length) {
            titleElement.innerHTML += randomText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.onload = typeWriter;