import React from "react";

class ViewServers extends React.Component {
    render () {
        return (
            <div className="ViewServers">
                <h1>Servidores</h1>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Server</th>
                        <th scope="col">IP</th>
                        <th scope="col">Status</th>
                        <th scope="col">IDApp</th>
                        <th scope="col">Protocolo</th>
                        <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>ServerNombre</td>
                        <td>111.111.111.1</td>
                        <td>Green</td>
                        <td>2</td>
                        <td>HTTPS</td>
                        <td>Icono</td>
                        </tr>
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default ViewServers;