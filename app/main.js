import { initCarousel } from './controllers/carouselController.js';
import { initWhatsappMenu } from './controllers/whatsappController.js';

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initWhatsappMenu();
});

// esse arquivo é o ponto de entrada, onde irá inicializar os controladores e outras funcionalidades necessárias para a aplicação.