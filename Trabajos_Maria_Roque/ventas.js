var nit = document.getElementById("nit_cliente");
var Nombre = document.getElementById("nom_cliente");
var Teléfono = document.getElementById("tel_cliente");
var Dirección = document.getElementById("dir_cliente");
var Código = document.getElementById("txt_cod_producto");
var Descrición = document.getElementById("txt_descrip_producto");
var Existencia = document.getElementById("txt_exist_producto");
var Cantidad = document.getElementById("txt_cant_producto");
var Precio = document.getElementById("txt_precio_producto");
var PrecioTotal = document.getElementById("txt_precio_total_producto");
var error = document.getElementById("error");


function enviarFormulario(){
    console.log("Enviando formulario..."); 
    var mensajesError = [];
    if (nit_cliente.value === null || nit_cliente.value === ""){
        mensajesError.push("Ingresa tu Nit");
    }
    if (nom_cliente.value === null || nom_cliente.value === ""){
        mensajesError.push("Ingresa tu nombre");
    }
    if (tel_cliente.value === null || tel_cliente.value === ""){
        mensajesError.push("Ingresa tu Teléfono");
    }
    if (dir_cliente.value === null || dir_cliente.value === ""){
        mensajesError.push("Ingresa tu Dirección");
    }
    if (txt_cod_producto.value === null || txt_cod_producto.value === ""){
        mensajesError.push("Ingresa el código del producto");
    }
    if (txt_descrip_producto.value === null || txt_descrip_producto.value === ""){
        mensajesError.push("Ingresa la descripción del producto");
    }
    if (txt_exist_producto.value === null || txt_exist_producto.value === ""){
        mensajesError.push("Ingresa Existencia");
    }
    if (txt_cant_producto.value === null || txt_cant_producto.value === ""){
        mensajesError.push("Ingresa Cantidad");
    }
    if (txt_precio_producto.value === null || txt_precio_producto.value === ""){
        mensajesError.push("Ingresa Precio Producto");
    }
    if (txt_precio_total_producto.value === null || txt_precio_total_producto.value === ""){
        mensajesError.push("Ingresa Precio Total");
    }
    
    Error.innerHTML = mensajesError.join(" , ")
    
    
 }   
