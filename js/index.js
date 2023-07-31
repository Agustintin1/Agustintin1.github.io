$(document).ready(() => {
  console.log("JQuery Cargado");

  // Cuando enviamos el formulario completo, mostramos el feedback
  $("#formulario-principal").on("submit", (e) => {
    e.preventDefault(); // Esta linea es importante para evitar que la página se recargue al enviar el formulario
    abrirFeedback();
    trasladarDatosDelFormCompletoAFeedback();
  });

  $(".cerrar").click(() => {
    cerrarPopup();
  });

});

$(document).on("click touchstart", (e) => {
  const isPopup = $(e.target).closest(".popup").length;
  const isCerrarBtn = $(e.target).hasClass("cerrar");

  if (!isPopup && !isCerrarBtn) {
    cerrarPopup();
  }
});

  
function abrirPopupForm() {
  console.log("Popup abierto");
  $(".popup-contenedor.formulario").removeClass("oculto");
}

function cerrarPopup() {
  $(".popup-contenedor.formulario").addClass("oculto");
  $(".popup-contenedor.feedback").addClass("oculto");
}

function abrirFeedback() {
  $(".popup-contenedor.formulario").addClass("oculto");
  $(".popup-contenedor.feedback").removeClass("oculto");
}

function trasladarDatosDelFormCompletoAFeedback() {
  const inputNombre = $("#nombre");
  const inputEmail = $("#email");

  const nombre = inputNombre.val();
  const email = inputEmail.val();

  const spanNombre = $("#dato-nombre");
  const spanEmail = $("#dato-email");

  spanNombre.html(nombre);
  spanEmail.html(email);
}

function trasladarMailDeMiniformAFormCompleto() {
  const inputEmail1 = $("#miniform-email-1");
  const inputEmail2 = $("#miniform-email-2");
  const inputEmail3 = $("#miniform-email-3");

  const email1 = inputEmail1.val();
  const email2 = inputEmail2.val();
  const email3 = inputEmail3.val();

  const inputEmailFormCompleto = $("#email");

  console.log(email1, email2, email3);
  if (email1 != "") {
    inputEmailFormCompleto.val(email1);
  } else if (email2 != "") {
    inputEmailFormCompleto.val(email2);
  } else if (email3 != "") {
    inputEmailFormCompleto.val(email3);
  }
}
