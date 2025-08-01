//  MODO OSCURO //

document.addEventListener('DOMContentLoaded', () => {
    let toggle = document.getElementById('toggle');
    let label_toggle = document.getElementById('label_toggle');
    // Leer la preferencia del modo del local storage (modo claro por defecto)
    let darkMode = localStorage.getItem('darkMode') === null ? false : localStorage.getItem('darkMode') === 'true';
    
    // Función para aplicar el modo oscuro
    const applyDarkMode = (enabled) => {
        document.body.classList.toggle('dark', enabled);
        label_toggle.innerHTML = enabled ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        label_toggle.style.color = enabled ? "gold" : "pink";

        
        document.querySelector('header')?.classList.toggle('dark_header', enabled);
        document.querySelector('main')?.classList.toggle('dark_main', enabled);
        document.querySelector('footer')?.classList.toggle('dark_footer', enabled);
        document.querySelector('nav')?.classList.toggle('dark_nav', enabled);

        document.querySelectorAll('.svg_icono')?.forEach(icono => {
            icono.classList.toggle('dark_icono', enabled);
        });

        document.querySelectorAll('.link_main').forEach(a => a.classList.toggle('dark_link', enabled));
    };

    if (darkMode) {
        applyDarkMode(true);
    } else {
        applyDarkMode(false); 
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



// ANIMACIONES SCROLL // 

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('oculto');
        }
    });
});

document.querySelectorAll('section, h1, h2, p, .seccion_formacionYhabilidades, .lista_tecnologias, .proyectos_lista, #contactos_lista, .contenido_footer')
    .forEach(el => {
        el.classList.add('oculto');
        observer.observe(el, { once: true });
    });


// animacion logo CyberCat //
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.footer_logo');
    const hoverRandom = Math.floor(Math.random() * 2) + 1; // Genera un número aleatorio entre 1 y 2
    const audio = new Audio('./audios/cat-meow-8-fx-306184(mp3cut.net).mp3');
    hoverRandom === 1 ? logo.classList.add('footer_logo') : logo.classList.add('footer_logo2');

    logo.addEventListener('click', () => {
        logo.classList.add('animarGatito');
        audio.currentTime = 0; // reinicia el audio por si se hace click varias veces
        audio.play();
    });

    logo.addEventListener('click', () => {
        logo.classList.add('animarGatito');

        // Eliminar la clase después de la animación para que se pueda volver a activar
        logo.addEventListener('animationend', () => {
            logo.classList.remove('animarGatito');
        }, { once: true });
    });

    setTimeout(() => {
            logo.classList.remove('animarGatito');
        }, 3000);
});



