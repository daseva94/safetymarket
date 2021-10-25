import axios from 'axios';
import React from 'react';
import VentasList from './components/VentasList';
import VentasForm from './components/VentasForm';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.emptyVentas = 
      { _id: -1, 
        id: "",
        total: "",
        cantidad: "",
        fecha: "",
        documento: "",
        cliente: "",
        vendedor: ""
    };

    const initVentas = [];

    this.state = {
        ventas:initVentas,
        ventaSeleccionada:this.emptyVentas
    };
    this.onFormChanges = this.onFormChanges.bind(this);
    this.onEditVentas = this.onEditVentas.bind(this);
    this.onClearVentas = this.onClearVentas.bind(this);
    this.onSaveVenta = this.onSaveVenta.bind(this);
  }

  componentDidMount(){
    const URL = "http://localhost:5000/ventas";
    axios.get(URL).then((resp) =>{
    console.log("esta es la respuesta de el backend con la base de datos", resp);
    this.setState({ventas: resp.data});
    }).catch(err =>{
        console.log("Hubo un error en la conexion con la base de datos", err);
    });
  }

  onFormChanges(nuevaVenta){
    console.log("Cambio el formulario", nuevaVenta);
    this.setState({ventaSeleccionada: nuevaVenta})
  }

  onEditVentas(ventas_ID){
    console.log("Hola desde editar", ventas_ID);
    this.setState({ventaSeleccionada: ventas_ID })
  }

  onSaveVenta(evt){
    evt.preventDefault();
    const URL = "http://localhost:5000/ventas";

    const ventas = this.state.ventaSeleccionada;
    if(ventas.id ==="" || ventas.total ===""||ventas.cantidad===""||ventas.vendedor===""){
      alert("hay campos que deben ser llenados");
      return;
    }

    if(this.state.ventaSeleccionada._id === -1){
      console.log("hacer un POST");
      axios.post(URL, ventas).then((resp) => {
        console.log("todo bien con el post");
      }).catch(err => {
        console.log("ERROR AL HACER POST", err);
      });
    }else{
      console.log("hacer un PUT");
    }
  }

  onClearVentas(){
    console.log("Borrar datos");
    this.setState({ventaSeleccionada: this.emptyVentas});
  }

  render(){
    return(
      <div>
        <div className="container">
          <VentasForm 
          ventas={this.state.ventaSeleccionada} 
          onFormChanges={this.onFormChanges}
          onClearVentas={this.onClearVentas}
          onSaveVenta = {this.onSaveVenta} />
          <VentasList 
          ventas = {this.state.ventas} 
          onEditVentas={this.onEditVentas}/>

        </div>
      </div>
    );
  }
}

export default App;