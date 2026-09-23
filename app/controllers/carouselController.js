export function initCarousel() {
    const thumbnails = document.querySelectorAll(
        '.carousel-thumbnails .thumbnail'
    );

    const carousel = document.querySelector('#carouselHero');

    if (!carousel || thumbnails.length === 0) {
        return;
    }

    carousel.addEventListener('slid.bs.carousel', function (event) {
        thumbnails.forEach(thumbnail => {
            thumbnail.classList.remove('active');
        });

        if (thumbnails[event.to]) {
            thumbnails[event.to].classList.add('active');
        }
    });
}

// esse arquivo é responsável por gerenciar a funcionalidade do carrossel, incluindo a sincronização das miniaturas com o slide ativo.