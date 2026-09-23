export function initWhatsappMenu() {
    const menu = document.querySelector('.whatsapp-menu');

    if (!menu) {
        return;
    }

    const toggle = menu.querySelector('.whatsapp-toggle');

    if (!toggle) {
        return;
    }

    let closeTimeout;

    toggle.addEventListener('click', function (event) {
        event.stopPropagation();

        const isActive = menu.classList.toggle('active');

        if (isActive) {
            clearTimeout(closeTimeout);

            closeTimeout = setTimeout(() => {
                menu.classList.remove('active');
            }, 8000);
        } else {
            clearTimeout(closeTimeout);
        }
    });

    document.addEventListener('click', function () {
        menu.classList.remove('active');
        clearTimeout(closeTimeout);
    });
}

// esse arquivo é responsável por gerenciar a funcionalidade do menu do WhatsApp, incluindo a abertura e fechamento automático após um período de tempo.