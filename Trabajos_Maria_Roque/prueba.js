var nombre = document.getElementById("nombre");
var password = document.getElementById("password");
var error = document.getElementById("error");


function enviarFormulario(){
  console.log("Enviando formulario..."); 
  var mensajesError = [];
  if (nombre.value === null || nombre.value === ""){
      mensajesError.push("Ingresa tu nombre");
  }
  if(password.value === null || password.value === ""){
      mensajesError.push("Ingresa tu contraseña");
  }

    error.innerHTML = mensajesError.join(" , ");


  return false;
}