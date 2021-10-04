document.getElementById("btnActualizar").onclick = function () {
  // Obtiene el valor del cuadro de entrada
  var codigo = document.getElementById("codigo").value;
  var valor = document.getElementById("valor").value;
  var fecha = document.getElementById("fecha").value;
  let descripcion = document.getElementById("descripcion").value;

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

  // Para cargar la descripcion en td, primero cree el nodo td
  let td_descripcion_node = document.createElement("td");
  // El valor ingresado es texto, no un nodo. Si desea agregarlo a través de un nodo, debe convertirse en un nodo de texto
  let descripcion_text_node = document.createTextNode(descripcion);
  // Agregar nombre de nodo
  td_descripcion_node.appendChild(descripcion_text_node);

  // Eliminar para instalar en td, pero no, así que cree un hipervínculo primero y luego agregue un nodo de texto "eliminar"
  var ele_a = document.createElement("a");
  // Establecer el atributo href
  ele_a.setAttribute("href", "javascript:void(0);");
  // Establecer el atributo onclick
  ele_a.setAttribute("onclick", "del_tr(this);");
  // Convertir eliminar en un nodo de texto
  var del_node = document.createTextNode("Eliminar");
  // Realizar hipervínculo
  ele_a.appendChild(del_node);
  // Crear nodo td
  var td_del_node = document.createElement("td");
  // Agregar eliminar hipervínculo
  td_del_node.appendChild(ele_a);

  // Agrega 4 td a tr, tr no lo es, crea tr primero
  const tr_node = document.createElement("tr");
  // tr agregar td
  tr_node.appendChild(td_codigo_node);
  tr_node.appendChild(td_valor_node);
  tr_node.appendChild(td_fecha_node);
  tr_node.appendChild(td_descripcion_node);
  tr_node.appendChild(td_del_node);

  // tabla agrega tr, hay una tabla, para convertirse en un nodo
  const table_node = document.getElementsByTagName("table")[0];
  table_node.appendChild(tr_node);
  alert("almacenado correctamente");
};

function buscar() {
  alert("¿Por cual componente buscar?");
  let varia = prompt("1:  descripcion, 2:   identificador");
  if (varia == 1 || varia == 2) {
       var terminar=false;
       while (terminar == false) {
          if (varia == 1) {
          let variable = prompt(
            "Que descripcion deseas buscar(camisa,pantalon,zapatos,...)"
          );
          if (variable == "camisa") {
            alert(
              "Actualmente hay camisas en el inventario; busca en la descripcion "
            );
            break;
          } else if (variable == "pantalon") {
            alert(
              "Actualmente hay pantalones en el sistema; busca en la descripcion"
            );
            break;
          } else if (variable == "zapatos") {
            alert(
              "Actualmente hay zapatos en el sistema; busca en la descripcion"
            );
            break;
          } else {
            let nuevo1 = prompt("Seguro que buscaste bien; responde si o no");
            if (nuevo1 == "si" || nuevo1 == "s") {
           alert("No esta en el sistema; falta en el invetario");
            break;
            } 
            else {
              terminar==false;
            }
          }
        }
        if (varia == 2) {
          var variable1 = prompt("Digite un numero");
          if (variable1 == 1) {
            alert(
              "actualmente se encuentra en la base de datos; descripcion camisa manga larga"
            );
            break;
          }
          if (variable1 == 212) {
            alert(
              "actualmente se encuentra en la base de datos; descripcion zapatos"
            );
            break;
          }
          if (variable1 == 2) {
            alert("actualmente se encuentra en la base de datos; descripcion zapato");
            break;
          }
          else {
            let nuevo = prompt("Seguro que buscaste bien; responde si o no");
            if (nuevo == "si" || nuevo == "s") {
          alert("Aun no se encuentra este ID en el inventario");
            }
            else {
          break;
            }
          }
      }
          }
        }
 else{
      alert("Aun no tenemos esa opcion")
 }
     }