document.addEventListener('DOMContentLoaded', function() { // Аналог $(document).ready(function(){

    document.querySelector(".header__burger").onclick = function() {
        this.classList.toggle('header__burger--active');
        document.querySelector(".nav").classList.toggle('nav--active');
        document.querySelector(".header__search").classList.toggle('header__search--active');
    }

    document.querySelector(".nav__dropdown-show").onclick = function() {
        this.classList.toggle('nav__dropdown-show--active');
    }

    document.querySelector(".header__search").onclick = function() {
        this.classList.add('header__search--active');
    }

});