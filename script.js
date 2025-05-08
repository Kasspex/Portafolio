
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contactame-form');
  const modal = document.getElementById('modal-mensaje');
  const modalTexto = document.getElementById('modal-texto');

  function mostrarModal(mensaje, color = 'black') {
    modalTexto.textContent = mensaje;
    modalTexto.style.color = color;
    modal.style.display = 'flex';

    setTimeout(() => {
      modal.style.display = 'none';
    }, 4000); // Oculta luego de 4 segundos
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        mostrarModal("¡Mensaje enviado con éxito!", "green");
        form.reset();
      } else {
        mostrarModal("Error al enviar el mensaje. Intenta de nuevo.", "red");
      }
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar';
    }).catch(error => {
      mostrarModal("Error de red. Intenta más tarde.", "red");
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar';
    });
  });
});

