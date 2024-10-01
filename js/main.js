jQuery(document).ready(function () {
  //Botones que muestran modales de bootstrap
  $("#i3-modal-btn").click(function () {
    $("#i3-modal").modal("show");
  });

  $("#cs-modal-btn").click(function () {
    $("#cs-modal").modal("show");
  });

  $("#ah-modal-btn").click(function () {
    $("#ah-modal").modal("show");
  });

  //Validacion formulario
  $(document).ready(function() {
    $("#contactoWeb").validate({
        rules: {
            name: { required: true, minlength: 8 },
            email: { required: true, email: true },
            message: { minlength: 10 },
        },
        messages: {
            name: "Este campo es necesario.",
            email: "Hey! Si no pones tu correo no sabré cómo responderte.",
            message: "Vaya, ¿te has quedado sin palabras?",
        }
    });
});

//Oculto los elementos al acceder a la web

$("#proyectos").hide();
$("#contacto").hide();

//Muestro los elementos cuando presiono el boton del navbar

$("#btn-proyectos").click(function () {
  $("#proyectos").toggle(1000, function() {
      document.getElementById("proyectos").scrollIntoView();
  });
});

$("#btn-contacto").click(function () {
  $("#contacto").toggle(1000, function() {
      document.getElementById("contacto").scrollIntoView();
  });
});

});
