document.addEventListener("DOMContentLoaded", () => {
    const seccion = document.querySelector('.seccionAcerca');
    const imagen = seccion.querySelector('.proyector');
    const texto = seccion.querySelector('.texto-oculto');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Cambiar imagen
          const nuevaSrc = imagen.getAttribute('data-src');
          imagen.setAttribute('src', nuevaSrc);
  
          // Mostrar texto
          texto.classList.add('texto-visible');
  
          // Dejar de observar después
          observer.unobserve(seccion);
        }
      });
    }, {
      threshold: 0.5 // Se activa cuando al menos el 50% de la sección es visible
    });
  
    observer.observe(seccion);
  });
  