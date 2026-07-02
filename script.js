const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const closeBtn = document.getElementById("closeBtn");

searchBtn.addEventListener("click", () => {
    searchBox.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    searchBox.style.display = "none";
});