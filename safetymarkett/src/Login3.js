import axios from "axios"
import React from "react";

import { GoogleLogin } from 'react-google-login';

export class Login3 extends React.Component{
    responseGoogle = (googleResp) => {
        console.log(googleResp);
        axios.post("http://localhost:3000/auth/google", googleResp)
        .then(data => console.log("todo bien", data))
        .catch(err => console.log("hubo error", err))
    }
    render(){
        return(<GoogleLogin
            clientId="195873101262-op586g7jgd6i541qfl9qnllulp9tjfbs.apps.googleusercontent.com"
            buttonText="Ingresar con Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          );
    }
}
export default Login3;
