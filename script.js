const thumbnails = document.querySelectorAll('.carousel-thumbnails .thumbnail');
    const carousel = document.querySelector('#carouselHero');

    carousel.addEventListener('slid.bs.carousel', function (event) {
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnails[event.to].classList.add('active');
});