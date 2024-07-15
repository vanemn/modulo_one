document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });

  // Alerta al enviar el formulario Utilizar el evento “click” de jquery para mostrar una alerta

  $("#EnviarCorreo").on("click", function () {
    alert("el mensaje fué enviado correctamente");
  });
});
