// Cursor
const cursor = document.querySelector(".cursor");
let initialMouseX, initialMouseY;
let timer;

window.addEventListener("mousemove", function (e) {
    clearTimeout(timer);

    cursor.classList.add("cur_move");

    let x = e.clientX + window.screenX - 12;
    let y = e.clientY + window.scrollY - 12;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    timer = setTimeout(() => {
        cursor.classList.remove("cur_move");
    }, 100);
});

// Store initial mouse coordinates
window.addEventListener("mouseenter", function (e) {
    initialMouseX = e.clientX + window.screenX;
    initialMouseY = e.clientY + window.scrollY;
});

// Update initial mouse coordinates when the page is scrolled
window.addEventListener("scroll", function () {
    initialMouseX += window.screenX;
    initialMouseY += window.scrollY;
});
