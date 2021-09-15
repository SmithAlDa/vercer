import React from "react";
import './AddServer.css';
import Dropdown from 'react-bootstrap/Dropdown';

class AddServer extends React.Component{
    render() {
        return (
            <div className="InputNewServer">
                <form>
                <div className="InputServer">
                    <span>Servidor: </span>
                    <input type="text" placeholder="Ingresa el nombre del servidor"/>
                </div>
                <div className="InputIP">
                    <span>Ip: </span>
                    <input type="text" placeholder="Ingresa La Dirección IP"/>
                </div>
                <div className="InputProtocol"></div>
                    <span>Protocol: </span>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Escoge Protocolo
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">HTTPS</Dropdown.Item>
                            <Dropdown.Item href="#">SSL</Dropdown.Item>
                            <Dropdown.Item href="#">SFTP</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                <div className="PasswordNSubmit">
                    <span>Password: </span> <input type="password"/>
                    <button type="submit">Agregar Servidor</button>
                </div>
                </form>
            </div>
        )
    }
}

export default AddServer;