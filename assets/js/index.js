$(document).ready(function () {
  // Alerta al enviar el formulario Utilizar el evento “click” de jquery para mostrar una alerta

  $("#EnviarMensaje").on("click", function () {
    alert("el mensaje fué enviado correctamente");
  });
  // Eventos de teclado
  $("#nombre").keydown(function () {
    console.log("Tecla presionada en el campo de nombre");
  });

  $("#mensaje").keyup(function () {
    console.log("Tecla soltada en el campo de email");
  });
});
