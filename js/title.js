const titleElement = document.getElementById('title');
const titles = [
    "nothing is the same",
    "hell is here",
    "and its here to stay",
    "my partys down you gotta come",
    "tax fraud :3"
];

const speed = 100; // Typing speed in milliseconds
const interval = 5000; // Interval between title changes in milliseconds

function getRandomTitle() {
    var randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
}

function typeWriter() {
    var text = getRandomTitle();
    var i = 0;
    var typedTitle = '';
    function type() {
        if (i < text.length) {
            typedTitle += text.charAt(i);
            document.title = typedTitle;
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function updateTitle() {
    setInterval(function () {
        typeWriter();
    }, interval);
}

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    typeWriter();
    updateTitle();
});