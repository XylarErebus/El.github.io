document.addEventListener('DOMContentLoaded', () => {
    const ouijaBoard = document.getElementById('ouija-board');
    const inputField = ouijaBoard.querySelector('input');
    const overlayImages = document.getElementById('overlay-images');
    
    // Variables de control
    let isFloating = false;
    let imageDisplayed = false;

    // Función para iniciar la animación de flotación y acercamiento
    function startFloating() {
        if (!isFloating) {
            ouijaBoard.classList.add('floating');
            isFloating = true;
        }
    }

    // Manejo del clic en el tablero Ouija
    ouijaBoard.addEventListener('click', (event) => {
        // Evitar que el clic en el tablero cierre la imagen inmediatamente
        event.stopPropagation();
        
        if (isFloating) {
            if (imageDisplayed) {
                // Ocultar la imagen sobrepuesta
                const images = overlayImages.querySelectorAll('.overlay-image');
                images.forEach(img => img.style.display = 'none');
                imageDisplayed = false;
            } else {
                // Mostrar el campo de texto después de que el tablero ha flotado y se ha acercado
                inputField.style.display = 'block';
                inputField.focus();
            }
        } else {
            // Iniciar la animación si no está en curso
            startFloating();
        }
    });

    // Manejo del clic en cualquier lugar del documento
    document.addEventListener('click', () => {
        if (imageDisplayed) {
            // Ocultar la imagen sobrepuesta si está visible
            const images = overlayImages.querySelectorAll('.overlay-image');
            images.forEach(img => img.style.display = 'none');
            imageDisplayed = false;
        }
    });

    // Manejo del teclado en el campo de texto
    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const text = inputField.value.trim().toLowerCase();
            const images = overlayImages.querySelectorAll('.overlay-image');
            
            // Ocultar todas las imágenes
            images.forEach(img => img.style.display = 'none');
            
            // Mostrar la imagen correspondiente a la palabra ingresada
            if (text === 'leon') {
                const leonImage = overlayImages.querySelector('.leon-image');
                if (leonImage) {
                    leonImage.style.display = 'block';
                    imageDisplayed = true;
                }
            }
            // Agregar más palabras y sus imágenes correspondientes aquí
            
            // Opcional: Ocultar el campo de texto después de presionar Enter
            inputField.style.display = 'none';
            inputField.value = ''; // Limpiar el campo de texto
        }
    });
});

