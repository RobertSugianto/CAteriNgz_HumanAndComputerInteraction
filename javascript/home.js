const openSidebar = document.getElementById('openSideBar');
const closeSidebar = document.getElementById('closeSidebar');

openSidebar.addEventListener('click', () => {
    const sidebarNav = document.querySelectorAll('.sidebarNav');
    if(document.body.clientWidth > 425){
        document.querySelector('.sidebar').style.width = '250px';
    }
    else document.querySelector('.sidebar').style.width = '100vw';
    document.querySelector('.sidebar').children[0].style.width = '100%';

    sidebarNav[0].children[0].style.height = '45px';
    sidebarNav[0].children[0].style.margin = '0 30px';
    sidebarNav.forEach((sidebar) => {
        sidebar.style.padding = '10px';
        sidebar.children[0].style.fontSize = '30px';
        sidebar.children[0].style.padding = '10px';
    });
});

closeSidebar.addEventListener('click', () => {
    const sidebarNav = document.querySelectorAll('.sidebarNav');
    document.querySelector('.sidebar').style.width = 0;
    document.querySelector('.sidebar').children[0].style.width = 0;

    sidebarNav[0].children[0].style.height = 0;
    sidebarNav[0].children[0].style.margin = 0;
    sidebarNav.forEach((sidebar) => {
        sidebar.style.padding = 0;
        sidebar.children[0].style.fontSize = 0;
        sidebar.children[0].style.padding = 0;
    });
});

window.addEventListener('resize', () => {
    if(document.body.clientWidth > 768){
        const sidebarNav = document.querySelectorAll('.sidebarNav');
        document.querySelector('.sidebar').style.width = 0;
        document.querySelector('.sidebar').children[0].style.width = 0;

        sidebarNav[0].children[0].style.height = 0;
        sidebarNav[0].children[0].style.margin = 0;
        sidebarNav.forEach((sidebar) => {
            sidebar.style.padding = 0;
            sidebar.children[0].style.fontSize = 0;
            sidebar.children[0].style.padding = 0;
        });
    }
});

// script for promo carousel
const carousel = document.querySelector('.carousel');
const carouselPrev = document.querySelector('.prevBtn');
const carouselNext = document.querySelector('.nextBtn');
const carouselSlides = document.querySelectorAll('.slide');
const carouselIndicators = document.querySelectorAll('.indIcon');
const maxCarouselSlide = carouselSlides.length;
var carouselSlideIndex = 0;
var carouselAutoSlide;

carouselNext.addEventListener('click', () => {
    carouselSlides.forEach((carouselSlide) => {
        carouselSlide.classList.remove('active');
    });
    carouselIndicators.forEach((carouselIndicator) => {
        carouselIndicator.classList.remove('active');
    });
    
    carouselSlideIndex++;
    if(carouselSlideIndex > (maxCarouselSlide - 1)) carouselSlideIndex = 0;
    
    carouselSlides[carouselSlideIndex].classList.add('active');
    carouselIndicators[carouselSlideIndex].classList.add('active');
});

carouselPrev.addEventListener('click', () => {
    carouselSlides.forEach((carouselSlide) => {
        carouselSlide.classList.remove('active');
    });
    carouselIndicators.forEach((carouselIndicator) => {
        carouselIndicator.classList.remove('active');
    });
    
    carouselSlideIndex--;
    if(carouselSlideIndex < 0) carouselSlideIndex = maxCarouselSlide - 1;
    
    carouselSlides[carouselSlideIndex].classList.add('active');
    carouselIndicators[carouselSlideIndex].classList.add('active');
});

var auto = () => {
    carouselAutoSlide = setInterval(() => {
        carouselSlides.forEach((carouselSlide) => {
            carouselSlide.classList.remove('active');
        });
        carouselIndicators.forEach((carouselIndicator) => {
            carouselIndicator.classList.remove('active');
        });
    
        carouselSlideIndex++;
        if(carouselSlideIndex > (maxCarouselSlide - 1)) carouselSlideIndex = 0;
        
        carouselSlides[carouselSlideIndex].classList.add('active');
        carouselIndicators[carouselSlideIndex].classList.add('active');
    }, 5000);
};

auto();

carousel.addEventListener('mouseover', () => {
    clearInterval(carouselAutoSlide);
});

carousel.addEventListener('mouseout', () => {
    auto();
});
