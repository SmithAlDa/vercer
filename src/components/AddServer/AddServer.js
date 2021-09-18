import React, {useState} from "react";
import './AddServer.css';
import Dropdown from 'react-bootstrap/Dropdown';

function AddServer() {

    const adminUser = {
        password: 'admin123'
    }

    const detallesServidor = [
        {
        servName: '',
        IPAddress: '',
        FechaEmision: '',
        FechaVencimiento: '',
        Protocol: '',
        IDApp: '',
        }
    ];

    const [serv, setServ] = useState({servName: '', IPAddress: '', FechaEmision: '', FechaVencimiento: '', Protocol:'HTTPS', IDApp: ''});

        const AddServerSubmit = e => {
            e.preventDefault();
            AddServer();
            console.log(serv)
        }

        const AddServer = serv => {
            if (serv.password === adminUser.password){
              setServ({
                servName: serv.servName,
                IPAddress: serv.IPAddress
              })
            }
          }


        return (
            <div className="InputNewServer">
                <form onSubmit={AddServerSubmit}>
                <div className="InputServer">   
                    <span>Servidor: </span>
                    <input type="text" placeholder="Ingresa el nombre del servidor" onChange={e => setServ({...serv, servName: e.target.value})} value={serv.servName}/>
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

export default AddServer;