import React, { useState } from 'react';
import '../../App.css'

function LogInPage({LogIn, error}) {

    const [details, setDetails] = useState({user:"",password:""});

    const LogInSubmit = e => {
        e.preventDefault();
        
        LogIn(details);
    }

    return (
        <div>
            <div className="NavBar"></div>
            <form onSubmit={LogInSubmit}>
            <h1>Log In</h1>
                <div>
                    <span>Usuario:</span>
                    <input type="text" name="user" id="user" placeholder="Ingresa tu Usuario" onChange={e => setDetails({...details, user: e.target.value})} value={details.user}/>
                </div>
                <div>
                    <span>Contraseña: </span>
                    <input type="password" name="password" id="password" placeholder="Ingresa tu Contraseña" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <div>
                    <button type="submit">Log In</button>
                </div>
            </form>
            <div>{(error !== "") ? (<div className="error">{error}</div>): ""}</div>
        </div>
    )
}

export default LogInPage