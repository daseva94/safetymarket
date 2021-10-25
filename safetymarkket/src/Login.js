import React from "react";
import "./style/Login.css"
export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = { logueado : false, usuario : "miUsuario", clave : "miClave"};
        this.mostrarMensaje = this.mostrarMensaje.bind(this);
        this.actualizarInput = this.actualizarInput.bind(this);
    }
    mostrarMensaje(e){
        e.preventDefault();
        //alert("Presionaste el Boton");
        this.setState((state, props)=>({
            logueado : !state.logueado
        }));
    }
    actualizarInput(e){
        console.log("actualizarInput", e.target.value);
        this.setState({usuario : e.target.value});
    }
    render(){
        /*let textoBoton = "Ingresar";
        if (this.state.logueado === true){
            textoBoton = "Salir";

        }*/ 
        const textoBoton = this.state.logueado === true ? "Salir" : "Ingresar";
        return(
        <div>
            <div>
                <h1 className="safety">SAFETYMARKET</h1>
            </div>
            <form className="formulario" onSubmit={this.mostrarMensaje}>
            <h1>Iniciar Sesión</h1>
            <div className="contenedor">
                <div className="input-contenedor">
                    <i className="fas fa-user icon"></i>
                    <label htmlfor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Ingrese Correo electrónico" value={this.state.usuario} onChange={this.actualizarInput}required/>
                </div>
                <div className="input-contenedor">
                    <i className="fas fa-user icon"></i>
                    <label htmlfor="password">Contraseña:</label>
                    <input type="password" id="Contraseña" name="Contraseña" placeholder=""required/>
                </div>
                <input type="submit" value={textoBoton} className="button"/>             
                <p><a href="verificacion.html">Olvide mi Contraseña</a></p>
                <p><a href="Untitled-1.html">No estoy registrado</a></p>
            </div>
            </form>
        </div>
        );
    }

    }
export default Login;