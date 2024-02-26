export const wow = () => {

    let elements = document.querySelectorAll('.animate__animated');


        elements.forEach(element => {
            element.style.opacity = "0"
            window.addEventListener('scroll', function() {
            var elementPositionTop = element.getBoundingClientRect().top;
            var elementPositionBottom = element.getBoundingClientRect().bottom;
            var windowHeight = window.innerHeight;


            if ((elementPositionTop >= 0 && elementPositionTop <= windowHeight) || 
                (elementPositionBottom >= 0 && elementPositionBottom <= windowHeight)) {
                    if(!element.dataset.delay){
                        element.style.opacity = "1"
                        element.classList.add(`${element.dataset.animate}`); // Agrega la clase de animación

                    }else{
                        setTimeout(() => {
                            element.style.opacity = "1"
                            element.classList.add(`${element.dataset.animate}`); // Agrega la clase de animación
                        }, element.dataset.delay);
                       

                    }
                    
            } 

            });
        });





}