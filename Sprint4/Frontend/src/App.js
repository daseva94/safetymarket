import axios from 'axios';
import React from 'react';
import VentasList from './components/VentasList';
import VentasForm from './components/VentasForm';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.URL_VENTAS =  "http://localhost:5000/ventas";
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
    this.onSaveVentas = this.onSaveVentas.bind(this);
    this.onModVentas = this.onModVentas.bind(this);
  }

  componentDidMount(){
    axios.get(this.URL_VENTAS).then((resp) =>{
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

  onSaveVentas(){
    
    const vent = this.state.ventaSeleccionada;
    if(vent.id ===" " || vent.total ==="" || vent.cantidad==="" || vent.vendedor===""){
      alert("hay campos que deben ser llenados");
      return;
    }
    console.log("todo bien con el post", vent);

    if(vent._id === -1){
      console.log("hacer un POST");
      axios.post(this.URL_VENTAS, {...vent, _id:null, fecha:Date.now}).then((resp) => {
      console.log("todo bien con el post", resp);
      this.setState((state, props)=>({
        ventas: [...state.ventas, resp.data],
        ventaSeleccionada: this.emptyVentas
      }))
      }).catch(err => {
        console.log("ERROR AL HACER POST", err);
      });
    }
  }

  onModVentas(){

    const vent = this.state.ventaSeleccionada;

    console.log("todo bien con el put", vent);
    if(this.state.ventaSeleccionada._id !== -1){
      console.log("hacer un Put");
      axios.put(`${this.URL_VENTAS}/${vent._id}`, {...vent, fecha:Date.now}).then((resp) => {
        console.log("todo bien con el put", vent);
        this.setState((state, props) => ({
          ventas: state.ventas.map(vt => vt._id === vent._id ? vent : vt),
          ventaSeleccionada: this.emptyVentas
        }))
      }).catch(err => {
        console.log("ERROR AL HACER PUT", err);
      });
    }
  }

  onClearVentas(){
    console.log("Borrar datos");
    this.setState({ventaSeleccionada: this.emptyVentas});
  }

  render(){
    return(
      <div>
        <div className='page-nav'>
            <h1><img src={require("./imagenes/LOGO2.png")} alt=" "/>SAFETYMARKET</h1>
        </div>
        <div className="container">
          <VentasForm 
          ventas={this.state.ventaSeleccionada} 
          onFormChanges={this.onFormChanges}
          onClearVentas={this.onClearVentas}
          onSaveVentas = {this.onSaveVentas} 
          onModVentas = {this.onModVentas} />

          <VentasList 
          ventas = {this.state.ventas} 
          onEditVentas={this.onEditVentas}/>
        </div>
      </div>
    );
  }
}

export default App;