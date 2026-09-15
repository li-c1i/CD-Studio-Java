const cards = document.querySelectorAll(".card");
const image = document.querySelector(".background-image");

image.addEventListener("mouseenter", () => {
    image.classList.add("is-hovered");
});

image.addEventListener("mouseleave", () => {
    image.classList.remove("is-hovered");
});

const page = document.querySelector(".page");

function resizePage() {

    const designWidth = 1302;
    const designHeight = 836;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const scaleX = viewportWidth / designWidth;
    const scaleY = viewportHeight / designHeight;

    // Use the smaller scale so the whole design always fits
    const scale = Math.min(scaleX, scaleY);

    page.style.transform = `
        translate(-50%, -50%)
        scale(${scale})
    `;
}

resizePage();

window.addEventListener("resize", resizePage);

const panel = document.querySelector('.project-panel');
const background = document.querySelector('.panel-background');

panel.addEventListener('click', changeBackground);

function changeBackground() {
    if (background.style.backgroundColor === 'yellow') {
        background.style.backgroundColor = 'magenta';
    } else if (background.style.backgroundColor === 'magenta') {
        background.style.backgroundColor = '#D9D9D9';
    } else {
        background.style.backgroundColor = 'yellow';
    }
}