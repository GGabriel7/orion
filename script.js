const thumbnails = document.querySelectorAll('.carousel-thumbnails .thumbnail');
    const carousel = document.querySelector('#carouselHero');

    carousel.addEventListener('slid.bs.carousel', function (event) {
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnails[event.to].classList.add('active');
}); // js para o carousel


document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector('.whatsapp-menu');
  const toggle = menu.querySelector('.whatsapp-toggle');
  let closeTimeout;

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const isActive = menu.classList.toggle('active');

    if (isActive) {
      clearTimeout(closeTimeout);
      closeTimeout = setTimeout(() => {
        menu.classList.remove('active');
      }, 8000); // Fecha após 8 segundos
    } else {
      clearTimeout(closeTimeout);
    }
  });

  // Fecha o menu se clicar fora dele
  document.addEventListener('click', function () {
    menu.classList.remove('active');
    clearTimeout(closeTimeout);
  });
});