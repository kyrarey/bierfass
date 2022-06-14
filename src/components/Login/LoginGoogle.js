import React from 'react';
// import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// import { refreshTokenSetup } from './refreshTokenSetup';


const clientId = "1034977523462-916m39tj5ca43omn9mo8hf5l7a9n96sd.apps.googleusercontent.com"

function LoginGoogle(){
    const onSuccess = (res)=>{
        console.log(' adentro', res.profileObj);

        // refreshTokenSetup(res);
    };

    const onFailure = (res)=>{
        console.log(' falló:', res);
    };

    return (
       <div>
        <GoogleLogin 
            clientId={clientId}
            buttonText="Ingresá con tu cuenta de Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}    
            style={{marginTop: '100px'}}
            isSignedIn={true}    
        />
       </div>
    );




};


export default LoginGoogle