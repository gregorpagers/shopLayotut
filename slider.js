const sliderContainer = document.querySelector('.slider-place');
const carouselWidth = 33.33;
const carouselSpeed = 3000;
let index = 0;

const renderSlider = () => {
    sliderContainer.innerHTML = `
            <div class="slider-box"></div>
            <div class="arrow-left"><i class="fa-solid fa-chevron-left"></i></div>
            <div class="arrow-right"><i class="fa-solid fa-chevron-right"></i></div>
        `
    const sliderBox = document.querySelector(".slider-box");

    slides.forEach(slide => {
        const sliderElement = document.createElement('div');
        sliderElement.classList = "slider";
        sliderElement.innerHTML = `
                <img src="${slide.imgage}" alt="${slide.alt}">
                <div class="description-wrapper">
                    <h2>${slide.header}</h2>
                    <p>${slide.description}</p>
                    <button class="go" data-id="${slide.id}">Sprawdź</button>
                </div>
            `
        sliderBox.appendChild(sliderElement);


    });
}


const startSlider = () => {

    renderSlider();
    const goBtns = document.querySelectorAll(".go");
    goBtns.forEach(goBtn => {
        goBtn.addEventListener("click", (e) => {
            loadProduct(e);
        })
    });
    const arrowRight = document.querySelector('.arrow-right')
    const arrowLeft = document.querySelector('.arrow-left')
    const sliderBox = document.querySelector(".slider-box");
    const slidesElemnts = document.querySelectorAll(".slider");

    const handleCarousel = () => {
        index++;
        resetInterval();
    }

    let startCarousel = setInterval(handleCarousel, carouselSpeed);

    const changeImage = () => {
        if (index > slidesElemnts.length - 1) {
            index = 0;
        } else if (index < 0) {
            index = slidesElemnts.length - 1;
        }
        sliderBox.style.transform = `translateX(${-index * carouselWidth}%)`;
    }

    const handleRightArrow = () => {
        index++;
        resetInterval();
    }

    const handleLeftArrow = () => {
        index--;
        resetInterval();
    }

    const resetInterval = () => {
        changeImage();
        clearInterval(startCarousel);
        startCarousel = setInterval(handleCarousel, carouselSpeed);
    }
    arrowRight.addEventListener('click', handleRightArrow);
    arrowLeft.addEventListener('click', handleLeftArrow);
}