function courseSlider() {
    var swiper = new Swiper('.course-slider1 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.course-slider1 .swiper-button-next',
            prevEl: '.course-slider1 .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.05,
                spaceBetween: 16
            },
            400: {
                slidesPerView: 1.3,
            },
            460: {
                slidesPerView: 1.5,
            },
            500: {
                slidesPerView: 1.7,
            },
            690: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            950: {
                slidesPerView: 2.5,

            },
            1270: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    })
}

function courseSlider2() {
    var swiper = new Swiper('.course-slider2 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.course-slider2 .swiper-button-next',
            prevEl: '.course-slider2 .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.05,
                spaceBetween: 16
            },
            400: {
                slidesPerView: 1.3,
            },
            460: {
                slidesPerView: 1.5,
            },
            500: {
                slidesPerView: 1.7,
            },
            690: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            950: {
                slidesPerView: 2.5,

            },
            1270: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    })
}

function courseDetail() {

    var swiper = new Swiper('.course-detail .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.course-detail .swiper-button-next',
            prevEl: '.course-detail .swiper-button-prev',
        },
        pagination: {
            el: '.course-detail .swiper-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function(index, className) {
                return `
                <div class="pagination-item ${className}">
                    <div class="pagination-empty"></div>
                    <div class="pagination-progress">
                        <svg class="pagination-progress__white" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                            <circle class="donut_background_three"  opacity='0.24' stroke="#1B2C3E" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="100,100" cx="17.5" cy="17.5" r="15.91549431"/>
                        </svg>
                        <svg class="pagination-progress__black" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                            <circle class="donut_background_three" stroke="#1B2C3E" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="100 100" cx="17.5" cy="17.5" r="15.91549431"/>
                        </svg>
                    </div>
                </div>
                `;
            },
        },
    })
}

function variantSlider() {
    var swiper = new Swiper('.course-variants .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 24,
    })
}

function feedbackSlider() {
    var swiper = new Swiper('.course-feedback .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 24,
        navigation: {
            nextEl: '.course-feedback .swiper-button-next',
            prevEl: '.course-feedback .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 24
            },

            1024: {
                slidesPerView: 2,
            }
        }
    })
}


document.addEventListener('DOMContentLoaded', function() { // Аналог $(document).ready(function(){
    courseSlider()
    courseSlider2()
    courseDetail()
    feedbackSlider()
    if (window.innerWidth > 1024) {
        variantSlider()
    }

    // if (setPaginationProgress) {
    //     setPaginationProgress()
    // }

    document.querySelector(".header__burger").onclick = function() {
        this.classList.toggle('header__burger--active');
        document.querySelector(".nav").classList.toggle('nav--active');
        document.querySelector(".header__search").classList.toggle('header__search--active');
        document.querySelector("body").classList.toggle('fixed-body')
    }

    document.querySelector(".nav__dropdown-show").onclick = function() {
        this.classList.toggle('nav__dropdown-show--active');
    }

    document.querySelector(".header__search").onclick = function() {
        this.classList.add('header__search--active');
    }

    const headerSearch = document.querySelector('.header__search');

    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(headerSearch);

        if (!withinBoundaries && window.innerWidth > 576) {
            headerSearch.classList.remove("header__search--active")
        }


    })





});