var titleElement = document.getElementById('title');
var titles = [
    "nothing is the same",
    "hell is here",
    "and its here to stay",
    "my partys down you gotta come",
    "tax fraud :3"
];
var speed = 100; // Typing speed in milliseconds

function getRandomTitle() {
    var randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
}

function typeWriter() {
    var text = getRandomTitle();
    var i = 0;
    function type() {
        if (i < text.length) {
            titleElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.onload = typeWriter();