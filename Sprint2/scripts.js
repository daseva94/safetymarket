document.getElementById("btnActualizar").onclick = function () {
    // Obtiene el valor del cuadro de entrada
    var codigo = document.getElementById("codigo").value;
    var valor = document.getElementById("valor").value;
    var fecha = document.getElementById("fecha").value;

    // Para instalar id en td, primero cree el nodo td
    var td_codigo_node = document.createElement("td");
    // El valor ingresado es texto, no un nodo. Si desea agregarlo a través de un nodo, debe convertirse en un nodo de texto
    var codigo_text_node = document.createTextNode(codigo);
    // Agregar nodo de identificación
    td_codigo_node.appendChild(codigo_text_node);

    // Para cargar el nombre en td, primero cree el nodo td
    var td_valor_node = document.createElement("td");
    // El valor ingresado es texto, no un nodo. Si desea agregarlo a través de un nodo, debe convertirse en un nodo de texto
    var valor_text_node = document.createTextNode(valor);
    // Agregar nombre de nodo
    td_valor_node.appendChild(valor_text_node);

    // Para cargar sexo en td, primero crea un nodo td
    var td_fecha_node = document.createElement("td");
    // El valor ingresado es texto, no un nodo. Si desea agregarlo a través de un nodo, debe convertirse en un nodo de texto
    var fecha_text_node = document.createTextNode(fecha);
    // Agregar nodo sexual
    td_fecha_node.appendChild(fecha_text_node);

    // Eliminar para instalar en td, pero no, así que cree un hipervínculo primero y luego agregue un nodo de texto "eliminar"
    var ele_a = document.createElement("a");
    // Establecer el atributo href
    ele_a.setAttribute("href","javascript:void(0);");
    // Establecer el atributo onclick
    ele_a.setAttribute("onclick","del_tr(this);");
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
    tr_node.appendChild(td_codigo_node);
    tr_node.appendChild(td_valor_node);
    tr_node.appendChild(td_fecha_node);
    tr_node.appendChild(td_del_node);

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