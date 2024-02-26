export const slider = () => {
    // Puntos de confianza
    let pc = new Splide( '.splide.pc', {
        pagination: false,
        interval: 3000
    } );
    pc.mount();


    // Proyectos
    let proyectos = new Splide( '.splide.proyectos-slider', {
        pagination: false,
        interval: 3000,
        perPage: 3,
        trimSpace: false,
        breakpoints: {
            1024: {
                perPage: 2,
            },
            600: {
                perPage: 1,
                
            },
        }
    } );
    proyectos.mount();

    let buttons = document.querySelectorAll('.item-button')

    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
           
            let info = btn.parentElement.firstElementChild.nextElementSibling
            btn.classList.toggle('active')
            info.classList.toggle('active')
        })
    });

}