const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const closeBtn = document.getElementById("closeBtn");

searchBtn.addEventListener("click", () => {
    searchBox.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    searchBox.style.display = "none";
});

const images = [
    "assets/images/background1.png",
    "assets/images/background2.png",
    "assets/images/background3.png"
];

const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");

let current = 0;
let showingFirst = true;

setInterval(() => {
    current = (current + 1) % images.length;

    if (showingFirst) {
        bg2.src = images[current];
        bg2.classList.add("active");
        bg1.classList.remove("active");
    } else {
        bg1.src = images[current];
        bg1.classList.add("active");
        bg2.classList.remove("active");
    }

    showingFirst = !showingFirst;
}, 5000); // Change every 5 seconds