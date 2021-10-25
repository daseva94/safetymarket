import axios from "axios"
import React from "react";
import "./style/Logingoogle.css"

import { GoogleLogin } from 'react-google-login';

export class Login3 extends React.Component{
    responseGoogle = (googleResp) => {
        console.log(googleResp);
        axios.post("http://localhost:5000/auth/google", {token: googleResp.tokenId})
        .then(resp=> {
            console.log("todo bien, este es el token:", resp.data);
            sessionStorage.setItem("token",JSON.stringify(resp.data))
        })
        .catch(err => console.log("hubo error", err))   
    }
    render(){
        return(<GoogleLogin
            clientId="195873101262-op586g7jgd6i541qfl9qnllulp9tjfbs.apps.googleusercontent.com"
            className="google" buttonText="Ingresar con Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          );
    }
}
export default Login3;