import React from "react";

class VentasList extends React.Component {
  render() {
    const ventas = this.props.ventas;

    const ventasRows = ventas.map((vt, index) => {
      return <tr key = {index}>
              <td>{vt.id}</td>
              <td>{vt.total}</td>
              <td>{vt.cantidad}</td>
              <td>{vt.fecha}</td>
              <td>{vt.documento}</td>
              <td>{vt.cliente}</td>
              <td>{vt.vendedor}</td>
              <td><button type="button" onClick={() => this.props.onEditVentas(vt)} >Editar</button></td>
            </tr>
    });
    return (
      <div className="lista">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Total</th>
              <th>Cantidad</th>
              <th>Fecha</th>
              <th>Documento</th>
              <th>Cliente</th>
              <th>Vendedor</th>
            </tr>
          </thead>
          <tbody>
              {ventasRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VentasList;