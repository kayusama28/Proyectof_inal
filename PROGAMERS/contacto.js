document.addEventListener('DOMContentLoaded', () => {
    const contacto = document.querySelector('#registrationForm');
    const nombre =document.querySelector('#Nombre');
    const resultados =document.querySelector('.resultados');
    const enviar = document.querySelector('#enviar');
    const correo = document.querySelector('#correo');
    const telefono = document.querySelector('#telefono');
    const asunto = document.querySelector('#asunto');
    enviar.addEventListener('click', validarEnvia);


    function validarEnvia (event) {
        //prevenir envio del formulario
        event.preventDefault();
        //reiniciar mensajes de error
        resultados.innerHTML = '';
        resultados.style.backgroundcolor = '';

        //validar nommbre
        if (nombre.value.length <= 3) {
            muestraError(nombre);
            return;
        }
        //validar correo
        const correoRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)([a-zA-Z09]{2,4})+$/;
        if (!correoRegex.test(correo.value)) {
            muestraError(correo);
            return;
        }
        //validad telefono
        const telefonoRegex =/^([0-9]{10})$/;
        if  (!telefonoRegex.test(telefono.value)) {
            muestraError(telefono);
            return;
        }
        //validar asunto
        if (asunto.selectedIndex === 0) {
            muestraError(asunto);
            return;
        }
        //mostrar mesaje si pasa todas las validaciones
        muestraExito('¡Formulario enviado en breve lo contactaremos!');
        //envio formulario
        setTimeout(() =>contacto.submit(), 2000);
    }
    function muestraError(input) {
        resultados.style.backgroundColor = 'red';
        resultados.innerHTML = `El campo ${input.name} no cumple los requisitos `;
    }
    function muestraExito(mensaje) {
        resultados.style.backgroundColor = 'green';
        resultados.innerHTML = mensaje;
    }
});