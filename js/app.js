//  MODO OSCURO //

document.addEventListener('DOMContentLoaded', () => {
    let toggle = document.getElementById('toggle');
    let label_toggle = document.getElementById('label_toggle');

    // Leer la preferencia del modo del local storage
    let darkMode = localStorage.getItem('darkMode') === 'true';
    
    // Función para aplicar el modo oscuro
    const applyDarkMode = (enabled) => {
        document.body.classList.toggle('dark', enabled);
        label_toggle.innerHTML = enabled ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        label_toggle.style.color = enabled ? "gold" : "violet";

        
        document.querySelector('header')?.classList.toggle('dark_header', enabled);
        document.querySelector('main')?.classList.toggle('dark_main', enabled);
        document.querySelector('footer')?.classList.toggle('dark_footer', enabled);
        document.querySelector('nav')?.classList.toggle('dark_nav', enabled);
        document.querySelector('a')?.classList.toggle('dark_link', enabled);

        // Cambia el color del link
        document.querySelectorAll('.indice_link').forEach(enlace => {
            enlace.classList.toggle('dark_link', enabled);
        });
    };

    // Aplicar la preferencia guardada en el local storage
    if (darkMode) {
        applyDarkMode(true);
    }

    if (toggle && label_toggle) {
        toggle.checked = darkMode; // Asegurarse de que el toggle refleje la preferencia almacenada
        toggle.addEventListener('change', (event) => {
            let checked = event.target.checked;
            applyDarkMode(checked);

            // Guardar la preferencia en el local storage
            localStorage.setItem('darkMode', checked);
        });
    }


});



// MENU RESPONSIVO //

document.addEventListener('DOMContentLoaded', () => {

    // Menú hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.menu nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
        // Opcional: cerrar menú al hacer click en un enlace
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
            });
        });
    }
});