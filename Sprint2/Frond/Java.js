document.getElementById("btnActualizar").onclick = function () {
    // Obtiene el valor del cuadro de entrada
    var Id = document.getElementById("Id").value;
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var celular = document.getElementById("celular").value;
    var direccion = document.getElementById("direccion").value;
    var estado = document.getElementById("estado").value;

    // Para instalar codigo en td, primero cree el nodo td
    var td_Id_node = document.createElement("td");
    // El valor ingresado es texto, no un nodo. Si desea agregarlo a través de un nodo, debe convertirse en un nodo de texto
    var Id_text_node = document.createTextNode(Id);
    // Agregar nodo de codigo
    td_Id_node.appendChild(Id_text_node);

    // Para cargar el valor en td, primero cree el nodo td
    var td_nombre_node = document.createElement("td");
    // El valor ingresado es texto, no un nodo. Si desea agregarlo a través de un nodo, debe convertirse en un nodo de texto
    var nombre_text_node = document.createTextNode(nombre);
    // Agregar valor nodo
    td_nombre_node.appendChild(nombre_text_node);

    var td_apellidos_node = document.createElement("td");
    // El valor ingresado es texto, no un nodo. Si desea agregarlo a través de un nodo, debe convertirse en un nodo de texto
    var apellidos_text_node = document.createTextNode(apellidos);
    // Agregar valor nodo
    td_apellidos_node.appendChild(apellidos_text_node);


    var td_celular_node = document.createElement("td");
    // El valor ingresado es texto, no un nodo. Si desea agregarlo a través de un nodo, debe convertirse en un nodo de texto
    var celular_text_node = document.createTextNode(celular);
    // Agregar valor nodo
    td_celular_node.appendChild(celular_text_node);
    

    var td_direccion_node = document.createElement("td");
    // El valor ingresado es texto, no un nodo. Si desea agregarlo a través de un nodo, debe convertirse en un nodo de texto
    var direccion_text_node = document.createTextNode(direccion);
    // Agregar valor nodo
    td_direccion_node.appendChild(direccion_text_node);


    var td_estado_node = document.createElement("td");
    // El valor ingresado es texto, no un nodo. Si desea agregarlo a través de un nodo, debe convertirse en un nodo de texto
    var estado_text_node = document.createTextNode(estado);
    // Agregar valor nodo
    td_estado_node.appendChild(estado_text_node);


    // Eliminar para instalar en td, pero no, así que cree un hipervínculo primero y luego agregue un nodo de texto "eliminar"
    var ele_a = document.createElement("a");
    // Establecer el atributo href
    ele_a.setAttribute("href","javascript:void(0);");
    // Establecer el atributo onclick
    ele_a.setAttribute("onclick","borrar(this);");
    // Convertir eliminar en un nodo de texto
    var del_node = document.createTextNode("Eliminar");
    // Realizar hipervínculo
    ele_a.appendChild(del_node);
    // Crear nodo td
    var td_del_node = document.createElement("td");
    // Agregar eliminar hipervínculo
    td_del_node.appendChild(ele_a);

    // Agrega 4 td a tr, tr no lo es, crea tr primero
    var tr_node = document.createElement("tr");
    // tr agregar td
    tr_node.appendChild(td_Id_node);
    tr_node.appendChild(td_nombre_node);
    tr_node.appendChild(td_apellidos_node);
    tr_node.appendChild(td_celular_node);
    tr_node.appendChild(td_direccion_node);
    tr_node.appendChild(td_estado_node);


    // tabla agrega tr, hay una tabla, para convertirse en un nodo
    var table_node = document.getElementsByTagName("table")[0];
    table_node.appendChild(tr_node);
}
function buscar() {
    alert("HOLA DESDE BUSCAR");
}
function cancelar(){
    alert("HOLA DESDE CANCELAR");
}
borrar = function (obj) {// Devuelto es el objeto de la etiqueta a
    // Eliminar nodos secundarios a través del nodo principal
    // Elimina tr a través de la tabla, obtén el nodo de la tabla primero
    var table_node = obj.parentNode.parentNode.parentNode;
    table_node.removeChild(obj.parentNode.parentNode);
}