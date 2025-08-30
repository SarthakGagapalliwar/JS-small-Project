const Slider = document.querySelector(".Silder");
const dotsContainer = document.querySelector(".dots-container");

async function fetchListOfImages() {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=5');
        const imagesList = await response.json();

        if (imagesList && imagesList.length > 0) {
            displayImages(imagesList);
            initSlider(); // init after DOM is ready
        }
    } catch (error) {
        console.log(error);
    }
}

function displayImages(getImagesList) {
    Slider.innerHTML = getImagesList.map((item, index) =>
        `<div class="slideContainer">
            <img src="${item.download_url}" alt="${item.id}" />
        </div>`
    ).join("");

    dotsContainer.innerHTML = getImagesList.map(
        (_, index) => `
        <span class="dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
        `
    ).join("");
}

function initSlider() {
    const slides = document.querySelectorAll('.slideContainer');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');

    let currentSlide = 0;

    function activeDot(slide) {
        dots.forEach(dot => dot.classList.remove("active"));
        const active = document.querySelector(`.dot[data-slide="${slide}"]`);
        if (active) active.classList.add("active");
    }

    function changeCurrentSlide(slideIndex) {
        slides.forEach((slideItem, index) => {
            slideItem.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
        });
    }

    // initial render
    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);

    nextBtn.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        changeCurrentSlide(currentSlide);
        activeDot(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        changeCurrentSlide(currentSlide);
        activeDot(currentSlide);
    });

    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains("dot")) {
            const slide = Number(e.target.dataset.slide);
            currentSlide = slide;
            changeCurrentSlide(currentSlide);
            activeDot(currentSlide);
        }
    });
}

fetchListOfImages();
