const slides =document.querySelectorAll('.slides');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const navitems = document.getElementById('navitems');

function opennavigation() {
   navitems.style.display = 'flex';
}

function closenavigation() {
   navitems.style.display = 'none';
}

const nextSlide = () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');

    if(active.nextElementSibling) {
        active.nextElementSibling.classList.add('active');
    } else {
        slides[0].classList.add('active');
    }
}

const prevSlide = () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');

    if(active.previousElementSibling) {
        active.previousElementSibling.classList.add('active');
    } else {
        slides[slides.length - 1].classList.add('active');
    }
}


next.addEventListener('click', e=> {
    nextSlide()
})

prev.addEventListener('click', e=> {
    prevSlide()
})