// Muestra un mensaje de bienvenida en la consola al cargar la página
window.onload = function() {
    console.log("Bienvenido a la página de Museos de Bogotá");
    showImage(currentImageIndex); // Mostrar la primera imagen del carrusel al cargar la página
  };  
  // Función para mostrar u ocultar la información del museo
  function toggleInfo(sectionId) {
    const section = document.getElementById(sectionId);
    const info = section.querySelector('p');
    if (info.style.display === 'none') {
      info.style.display = 'block';
    } else {
      info.style.display = 'none';
    }
  }
  // Cambiar el tema de la página entre claro y oscuro
  function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
    } else {
      body.classList.add('dark-mode');
    }
  }
  // Carrusel de imágenes
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.carousel-image');
  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }
  
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  }