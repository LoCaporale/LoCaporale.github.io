document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#slider1');
    setTimeout(function moveSlide() {
    const max = slider.scrollWidth - slider.clientWidth;
    const left = slider.clientWidth;

    if (max === slider.scrollLeft) {
    slider.scrollTo({left: 0, behavior: 'smooth'})
    } else {
    slider.scrollBy({left, behavior: 'smooth'})
    }

    setTimeout(moveSlide, 1000)
    }, 1000)
})

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#slider2');
    setTimeout(function moveSlide() {
    const max = slider.scrollWidth - slider.clientWidth;
    const left = slider.clientWidth;

    if (max === slider.scrollLeft) {
    slider.scrollTo({left: 0, behavior: 'smooth'})
    } else {
    slider.scrollBy({left, behavior: 'smooth'})
    }

    setTimeout(moveSlide, 8000)
    }, 8000)
})