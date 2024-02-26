export const form  = () => {
    let submit = document.getElementById('enviar')
    let nombre = document.getElementById('nombreContacto')
    let email = document.getElementById('emailContacto')
    let telefono = document.getElementById('telefono')
    let mensaje = document.getElementById('mensaje')
    const formContacto = document.getElementById('formContacto')
    const message = document.getElementById('message');
    const contacto = document.querySelector('.contacto')
    submit.addEventListener('click', e => {
        e.preventDefault();
        let error = false;
        if(validator.isEmpty(nombre.value)){
            nombre.classList.add('error')
            error = true;
        }else{
            nombre.classList.remove('error')
            error = false;
        }
        if(validator.isEmpty(email.value) || !validator.isEmail(email.value)){
            email.classList.add('error')
            error = true;
        }else{
            email.classList.remove('error')
            error = false;
        }
        if(validator.isEmpty(telefono.value)){
            telefono.classList.add('error')
            error = true;
        }else{
            telefono.classList.remove('error')
            error = false;
        }
        if(validator.isEmpty(mensaje.value)){
            mensaje.classList.add('error')
            error = true;
        }else{
            mensaje.classList.remove('error')
            error = false;
        }

                 

        if(!error){
            // ENVIO DE FORMULARIO
            let HOME_URL = document.location.origin
            let cliente = new FormData();
  
            cliente.append('nombreContacto', nombre.value);
            cliente.append('emailContacto', email.value);
            cliente.append('telefono', telefono.value);
            cliente.append('mensaje', mensaje.value);
     

            
            // ENVIO DE FORMULARIO
            fetch(`${HOME_URL}/mail.php`,{
                method: 'POST',
                body: cliente
            })
            .then((response) => response.json())
            .then(data => {
     
                if(data.status === 200){
                    let texto = '';
                    formContacto.classList.add('animate__animated', 'animate__fadeOutDown')
                    texto += '<p><strong>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</strong></p>';
                    setTimeout(() => {
                        message.classList.add('animate__animated', 'animate__fadeInUp')
                        message.innerHTML = texto
                        formContacto.style.display  = "none"
                        contacto.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                }else{
                    let texto = '';
                    formContacto.classList.add('animate__animated', 'animate__fadeOutDown')
                    texto += '<p><strong>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</strong></p>';
                    setTimeout(() => {
                        message.classList.add('animate__animated', 'animate__fadeInUp')
                        message.innerHTML = texto
                        formContacto.style.display = "none"
                        contacto.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                }
            })
            .catch((err) => {
                let texto = '';
                formContacto.classList.add('animate__animated', 'animate__fadeOutDown')
                texto += '<p><strong>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</strong></p>';
                setTimeout(() => {
                    message.classList.add('animate__animated', 'animate__fadeInUp')
                    message.innerHTML = texto
                    formContacto.style.display  = "none"
                    contacto.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            })
        }
    })

    let submitBanner = document.getElementById('enviarBanner')
    let nombreBanner = document.getElementById('nombreBanner')
    let emailBanner = document.getElementById('emailBanner')
    const formBanner = document.getElementById('formBanner')
    const messageBanner = document.getElementById('messageBanner');
    const banner = document.querySelector('.banner')
    submitBanner.addEventListener('click', e => {
        e.preventDefault();
     
        let error = false;
        if(validator.isEmpty(nombreBanner.value)){
            nombreBanner.classList.add('error')
            error = true;
        }else{
            nombreBanner.classList.remove('error')
            error = false;
        }
        if(validator.isEmpty(emailBanner.value) || !validator.isEmail(emailBanner.value)){
            emailBanner.classList.add('error')
            error = true;
        }else{
            emailBanner.classList.remove('error')
            error = false;
        }

        if(!error){
            // ENVIO DE FORMULARIO
            let HOME_URL = document.location.origin
            let cliente = new FormData();
  
            cliente.append('nombreBanner', nombreBanner.value);
            cliente.append('emailBanner', emailBanner.value);


            
            // ENVIO DE FORMULARIO
            fetch(`${HOME_URL}/mail.php`,{
                method: 'POST',
                body: cliente
            })
            .then((response) => response.json())
            .then(data => {     
                if(data.status === 200){
                    let texto = '';
                    formBanner.classList.add('animate__animated', 'animate__fadeOutDown')
                    texto += '<p class=" text-white"><strong>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</strong></p>';
                    setTimeout(() => {
                        messageBanner.classList.add('animate__animated', 'animate__fadeInUp')
                        messageBanner.innerHTML = texto
                        formBanner.style.display = "none"
                        banner.scrollIntoView({ behavior: 'smooth' });
                    }, 400);
                }else{
                    let texto = '';
                    formBanner.classList.add('animate__animated', 'animate__fadeOutDown')
                    texto += '<p class=" text-white"><strong>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</strong></p>';
                    setTimeout(() => {
                        messageBanner.classList.add('animate__animated', 'animate__fadeInUp')
                        messageBanner.innerHTML = texto
                        formBanner.style.display = "none"
                        banner.scrollIntoView({ behavior: 'smooth' });
                    }, 400);
                }
            })
            .catch((err) => {
                let texto = '';
                formBanner.classList.add('animate__animated', 'animate__fadeOutDown')
                texto += '<p class=" text-white"><strong>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</strong></p>';
                setTimeout(() => {
                    messageBanner.classList.add('animate__animated', 'animate__fadeInUp')
                    messageBanner.innerHTML = texto
                    formBanner.style.display = "none"
                    banner.scrollIntoView({ behavior: 'smooth' });
                }, 400);
            })
        }
    })



}