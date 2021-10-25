import React from "react";
import '../App.css';


class VentasForm extends React.Component {
  onTotalChange(evt){
    const ventas =  this.props.ventas;
    const newVenta = {...ventas, total: evt.target.value };
    console.log("hola desde cambio de total", evt.target.value, ventas, newVenta);
    this.props.onFormChanges(newVenta);
  }

  render(){
    const ventas = this.props.ventas;

    return(
      <div className="formulario" onSubmit={this.props.onSaveVentas}>
        <form>
          <div>
            <label>Id</label>
            <input type="number" value={ventas.id} onChange={this.props.onFormChanges} />
          </div>
          <div>
            <label>Total</label>
            <input type="number" value={ventas.total} 
            onChange={(evt) =>this.props.onFormChanges({...ventas, total: parseInt(evt.target.value)})} />
          </div>
          <div>
            <label>Cantidad</label>
            <input type="number" value={ventas.cantidad} 
            onChange={(evt) =>this.props.onFormChanges({...ventas, cantidad: parseInt(evt.target.value)})} />
          </div>
          <div>
            <label>Documento</label>
            <input type="number" value={ventas.documento} 
            onChange={(evt) => this.props.onFormChanges({...ventas, documento: parseInt(evt.target.value)})}/>
          </div>
          <div>
            <label>Cliente</label>
            <input type="text" value={ventas.cliente} 
            onChange={(evt) =>this.props.onFormChanges({...ventas, cliente: evt.target.value})}/>
          </div>
          <div>
            <label>Vendedor</label>
            <input type="text" value={ventas.vendedor} 
            onChange={(evt) =>this.props.onFormChanges({...ventas, vendedor: evt.target.value})}/>
          </div>
            <input type="submit" value={ventas._id === -1 ? 'Crear' : 'Editar'} />
            <input type="button" value="Limpiar" onClick={this.props.onClearVentas}  />
        </form>
      </div>
    );
  }

}
export default VentasForm;